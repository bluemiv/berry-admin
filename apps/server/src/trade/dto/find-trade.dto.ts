import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class FindTradeDto extends PaginationDto {
  @IsOptional()
  @IsString()
  title?: string;
}
