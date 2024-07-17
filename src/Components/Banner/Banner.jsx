import banner from "../../assets/banner_img/banner2.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative ">
        <img src={banner} alt="Chef photo" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-60"></div>

        <div className="absolute inset-0 text-center lg:top-1/3 ">
          <div>
            <div className="text-white lg:w-[795px] lg:mx-auto lg:space-y-6 mt-12 ">
              <h1 className="lg:text-5xl lg:leading-normal">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="lg:text-xl font-normal  lg:leading-loose ">
                Welcome to your ultimate culinary destination! Here, you will
                discover a treasure trove of delicious recipes that cater to all
                tastes and skill levels. Whether you’re a seasoned chef or just
                starting your cooking journey, our collection is designed to
                inspire and delight. Let’s embark on this flavorful adventure
                together!
              </p>
            </div>
            <div className="lg:mt-10">
              <button className="btn btn-success border-none lg:btn-lg rounded-full">
                Explore Now
              </button>
              <button className="btn btn-outline text-white ml-6 lg:btn-lg rounded-full">
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
