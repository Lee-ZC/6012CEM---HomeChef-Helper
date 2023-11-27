import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Button, Img, Input, Line, Text, TextArea } from "components";

const ContactPagePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Check if the current location is the Contact page
  const isContactPage = location.pathname === "/contactpage";

  return (
    <>
      {isContactPage && (
        <Helmet>
          <script
            defer
            src="https://static.elfsight.com/platform/platform.js"
          ></script>
        </Helmet>
      )}
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-10 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[66px] w-[92%] md:w-full">
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
                  className="md:ml-[0] ml-[70px] text-base text-black-900 tracking-[-0.32px]"
                  size="txtInterMedium16"
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
        </div>

        <Line className="bg-black-900_19 h-px mt-[39px] w-full" />
        <div className="flex flex-col font-inter items-center justify-start max-w-7xl mt-[82px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[71px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[440px] md:text-5xl text-[64px] text-black-900 tracking-[-2.56px]"
              size="txtInterSemiBold64"
            >
              Contact us
            </Text>
            <div className="flex md:flex-col flex-row font-lobster md:gap-10 items-start justify-between w-full">
              <div className="h-[472px] relative w-[32%] md:w-full">
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
              <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-2.5 w-[66%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                        size="txtInterMedium12"
                      >
                        Name
                      </Text>
                      <Input
                        name="group401"
                        placeholder="Enter your name..."
                        className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                        wrapClassName="outline outline-[0.5px] outline-black-900_19 w-full"
                        type="text"
                        shape="round"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                        size="txtInterMedium12"
                      >
                        emAIL aDDRESS
                      </Text>
                      <Input
                        name="group397"
                        placeholder="Your email address..."
                        className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                        wrapClassName="outline outline-[0.5px] outline-black-900_19 w-full"
                        type="email"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-[26px] w-[65%] md:w-full">
                    <Text
                      className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                      size="txtInterMedium12"
                    >
                      Subject
                    </Text>
                    <Text
                      className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                      size="txtInterMedium12"
                    >
                      ENquiry type
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-3.5 w-full">
                    <Input
                      name="group400"
                      placeholder="Enter subject..."
                      className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="sm:flex-1 outline outline-[0.5px] outline-black-900_19 sm:w-full"
                      shape="round"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    ></Input>
                    <Input
                      name="group398"
                      placeholder="Advertising"
                      className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="flex sm:flex-1 outline outline-[0.5px] outline-black-900_19 sm:w-full"
                      suffix={
                        <div className="mt-1 mb-1.5 ml-[35px] outline-black-900 outline-[1px] outline">
                          <Img
                            className="my-auto"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        </div>
                      }
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="mt-[26px] text-black-900_99 text-xs tracking-[0.96px] uppercase"
                    size="txtInterMedium12"
                  >
                    MEssages
                  </Text>
                  <TextArea
                    className="bg-white-A700 border-0 mt-3.5 outline outline-[0.5px] outline-black-900_19 pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-6 rounded-[16px] placeholder:text-black-900_7e text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                    name="group399"
                    placeholder="Enter your messages..."
                  ></TextArea>
                  <Button
                    className="cursor-pointer font-semibold min-w-[180px] mt-12 text-base text-center tracking-[-0.32px]"
                    shape="round"
                    color="black_900"
                    size="lg"
                    variant="fill"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="elfsight-app-c4428a7d-fdb1-47a7-975c-1f68bc175a89"
          data-elfsight-app-lazy
        ></div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
    </>
  );
};

export default ContactPagePage;
