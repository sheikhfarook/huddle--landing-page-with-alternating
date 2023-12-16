const CardContectComponent = ({ headline, info, growimage, RightPic }) => {
  return (
    <div>
      <div className="m-20 max-sm:m-0">
        <div
          className="flex flex-row m-10 rounded-2xl shadow-2xl bg-white 
          max-sm:flex-col ">
          <div
            className={`${
              RightPic ? "flex-row-reverse" : "flex-row"
            } mx-20 my-14 ml-32 flex lg:flex-row lg:mx-20 md:space-x-28 md:flex-col 
            md:mx-10 max-sm:flex-col max-sm:mx-10`}>
            <div>
              <img className="" src={growimage} alt="" />
            </div>

            <div className="m-auto space-y-3 text-center md:mt-10 lg:my-auto md:text-left  ">
              <h1 className="font-poppins text-3xl max-sm:text-2xl mt-8 text-[#191b1c]  md:m-0">
                {headline}
              </h1>
              <p className="font-opensans  text-[#717476] w-11/12">{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContectComponent;
