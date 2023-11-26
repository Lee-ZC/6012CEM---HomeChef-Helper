import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ErrorPagePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use the navigate function to go to the home page
    navigate("/homepage");
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-7 w-full">
        <div className="flex flex-col items-center justify-start mb-[15px] w-full">
          <div className="flex flex-col items-center justify-start mt-[246px] md:px-5 w-[79%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="h-[472px] relative w-[36%] md:w-full">
                <div className="absolute bg-gradient  bottom-[0] h-[432px] inset-x-[0] mx-auto rounded-[30px] w-full"></div>
                <div className="absolute h-[472px] inset-[0] justify-center m-auto w-[88%]">
                  <Img
                    className="h-[472px] m-auto object-cover w-full"
                    src="images/img_layer11.png"
                    alt="layerEleven"
                  />
                  <div className="absolute h-[472px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[472px] m-auto object-cover w-full"
                      src="images/img_layer11.png"
                      alt="layerTwelve"
                    />
                    <Text
                      className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[30%] w-max"
                      size="txtLobsterRegular24"
                    >
                      HomeChef Helper
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-inter md:gap-10 gap-[134px] justify-start md:mt-0 mt-[159px] mt-4 w-[54%] md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 tracking-[-2.56px]"
                  size="txtInterSemiBold64"
                >
                  404 Page Not Found
                </Text>
                <Button
                  className="cursor-pointer font-semibold min-w-[247px] md:ml-[0] ml-[127px] mr-[216px] text-base text-center tracking-[-0.32px]"
                  shape="round"
                  color="blue_A200"
                  size="lg"
                  variant="fill"
                  onClick={handleButtonClick} // Call the handleButtonClick function on button click
                >
                  Back To Home
                </Button>
              </div>
            </div>
          </div>
          <div className="font-inter h-[173px] sm:h-[569px] md:h-[728px] max-w-7xl mt-[397px] mx-auto md:px-5 relative w-full"></div>
        </div>
      </div>
    </>
  );
};

export default ErrorPagePage;
