import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

import "react-circular-progressbar/dist/styles.css";
import ChartComponent from "../../components/ChartComponent "; // Adjust the path based on your file structure
import DonutChartComponent from "../../components/DonutChartComponent"; // Adjust the path based on your file structure

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-roboto items-center justify-start mx-auto pb-10 w-full">
        <div className="flex flex-col gap-[55px] justify-start w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[69px] items-center justify-start p-3 w-[19%] md:w-full"
              style={{ backgroundImage: "url('images/img_group2.svg')" }}
            >
              <div className="flex flex-row items-end justify-start mb-[5px] w-[95%] md:w-full">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_image.png"
                    alt="image"
                  />
                </div>
                <Text
                  className="mb-1 ml-4 mt-[11px] text-black-900_dd text-xl tracking-[0.15px]"
                  size="txtRobotoMedium20"
                >
                  Admin
                </Text>
                <Img
                  className="h-6 mb-1 ml-[95px] mt-3 w-6"
                  src="images/img_iconnavigation.svg"
                  alt="iconnavigation"
                />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[69px] items-center justify-start p-[15px] w-[82%] md:w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-2 w-full">
                <div className="flex md:flex-1 flex-row font-roboto gap-2 items-start justify-start w-[11%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Text
                    className="text-blue_gray-400 text-sm tracking-[0.50px]"
                    size="txtRobotoRegular14"
                  >
                    Quick search
                  </Text>
                </div>
                <a className="md:ml-[0] ml-[929px] text-black-900 text-sm">
                  <Text
                    className="common-pointer"
                    size="txtMontserratMedium14Black900_1"
                    onClick={() => navigate("/")}
                  >
                    Logout
                  </Text>
                </a>
                <Img
                  className="common-pointer h-[17px] md:ml-[0] ml-[23px] w-[17px]"
                  src="images/img_signoutalt1.svg"
                  alt="signoutaltOne"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </header>
          <div className="flex flex-col md:gap-10 gap-[69px] items-start justify-start ml-4 md:ml-[0] md:px-5 w-[66%] md:w-full">
            <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
              <div className="h-[179px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 h-[179px] inset-[0] justify-center m-auto rounded-[14px] w-[98%]"></div>

                <div className="absolute h-10 inset-x-[0] mx-auto px-4 top-[13%] w-[99%]">
                  <div className="bg-blue-A400_63 h-10 m-auto rounded w-[85%]"></div>
                  <div className="absolute flex flex-row gap-6 h-max inset-y-[0] items-start justify-center left-[15%] my-auto w-[45%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconactiondashboard.svg"
                      alt="iconactiondashb"
                    />
                    <Text
                      className="mt-0.5 text-blue-A400 text-sm tracking-[0.10px]"
                      size="txtRobotoMedium14"
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>

                <br />
                <br />
                <br />
                <br />

                <Button
                  className="common-pointer bg-transparent bottom-[28%] cursor-pointer flex inset-x-[0] items-center justify-center mb-[51px] min-w-[258px] mx-auto"
                  onClick={() => navigate("/adminhandlerecipe")}
                  leftIcon={
                    <Img
                      className="h-6 mr-6 right-[9%] absolute"
                      src="images/img_icon_action_assignment.svg"
                      alt="icon/action/assignment"
                    />
                  }
                  size="xs"
                >
                  <div className="absolute flex flex-row gap-6 h-max inset-y-[0] items-start justify-center left-[15%] my-auto w-[45%]">
                    <p>Recipe handle</p>
                  </div>
                </Button>
              </div>
              {/* here */}
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[11px] rounded-[14px] w-[71%] md:w-full">
                <div className="flex flex-col justify-start mb-[42px] mt-1.5 w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[22px]">
                    {/* Your existing code... */}
                    <p>Total Recipe Submitted Over Year</p>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[22px] w-full">
                    <Img
                      className="h-[21px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-11 items-start justify-between w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[33px] w-[2000%] sm:w-full">
                          {/* Your existing code... */}
                          <ChartComponent />
                        </div>
                        <div className="flex flex-col items-start justify-start mb-5">
                          {/* Your existing code... */}
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[21px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <div className="flex flex-row gap-16 items-center justify-start md:ml-[0] ml-[93px] mt-[18px] w-[58%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[62%]">
                      {/* Your existing code... */}
                    </div>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[21%]">
                      {/* Your existing code... */}
                    </div>
                  </div>
                </div>
              </div>

              {/* here */}
            </div>

            <div className="flex md:flex-col flex-row gap-11 items-start justify-start w-[82%] md:w-full">
              <div className="bg-white-A700 flex flex-col gap-[18px] items-center justify-end mb-[17px] md:mt-0 mt-[420px] p-3 rounded-[14px]">
                <Text
                  className="mt-[3px] text-black-900 text-center text-sm tracking-[0.42px]"
                  size="txtMontserratExtraBold14"
                >
                  HomeChef Helper
                </Text>
                <Text
                  className="text-blue_gray-400 text-center text-xs tracking-[0.12px]"
                  size="txtRobotoRegular12"
                >
                  Version: 1.0.0.11
                </Text>
              </div>

              {/* Here */}

              <div className="bg-white-A700 flex flex-col items-center justify-start p-2 rounded-[14px] w-[62%] md:w-full">
                <div className="flex flex-col justify-start mb-[88px] mt-[7px] w-[99%] md:w-full">
                  <Text
                    className="ml-2 md:ml-[0] text-black-900 text-xl tracking-[0.20px]"
                    size="txtRobotoMedium20Black900"
                  >
                    User Details Statistics
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[45px] w-full">
                    <Img
                      className="h-6 mt-[136px] w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_One"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <div className="h-[400px] relative w-[500px]">
                      <DonutChartComponent />
                    </div>
                    <Img
                      className="h-6 mt-[136px] w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright_One"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
