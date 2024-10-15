import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

// Create the uploadthing function
const f = createUploadthing();

// handleAuth function to check if the Clerk userId exists or is logged in
const handleAuth = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  return { userId: userId };
};

// Specify the object information for the uploadthing serverImage along the messageFile types
export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
