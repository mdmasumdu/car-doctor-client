import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
// import banner5 from "../../../assets/images/banner/5.jpg"
// import banner6 from "../../../assets/images/banner/6.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full rounded-2xl" />
          <div className="absolute rounded-2xl flex items-center  pl-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
            <div>
            <h1 className="text-6xl w-1/2 font-bold">Affordable Price For Car Servicing</h1>
            <p className="mt-5 mb-5">There are many variations of passages of  available, but  <br />the majority have suffered alteration in some form</p>
            <button className="border p-3 rounded-lg bg-[#FF3811] mr-5">Discover More</button>
            <button className=" border p-3 rounded-lg text-white">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 


        


        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />

          <div className="absolute flex items-center  pl-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
            <div>
            <h1 className="text-6xl w-1/2 font-bold">Affordable Price For Car Servicing</h1>
            <p className="mt-5 mb-5">There are many variations of passages of  available, but  <br />the majority have suffered alteration in some form</p>
            <button className="border p-3 rounded-lg bg-[#FF3811] mr-5">Discover More</button>
            <button className=" border p-3 rounded-lg text-white">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 





        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />

          <div className="absolute flex items-center  pl-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
            <div>
            <h1 className="text-6xl w-1/2 font-bold">Affordable Price For Car Servicing</h1>
            <p className="mt-5 mb-5">There are many variations of passages of  available, but  <br />the majority have suffered alteration in some form</p>
            <button className="border p-3 rounded-lg bg-[#FF3811] mr-5">Discover More</button>
            <button className=" border p-3 rounded-lg text-white">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 



        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex items-center  pl-5 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
            <div>
            <h1 className="text-6xl w-1/2 font-bold">Affordable Price For Car Servicing</h1>
            <p className="mt-5 mb-5">There are many variations of passages of  available, but  <br />the majority have suffered alteration in some form</p>
            <button className="border p-3 rounded-lg bg-[#FF3811] mr-5">Discover More</button>
            <button className=" border p-3 rounded-lg text-white">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;