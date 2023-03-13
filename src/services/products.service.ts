import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 1,
      name: 'p1',
      description: 'p1',
      price: 20,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`El producto ${id} no existe`);
    }
    return product;
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(payload: any, id: number) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((index) => index.id === id);
      this.products[index] = {
        ...Product,
        ...payload,
      };
      return this.products[index];
    } else {
      return 'No existe este producto';
    }
  }
  delete(id: number) {
    const index = this.products.findIndex((index) => index.id === id);
    if (index === -1) {
      throw new NotFoundException(`product ${id} no existe`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
