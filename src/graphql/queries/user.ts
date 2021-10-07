import { idArg, queryType } from 'nexus';

const user = [
  queryType({
    definition(t) {
      t.nonNull.list.nonNull.field('users', {
        type: 'User',
        resolve: (_, __, ctx) => {
          return ctx.prisma.user.findMany();
        },
      });
    },
  }),
];

export { user };
