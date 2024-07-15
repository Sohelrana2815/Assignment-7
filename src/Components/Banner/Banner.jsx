import banner from "../../assets/banner_img/banner2.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative ">
        <img src={banner} alt="Chef photo" />
        <div className="absolute inset-0 text-center top-1/3 ">
          <div>
            <div className="text-white lg:w-[795px] mx-auto space-y-6 ">
              <h1 className="text-5xl leading-normal">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="text-lg leading-loose">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
            </div>
            <div className="mt-10">
              <button className="btn btn-success border-none btn-lg rounded-full">
                Explore Now
              </button>
              <button className="btn btn-outline text-white ml-6 btn-lg rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
