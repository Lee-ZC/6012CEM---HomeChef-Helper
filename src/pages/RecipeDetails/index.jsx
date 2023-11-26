import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Radio, Text } from "components";

const RecipeDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-7 w-full">
        <div className="flex flex-col items-center justify-start mb-1.5 w-full">
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
          <div className="flex flex-col font-inter items-start justify-start max-w-7xl mt-[98px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-[57%] md:w-full">
                    <Text
                      className="md:text-5xl text-[64px] text-black-900 tracking-[-2.56px]"
                      size="txtInterSemiBold64"
                    >
                      Kampung Fried Rice
                    </Text>
                    <div className="md:h-[226px] h-[51px] relative w-full">
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-1/5 md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-full">
                            <Img
                              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                              src="images/img_ellipse2.png"
                              alt="ellipseTwo"
                            />
                            <div className="flex flex-col gap-1.5 items-center justify-start">
                              <Text
                                className="text-base text-black-900 tracking-[-0.32px]"
                                size="txtInterBold16"
                              >
                                Ng E Soon
                              </Text>
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                15 Oct 2023
                              </Text>
                            </div>
                          </div>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-8 grid grid-cols-[repeat(1,_1fr_1px)_1fr] md:ml-[0] ml-[107px] w-[41%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-row gap-4 items-center justify-between w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_clock.svg"
                              alt="clock"
                            />
                            <div className="flex flex-col gap-2 items-center justify-start">
                              <Text
                                className="text-black-900 text-xs tracking-[1.20px]"
                                size="txtInterMedium12"
                              >
                                PREP TIME
                              </Text>
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                15 Minutes
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[50px] bg-black-900_19 w-px" />
                          <div className="flex flex-row gap-4 items-center justify-between w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_clock.svg"
                              alt="clock"
                            />
                            <div className="flex flex-col gap-2 items-start justify-start">
                              <Text
                                className="text-black-900 text-xs tracking-[1.20px]"
                                size="txtInterMedium12"
                              >
                                COOK TIME
                              </Text>
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                15 Minutes
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex md:flex-1 flex-col items-center justify-start ml-16 md:ml-[0] w-[16%] md:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                            <Text
                              className="text-black-900_99 text-sm tracking-[-0.28px]"
                              size="txtInterMedium14"
                            >
                              Main Course
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[51px] inset-y-[0] left-[0] my-auto object-cover rounded-[25px] w-[50px]"
                        src="images/img_image32.png"
                        alt="imageThirtyTwo"
                      />
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-8 grid grid-cols-2 md:mt-0 mt-[42px] w-[15%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="bg-light_blue-50_01 flex flex-col h-20 items-center justify-start p-7 sm:px-5 rounded-[50%] w-20">
                        <Img
                          className="h-6 w-6"
                          src="images/img_printer.svg"
                          alt="printer"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-center text-xs tracking-[1.20px]"
                        size="txtInterMedium12"
                      >
                        PRINT
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="bg-light_blue-50_01 flex flex-col h-20 items-center justify-start p-7 sm:px-5 rounded-[50%] w-20">
                        <Img
                          className="h-6 w-6"
                          src="images/img_share.svg"
                          alt="share"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-center text-xs tracking-[1.20px]"
                        size="txtInterMedium12"
                      >
                        SHARE
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-16 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                    <div className="h-[600px] relative w-full">
                      <Img
                        className="h-[600px] m-auto object-cover rounded-[30px] w-full"
                        src="images/img_image26.png"
                        alt="imageTwentySix"
                      />
                      <div className="absolute bg-white-A700_cc flex flex-col h-max inset-[0] items-center justify-center m-auto p-11 md:px-10 sm:px-5 rounded-[50%] w-[120px]">
                        <Img
                          className="h-8 rounded-sm w-8"
                          src="images/img_overflowmenu_blue_gray_900.svg"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-light_blue-50_01 flex md:flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[30px] w-[32%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                      size="txtInterSemiBold24"
                    >
                      Nutrition Information
                    </Text>
                    <List
                      className="flex flex-col gap-[15px] items-center mt-6 w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-black-900_99 text-lg tracking-[-0.72px]"
                              size="txtInterMedium18"
                            >
                              Calories
                            </Text>
                            <Text
                              className="text-black-900 text-lg text-right tracking-[-0.72px]"
                              size="txtInterMedium18Black900"
                            >
                              219.9 kcal
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="text-black-900_99 text-lg tracking-[-0.72px]"
                              size="txtInterMedium18"
                            >
                              Total Fat
                            </Text>
                            <Text
                              className="text-black-900 text-lg text-right tracking-[-0.72px]"
                              size="txtInterMedium18Black900"
                            >
                              10.7 g
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mb-0.5 text-black-900_99 text-lg tracking-[-0.72px]"
                              size="txtInterMedium18"
                            >
                              Protein
                            </Text>
                            <Text
                              className="mt-0.5 text-black-900 text-lg text-right tracking-[-0.72px]"
                              size="txtInterMedium18Black900"
                            >
                              7.9 g
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-black-900_99 text-lg tracking-[-0.72px]"
                              size="txtInterMedium18"
                            >
                              Carbohydrate
                            </Text>
                            <Text
                              className="text-black-900 text-lg text-right tracking-[-0.72px]"
                              size="txtInterMedium18Black900"
                            >
                              22.3 g
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-px w-full" />
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900_99 text-lg tracking-[-0.72px]"
                            size="txtInterMedium18"
                          >
                            Cholesterol
                          </Text>
                          <Text
                            className="text-black-900 text-lg text-right tracking-[-0.72px]"
                            size="txtInterMedium18Black900"
                          >
                            37.4 mg
                          </Text>
                        </div>
                        <Line className="bg-black-900_19 h-px w-full" />
                      </div>
                    </div>
                    <Text
                      className="leading-[28.00px] mt-[166px] text-base text-black-900_99 text-center w-[99%] sm:w-full"
                      size="txtInterRegular16"
                    >
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.{" "}
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[28.00px] mt-20 text-base text-black-900_99 w-full"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[82px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[63px] items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.44px]"
                    size="txtInterSemiBold36"
                  >
                    Ingredients
                  </Text>
                  <Text
                    className="mt-[43px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                    size="txtInterSemiBold24"
                  >
                    For main dish
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-8 w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-row gap-6 items-end justify-start w-[31%] md:w-full">
                        <div className="bg-black-900 flex flex-col h-6 items-center justify-start mb-0.5 p-[7px] rounded-[50%] w-6">
                          <Img
                            className="h-1.5 my-0.5"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="line-through mt-1.5 text-base text-black-900_48"
                          size="txtInterRegular16Black90048"
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                    </div>
                  </div>
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] mt-[31px] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorThree"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px mt-[30px] w-full" />
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] mt-[31px] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorFive"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet2"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px mt-[30px] w-full" />
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] mt-[31px] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorSeven"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet3"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px mt-[30px] w-full" />
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] mt-[31px] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorNine"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet4"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px mt-[30px] w-full" />
                </div>
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                    size="txtInterSemiBold24"
                  >
                    For the sauce
                  </Text>
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorEleven"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet5"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px w-full" />
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorThirteen"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet6"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px w-full" />
                  <Radio
                    value="Loremipsumdolorsitamet"
                    className="leading-[normal] sm:pl-5 text-black-900 text-left text-lg tracking-[-0.36px]"
                    inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                    checked={false}
                    name="loremipsumdolorFifteen"
                    label="Lorem ipsum dolor sit amet"
                    id="Loremipsumdolorsitamet7"
                  ></Radio>
                  <Line className="bg-black-900_19 h-px w-full" />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start w-[32%] md:w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-1.28px]"
                    size="txtInterSemiBold32"
                  >
                    Other Recipe
                  </Text>
                  <List
                    className="flex flex-col gap-6 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover"
                        src="images/img_maskgroup_120x180.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="leading-[28.00px] text-black-900 text-xl tracking-[-0.80px] w-full"
                          size="txtInterSemiBold20"
                        >
                          Chicken Meatball with Creamy Chees...
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          By Andreas Paula
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover"
                        src="images/img_maskgroup_8.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="leading-[28.00px] text-black-900 text-xl tracking-[-0.80px] w-full"
                          size="txtInterSemiBold20"
                        >
                          The Creamiest Creamy Chicken an...
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          By Andreas Paula
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover"
                        src="images/img_maskgroup_9.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="leading-[28.00px] text-black-900 text-xl tracking-[-0.80px] w-full"
                          size="txtInterSemiBold20"
                        >
                          The Best Easy One Pot Chicken and Rice
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          By Andreas Paula
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col font-lobster items-center justify-start w-full">
                  <div className="bg-gradient3  flex flex-col items-center justify-start w-full">
                    <div className="h-[434px] relative w-full">
                      <div className="h-[434px] m-auto w-full">
                        <Img
                          className="bg-gradient4  h-[434px] m-auto w-full"
                          src="images/img_star1.svg"
                          alt="starOne"
                        />
                        <Text
                          className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl top-[9%]"
                          size="txtLobsterRegular24WhiteA700"
                        >
                          <>
                            Don’t forget to eat <br />
                            healthy food
                          </>
                        </Text>
                      </div>
                      <div className="absolute bottom-[0] font-inter h-[336px] inset-x-[0] mx-auto w-[89%]">
                        <Img
                          className="h-[336px] m-auto object-cover w-full"
                          src="images/img_01.png"
                          alt="One"
                        />
                        <a
                          href="www.foodieland.com"
                          className="absolute bottom-[9%] inset-x-[0] mx-auto text-sm text-white-A700_99 tracking-[-0.28px] w-max"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text size="txtInterMedium14WhiteA70099">
                            www.foodieland.com
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[13px] w-[66%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.44px]"
                size="txtInterSemiBold36"
              >
                Add To Mean Planner
              </Text>
              <Radio
                value="Breakfast"
                className="font-semibold leading-[normal] mt-[30px] sm:pl-5 text-2xl md:text-[22px] text-black-900 text-left sm:text-xl tracking-[-0.48px]"
                inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                checked={false}
                name="breakfast"
                label="Breakfast"
                id="Breakfast"
              ></Radio>
              <Text
                className="leading-[26.00px] ml-12 md:ml-[0] mt-6 text-base text-black-900_99 tracking-[-0.32px] w-[95%] sm:w-full"
                size="txtInterRegular16"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </Text>
              <Img
                className="h-[400px] sm:h-auto ml-12 md:ml-[0] mt-12 object-cover rounded-[20px] w-[95%] md:w-full"
                src="images/img_rectangle23.png"
                alt="rectangleTwentyThree"
              />
              <Text
                className="leading-[26.00px] ml-12 md:ml-[0] mt-12 text-base text-black-900_99 tracking-[-0.32px] w-[95%] sm:w-full"
                size="txtInterRegular16"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </Text>
              <Line className="bg-black-900_19 h-px mt-12 w-full" />
              <Radio
                value="Lunch"
                className="font-semibold leading-[normal] mt-[46px] sm:pl-5 text-2xl md:text-[22px] text-black-900 text-left sm:text-xl tracking-[-0.48px]"
                inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                checked={false}
                name="lunch"
                label="Lunch"
                id="Lunch"
              ></Radio>
              <Text
                className="leading-[26.00px] ml-12 md:ml-[0] mt-[23px] text-base text-black-900_99 tracking-[-0.32px] w-[95%] sm:w-full"
                size="txtInterRegular16"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </Text>
              <Line className="bg-black-900_19 h-px mt-12 w-full" />
              <Radio
                value="3Dinner"
                className="font-semibold leading-[normal] mt-[45px] sm:pl-5 text-2xl md:text-[22px] text-black-900 text-left sm:text-xl tracking-[-0.48px]"
                inputClassName="h-6 mr-[5px] outline outline-[1px] outline-gray-300_01 w-6"
                checked={false}
                name="dinner"
                label="3 Dinner  "
                id="3Dinner"
              ></Radio>
              <Text
                className="leading-[26.00px] ml-12 md:ml-[0] mt-6 text-base text-black-900_99 tracking-[-0.32px] w-[95%] sm:w-full"
                size="txtInterRegular16"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </Text>
              <Line className="bg-black-900_19 h-px mt-12 w-full" />
            </div>
            <div className="flex flex-col items-center justify-start mt-[81px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[121px] w-[23%] md:w-full">
                  <div className="h-[200px] relative w-full">
                    <Img
                      className="h-[200px] m-auto object-cover w-full"
                      src="images/img_maskgroup_200x290.png"
                      alt="maskgroup"
                    />
                    <Button
                      className="absolute flex h-12 items-center justify-center right-[6%] top-[8%] w-12"
                      shape="circle"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                    </Button>
                  </div>
                  <Text
                    className="leading-[26.00px] mt-4 text-black-900 text-lg tracking-[-0.72px] w-full"
                    size="txtInterSemiBold18"
                  >
                    Mixed Tropical Fruit Salad with Superfood Boosts{" "}
                  </Text>
                  <div className="flex flex-row gap-6 items-center justify-start md:ml-[0] ml-[34px] mt-6 w-[63%] md:w-full">
                    <Text
                      className="text-black-900_99 text-sm tracking-[-0.28px]"
                      size="txtInterMedium14"
                    >
                      30 Minutes
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[47%]">
                      <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user_One"
                        />
                        <Text
                          className="mt-1 text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          Healthy
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[77px] justify-start w-3/4 md:w-full">
                  <Text
                    className="md:ml-[0] ml-[76px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.44px]"
                    size="txtInterSemiBold36"
                  >
                    You may like these recipe too
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-[200px] relative w-full">
                          <Img
                            className="h-[200px] m-auto object-cover w-full"
                            src="images/img_maskgroup_10.png"
                            alt="maskgroup"
                          />
                          <Button
                            className="absolute flex h-12 items-center justify-center right-[6%] top-[8%] w-12"
                            shape="circle"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite_gray_300_01.svg"
                              alt="favorite"
                            />
                          </Button>
                        </div>
                        <Text
                          className="leading-[26.00px] mt-4 text-black-900 text-lg tracking-[-0.72px] w-full"
                          size="txtInterSemiBold18"
                        >
                          Big and Juicy Wagyu Beef Cheeseburger
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-start mt-6 w-[76%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-1/2">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                30 Minutes
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-2/5">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_user.svg"
                                alt="user"
                              />
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                Western
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-[200px] relative w-full">
                          <Img
                            className="h-[200px] m-auto object-cover w-full"
                            src="images/img_maskgroup_11.png"
                            alt="maskgroup"
                          />
                          <Button
                            className="absolute flex h-12 items-center justify-center right-[6%] top-[8%] w-12"
                            shape="circle"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite.svg"
                              alt="favorite"
                            />
                          </Button>
                        </div>
                        <Text
                          className="leading-[26.00px] mt-4 text-black-900 text-lg tracking-[-0.72px] w-full"
                          size="txtInterSemiBold18"
                        >
                          Healthy Japanese Fried Rice with Asparagus
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-start mt-6 w-3/4 md:w-full">
                          <div className="flex flex-col items-center justify-start w-1/2">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                30 Minutes
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-2/5">
                            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_user.svg"
                                alt="user"
                              />
                              <Text
                                className="mt-1 text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                Healthy
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-[200px] relative w-full">
                          <Img
                            className="h-[200px] m-auto object-cover w-full"
                            src="images/img_maskgroup_12.png"
                            alt="maskgroup"
                          />
                          <Button
                            className="absolute flex h-12 items-center justify-center right-[6%] top-[8%] w-12"
                            shape="circle"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite_gray_300_01.svg"
                              alt="favorite"
                            />
                          </Button>
                        </div>
                        <Text
                          className="leading-[26.00px] mt-4 text-black-900 text-lg tracking-[-0.72px] w-full"
                          size="txtInterSemiBold18"
                        >
                          Cauliflower Walnut Vegetarian Taco Meat
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-start mt-6 w-3/4 md:w-full">
                          <div className="flex flex-col items-center justify-start w-1/2">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                30 Minutes
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-2/5">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_user.svg"
                                alt="user"
                              />
                              <Text
                                className="text-black-900_99 text-sm tracking-[-0.28px]"
                                size="txtInterMedium14"
                              >
                                Eastern
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-lobster items-center justify-start max-w-7xl mt-[286px] mx-auto md:px-5 w-full">
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

export default RecipeDetailsPage;
