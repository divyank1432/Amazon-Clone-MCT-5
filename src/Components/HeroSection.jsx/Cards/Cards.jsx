import { useState, useEffect, useContext } from 'react';
import { fetchProducts } from './../../../api/api';
import UserContext from '../../../Context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
    const [products, setProducts] = useState([]);
    
    const { addToCart } = useContext(UserContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchProducts();
                setProducts(data);
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchData();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.title} added to cart!`);
    };

    return (
        <>
            <ToastContainer 
                position="bottom-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                closeOnClick 
                pauseOnHover 
                draggable 
                toastStyle={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
                }}
            />
            <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {products.map(product => (
                    <div key={product.id} className='bg-white border cursor-pointer hover:shadow-xl p-2 transition-all duration-200 border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col'>
                        <span className='text-xs flex justify-end text-gray-500 px-3 py-2'>{product.category}</span>
                        <div className='w-full h-auto flex-grow flex items-center justify-center'>
                            <img className='w-full h-64 object-contain p-3' src={product.image} alt={product.title} />
                        </div>
                        <div className='p-4 flex flex-col flex-grow'>
                            <h2 className='text-lg text-blue-900 font-semibold mb-1'>{product.title}</h2>
                            <p className='text-gray-800 font-semibold text-xl mb-2'>{`$${product.price}`}</p>
                            <p className='text-sm text-gray-600 truncate mb-4'>{product.description}</p>
                            <button onClick={() => handleAddToCart(product)} className='bg-yellow-400 hover:bg-yellow-500 shadow-2xl text-black font-semibold px-4 py-2 text-sm rounded-lg w-full mt-auto'>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Cards;
