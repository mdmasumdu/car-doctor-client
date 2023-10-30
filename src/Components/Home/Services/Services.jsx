import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {

    const [services,setservices]= useState();

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])

    console.log(services)
    return (
        <div>
            <div className="text-center text-black max-w-[717px] mx-auto">
            <h1 className="text-xl text-[#FF3811]">Service</h1>
            <h1 className="font-bold text-5xl mb-5">Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    services?.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;