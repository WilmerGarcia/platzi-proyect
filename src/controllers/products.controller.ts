import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto } from 'src/dtos/products.dtos';
import { UpdateProductDto } from 'src/dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    //solo usar esa manera si es de express solo si es necesario, debe usarse de la otra forma con los @ de nestjs
    return this.productService.findOne(productId);
  }

  @Post('')
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(payload, +id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
}
