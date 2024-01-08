const multer = require('multer')
const path = require('path');

const config = {
  acceptedExtensions: ['.jpg', '.jpeg', '.png'],
  maxFileSizeInMb: 5
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploadedFiles/usersPictures')
  },
  filename: (req, _file, cb) => {
    const id = req.params.id
    cb(null, `${id}.jpeg`)
  }
})

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();
  const mimetyp = file.mimetype;
  const fileSize = Number(req.headers['content-length']) / 1000000
  if (
    fileSize <= config.maxFileSizeInMb &&
    config.acceptedExtensions.includes(extension) &&
    (mimetyp === 'image/jpeg' || mimetyp === 'image/png')
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

module.exports = multer({
  storage: storage, fileFilter: fileFilter
})