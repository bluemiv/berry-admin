import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTradeHistoryDto {
  @IsNotEmpty()
  @IsNumber()
  currentSeed: number;

  @IsOptional()
  @IsString()
  description?: string;
}
