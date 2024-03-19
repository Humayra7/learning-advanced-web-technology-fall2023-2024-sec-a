/* eslint-disable prettier/prettier */

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'task',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  entities: [],
  synchronize: true,
};

export default config;
