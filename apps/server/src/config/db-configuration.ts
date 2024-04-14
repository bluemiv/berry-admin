import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'berry-admin-db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
