import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post('')
  create(@Body() payload: any) {
    return {
      msg: 'Add new product',
      payload,
    };
  }
}
