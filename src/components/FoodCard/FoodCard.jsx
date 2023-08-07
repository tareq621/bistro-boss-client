const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-black mr-4 mt-4 absolute right-0 px-6 py-2 font-medium text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button className=" btn-lg border-b-4 border-yellow-500 shadow-2xl rounded-lg px-10 uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
