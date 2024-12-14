// app/api/upload-image/route.js

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false, 
  },
};

export async function POST(req) {
  const form = new formidable.IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        return reject(new NextResponse('Error in form parsing', { status: 500 }));
      }

      const imageFile = files.image[0]; // Getting the image file
      if (!imageFile) {
        return reject(new NextResponse('No image uploaded', { status: 400 }));
      }

      const uploadDir = path.join(process.cwd(), 'public/temporary-uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const targetPath = path.join(uploadDir, imageFile.originalFilename);
      fs.renameSync(imageFile.filepath, targetPath);

      const imageUrl = `/temporary-uploads/${imageFile.originalFilename}`;
      return resolve(
        new NextResponse(JSON.stringify({ success: true, imageUrl }), {
          status: 200,
        })
      );
    });
  });
}
