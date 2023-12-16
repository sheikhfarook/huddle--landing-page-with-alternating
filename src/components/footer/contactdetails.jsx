import huddlelogo from "../../assets/images/huddlelogo.svg";
import location from "../../assets/images/icon-location.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import facebook from "../../assets/images/facebook-f.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";

const ContactDetails = () => {
  return (
    <div className="bg-[#00252E] text-white ">
      <div className="p-24 pt-[13rem] flex lg:flex-row md:flex-col  max-sm:flex-col max-sm:px-10">
        <div className="space-y-5 lg:w-2/4 md:w-full max-sm:w-full">
          <div>
            <img
              className="lg:justify-start lg:m-0 md:m-auto "
              src={huddlelogo}
              alt=""
            />
          </div>
          <div className="flex flex-row gap-5 pt-5 lg:m-0 lg:justify-start md:m-auto md:justify-center">
            <img className="h-5 mt-1" src={location} alt="" />
            <p className="w-3/5 font-opensans max-sm:w-[260px] ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex gap-5 font-opensans lg:m-0 lg:justify-start md:m-auto md:justify-center">
            <img src={phone} alt="" />
            <p> +1-543-123-4567</p>
          </div>
          <div className="flex gap-5 font-opensans lg:m-0 lg:justify-start md:m-auto md:justify-center">
            <img src={email} alt="" />
            <p> example@huddle.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 my-auto font-opensans lg:m-0 lg:justify-start md:m-auto md:justify-center lg:mt-0 md:mt-10 max-sm:mt-14 max-sm:gap-4 max-sm:flex-col">
          <div className="space-y-4">
            <div>About Us</div>
            <div>What We Do</div>
            <div>FAQ</div>
          </div>
          <div className="space-y-4">
            <div>Career</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="flex gap-3 ml-36 mt-[70px] lg:m-0 lg:justify-start lg:mt-0 md:m-auto md:justify-center md:mt-10 max-sm:m-auto max-sm:mt-20 ">
          <div>
            <img
              className="border-2 p-2 h-9 w-9 rounded-full md:"
              src={facebook}
              alt=""
            />
          </div>
          <div>
            <img className="border-2 p-2 rounded-full" src={twitter} alt="" />
          </div>
          <div>
            <img className="border-2 p-2 rounded-full" src={instagram} alt="" />
          </div>
        </div>
      </div>
      <div className="text-right mr-32 max-sm:m-auto max-sm:mr-6 ">
        <p className="bottom-16 lg:mr-0 md:mr-20  max-sm:bottom-14  relative">
          &copy; Copyright 2018 Huddle. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
