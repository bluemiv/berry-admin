import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeormModuleOptions = (): TypeOrmModuleOptions => {
  const {
    DATABASE_TYPE,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_DATABASE,
  } = process.env;

  return {
    type: DATABASE_TYPE as any,
    host: DATABASE_HOST,
    port: !Number.isNaN(Number(DATABASE_PORT)) ? Number(DATABASE_PORT) : null,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DATABASE,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
  };
};
