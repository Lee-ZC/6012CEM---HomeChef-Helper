import React, { useState } from "react";
import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const CTAPage = ({
  backgroundImage,
  title,
  description,
  buttonLabel,
  buttonColor,
}) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleButtonClick = () => {
    // Handle button click, e.g., navigate to a different page
    navigate("/homechefrecipe");
  };

  const handleCloseButtonClick = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-deep_orange-50 flex flex-col items-center justify-start p-[19px] md:px-5 rounded-[30px] w-[85%] md:w-full relative">
            <button
              className="absolute top-4 right-4 text-red-700 text-2xl font-bold cursor-pointer"
              onClick={handleCloseButtonClick}
            >
              &times;
            </button>

            <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between mb-[13px] w-[99%] md:w-full">
              <div className="h-[472px] md:mt-0 mt-[22px] relative w-[36%] md:w-full">
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
                      className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[29%] w-max"
                      size="txtLobsterRegular24"
                    >
                      {title}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-lexenddeca justify-start w-[61%] md:w-full">
                {/* ... Other components ... */}
                <div className="flex flex-col font-inter gap-[58px] items-start justify-start mr-[39px] mt-[91px]">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtInterExtraBold40"
                  >
                    {title}
                  </Text>
                  <Text
                    className="leading-[28.00px] text-base text-black-900_99 text-center w-full"
                    size="txtInterRegular16"
                  >
                    {description}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer min-w-[300px] md:ml-[0] ml-[185px] mr-[207px] rounded-[10px] text-center text-sm"
                  color={buttonColor}
                  size="sm"
                  variant="fill"
                  onClick={handleButtonClick}
                >
                  {buttonLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTAPage;
