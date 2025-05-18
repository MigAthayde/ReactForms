import { PrismaClient } from '@prisma/client';

interface User{
    nome: string,
    email: string,
    password: string,
}

const prisma = new PrismaClient();

export const createUser = async (usuario: User) => {

    try{
        const user = await prisma.user.create({
            data:{
                nome: usuario.nome,
                email: usuario.email,
                password: usuario.password,
            }
        })
        console.log("Usuário criado com sucesso: ", user);
    }
    catch(error){
        console.log("Erro ao criar usuário:", error)
        return;
    }
}

