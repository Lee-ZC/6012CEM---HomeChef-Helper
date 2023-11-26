import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";

const breakfastOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomeChefRecipePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lobster items-center justify-end mx-auto py-5 w-full">
        <div className="flex flex-col items-center justify-start mt-[7px] w-full">
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
                      className="md:ml-[0] ml-[58px] text-base text-black-900 tracking-[-0.32px]"
                      size="txtInterMedium16"
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
          <div className="bg-gray-50 flex flex-col font-inter md:gap-10 gap-[76px] items-center justify-end max-w-[1255px] mt-[50px] mx-auto p-[25px] md:px-5 rounded-[30px] w-full">
            <Text
              className="mt-[19px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
              size="txtInterExtraBold48"
            >
              HomeChef Recipe
            </Text>
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between ml-1 md:ml-[0] w-full">
                  <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[48%] md:w-full">
                    <Text
                      className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                      size="txtInterMedium12Black90099"
                    >
                      Name
                    </Text>
                    <Input
                      name="groupThirteen"
                      placeholder="Enter your name..."
                      className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="outline outline-[0.5px] outline-black-900_19 w-full"
                      type="text"
                      shape="round"
                      size="2xl"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[48%] md:w-full">
                    <Text
                      className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                      size="txtInterMedium12Black90099"
                    >
                      emAIL aDDRESS
                    </Text>
                    <Input
                      name="groupNine"
                      placeholder="Your email address..."
                      className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="outline outline-[0.5px] outline-black-900_19 w-full"
                      type="email"
                      shape="round"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-row sm:gap-10 gap-[513px] items-center justify-start ml-1 md:ml-[0] mt-[26px] w-3/5 md:w-full">
                  <Text
                    className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                    size="txtInterMedium12Black90099"
                  >
                    Recipe name
                  </Text>
                  <Text
                    className="text-black-900_99 text-xs tracking-[0.96px] uppercase"
                    size="txtInterMedium12Black90099"
                  >
                    Recipe type
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-[54px] items-center justify-between ml-1 md:ml-[0] mt-4 w-full">
                  <Input
                    name="groupTwelve"
                    placeholder="Enter recipe name..."
                    className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                    wrapClassName="sm:flex-1 outline outline-[0.5px] outline-black-900_19 sm:w-full"
                    type="text"
                    shape="round"
                    size="2xl"
                  ></Input>
                  <SelectBox
                    className="sm:flex-1 outline outline-[0.5px] outline-black-900_19 text-left text-sm tracking-[-0.28px] w-[48%] sm:w-full"
                    placeholderClassName="text-black-900_7e"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] outline-black-900 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupTen"
                    options={breakfastOptionsList}
                    isSearchable={false}
                    placeholder="Breakfast"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  />
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-[19px] text-black-900_99 text-xs tracking-[0.96px] uppercase"
                  size="txtInterMedium12Black90099"
                >
                  Recipe Image
                </Text>
                <Input
                  name="groupEight"
                  placeholder="Select recipe image..."
                  className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                  wrapClassName="ml-1 md:ml-[0] mt-4 outline outline-[0.5px] outline-black-900_19 w-[48%]"
                  shape="round"
                  size="3xl"
                ></Input>
                <Text
                  className="mt-[19px] text-black-900_99 text-xs tracking-[0.96px] uppercase"
                  size="txtInterMedium12Black90099"
                >
                  Ingredients and nutrition information
                </Text>
                <TextArea
                  className="bg-white-A700 border-0 mt-[7px] outline outline-[0.5px] outline-black-900_19 pb-[35px] pl-[27px] pr-[35px] pt-[26px] sm:px-5 rounded-[16px] placeholder:text-black-900_7e text-black-900_7e text-left text-sm tracking-[-0.28px] w-full"
                  name="groupEleven"
                  placeholder="Enter your details..."
                ></TextArea>
                <Button
                  className="cursor-pointer font-semibold min-w-[247px] md:ml-[0] ml-[416px] mt-[55px] text-base text-center tracking-[-0.32px]"
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
          <div className="h-[173px] sm:h-[352px] md:h-[511px] max-w-7xl mt-[180px] mx-auto md:px-5 relative w-full">
            <Text
              className="common-pointer absolute right-[36%] text-base text-black-900 top-[0] tracking-[-0.32px]"
              size="txtInterMedium16"
              onClick={() => navigate("/sitemap")}
            >
              Sitemap
            </Text>
            <Text
              className="ml-5 mt-[23px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtLobsterRegular24"
            >
              HomeChef Helper
            </Text>
            <div className="absolute flex flex-col font-inter h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[47%] md:w-full">
                  <Text
                    className="common-pointer text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/faq")}
                  >
                    FaQ
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[166px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                  >
                    Recipes
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/bloglistpage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[61px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[60px] text-base text-black-900 tracking-[-0.32px]"
                    size="txtInterMedium16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About us
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px mt-[73px] w-full" />
                <div className="flex flex-row sm:gap-10 items-start justify-between mt-[43px] w-3/5 md:w-full">
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

export default HomeChefRecipePage;
