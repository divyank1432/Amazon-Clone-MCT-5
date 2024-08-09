// import { useState } from 'react';
import offers from "../../../constant/Offers";
import { Link } from "react-router-dom";
const BannerBottomPart = () => {
    

    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-4 z-50 pb-4">
            {offers.map((offer) => (
                <div key={offer} className="mx-auto p-4 bg-white shadow-2xl cursor-pointer">
                    <h1 className="text-xl font-medium py-2">{offer.Head}</h1>
                    <img src={offer.Img} alt="" />
                    <Link to="/filter"><p className="navigateButtonLinks text-base py-2">Shop now</p></Link>
                </div>
            ))}
            
        </section>
    );
};

export default BannerBottomPart;
