const RightBanner = () => {
  return (
    <div
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      data-aos="zoom-in"
    >
      <img
        className="w-[200px] h-auto lgl:w-[500px] lgl:h-h-auto z-10"
        src="https://i.ibb.co/Tr03QX0/coverpic4.jpg"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-auto h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
