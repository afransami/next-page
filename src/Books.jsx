import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  // const [image, sbn13, price, subtitle, title, url] = booksData;

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {books.map((book) => (
          <div>
            <img src={book.image} alt="" />
            <div className="px-5">
            <h6 className="mb-8">{book.title}</h6>
            <h4 className="mb-8" >{book.subtitle}</h4>
            <h4 className="mb-8">{book.price}</h4>
            </div>          
          </div>
          
        ))}
      </div>
      {/* {
            booksData.map = ()=>
            <h2>{}</h2>
            } */}
    </div>
  );
};

export default Books;
