import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ErrorPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-7 w-full">
        <div className="flex flex-col items-center justify-start mb-[15px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1299px] mx-auto md:px-5 w-full">
            <Text
              className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtLobsterRegular24"
            >
              HomeChef Helper
            </Text>
            <div className="font-inter sm:h-[30px] md:h-[330px] h-[34px] md:ml-[0] ml-[67px] relative w-[78%] md:w-full">
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:mt-0 mt-2.5">
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/homepage")}
                  >
                    Home
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[58px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/homechefrecipe")}
                  >
                    Recipes
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[61px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/bloglistpage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/mealplanner")}
                  >
                    Meal Planner
                  </Text>
                  <Text
                    className="common-pointer ml-20 md:ml-[0] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/favoutite")}
                  >
                    Favourite
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[81px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/setting")}
                  >
                    Setting
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[70px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                </div>
                <Img
                  className="h-[22px] mb-2 w-[22px]"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
              <Img
                className="absolute h-[29px] right-[6%] top-[0]"
                src="images/img_whatsapp.svg"
                alt="whatsapp"
              />
            </div>
            <Img
              className="h-5 md:ml-[0] ml-[41px] md:mt-0 mt-[5px]"
              src="images/img_rewind.svg"
              alt="rewind"
            />
          </div>
          <Line className="bg-black-900_19 h-px mt-[33px] w-full" />
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
              <div className="flex md:flex-1 flex-col font-inter md:gap-10 gap-[134px] justify-start md:mt-0 mt-[159px] w-[54%] md:w-full">
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
                >
                  Back To Home
                </Button>
              </div>
            </div>
          </div>
          <div className="font-inter h-[173px] sm:h-[569px] md:h-[728px] max-w-7xl mt-[397px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-row sm:gap-10 h-full items-start justify-between ml-5 w-[63%]">
              <Text
                className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtLobsterRegular24"
              >
                HomeChef Helper
              </Text>
              <Text
                className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                size="txtInterMedium16"
                onClick={() => navigate("/sitemap")}
              >
                Sitemap
              </Text>
            </div>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[47%] md:w-full">
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/faq")}
                  >
                    FaQ
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[166px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/homechefrecipe")}
                  >
                    Recipes
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/bloglistpage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[61px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About us
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px mt-[73px] w-full" />
                <div className="flex flex-row sm:gap-10 items-start justify-between mt-[43px] w-3/5 md:w-full">
                  <div className="flex flex-col items-center justify-start mt-[9px]">
                    <Text
                      className="text-black-900_99 text-xl"
                      size="txtInterRegular20"
                    >
                      © 2023 HomeChef Helper
                    </Text>
                  </div>
                  <Img
                    className="h-[29px] mb-[5px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPagePage;
