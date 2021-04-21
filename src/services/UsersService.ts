
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository"

class UserService {
  async create(email:string){
    const usersRepository = getCustomRepository(UsersRepository);
  // Verificar se o usuário existe
    const userExists = await usersRepository.findOne({
      email
    })
      // Se existir, retornar o usuário
    if (userExists){
      return userExists
    }
    const user = usersRepository.create({
      email
    })

    await usersRepository.save(user);
  // Se não existir, salvar no DB.
    return user

  }
}

export { UserService }