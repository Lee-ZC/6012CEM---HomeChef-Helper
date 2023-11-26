import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const BlogPostPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-[42px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
          <div className="flex flex-col font-inter items-center justify-start max-w-[1221px] mt-[84px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-black-900 text-center tracking-[-2.56px]"
              size="txtInterSemiBold64"
            >
              Full Guide to Becoming a Professional Chef
            </Text>
            <div className="h-[51px] md:h-[71px] mt-5 relative w-[27%]">
              <div className="absolute flex flex-row h-max inset-[0] items-start justify-center m-auto w-[99%]">
                <div className="flex flex-row gap-4 items-center justify-start w-[35%]">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse2_6.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterBold16"
                  >
                    Tommy
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-10 ml-[90px] w-px" />
                <Text
                  className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                  size="txtInterMedium14"
                >
                  15 March 2023
                </Text>
              </div>
              <Img
                className="absolute h-[51px] inset-y-[0] left-[0] my-auto object-cover rounded-[25px] w-[50px]"
                src="images/img_image32.png"
                alt="imageThirtyThree"
              />
            </div>
            <Text
              className="leading-[28.00px] mt-[42px] text-base text-black-900_99 text-center w-[87%] sm:w-full"
              size="txtInterRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1275px] mt-16 mx-auto md:px-5 w-full">
            <Img
              className="h-[600px] md:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
              src="images/img_image29.png"
              alt="imageTwentyNine"
            />
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-[49px] items-start justify-start max-w-[1100px] mt-20 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-16 items-center justify-start w-[84%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                  size="txtInterSemiBold24"
                >
                  How did you start out in the food industry?
                </Text>
                <Text
                  className="leading-[28.00px] mt-[21px] text-base text-black-900_99 w-[99%] sm:w-full"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </Text>
                <Text
                  className="mt-[113px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                  size="txtInterSemiBold24"
                >
                  What do you like most about your job?
                </Text>
                <Text
                  className="leading-[28.00px] mt-[21px] text-base text-black-900_99 w-[99%] sm:w-full"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </Text>
                <Text
                  className="mt-[85px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                  size="txtInterSemiBold24"
                >
                  Do you cook at home on your days off?
                </Text>
                <Img
                  className="h-[400px] sm:h-auto mt-[29px] object-cover rounded-[20px] w-[99%] md:w-full"
                  src="images/img_rectangle23.png"
                  alt="rectangleTwentyThree"
                />
                <Text
                  className="leading-[28.00px] mt-8 text-base text-black-900_99 w-[99%] sm:w-full"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </Text>
                <Text
                  className="mt-[57px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                  size="txtInterSemiBold24"
                >
                  What would your advice be to young people looking to get their
                  foot in the door?
                </Text>
                <Text
                  className="leading-[28.00px] mt-[21px] text-base text-black-900_99 w-[99%] sm:w-full"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gradient5  flex flex-col gap-[47px] items-center justify-start w-full">
                  <Line className="bg-black-900_19 h-px w-full" />
                  <Text
                    className="italic leading-[64.00px] mb-[47px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.44px] w-[92%] sm:w-full"
                    size="txtInterMediumItalic36"
                  >
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.”
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px w-full" />
                <Text
                  className="leading-[36.00px] mt-[63px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px] w-[92%] sm:w-full"
                  size="txtInterSemiBold24"
                >
                  What is the biggest misconception that people have about being
                  a professional chef?
                </Text>
                <Text
                  className="leading-[28.00px] mt-6 text-base text-black-900_99 w-[92%] sm:w-full"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start w-[12%] md:w-full">
              <Text
                className="text-black-900 text-sm tracking-[1.40px] uppercase"
                size="txtInterSemiBold14"
              >
                SHARE THIS ON:
              </Text>
              <div className="flex flex-col gap-12 items-center justify-start w-[17%] md:w-full">
                <Img
                  className="h-[19px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <Img
                    className="h-[17px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_info.svg"
                    alt="info_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-lobster items-center justify-start max-w-7xl mt-[189px] mx-auto md:px-5 w-full">
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

export default BlogPostPagePage;
