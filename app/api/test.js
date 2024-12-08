import prisma from "@/prisma";

export default async  function handler(req,res){
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      password : "123456",
    },
  })
  return res.json({ message: 'User registered successfully.' });
}