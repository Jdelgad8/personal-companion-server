import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UsersService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch a user by its id', () => {
    const user = service.findById('1');
    expect(user.id).toEqual('1');
  });
});
