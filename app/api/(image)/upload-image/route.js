// app/api/upload-image/route.js

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';  // Use crypto to generate random strings

// Helper function to generate a random string for the filename
const generateRandomFilename = () => {
  return crypto.randomBytes(16).toString('hex');  // Generate a random 16-byte string
};

export async function POST(req) {
  // Parse the incoming form data
  const formData = await req.formData();

  // Get the image file from the form data
  const imageFile = formData.get('image');

  // Check if an image file was uploaded
  if (!imageFile) {
    return new NextResponse('No image uploaded', { status: 400 });
  }

  // Generate a random filename for the uploaded file
  const randomFilename = generateRandomFilename() + path.extname(imageFile.name); // Keep the original extension

  // Define the upload directory
  const uploadDir = path.join(process.cwd(), 'public/temporary-uploads');

  // Create the directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Define the target path with the random filename
  const targetPath = path.join(uploadDir, randomFilename);

  // Use fs.promises to handle file saving asynchronously
  const buffer = await imageFile.arrayBuffer();  // Convert file to buffer
  fs.writeFileSync(targetPath, Buffer.from(buffer)); // Write the buffer to disk

  // Construct the URL for the uploaded image
  const imageUrl = `/temporary-uploads/${randomFilename}`;

  // Return the response with the image URL
  return new NextResponse(
    JSON.stringify({
      status: 'ok',
      imageURL: imageUrl
    }),
    { status: 200 }
  );
}
