import { IsOptional } from 'class-validator';

export class UpdateProductVersionDto {
  @IsOptional()
  releaseAt: Date;
}
