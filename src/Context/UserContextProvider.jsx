import { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const cartItemCount = cart.length;
  // console.log(cartItemCount);

  return (
    <UserContext.Provider value={{ user, setUser, cart, addToCart, cartItemCount }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
