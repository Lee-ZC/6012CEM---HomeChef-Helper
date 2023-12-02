import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BlogListPagePage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [placeholder, setPlaceholder] = useState("Select Date");

  const handleDateChange = (date) => {
    // Implement your logic to handle the selected date and filter content
    setSelectedDate(date);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-end mx-auto py-[23px] w-full">
        <div className="flex flex-col items-center justify-start mt-[18px] w-full">
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
                      className="md:ml-[0] ml-[61px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
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
            <div className="h-px md:px-5 relative w-full">
              <Line className="bg-black-900_19 h-px m-auto w-full" />
              <Line className="absolute bg-black-900_19 h-px inset-[0] justify-center m-auto w-full" />
            </div>
          </div>

          <div className="flex flex-col font-inter items-center justify-start mt-[84px] md:px-5 w-[58%] md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-black-900 text-center tracking-[-2.56px]"
              size="txtInterSemiBold64"
            >
              Blog & Article
            </Text>
            <Text
              className="mt-[23px] text-base text-black-900_99 text-center"
              size="txtInterRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </Text>
            <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between mt-[42px] outline outline-[0.5px] outline-black-900_19 p-2.5 rounded-[24px] w-[86%] md:w-full">
              <Text
                className="ml-[22px] text-black-900_66 text-sm tracking-[-0.28px]"
                size="txtInterMedium14Black90066"
              >
                Search article, news or recipe...
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[160px] text-center text-sm tracking-[-0.28px]"
                shape="round"
                color="black_900"
                size="lg"
                variant="fill"
              >
                Search
              </Button>
            </div>
            <br />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              customInput={
                <div
                  style={{
                    backgroundColor: "#000000",
                    color: selectedDate ? "#fff" : "#fff",
                    borderColor: "#3498db",
                    padding: "8px",
                    borderRadius: "4px",
                    outline: "none",
                    fontSize: "14px",
                    textAlign: "center",
                    display: "flex", // Center horizontally
                    justifyContent: "center", // Center vertically
                  }}
                >
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : "Select Date"}
                </div>
              }
            />
          </div>

          <div className="flex flex-col font-inter items-center justify-start max-w-7xl mt-[31px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              {/* Here */}

              <div className="flex md:flex-1 flex-col gap-[47px] justify-start w-[66%] md:w-full">
                <List
                  className="flex flex-col gap-8 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-10 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_maskgroup_13.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                          size="txtInterSemiBold24"
                        >
                          Crochet Projects for Noodle Lovers
                        </Text>
                        <Text
                          className="leading-[28.00px] mt-[13px] text-base text-black-900_99 w-full"
                          size="txtInterRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetuipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqut enim{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-8 w-[65%] md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-[49%]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2_40x40.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-base text-black-900 tracking-[-0.32px]"
                              size="txtInterBold16"
                            >
                              Wade Warren
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-10 ml-6 w-px" />
                          <Text
                            className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            11 November 2023
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-10 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_maskgroup_200x290.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                          size="txtInterSemiBold24"
                        >
                          10 Vegetarian Recipes To Eat This Month
                        </Text>
                        <Text
                          className="leading-[28.00px] mt-[13px] text-base text-black-900_99 w-full"
                          size="txtInterRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetuipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqut enim{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-8 w-[61%] md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[30%]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2_1.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-base text-black-900 tracking-[-0.32px]"
                              size="txtInterBold16"
                            >
                              Alex{" "}
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-10 ml-[72px] w-px" />
                          <Text
                            className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            12 November 2023
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-10 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_maskgroup_14.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                          size="txtInterSemiBold24"
                        >
                          Full Guide to Becoming a Professional Chef
                        </Text>
                        <Text
                          className="leading-[28.00px] mt-[13px] text-base text-black-900_99 w-full"
                          size="txtInterRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetuipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqut enim{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-8 w-[67%] md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[31%]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2_2.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-base text-black-900 tracking-[-0.32px]"
                              size="txtInterBold16"
                            >
                              Agnes
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-10 ml-[86px] w-px" />
                          <Text
                            className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            13 November 2023
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-10 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_maskgroup_15.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                          size="txtInterSemiBold24"
                        >
                          Simple & Delicious Vegetarian Lasagna
                        </Text>
                        <Text
                          className="leading-[28.00px] mt-[13px] text-base text-black-900_99 w-full"
                          size="txtInterRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetuipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqut enim{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-8 w-[70%] md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-[33%]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2_3.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-base text-black-900 tracking-[-0.32px]"
                              size="txtInterBold16"
                            >
                              Zhi JIaa
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-10 ml-[91px] w-px" />
                          <Text
                            className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            14 November 2023
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-10 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_maskgroup_16.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                          size="txtInterSemiBold24"
                        >
                          Plantain and Pinto Stew with Aji Verde
                        </Text>
                        <Text
                          className="leading-[28.00px] mt-[13px] text-base text-black-900_99 w-full"
                          size="txtInterRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetuipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqut enim{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-8 w-[69%] md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-[34%]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2_4.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-base text-black-900 tracking-[-0.32px]"
                              size="txtInterBold16"
                            >
                              Dell Lee
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-10 ml-[85px] w-px" />
                          <Text
                            className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            15 November 2023
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-10 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[200px] md:h-auto object-cover"
                        src="images/img_maskgroup_17.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                          size="txtInterSemiBold24"
                        >
                          We’re Hiring a Communications Assistant!
                        </Text>
                        <Text
                          className="leading-[28.00px] mt-[13px] text-base text-black-900_99 w-full"
                          size="txtInterRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetuipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqut enim{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-8 w-[64%] md:w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-[35%]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2_5.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-base text-black-900 tracking-[-0.32px]"
                              size="txtInterBold16"
                            >
                              Charlie
                            </Text>
                          </div>
                          <Line className="bg-black-900_19 h-10 ml-[67px] w-px" />
                          <Text
                            className="ml-[23px] mt-3 text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            16 November 2023
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>

              {/* Here */}
              <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start md:mt-0 mt-[92px] w-[32%] md:w-full">
                <div className="flex flex-col gap-7 items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-1.28px]"
                    size="txtInterSemiBold32"
                  >
                    Blog
                  </Text>
                  <List
                    className="flex flex-col gap-6 items-center w-full"
                    orientation="vertical"
                  >
                    <div
                      className="common-pointer flex flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
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
                          Chicken Meatballs with Cream Cheese{" "}
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          By Decade
                        </Text>
                      </div>
                    </div>
                    <div
                      className="common-pointer flex flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
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
                          Traditional Bolognaise Ragu
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          By Lynnete
                        </Text>
                      </div>
                    </div>
                    <div
                      className="common-pointer flex flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-full"
                      onClick={() => navigate("/blogpostpage")}
                    >
                      <Img
                        className="h-[120px] md:h-auto object-cover"
                        src="images/img_maskgroup_18.png"
                        alt="maskgroup"
                      />
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="leading-[28.00px] text-black-900 text-xl tracking-[-0.80px] w-full"
                          size="txtInterSemiBold20"
                        >
                          Pork and Chive Chinese Dumplings
                        </Text>
                        <Text
                          className="text-black-900_99 text-sm tracking-[-0.28px]"
                          size="txtInterMedium14"
                        >
                          By Tommy
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
                          src="images/img_star1_434x400.svg"
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

            <div className="flex sm:flex-col flex-row gap-4 items-center justify-center mt-20 w-[43%] md:w-full">
              <Button
                className="cursor-pointer font-bold h-16 leading-[normal] text-center text-lg tracking-[-0.36px] w-16"
                shape="round"
                color="black_900"
                size="lg"
                variant="fill"
              >
                1
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-bold h-16 leading-[normal] outline outline-[0.5px] outline-black-900_19 text-center text-lg tracking-[-0.36px] w-16"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                2
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-bold h-16 leading-[normal] outline outline-[0.5px] outline-black-900_19 text-center text-lg tracking-[-0.36px] w-16"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                3
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-bold h-16 leading-[normal] outline outline-[0.5px] outline-black-900_19 text-center text-lg tracking-[-0.36px] w-16"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                4
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-bold h-16 leading-[normal] outline outline-[0.5px] outline-black-900_19 text-center text-lg tracking-[-0.36px] w-16"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                5
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-bold h-16 leading-[normal] outline outline-[0.5px] outline-black-900_19 text-center text-lg tracking-[-0.36px] w-16"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                ...
              </Button>
              <Button
                className="flex h-16 items-center justify-center outline outline-[0.5px] outline-black-900_19 w-16"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                <Img src="images/img_mobile.svg" alt="mobile" />
              </Button>
            </div>
            <div className="flex flex-col font-lobster items-center justify-start mt-[244px] w-full">
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
                      className="text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
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
      </div>
    </>
  );
};

export default BlogListPagePage;
