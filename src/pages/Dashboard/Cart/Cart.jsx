import useCart from "../../../hooks/useCart";


const Cart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item)=> total + item.price,0)

    return (
        <div>
            <div className="flex justify-around">
            <h2 className="text-3xl">Items: {cart.length}</h2>
            <h2 className="text-3xl">Total Price: {totalPrice}</h2>
            <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {
            cart.map((item,index) => <tr key={item._id}>
                <th>
                    {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
        }
      
        </tbody>
        </table>
        </div>
        </div>
    );
};

export default Cart;