import { makeSchema, fieldAuthorizePlugin } from 'nexus';
import { join } from 'path';
import { query } from './graphql/queries';
import { types } from './types';

export const schema = makeSchema({
  types: [...types, ...query],
  outputs: {
    typegen: join(
      __dirname,
      '..',
      'node_modules/@types/nexus-typegen/index.d.ts'
    ),
    schema: join(__dirname, 'graphql', 'schema.graphql'),
  },
  plugins: [fieldAuthorizePlugin()],
});
