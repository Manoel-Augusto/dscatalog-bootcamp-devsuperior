import { render, screen } from "@testing-library/react";
import { Product } from "types/product";
import ProductCard from "..";


test('should render ProductPrice', ()=>{
    //ARRANGE
    const product:Product={
        name:"Computador",
        price:2345.67,
        imgUrl:"https://google.com"
    } as Product;

    //ACT
    render(
        <ProductCard product={product}/>
    )

   // screen.debug()

    //ASSERT
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("2.345,67")).toBeInTheDocument();

   
})