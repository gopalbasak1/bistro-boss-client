

const FoodCard = ({item}) => {

      const {image, price, recipe, name} = item || {};

    return (
        <div className="card w-96 bg-[#f3f3f3] shadow-xl">
  <figure><img src={image} alt={name} /></figure>
  <p className="absolute right-0 bg-slate-900 mr-4 mt-4 px-3 py-2 text-white">${price}</p>
  <div className="card-body text-center space-y-5">
    <h2 className="text-2xl font-semibold text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-0 text-[#BB8506] hover:text-[#BB8506] border-b-4 text-xl uppercase bg-[#e8e8e8]">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;