import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const CTAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-[34px] w-full">
        <div className="flex flex-col items-end justify-start mb-6 w-full">
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
          <div className="bg-deep_orange-50 flex flex-col items-center justify-start mr-[67px] mt-[169px] p-[19px] md:px-5 rounded-[30px] w-[85%] md:w-full">
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
                      HomeChef Helper
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-lexenddeca justify-start w-[61%] md:w-full">
                <div className="bg-red-A700 flex flex-col items-center justify-start md:ml-[0] ml-[641px] p-3 rounded-[25px] shadow-bs4 w-[8%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat md:h-[11px] h-[29px] p-[7px] relative rounded-[13px] w-full"
                    style={{ backgroundImage: "url('images/img_group21.svg')" }}
                  >
                    <Img
                      className="absolute h-[11px] left-[24%] top-[24%] w-2.5"
                      src="images/img_rectangle1005.svg"
                      alt="rectangle1005"
                    />
                    <Img
                      className="absolute h-[11px] inset-[0] justify-center m-auto w-2.5"
                      src="images/img_user_white_a700.svg"
                      alt="user"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-[58px] items-start justify-start mr-[39px] mt-[91px]">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtInterExtraBold40"
                  >
                    Welcome To HomeChef Helper
                  </Text>
                  <Text
                    className="leading-[28.00px] text-base text-black-900_99 text-center w-full"
                    size="txtInterRegular16"
                  >
                    In this website, we focuses on helping users improve their
                    cooking skills and create delicious meals at home.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer min-w-[300px] md:ml-[0] ml-[185px] mr-[207px] rounded-[10px] text-center text-sm"
                  color="blue_gray_800"
                  size="sm"
                  variant="fill"
                >
                  View Recipe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-7xl mt-[210px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtLobsterRegular24"
                >
                  HomeChef Helper
                </Text>
                <div className="flex flex-row font-inter items-start justify-between w-[48%] md:w-full">
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/faq")}
                  >
                    FaQ
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/sitemap")}
                  >
                    Sitemap
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/homechefrecipe")}
                  >
                    Recipes
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/bloglistpage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About us
                  </Text>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px mt-[61px] w-full" />
              <div className="flex flex-row font-inter sm:gap-10 items-start justify-between mt-[43px] w-3/5 md:w-full">
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
    </>
  );
};

export default CTAPage;
