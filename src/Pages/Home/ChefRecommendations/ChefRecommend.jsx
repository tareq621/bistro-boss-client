import React from "react";

const ChefRecommend = ({ chef }) => {
  const { image, desc, name } = chef;
  return (
    <div className="card bg-[#f3f3f3]">
      <figure className="rounded-none">
        <img
          src={image}
          alt="Shoes"
          className="w-[400px] rounded-none h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-lg">{desc}</p>
        <div className="card-actions mt-5">
          <button className=" btn-lg border-b-4 border-yellow-500 shadow-2xl rounded-lg px-10 uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
