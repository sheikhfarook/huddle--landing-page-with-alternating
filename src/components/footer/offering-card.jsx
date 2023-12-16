const OfferingCard = () => {
  return (
    <div
      className="m-auto w-1/2 shadow-2xl rounded-2xl text-center bg-white relative top-[6rem]
    max-sm:w-[20rem]">
      <div className="py-12 px-3.5 space-y-9 max-sm:space-y-6">
        <div className="text-3xl font-poppins max-sm:text-[17px] max-sm:w-full">
          Ready To Build Your Community?
        </div>
        <div
          className="font-opensans font-[700] bg-[#FF52BF] rounded-full text-white h-16 w-3/5 m-auto
         max-sm:w-3/4 max-sm:h-14">
          <p className="py-[17px] text-xl max-sm:py-[13px] max-sm:text-[13px]">
            Get Started For Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;
