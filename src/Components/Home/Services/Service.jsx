/* eslint-disable react/prop-types */


const Service = ({service}) => {
  const {img,price,title} = service
    return (
        <div className="card shadow p-5">
        <figure><img className=" h-80" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-[#FF3811]">Price: {price}</p>
        </div>
      </div>
    );
};

export default Service;