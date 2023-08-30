import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from '../types/user.types';

@ObjectType()
@Directive(`@key(fields: 'id')`)
export class User {
  @Field(() => ID)
  id: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;

  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  birthday: Date;
  @Field()
  phone: string;
  @Field()
  profileImage?: string;
  @Field()
  type: UserType;
}
