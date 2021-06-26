import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from "jsonwebtoken"

import { compare } from "bcryptjs"

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("Email or Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or Password incorrect");
    }

    const token = sign({ email: user.email }, "231eae8c3aa7106fc83ffbcc30d580ab", { subject: user.id, expiresIn: "1d" });

    return token;
  }
}

export { AuthenticateUserService }