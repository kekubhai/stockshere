
"use client";
import Header from "./components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [productForm, setproductForm] = useState({});
  const [products, setproducts] = useState([]); // Ensure products is an array
  const [alert, setalert] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(false);
  const [dropdown, setDropdown] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        if (response.ok) {
          let rjson = await response.json();
          setproducts(Array.isArray(rjson.products) ? rjson.products : []); // Ensure it sets an array
        } else {
          console.error("Failed to fetch products");
          setproducts([]); // Set to empty array if the fetch fails
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setproducts([]); // Set to empty array in case of an error
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setproductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productForm),
      });

      if (response.ok) {
        console.log("Product added successfully");
        setalert("Your Product has been added");
        setproducts([...products, productForm]); // Add the new product to the state
        setproductForm({}); // Resetting the form
      } else {
        console.log("Error adding product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onDropdownEdit = async (e) => {
    const queryValue = e.target.value;
    setQuery(queryValue);

    if (!loading) {
      setloading(true);
      try {
        const response = await fetch(`/api/search?query=${queryValue}`);
        if (response.ok) {
          let rjson = await response.json();
          setDropdown(rjson.products);
        } else {
          console.error("Failed to fetch dropdown items");
          setDropdown([]); // Set to empty array if the fetch fails
        }
      } catch (error) {
        console.error("Error fetching dropdown items:", error);
        setDropdown([]); // Set to empty array in case of an error
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <>
      <Header />
      {alert && (
        <div className="bg-white w-auto text-green-500 border-black text-center justify-center">
          {alert}
        </div>
      )}
      <div className="container bg-red-400 mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add a Product</h1>

        <form className="bg-black p-4 rounded shadow-md mb-8">
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="slug"
            >
              Product Slug
            </label>
            <input
              name="slug"
              onChange={handleChange}
              type="text"
              id="slug"
              className="w-full px-3 py-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter product name"
              value={productForm.slug || ""}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              name="quantity"
              onChange={handleChange}
              type="number"
              id="quantity"
              className="w-full px-3 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter quantity"
              value={productForm.quantity || ""}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              id="price"
              className="w-full px-3 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter price"
              value={productForm.price || ""}
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

        <h1 className="text-xl font-semibold mb-4">Search Stock</h1>

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
              onChange={onDropdownEdit}
              type="text"
              className="w-3/4 px-3 py-2 border rounded-r text-black focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Search-here"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="black"
              width="50px"
              height="50px"
            >
              <circle cx="50" cy="50" r="35" stroke="black" strokeWidth="10" fill="none" />
              <path d="M50 15 A35 35 0 0 1 85 50" stroke="white" strokeWidth="10" fill="none" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
              />
            </svg>
          </div>
        ) : (
          dropdown.map((item) => (
            <div
              key={item.slug}
              className="container flex justify-between bg-black text-white"
            >
              <span className="slug">{item.slug}</span>
              <span className="price">{item.price}</span>
              <span className="quantity">{item.quantity}</span>
            </div>
          ))
        )}

        <table className="min-w-full bg-black border border-slate-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.slug}>
                <td className="py-2 text-red-500 border-white">{product.slug}</td>
                <td className="py-2 px-4 border-white">{product.quantity}</td>
                <td className="py-2 px-4 border-white">₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
