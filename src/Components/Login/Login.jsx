import { useContext } from "react";
import loginimg from "../../assets/images/login/login.svg"
import { AuthContext } from "../../AuthProvide/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
  


  const {loginWithgoogle,login} = useContext(AuthContext)


  const logingooglehandler =()=>{
    
  loginWithgoogle()
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  }


  const loginhandler =(e)=>{

        e.preventDefault()

        const form = e.target;
        
        const email = form.email.value;
        const  password = form.password.value;

        console.log(email,password)
        login(email,password)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err))
    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="">
    
     <img className="w-2/3 mx-auto" src={loginimg} alt="" />
    </div>


    <div className="card w-1/2 flex border ">
    <h1 className="text-5xl font-bold text-black text-center">Login now!</h1>
      <form onSubmit={loginhandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered bg-white" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn lg:w-[416px] bg-[#FF3811]">Login</button>
        </div>
      </form>

      <div>
        <button className="ml-5 text-red-400" onClick={logingooglehandler}>GOOGLE</button>
      </div>

      <div className='text-center'>
              New Here? Please <Link className='text-red-700' to="/register">Register</Link>
            </div>
    </div>
  </div>
</div>
    );
};

export default Login;