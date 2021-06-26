import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).send();
  }

  const [_, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "231eae8c3aa7106fc83ffbcc30d580ab") as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).send();
  }
}