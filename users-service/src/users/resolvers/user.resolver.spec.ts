import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../models/user.model';
import { UserType } from '../types/user.types';
import { UserResolver } from './user.resolver';
import { UserService } from '../services/user.service';

const userServiceMock = {
  findById: jest.fn((id: string): User => {
    return {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'mocked user name',
      birthday: new Date('2000-01-01'),
      email: 'mocked@email.com',
      firstName: 'mocked first name',
      lastName: 'mocked last name',
      phone: 'mocked phone',
      type: UserType.ADMIN,
    };
  }),
};

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        { provide: UserService, useValue: userServiceMock },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
