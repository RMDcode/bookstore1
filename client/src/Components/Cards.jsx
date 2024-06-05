import React from 'react';
//import "./card.css";

function Cards({ item }) {
  return (
    <>
      <div className='mt-4 my-1 p-1'>
        <div className="card w-65 bg-base-100 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Book" className="h-42 w-full object-cover" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="text-sm">{item.title}</p>
            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;
