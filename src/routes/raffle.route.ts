import {Router} from 'express';
import { uploadForm } from '../controllers/uploadForm.controller';
import { sendListRaffles } from '../controllers/sendListRaffle.controller'
import upload from '../middlewares/uploadFile.middleware';
import { reset } from '../controllers/reset.controller';

const router = Router();

router.post('/',upload.single('file'),uploadForm);
router.get('/',sendListRaffles);
router.delete('/',reset);

export default router;