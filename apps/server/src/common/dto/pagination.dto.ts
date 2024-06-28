import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = Number(process.env.PAGINATION_PAGE_DEFAULT);

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = Number(process.env.PAGINATION_LIMIT_DEFAULT);
}
