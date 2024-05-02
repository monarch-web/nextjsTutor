
import Link from "next/link";
// import Product from './Product';
// import { cache } from "react";
// import { Metadata } from "next";

// const metadata: Metadata = {
//     title: "Products",
//     description: "This is a products page",
// }

// async function  Products() {
//     const fetchData = async () => {
//         const res = await fetch("https://fakestoreapi.com/products", {
//             cache: "force-cache",
//         });
//         const data = await res.json();
//         return data; 
//     }

//     const data = await fetchData();
//     // console.log(data);

//     interface Product {
//         id: number;
//         title: string;
//         image: string;
//         price: number;
//     }

//     return ( 
        
//         <>
//         <button><Link href="/">Back</Link></button>
//                 <h1>Products</h1>
//                 <div className="flex flex-col gap-5 max-w-[400px] m-auto">
//                     {data.map((product: Product) => <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}/>)}
//                 </div>
//         </>
//      );
// }

// export default Products;


function ProductList() {
    return ( <>
    <button><Link href="/">Back</Link></button>
    <h1>Product List</h1>
    <h2>Product 1</h2>
    <h2>Product 2</h2>
    <h2>Product 3</h2>
    </> );
}

export default ProductList;