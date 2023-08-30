import { Args, ID, Query, ResolveReference, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  getUser(@Args({ name: 'id', type: () => ID }) id: string) {
    return this.userService.findById(id);
  }
  @ResolveReference()
  ResolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findById(reference.id);
  }
}
