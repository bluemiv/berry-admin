import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductVersionDto {
  @IsNotEmpty()
  @IsString()
  version: string;
}
