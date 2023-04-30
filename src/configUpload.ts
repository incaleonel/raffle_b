import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
      cb(null, path.join(__dirname, 'uploads'))
    },
    filename: function (_req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });
  
const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    }
});
export default upload;