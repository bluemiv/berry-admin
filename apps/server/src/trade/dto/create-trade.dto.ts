import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTradeDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  startSeed?: number;

  @IsOptional()
  @IsNumber()
  goalSeed?: number;

  @IsOptional()
  @IsNumber()
  deposit?: number;

  @IsOptional()
  @IsNumber()
  withdraw?: number;
}
