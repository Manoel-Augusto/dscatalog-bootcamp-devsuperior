export default interface IProductProps {
    id: string;
    name: string;
    description: string;
    price: string;
    imgUrl: string;
    date: string;
    categories: Icategories[];
  }
  interface Icategories {
    id: string;
    name: string;
  }