import { Link } from 'react-router-dom';
import register from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';
const Register = () => {

    const {registeruser} = useContext(AuthContext)
    const registerhandler =(e)=>{

        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const  password = form.password.value;

        registeruser(email,password)
        .then(result=>console.log(result.user))
        .catch(err=>console.log(err))

        console.log(email,password,name)
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
          
           <img className="w-2/3 mx-auto" src={register} alt="" />
          </div>
      
      
          <div className="card w-1/2 flex border ">
          <h1 className="text-5xl font-bold text-black text-center">Please Register</h1>
            <form onSubmit={registerhandler} className="card-body text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered bg-white" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn lg:w-[416px] bg-[#FF3811] text-black">Register</button>
              </div>
            </form>
      
            <div className='text-center text-black'>
              Already Have an Account Please <Link className='text-red-700' to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;