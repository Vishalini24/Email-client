import express from 'express';
import mailController from '../controllers/mail.controller.js';

const mailRouter = express.Router();

mailRouter.get('/all', async (req, res) => {
    await mailController.homePage(req, res);
});

mailRouter.get('/mailDetails/:id',async (req, res) =>{
    await mailController.mailDetails(req,res);
});

mailRouter.post('/markFavorite/:id', async (req, res) => {
    await mailController.markFavorite(req, res);
});

mailRouter.post('/markRead/:id', async (req, res) => {
    await mailController.markRead(req, res);
});



// Exporting Router
export default mailRouter;