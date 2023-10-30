import axios from "axios";

/* eslint-disable react/prop-types */
const CartRow = ({cart,setCarts,carts}) => {

console.log(carts)


  const handledelete=(id)=>{
    console.log(id)
         axios.delete(`http://localhost:5000/bookings/${id}`)
         .then(res=>{
          console.log(res.data.deletedCount)
          if(res.data.deletedCount){
            const remaining = carts.filter(cart=>cart._id !==id)
            console.log(remaining)
            setCarts(remaining)
          }
        
         }
          
          )

        

  }



  const handleupdate=(id)=>{

    axios.patch(`http://localhost:5000/bookings/${id}`,{status:"confirm"})
    .then(res=>{
      if(res.data.modifiedCount){
        const remaining = carts.filter(cart=>cart._id !==id)
        const Updated = carts.find(cart=>cart._id ==id)
        Updated.status ="confirm"
        const newBooking = [Updated,...remaining]
            setCarts(newBooking)
      }
     
     }
      
      )
    
  }
    return (
  
          
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cart.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {cart.title}
        </td>
        <td>{cart.price}</td>
        <td>
          <button className="btn btn-ghost btn-xs">{cart.date}</button>
        </td>
        <td>
        <button className="btn btn-circle" onClick={()=>handledelete(cart?._id)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </td>
        <td>
         {
          cart?.status ? <p className="text-blue-400 font-bold">Confirmed</p> : <button className="btn btn-ghost btn-xs" onClick={()=>handleupdate(cart._id)}>Confirm</button>
         } 
        </td>
      </tr>
 
   
    );
};

export default CartRow;