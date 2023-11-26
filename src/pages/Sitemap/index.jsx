import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const SitemapPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-7 w-full">
        <div className="flex flex-col items-center justify-start mb-[17px] w-full">
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
          <Line className="bg-black-900_19 h-0.5 mt-[31px] w-full" />
          <div className="bg-gray-50 flex flex-col font-poppins items-end justify-start max-w-[1320px] mt-[113px] mx-auto p-[33px] md:px-5 rounded-[30px] w-full">
            <div className="flex flex-col items-start justify-start mb-0.5 mt-[93px] w-[89%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center ml-96 md:ml-[0] mr-[572px] md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[312px] md:h-[342px] sm:h-[652px] relative w-full">
                    <div className="absolute flex h-[312px] md:h-[342px] sm:h-[652px] inset-y-[0] justify-end left-[0] my-auto w-[94%] md:w-full">
                      <div className="absolute bg-white-A700 border-2 border-black-900 border-solid bottom-[21%] flex flex-col h-[120px] md:h-auto items-center justify-center left-[0] md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtPoppinsRegular18"
                        >
                          Recipe
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mb-16 ml-auto mr-[110px] mt-auto w-[71%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Meal Planner
                          </Text>
                        </div>
                        <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Blog & Article
                          </Text>
                        </div>
                        <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            About us
                          </Text>
                        </div>
                        <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtPoppinsRegular18"
                          >
                            Contact
                          </Text>
                        </div>
                      </List>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[120px] h-full inset-y-[0] justify-end my-auto md:pl-10 pl-16 sm:pl-5 pt-16 right-[0] w-[93%]"
                        style={{
                          backgroundImage: "url('images/img_group26.svg')",
                        }}
                      >
                        <Line className="bg-black-900 h-16 md:ml-[0] ml-[892px] w-0.5" />
                        <Line className="bg-black-900 h-16 ml-80 md:ml-[0] mr-[572px] w-0.5" />
                      </div>
                    </div>
                    <Button
                      className="!text-black-900 absolute border-2 border-black-900 border-solid bottom-[21%] cursor-pointer h-[120px] leading-[normal] right-[0] shadow-bs1 text-center text-lg w-40"
                      shape="square"
                      color="white_A700"
                      size="3xl"
                      variant="fill"
                    >
                      Setting
                    </Button>
                  </div>
                  <div className="md:gap-10 gap-56 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[84%] md:w-full">
                    <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center shadow-bs1 w-full">
                      <Text
                        className="text-black-900 text-center text-lg w-auto"
                        size="txtPoppinsRegular18"
                      >
                        <>
                          Recipe detail
                          <br />
                          page
                        </>
                      </Text>
                    </div>
                    <Button
                      className="!text-black-900 border-2 border-black-900 border-solid cursor-pointer h-[120px] leading-[normal] shadow-bs1 text-center text-lg w-full"
                      shape="square"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    >
                      <>
                        Blog & Article <br />
                        detail post
                      </>
                    </Button>
                    <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-full">
                      <Text
                        className="text-black-900 text-center text-lg w-auto"
                        size="txtPoppinsRegular18"
                      >
                        FaQ
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-black-900 h-16 ml-20 md:ml-[0] w-0.5" />
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[120px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-12 shadow-bs1 w-40">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsRegular18"
                >
                  Favourite
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-lobster items-center justify-start max-w-7xl mt-[281px] mx-auto md:px-5 w-full">
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
                    className="text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
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

export default SitemapPage;
