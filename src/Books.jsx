import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  // const [image, sbn13, price, subtitle, title, url] = booksData;

  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4  ">
        {books.map((book) => (
          <div className="border relative overflow-hidden mt-10 rounded-lg">
            <img src={book.image} alt="" className="object-cover h-56 md:h-64 xl:h-80" />

            <div className="px-5 py-5 mb-8 bg-black bg-opacity-75 text-white absolute inset-0">
            <h6>{book.title}</h6><br />
            <h4 >{book.subtitle}</h4><br />
            <h4 className="" >{book.price}</h4>
            </div>                   
            </div> 
        ))}
      </div>
    </div>
  );
};

export default Books;
