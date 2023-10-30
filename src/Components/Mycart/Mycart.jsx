import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvide/AuthProvider";
import CartRow from "./CartRow";

 



const Mycart = () => {

    const [carts,setCarts] =useState([])
    const {user} = useContext(AuthContext);

   
    const  url =`http://localhost:5000/bookings?email=${user?.email}`


   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCarts(data))
   },[])
    return (
        <div>

            <h1>Carts item:{carts.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Action</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
     {
        carts?.map(cart=><CartRow key={cart._id} cart={cart} setCarts={setCarts} carts={carts}></CartRow>)
     }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Mycart;