import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const FavoutitePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-end mx-auto pr-1 py-1 w-full">
        <div className="flex flex-col items-center justify-start mb-6 mt-[38px] w-full">
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
                    className="ml-20 md:ml-[0] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
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
          <div className="md:h-[34px] h-px mt-[33px] md:px-5 relative w-full">
            <Line className="bg-black-900_19 h-px m-auto w-full" />
            <Line className="absolute bg-black-900_19 h-px inset-[0] justify-center m-auto w-full" />
          </div>
          <div className="flex flex-col font-inter md:gap-10 gap-[154px] items-center justify-start max-w-7xl mt-[89px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[54px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-1.92px]"
                  size="txtInterSemiBold48"
                >
                  Favourite recipes
                </Text>
                <List
                  className="flex flex-col gap-10 items-center w-full"
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
                            <div className="flex flex-row gap-6 items-center justify-start w-[59%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[53%]">
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
                              <div className="flex flex-col items-center justify-start w-[37%]">
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
                                    Snack
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
                              src="images/img_favorite_red_a700.svg"
                              alt="favorite_One"
                            />
                          </Button>
                        </div>
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[55%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[56%]">
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
                              <div className="flex flex-col items-center justify-start w-[32%]">
                                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Fish
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
                                src="images/img_favorite_red_a700_48x48.svg"
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
                            <div className="flex flex-row gap-6 items-center justify-start w-[62%] md:w-full">
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
                              src="images/img_favorite_48x48.svg"
                              alt="favorite_One"
                            />
                          </Button>
                        </div>
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[57%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[54%]">
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
                              <div className="flex flex-col items-center justify-start w-[35%]">
                                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Meat
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
                                src="images/img_favorite_1.svg"
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
                            <div className="flex flex-row gap-6 items-center justify-start w-[82%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-1/2">
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
                              <div className="flex flex-col items-center justify-start w-2/5">
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
                                    Dessert
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col gap-6 items-center justify-start p-4 rounded-[30px] w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="h-[250px] relative w-full">
                          <Img
                            className="h-[250px] m-auto object-cover w-full"
                            src="images/img_maskgroup_5.png"
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
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[59%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[52%]">
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
                              <div className="flex flex-col items-center justify-start w-[37%]">
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
                                    Sweet
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute inset-x-[0] leading-[32.00px] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] tracking-[-0.96px] w-full"
                            size="txtInterSemiBold24"
                          >
                            Pancake Bursting with the Flavors of Honey and
                            Blueberry
                          </Text>
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
                            src="images/img_maskgroup_6.png"
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
                              src="images/img_favorite_48x48.svg"
                              alt="favorite_One"
                            />
                          </Button>
                        </div>
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[57%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[54%]">
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
                              <div className="flex flex-col items-center justify-start w-[35%]">
                                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_user.svg"
                                    alt="user_One"
                                  />
                                  <Text
                                    className="text-black-900_99 text-sm tracking-[-0.28px]"
                                    size="txtInterMedium14"
                                  >
                                    Meat
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute inset-x-[0] leading-[32.00px] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] tracking-[-0.96px] w-full"
                            size="txtInterSemiBold24"
                          >
                            The Finest Quick One-Pot Chicken and Rice Dish
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="common-pointer bg-gradient  flex flex-col gap-10 items-center justify-start pb-4 px-4 rounded-[30px] w-full"
                        onClick={() => navigate("/recipedetails")}
                      >
                        <div className="h-[250px] relative w-full">
                          <Img
                            className="h-[250px] m-auto object-cover w-full"
                            src="images/img_maskgroup_7.png"
                            alt="maskgroup_Two"
                          />
                          <Button
                            className="absolute flex h-12 items-center justify-center right-[5%] top-[14%] w-12"
                            shape="circle"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite_2.svg"
                              alt="favorite_Two"
                            />
                          </Button>
                        </div>
                        <div className="h-28 mb-4 relative w-[96%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[63%]">
                            <div className="flex flex-row gap-6 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[49%]">
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
                              <div className="flex flex-col items-center justify-start w-[41%]">
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
                                    Noodles
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute inset-x-[0] leading-[32.00px] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] tracking-[-0.96px] w-full"
                            size="txtInterSemiBold24"
                          >
                            Ultra-Rich Creamy Chicken and Bacon Pasta
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col font-lobster items-center justify-start w-full">
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
      </div>
    </>
  );
};

export default FavoutitePage;
