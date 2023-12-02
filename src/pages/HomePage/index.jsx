import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import BackToTopButton from "../../components/BacToTop"; // Adjust the import path accordingly
import CTAPage from "../CTA"; // Adjust the import path

const HomePagePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchTermString = String(searchTerm).trim();

    if (searchTermString) {
      navigate(`/${encodeURIComponent(searchTermString)}`);
    }
  };

  const handleKeyPress = (e) => {
    // If the user presses Enter, trigger the search
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleLearnMoreClick = () => {
    // Add any additional logic you may need
    navigate("/homechefrecipe");
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-start mx-auto py-[42px] w-full">
        <div className="flex flex-col gap-[34px] items-center justify-start mb-11 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1299px] mx-auto md:px-5 w-full">
            <Text
              className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtLobsterRegular24"
            >
              HomeChef Helper
            </Text>
            <div className="font-inter sm:h-[30px] md:h-[330px] h-[34px] md:ml-[0] ml-[67px] relative w-[78%] md:w-full">
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:mt-0 mt-[9px]">
                  <Text
                    className="text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
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
                    className="common-pointer md:ml-[0] ml-[67px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                </div>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Img
                className="absolute h-5 right-2 top-2 cursor-pointer"
                src="images/img_search.svg"
                alt="search"
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="flex flex-col font-inter justify-start w-full">
            <Line className="bg-black-900_19 h-px w-full" />
            <div className="mt-[39px] overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto w-full">
                <div className="bg-light_blue-50 h-[600px] md:mt-0 my-5 md:px-5 rounded-br-[30px] rounded-tr-[30px] w-[3%]"></div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:px-5">
                  <div className="bg-light_blue-50_01 flex flex-col items-center justify-center p-[45px] md:px-10 sm:px-5 rounded-bl-[50px] rounded-tl-[50px] w-[49%] md:w-full">
                    <div className="flex flex-col items-start justify-start my-[5px] w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[5px] p-[11px] rounded-[23px] w-[35%] md:w-full">
                        <div className="flex flex-row gap-[13px] items-end justify-start w-[92%] md:w-full">
                          <Img
                            className="h-6 md:h-auto object-cover w-6"
                            src="images/img_image14.png"
                            alt="imageFourteen"
                          />
                          <Text
                            className="mt-[5px] text-black-900 text-sm tracking-[-0.28px]"
                            size="txtInterSemiBold14"
                          >
                            Popular Recipes
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[5px] mt-[30px] md:text-5xl text-[64px] text-black-900 tracking-[-2.56px] w-full"
                        size="txtInterSemiBold64"
                      >
                        Penang Hokkien Mee
                      </Text>
                      <Text
                        className="leading-[28.00px] md:ml-[0] ml-[5px] mt-3 text-base text-black-900_99 w-full"
                        size="txtInterRegular16"
                      >
                        Penang Hokkien Mee is a popular prawn noodle soup found
                        in Penang, Malaysia. Sold by hawkers and street vendors,
                        this noodle soup is popular throughout the day
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[5px] mt-[13px] w-[53%] md:w-full">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[139px] rounded-[20px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5"
                              src="images/img_clock.svg"
                              alt="clock"
                            />
                          }
                          color="black_900_0c"
                          size="xs"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-left text-sm tracking-[-0.28px]">
                            10 Minutes
                          </div>
                        </Button>
                        <div className="bg-black-900_0c flex flex-col items-start justify-start p-2 rounded-[20px] w-[44%]">
                          <div className="flex flex-row gap-2.5 items-center justify-start ml-2 md:ml-[0] w-[72%] md:w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user.svg"
                              alt="user"
                            />
                            <Text
                              className="text-black-900_99 text-sm tracking-[-0.28px]"
                              size="txtInterMedium14"
                            >
                              Prawn
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[99px] w-full">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_image30.png"
                          alt="imageThirty"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[15px]">
                          <Text
                            className="text-base text-black-900 tracking-[-0.32px]"
                            size="txtInterBold16"
                          >
                            ZhiCheng
                          </Text>
                          <Text
                            className="text-black-900_99 text-sm tracking-[-0.28px]"
                            size="txtInterMedium14"
                          >
                            30 June 2023
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[200px] sm:ml-[0] ml-[163px]"
                          onClick={() => navigate("/recipedetails")}
                          rightIcon={
                            <Img
                              className="h-6 ml-[15px]"
                              src="images/img_overflowmenu.svg"
                              alt="overflow_menu"
                            />
                          }
                          shape="round"
                          color="black_900"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-semibold leading-[normal] text-left text-sm tracking-[-0.28px]">
                            View Recipes
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[640px] sm:h-auto object-cover w-[52%] md:w-full"
                    src="images/img_maskgroup_640x660.png"
                    alt="maskgroup"
                  />
                </div>
                <div className="bg-light_blue-50 h-[600px] md:mt-0 my-5 md:px-5 rotate-[180deg] rounded-br-[30px] rounded-tr-[30px] w-[3%]"></div>
              </div>
            </div>
            <CTAPage
              backgroundImage="url('images/img_group21.svg')"
              title="Welcome To HomeChef Helper"
              description="In this website, we focus on helping users improve their cooking skills and create delicious meals at home."
              buttonLabel="View Recipe"
              buttonColor="blue_gray_800"
            />
            <div className="flex flex-col items-center justify-start max-w-7xl mt-[123px] mx-auto md:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="sm:mt-0 mt-[5px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.92px]"
                    size="txtInterSemiBold48"
                  >
                    Categories of tasty recipes
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[200px] text-base text-center tracking-[-0.32px]"
                    shape="round"
                    color="light_blue_50_01"
                    size="md"
                    variant="fill"
                  >
                    View All Categories
                  </Button>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[84px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[55%]"
                  orientation="horizontal"
                >
                  <div className="md:h-[150px] h-[202px] relative w-full">
                    <div className="absolute bottom-[0] md:h-[150px] h-[182px] inset-x-[0] mx-auto w-full">
                      <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[29px] sm:px-5 rounded-[30px] w-full">
                        <Text
                          className="mt-[70px] text-black-900 text-center text-lg tracking-[-0.36px]"
                          size="txtInterSemiBold18"
                        >
                          Breakfast
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[100px] object-cover right-[11%] top-[0] w-[100px]"
                        src="images/img_image24.png"
                        alt="imageTwentyFour"
                      />
                    </div>
                    <Img
                      className="absolute h-[109px] inset-x-[0] mx-auto object-cover top-[0] w-[68%]"
                      src="images/img_image31.png"
                      alt="imageThirtyOne"
                    />
                  </div>
                  <div className="md:h-[151px] h-[202px] relative w-full">
                    <div className="absolute bottom-[0] md:h-[151px] h-[182px] inset-x-[0] mx-auto w-full">
                      <div className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[29px] sm:px-5 rounded-[30px] w-full">
                        <Text
                          className="mt-[71px] text-black-900 text-center text-lg tracking-[-0.36px]"
                          size="txtInterSemiBold18"
                        >
                          Lunch
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[100px] object-cover right-[11%] top-[0] w-[100px]"
                        src="images/img_image22.png"
                        alt="imageTwentyTwo"
                      />
                    </div>
                    <Img
                      className="absolute h-[100px] inset-x-[0] mx-auto object-cover top-[0] w-[100px]"
                      src="images/img_image23.png"
                      alt="imageTwentyThree"
                    />
                  </div>
                  <div className="md:h-[150px] h-[202px] relative w-full">
                    <div className="absolute bottom-[0] md:h-[150px] h-[182px] inset-x-[0] mx-auto w-full">
                      <div className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[29px] sm:px-5 rounded-[30px] w-full">
                        <Text
                          className="mt-[70px] text-black-900 text-center text-lg tracking-[-0.36px]"
                          size="txtInterSemiBold18"
                        >
                          Dinner
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[100px] object-cover right-[11%] top-[0] w-[100px]"
                        src="images/img_image23_100x100.png"
                        alt="imageTwentyThree"
                      />
                    </div>
                    <Img
                      className="absolute h-[100px] inset-x-[0] mx-auto object-cover top-[0] w-[100px]"
                      src="images/img_image24_100x100.png"
                      alt="imageTwentyFour"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-7xl mt-[154px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.92px]"
                  size="txtInterSemiBold48"
                >
                  Top Recipes Ranking
                </Text>
                <Text
                  className="mt-10 text-base text-black-900_99 text-center"
                  size="txtInterRegular16"
                >
                  Some food recipe here{" "}
                </Text>
                <List
                  className="flex flex-col gap-10 items-center mt-[26px] w-full"
                  orientation="vertical"
                >
                  <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col items-center justify-start p-4 rounded-[30px] w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="flex flex-col gap-6 items-center justify-start mb-4 w-full">
                          <div className="h-[250px] relative w-full">
                            <Img
                              className="h-[250px] m-auto object-cover w-full"
                              src="images/img_maskgroup.png"
                              alt="maskgroup"
                            />
                            <Button
                              className="absolute flex h-12 items-center justify-center right-[5%] top-[8%] w-12"
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
                          <div className="flex flex-col gap-6 items-start justify-start w-[96%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px] w-full"
                              size="txtInterSemiBold24"
                            >
                              Juicy Wagyu Beef Cheeseburger
                            </Text>
                            <div className="flex flex-row gap-6 items-center justify-start w-[91%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[34%]">
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
                              <div className="flex flex-col items-center justify-start w-[59%]">
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
                                    Breakfast/Lunch/Dinner
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col gap-6 items-center justify-start p-4 rounded-[30px] w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="h-[250px] relative w-full">
                          <Img
                            className="h-[250px] m-auto object-cover w-full"
                            src="images/img_maskgroup_250x368.png"
                            alt="maskgroup_One"
                          />
                          <Button
                            className="absolute flex h-12 items-center justify-center right-[5%] top-[8%] w-12"
                            shape="circle"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite_gray_300_01.svg"
                              alt="favorite_One"
                            />
                          </Button>
                        </div>
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[59%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[53%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_clock.svg"
                                    alt="clock_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    30 Minutes
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[37%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Lunch{" "}
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute inset-x-[0] leading-[32.00px] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] tracking-[-0.96px] w-full"
                            size="txtInterSemiBold24"
                          >
                            Lime-Infused Roasted Salmon with Zesty Ginger Sauce
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col items-center justify-start p-4 rounded-[30px] w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="flex flex-col gap-2 items-center justify-start mb-4 w-full">
                          <div className="h-[250px] relative w-full">
                            <Img
                              className="h-[250px] m-auto object-cover w-full"
                              src="images/img_maskgroup_1.png"
                              alt="maskgroup_Two"
                            />
                            <Button
                              className="absolute flex h-12 items-center justify-center right-[5%] top-[8%] w-12"
                              shape="circle"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_favorite_gray_300_01.svg"
                                alt="favorite_Two"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[97%] md:w-full">
                            <Text
                              className="leading-[32.00px] md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px] w-full"
                              size="txtInterSemiBold24"
                            >
                              Pancake Drizzled with Honey Syrup and Topped with
                              Fresh Banana
                            </Text>
                            <div className="flex flex-row gap-6 items-center justify-start w-[64%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[48%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_clock.svg"
                                    alt="clock_Two"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    30 Minutes
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[43%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_Two"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Breakfast
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col items-center justify-start p-4 rounded-[30px] w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="flex flex-col gap-6 items-center justify-start mb-4 w-full">
                          <div className="h-[250px] relative w-full">
                            <Img
                              className="h-[250px] m-auto object-cover w-full"
                              src="images/img_maskgroup_2.png"
                              alt="maskgroup"
                            />
                            <Button
                              className="absolute flex h-12 items-center justify-center right-[5%] top-[8%] w-12"
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
                          <div className="flex flex-col gap-6 items-start justify-start w-[96%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px] w-full"
                              size="txtInterSemiBold24"
                            >
                              Salad with a Blend of Fresh Mayonnaise
                            </Text>
                            <div className="flex flex-row gap-6 items-center justify-start w-[72%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[43%]">
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
                              <div className="flex flex-col items-center justify-start w-[49%]">
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
                                    Lunch/Dinner
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[66%] md:w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col gap-6 items-center justify-start p-4 rounded-[30px] w-[48%] md:w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="h-[250px] relative w-full">
                          <Img
                            className="h-[250px] m-auto object-cover w-full"
                            src="images/img_maskgroup_3.png"
                            alt="maskgroup_One"
                          />
                          <Button
                            className="absolute flex h-12 items-center justify-center right-[5%] top-[8%] w-12"
                            shape="circle"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite_gray_300_01.svg"
                              alt="favorite_One"
                            />
                          </Button>
                        </div>
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[72%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[43%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_clock.svg"
                                    alt="clock_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    30 Minutes
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[49%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Lunch/Dinner
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute inset-x-[0] leading-[32.00px] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] tracking-[-0.96px] w-full"
                            size="txtInterSemiBold24"
                          >
                            Cream Cheese-infused Chicken Meatballs
                          </Text>
                        </div>
                      </div>
                      <div
                        className="common-pointer bg-gradient  flex flex-col items-center justify-start p-4 rounded-[30px] w-[48%] md:w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="flex flex-col gap-[27px] justify-start mb-4 w-full">
                          <div className="h-[250px] relative w-full">
                            <Img
                              className="h-[250px] m-auto object-cover w-full"
                              src="images/img_maskgroup_4.png"
                              alt="maskgroup_Two"
                            />
                            <Button
                              className="absolute flex h-12 items-center justify-center right-[5%] top-[8%] w-12"
                              shape="circle"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_favorite_gray_300_01.svg"
                                alt="favorite_Two"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[54px] items-start justify-start ml-2 md:ml-[0] w-[73%] md:w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.96px]"
                              size="txtInterSemiBold24"
                            >
                              Velvet Chocolate Delight
                            </Text>
                            <div className="flex flex-row gap-6 items-center justify-start w-[96%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[43%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_clock.svg"
                                    alt="clock_Two"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    30 Minutes
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[49%]">
                                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_Two"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Lunch/Dinner
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="h-[578px] md:h-[789px] max-w-[1316px] mt-[234px] mx-auto md:px-5 relative w-full">
              <div
                className="common-pointer flex flex-col h-full items-start justify-start ml-9 my-auto w-[39%]"
                onClick={handleLearnMoreClick}
              >
                {/* Your existing component code */}
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.92px]"
                  size="txtInterSemiBold48"
                >
                  <>
                    Everyone can share the
                    <br />
                    cooking recipe{" "}
                  </>
                </Text>
                <Text
                  className="mt-[19px] text-base text-black-900_99"
                  size="txtInterRegular16"
                >
                  Don’t miss out the latest blog & news from the cooking journey{" "}
                </Text>
                <div className="bg-black-900 flex flex-col items-center justify-start md:ml-[0] ml-[138px] mt-[58px] p-[21px] sm:px-5 rounded-[16px]">
                  <a
                    href="javascript:"
                    className="text-sm text-white-A700 tracking-[-0.28px]"
                  >
                    <Text size="txtInterSemiBold14WhiteA700">Learn More</Text>
                  </a>
                </div>
              </div>
              <div style={{ backgroundColor: "#FFC0CB" }}>
                <Img
                  className="absolute h-[555px] inset-y-[0] my-auto object-cover right-[4%] rounded-[52px] w-[49%]"
                  src="images/img_portraithappy.png"
                  alt="portraithappy"
                />
              </div>
            </div>
            <BackToTopButton />
            <div className="flex flex-col font-lobster items-center justify-start max-w-7xl mt-[85px] mx-auto md:px-5 w-full">
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
                  <a
                    href="https://wa.me/+601110542466" // Replace 1234567890 with the desired phone number
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      className="h-[29px] mb-[5px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
