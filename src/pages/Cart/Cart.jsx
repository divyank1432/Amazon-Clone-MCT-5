import { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
import emptyCartImage from "../../assets/images/empty/empty.png"; // Import the image for the empty cart

const Cart = () => {
  const { cart } = useContext(UserContext);
  const [quantities, setQuantities] = useState({});
  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };
  const uniqueProducts = new Set();
  const uniqueCart = cart.filter((item) => {
    if (uniqueProducts.has(item.id)) {
      return false;
    } else {
      uniqueProducts.add(item.id);
      return true;
    }
  });
  const totalAmount = uniqueCart
    .reduce((acc, item) => acc + (quantities[item.id] || 1) * item.price, 0)
    .toFixed(2);
  return (
    <section className="container mx-auto px-2 sm:px-4">
      <div className="max-w-4xl w-full p-4 rounded-lg mx-auto">
        {uniqueCart.length > 0 ? (
          <>
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-amazon_blue mb-4 md:mb-6">
              Your Cart Items
            </h1>
            {uniqueCart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4 border-b py-4"
              >
                <div className="p-4">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-medium">
                    {item.title}
                  </h3>
                  <h2 className="text-base md:text-lg font-bold">
                    {item.price}$
                  </h2>
                  <div className="grid gap-1">
                    <p className="text-xs md:text-sm font-medium text-green-600">
                      In Stock
                    </p>
                    <p className="text-xs md:text-sm font-medium text-gray-500">
                      Sold by <span className="text-link">{item.seller}</span>
                    </p>
                    <p className="text-xs md:text-sm font-medium text-gray-500">
                      Gift options not available.{" "}
                      <span className="text-link">Learn more</span>
                    </p>
                    <p className="text-xs md:text-sm font-bold">
                      Product Type{" "}
                      <span className="font-normal text-gray-500">
                        {item.category}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <input
                        className="border border-gray-300 rounded-sm px-2 py-1 text-xs md:text-sm"
                        type="number"
                        value={quantities[item.id] || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <button className="bg-amazon_blue text-white px-2 md:px-3 py-1 rounded-md text-xs md:text-sm">
                        Update
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2 mt-2 md:mt-0">
                      <button className="text-xs md:text-sm text-gray-600 hover:text-red-500">
                        Delete
                      </button>
                      <button className="text-xs md:text-sm text-gray-600 hover:text-blue-500">
                        Add to wishlist
                      </button>
                      <button className="text-xs md:text-sm text-gray-600 hover:text-blue-500">
                        See more like this
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6">
              <div>
                <h2 className="text-sm md:text-base font-bold m-2">
                  Total: {totalAmount}$
                </h2>
              </div>
              <div>
                <button className="w-full bg-yellow-400 rounded-md  p-2 text-[17px]  font-semibold cursor-pointer hover:bg-yellow-500 active active::bg-yellow-700">
                  Buy Now
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
              Your Cart is Empty!
            </h1>
            <img
              src={emptyCartImage}
              alt="Empty Cart"
              className="w-full md:max-w-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
