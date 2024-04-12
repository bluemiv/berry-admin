import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Buyer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
