import { Injectable } from '@nestjs/common';
import { UserType } from '../types/user.types';

@Injectable()
export class UserService {
  private users = [
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'JDelgad8',
      birthday: new Date('1993-05-31'),
      email: 'jordydelgado@hotmail.com',
      firstName: 'Jordy Harickson',
      lastName: 'Delgado Leon',
      phone: '3207850855',
      type: UserType.ADMIN,
    },
    {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'VCorreag16',
      birthday: new Date('1998-01-31'),
      email: 'valerincorrea1601@gmail.com',
      firstName: 'Valerin Tatiana',
      lastName: 'Correa Garzon',
      phone: '3135620929',
      type: UserType.ADMIN,
    },
  ];

  findById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
