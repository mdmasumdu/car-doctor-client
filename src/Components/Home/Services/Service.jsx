/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({service}) => {
  const {_id,img,price,title} = service
    return (
        <div className="card shadow p-5">
        <figure><img className=" h-80" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-[#FF3811]">Price: {price}</p>
          <Link to={`/checkout/${_id}`}><button className="p-2 rounded-xl border bg-[#FF3811] text-black">Checkout</button></Link>
        </div>
      </div>
    );
};

export default Service;