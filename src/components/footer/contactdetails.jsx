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
      <div className="p-24 pt-[13rem] flex ">
        <div className="space-y-5 w-2/4">
          <div>
            <img src={huddlelogo} alt="" />
          </div>
          <div className="flex gap-5 pt-5">
            <img className="h-5 mt-1" src={location} alt="" />
            <p className="w-3/5 font-opensans">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex gap-5 font-opensans">
            <img src={phone} alt="" />
            <p> +1-543-123-4567</p>
          </div>
          <div className="flex gap-5 font-opensans">
            <img src={email} alt="" />
            <p> example@huddle.com</p>
          </div>
        </div>
        <div className="flex gap-10 my-auto font-opensans">
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
        <div className="flex gap-3 ml-36 mt-[70px] ">
          <div>
            <img
              className="border-2 p-2 h-9 w-9  rounded-full"
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
    </div>
  );
};

export default ContactDetails;
