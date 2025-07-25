import { reset, seed } from 'drizzle-seed';
import { db, sql } from '../../connection.ts';
import { schema } from '../index.ts';

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    with: {
      questions: 20,
    },
  };
});

await sql.end();

//console.log('DB seeded');
