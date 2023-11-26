import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";
import FaQFaq from "components/FaQFaq";

const FaQPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-end mx-auto py-[26px] w-full">
        <div className="flex flex-col md:gap-10 gap-[165px] items-center justify-start w-full">
          <div className="flex flex-col gap-[34px] items-center justify-start w-full">
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
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
          <FaQFaq className="flex flex-col font-inter gap-12 items-start justify-start max-w-[1403px] mx-auto pb-12 px-12 md:px-5 w-full" />
          <div className="flex flex-col font-lobster items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
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
                    className="text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
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

export default FaQPage;
