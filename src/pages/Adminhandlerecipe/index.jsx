import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";

const recipeListOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AdminhandlerecipePage = () => {
  const tableData = React.useRef([
    {
      name: "Pasta Mozzarella",
      emailThree: "zc@gmmail.com",
      recipetype: "Breakfast",
      recipedetails: "1234567305477760",
      dateofadmissionOne: "images/img_thumbsup.svg",
    },
    {
      name: "Lemon Salmon ",
      emailThree: "siti@gmmail.com",
      recipetype: "Lunch",
      recipedetails: "1234567305477760",
      dateofadmissionOne: "images/img_thumbsup.svg",
    },
    {
      name: "Meat Ball Noodle",
      emailThree: "tt@gmmail.com",
      recipetype: "Dinner",
      recipedetails: "1234567305477760",
      dateofadmissionOne: "images/img_thumbsup.svg",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row gap-[31px] items-center justify-start p-0.5">
            <Img
              className="h-[55px] md:h-auto ml-[11px] mt-[33px] object-cover rounded-lg w-1/4"
              src="images/img_pexelsphoto2379004.png"
              alt="pexelsphoto2379"
            />
            <Text
              className="text-black-900 text-sm"
              size="txtMontserratRegular14"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[267px] sm:px-5 px-[35px] text-gray-500_01 text-xs"
            size="txtMontserratSemiBold12"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("emailThree", {
        cell: (info) => (
          <Text
            className="pb-[18px] pt-[35px] text-black-900 text-sm"
            size="txtMontserratRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[190px] text-gray-500_01 text-xs"
            size="txtMontserratSemiBold12"
          >
            Email
          </Text>
        ),
      }),
      tableColumnHelper.accessor("recipetype", {
        cell: (info) => (
          <Text
            className="pb-5 pt-[35px] text-black-900 text-sm"
            size="txtMontserratRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[126px] text-gray-500_01 text-xs"
            size="txtMontserratSemiBold12"
          >
            Recipe Type
          </Text>
        ),
      }),
      tableColumnHelper.accessor("recipedetails", {
        cell: (info) => (
          <Text
            className="pb-[19px] pt-[35px] text-black-900 text-sm"
            size="txtMontserratRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[216px] text-gray-500_01 text-xs"
            size="txtMontserratSemiBold12"
          >
            Recipe Details
          </Text>
        ),
      }),
      tableColumnHelper.accessor("dateofadmissionOne", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-start pr-[18px] py-[18px]">
            <Text
              className="mt-[37px] text-black-900 text-sm"
              size="txtMontserratRegular14"
            >
              08-Dec, 2023
            </Text>
            <Img
              className="h-[19px] ml-[131px] mt-[34px] w-[19px]"
              src="images/img_edit_amber_600.svg"
              alt="edit"
            />
            <Img
              className="h-[18px] ml-[33px] mt-[34px]"
              alt="thumbsup"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[311px] text-gray-500_01 text-xs"
            size="txtMontserratSemiBold12"
          >
            Date of admission
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[46px] items-center justify-start w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-14 items-center justify-end p-1 w-[19%] md:w-full"
              style={{ backgroundImage: "url('images/img_group2.svg')" }}
            >
              <div className="flex flex-row items-end justify-start mt-[7px] w-[89%] md:w-full">
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
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-14 items-center justify-end p-2.5 w-[82%] md:w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[11px] w-[99%] md:w-full">
                <div className="flex flex-row font-roboto gap-2 items-start justify-start md:mt-0 mt-[3px] w-[11%] md:w-full">
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
                <a className="md:ml-[0] ml-[923px] text-black-900 text-sm">
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
          <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between max-w-[1424px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[578px] justify-start md:mt-0 mt-[22px] w-1/5 md:w-full">
              <div className="h-[179px] ml-3.5 md:ml-[0] relative w-[95%]">
                <div className="absolute bg-white-A700 h-[179px] inset-[0] justify-center m-auto rounded-[14px] w-[98%]"></div>

                <Button
                  className="common-pointer bg-transparent cursor-pointer flex inset-x-[0] items-center justify-center min-w-[258px] mt-6 mx-auto top-[13%]"
                  onClick={() => navigate("/admindashboard")}
                  leftIcon={
                    <Img
                      className="h-6 mr-6 right-[65%] absolute"
                      src="images/img_icon_action_dashboard_gray_500_01.svg"
                      alt="icon/action/dashboard"
                    />
                  }
                  size="xs"
                ></Button>
                <div className="absolute flex flex-row gap-6 h-max inset-y-[0] items-start justify-center left-[30%] my-auto w-[45%] top-[-65%]">
                  <p>Dashboard</p>
                </div>
                <div className="absolute bottom-[28%] h-10 md:h-6 inset-x-[0] mx-auto p-2 w-[99%]">
                  <div className="absolute flex flex-row gap-6 h-max inset-y-[0] items-center justify-center left-[15%] my-auto w-[36%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconactionassignment_blue_a400.svg"
                      alt="iconactionassig"
                    />
                    <Text
                      className="text-blue-A400_dd text-sm tracking-[0.10px]"
                      size="txtRobotoMedium14BlueA400dd"
                    >
                      Recipe
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[18px] items-center justify-end mr-5 p-3 rounded-[14px]">
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
            </div>
            <div className="flex md:flex-1 flex-col font-montserrat gap-[41px] items-center justify-start w-[78%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between w-full">
                <SelectBox
                  className="sm:flex-1 font-bold leading-[normal] sm:mt-0 mt-[31px] text-[22px] text-black-900 text-left sm:text-lg md:text-xl w-4/5 sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[22px] mr-[0] w-3.5"
                      src="images/img_sort_1.svg"
                      alt="sort 1"
                    />
                  }
                  isMulti={false}
                  name="group104"
                  options={recipeListOptionsList}
                  isSearchable={false}
                  placeholder="Recipe List"
                />
                <Input
                  name="btn"
                  placeholder="ADD NEW RECIPE"
                  className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="sm:flex-1 mb-[22px] rounded sm:w-full"
                  color="amber_600"
                  size="xs"
                ></Input>
              </div>
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={""}
                  headerClass="border-b border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminhandlerecipePage;
