import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { Product } from '../../product/product.entity';
import { ProductVersion } from '../../product/product-version.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @Type(() => Product)
  product: Product;

  @IsNotEmpty()
  @Type(() => ProductVersion)
  productVersion: ProductVersion;
}
