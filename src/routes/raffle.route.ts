import {Router} from 'express';
import { uploadForm } from '../controllers/uploadForm.controller';
import { sendListRaffles } from '../controllers/sendListRaffle.controller'
const router = Router();

router.post('/',uploadForm);
router.get('/',sendListRaffles);

export default router;