const CardContectComponent = ({ headline, info, growimage, RightPic }) => {
  return (
    <div>
      <div className="m-20">
        <div className="flex m-10 rounded-2xl shadow-2xl bg-white ">
          <div className="mx-20 my-14 flex space-x-28 ml-32">
            {!RightPic && (
              <div>
                <img src={growimage} alt="" />
              </div>
            )}
            <div className="m-auto  space-y-8 ">
              <h1 className="font-poppins text-3xl">{headline}</h1>
              <p className="font-opensans w-11/12">{info}</p>
            </div>
            {RightPic && (
              <div>
                <img src={growimage} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContectComponent;
