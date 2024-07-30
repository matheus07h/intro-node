import { sql } from './db.js';

// sql`DROP TABLE IF EXISTS users`.then(() => {
//   console.log('Tabela apagada');
// });

sql`
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
);
`.then(() => {
  console.log('Tabela criada');
});