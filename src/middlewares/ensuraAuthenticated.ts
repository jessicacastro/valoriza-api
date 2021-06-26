import { Request, Response, NextFunction } from "express";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const { token } = request.headers;

  if (!token) {
    
  }

}