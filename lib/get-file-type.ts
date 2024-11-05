export async function getFileType(fileUrl: string) {
  try {
    const response = await fetch(fileUrl, { method: "HEAD" });
    const contentType = response.headers.get("Content-Type");

    if (contentType) {
      if (contentType === "application/pdf") {
        return "pdf";
      } else if (contentType.startsWith("image/")) {
        return "image";
      }
    }
  } catch (error) {
    console.error("Error fetching file type:", error);
  }

  return "unknown";
}
