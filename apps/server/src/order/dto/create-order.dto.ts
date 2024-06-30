import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  productVersionId: number;
}
