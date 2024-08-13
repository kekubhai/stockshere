"use client"
import Image from "next/image";
import Header from "./components/Header";
import { useState,useEffect } from "react";

export default function Home() {
  const [productForm, setproductForm] = useState({})
  const handleChange =(e)=>{
    setproductForm({...productForm,[e.target.name]:e.target.value})
  }
  console.log("me here")
  const addProduct =async  (e)=>{
    e.preventDefault();

    try {
        const response = await fetch('/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productForm)
        });

        if (response.ok) {
            console.log("Product added succesfully");
        }
        else{
          console.log("Error adding Products");
        }
    } catch (error) {
        console.error('Error :', error);
   
    }
};

 
  return (
    <>
      <Header />
      <div className="container bg-red-400 mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add a Product</h1>

        <form className="bg-black p-4 rounded shadow-md mb-8">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="productName">
              Product Slug
            </label>
            <input
            name="slug"
            onChange={handleChange}
              type="text"
              id="productName"
              className="w-full px-3 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
            name="quantity"
               onChange={handleChange}
              type="number"
              id="quantity"
              className="w-full px-3 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter quantity"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
            name="price"
               onChange={handleChange}
              type="number"
              id="price"
              className="w-full px-3 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter price"
            />
          </div>

          <button
          onClick={addProduct}
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Add Product
          </button>
        </form>

        <h1 className="text-xl  font-semibold mb-4">Search Stock</h1>

        <div className="mb-4">
          <div className="flex mb-2">
            <select
              className="w-1/4 px-3 py-2 border text-black rounded-l focus:outline-none focus:ring-2 focus:ring-red-400"
            
             
            >
              <option value="Product Name">Product Name</option>
              <option value="Quantity">Quantity</option>
              <option value="Price">Price</option>
            </select>

            <input
              className="w-3/4 px-3 py-2 border rounded-r text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            
            />
          </div>
        </div>

        <table className="min-w-full bg-black border border-slate-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Product 1</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">$100</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Product 2</td>
              <td className="py-2 px-4 border-b">20</td>
              <td className="py-2 px-4 border-b">$200</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}