import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTradeDto {
  @IsOptional()
  @IsString()
  title?: string;

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
