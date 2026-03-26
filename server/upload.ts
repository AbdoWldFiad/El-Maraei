import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Sanitize function
function sanitizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")   // replace non-alphanumeric with "-"
    .replace(/-+/g, "-")          // remove duplicate dashes
    .replace(/^-|-$/g, "");       // trim leading/trailing dash
}

const storage = multer.diskStorage({
  destination: uploadDir,

  filename: (req, file, cb) => {
    const fullName = req.body.fullName || "unknown";
    const safeName = sanitizeFileName(fullName);

    const ext = path.extname(file.originalname) || ".pdf";
    const uniqueName = `${safeName}-${Date.now()}${ext}`;

    cb(null, uniqueName);
  },
});

const fileFilter: multer.Options["fileFilter"] = (req, file, cb) => {
if ( file.mimetype !== "application/pdf" || !file.originalname.toLowerCase().endsWith(".pdf"))
  {
  cb(new Error("Only PDF files are allowed"));
  return;
}
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB
  },
});