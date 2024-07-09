import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTradeDto {
  @IsNotEmpty()
  @IsString()
  symbol: string;
}
