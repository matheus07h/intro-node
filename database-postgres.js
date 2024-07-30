import { randomUUID } from 'crypto';
import { sql } from './db.js';

export class DatabasePostgres {

  async list(search){
    let users;

    if(search) users = await sql`select * from users where name ilike ${'%' + search + '%'}`;
    else users = await sql`select * from users`;

    return users;
  }

  async create(user){
    const userId = randomUUID();
    const {name} = user;

    await sql`insert into users (id, name) VALUES (${userId}, ${name})`;

  }

  async update(id, user){
    const {name} = user;

    await sql`update users set name = ${name} WHERE id = ${id}`;
  }

  async delete(id){
    await sql`delete from users where id = ${id}`;
  }
} 