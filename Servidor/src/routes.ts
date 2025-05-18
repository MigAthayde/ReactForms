import {Request, Response, Router} from 'express';
import { createUser } from './controllers/userController';

const router = Router();

router.post('/user', async (req: Request, res: Response) => {
    try{
        const {nome, email, password} = req.body;
        const user = await createUser({nome, email, password});
        res.status(201).json(user);
    }
    catch (error){
        res.status(500).json({message: "Erro ao criar usuário"});
    }
})

export default router;
