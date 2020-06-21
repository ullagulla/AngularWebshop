export default class MovieProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  quantity: number;
  productCategory: [{
    categoryId: number;
    category: null;
  }];
}
