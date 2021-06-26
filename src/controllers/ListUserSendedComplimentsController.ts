import { Request, Response } from "express";
import { ListUserSendedComplimentsService } from "../services/ListUserSendedComplimentsService";

class ListUserSendedComplimentsController {
  async handle( request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendedComplimentsService = new ListUserSendedComplimentsService();

    const compliments = await listUserSendedComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendedComplimentsController }