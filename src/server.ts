import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { schema } from './schema';

const prisma = new PrismaClient();

const server = new ApolloServer({
  schema,
  context() {
    return {
      prisma,
    };
  },
});

export { server };
