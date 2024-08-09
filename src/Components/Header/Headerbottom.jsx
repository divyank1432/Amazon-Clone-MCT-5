

import { Link } from "react-router-dom";
const Headerbottom = () => {
  return (
    <>
      <div className="hidden md:flex">
        <Link to="/" className="px-4 py-2 cursor-pointer">
          <span className="text-sm text-white">Home</span>
        </Link>
        <Link to="" className="px-4 py-2 cursor-pointer">
          <span className="text-sm text-white">Mobile</span>
        </Link>
        <Link to="" className="px-4 py-2 cursor-pointer">
          <span className="text-sm text-white">Electronics</span>
        </Link>
        <div className="px-4 py-2 cursor-pointer">
          <span className="text-sm text-white">Appliances</span>
        </div>
        <div className="px-4 py-2 cursor-pointer">
          <span className="text-sm text-white">Computers</span>
        </div>
        <div className="px-4 py-2 cursor-pointer">
          <span className="text-sm text-white">Fashion</span>
        </div>
      </div>
    </>
  );
};
export default Headerbottom;
