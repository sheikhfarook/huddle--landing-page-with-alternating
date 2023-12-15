import huddle from "../../assets/images/logo.svg";
import mockups from "../../assets/images/illustration-mockups.svg";

const Header = () => {
  return (
    <div className="Header-Image ">
      {/* header */}
      <div className="flex justify-between m-[4rem] max-sm:mx-[1.2rem]">
        <div>
          <img className="max-sm:h-5 max-sm:w-[7rem]" src={huddle} alt="" />
        </div>
        <div
          className=" bg-white shadow-black  shadow-2xl font-[700]  px-10 py-2.5 rounded-full 
        max-sm:py-1 max-sm:px-5  ">
          <p className="font-opensans text-xl max-sm:text-[14px] ">
            Try it Free
          </p>
        </div>
      </div>
      {/* hero */}
      <div className="mx-20 flex flex-row max-sm:flex-col max-sm:text-center max-sm:m-auto ">
        <div className="space-y-10 m-auto">
          <h1 className="font-poppins text-[41px] w-3/4 leading-[3rem] max-sm:text-[28px] max-sm:w-full">
            Build The Community Your Fans Will Love
          </h1>
          <p className="font-opensans text-[18px] w-11/12 max-sm:ml-3">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div
            className="font-opensans rounded-full w-2/5 px-[2.8rem] text-[15px] text-white bg-[#FF52BF]
          max-sm:w-3/5 max-sm:px-4 max-sm:m-auto">
            <p className="py-4 font-[700] ">Get Started For Free</p>
          </div>
        </div>
        <div className="w-[100rem] m-auto max-sm:w-10/12 max-sm:mt-10">
          <img className="" src={mockups} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
