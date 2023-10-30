import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvide/AuthProvider";
import Swal from 'sweetalert2'


const Checkout = () => {
    const service = useLoaderData()

    const {title,price,img} = service;

const {user} = useContext(AuthContext)
    const hadnleBook =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const order ={
            customename:name,
            email,
            date,
            phone,
            title,
            price,
            img
        }
        axios.post("http://localhost:5000/bookings",order)
        .then(result=>{
            console.log(result.data)
            if(result.data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'successfully booked',
                  })
            }
        })
        .catch(err=>console.log(err))
    
    }

    return (
        <div>
                 <h1 className="text-center font-bold text-3xl text-black">Checkout now: {title}</h1>

            <div className="hero min-h-screen">
  
            
      <form onSubmit={hadnleBook}>

        {/* row  */}
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="name" name="name" className="input input-bordered bg-slate-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="name" name="date" className="input input-bordered bg-slate-100" required />
        </div>
       
        </div>
        {/* row  */}
        <div className="flex gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Phone" name="phone" className="input input-bordered bg-slate-100" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered bg-slate-100" required />
        </div>
       
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary"> Confirm Checkout</button>
        </div>
      </form>

  
</div>
            
        </div>
    );
};

export default Checkout;