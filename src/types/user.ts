import { User } from 'nexus-prisma';
import { objectType } from 'nexus';

const user = [
  objectType({
    name: User.$name,
    description: User.$description,
    definition(t) {
      t.field(User.id);
      t.field(User.email), t.field(User.image);
    },
  }),
];

export { user };
