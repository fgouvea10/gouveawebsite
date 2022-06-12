import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('Missing token', 401);

  const [, token] = authHeader.split(' ');

  jwt.verify(token, '085d711cbcf520e9c590fd994c7c8a5a', (err, userData) => {
    if (err) throw new AppError('Failed to authenticate token', 403);

    if (userData) return next();

    return response.status(500).send('Internal server error');
  });
}
