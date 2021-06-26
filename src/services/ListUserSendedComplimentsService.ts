import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendedComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({ 
      where: { user_sender: user_id }, 
      relations: ["userSender", "userReceiver", "tag"] 
    });

    return classToPlain(compliments);
  }
}

export { ListUserSendedComplimentsService };