import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  providers: [UserResolver],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
  ],
})
export class UsersModule {}
