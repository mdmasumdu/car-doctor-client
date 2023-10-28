import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="flex-1 relative">
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img className="w-1/2 absolute top-1/2 -right-1 border-8 border-white" src={parts}></img>
    </div>
    <div className="flex-1 text-black pl-5">
      <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>

      <p className="text-5xl py-6 font-bold max-w-[489px]">We are qualified & of experience in this field</p>

      <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>

      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <button className="border mt-5 border-black p-3 rounded-lg text-white bg-[#FF3811] ">Get More info</button>
    </div>
  </div>
</div>
    );
};

export default About;