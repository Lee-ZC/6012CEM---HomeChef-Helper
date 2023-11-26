import React from "react";

import { Img, List, Text } from "components";

const FaQFaq = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[72px] w-auto md:w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
            size="txtInterExtraBold48"
          >
            {props?.sectiontitle}
          </Text>
        </div>
        <div className="sm:h-[466px] h-[472px] md:h-[600px] md:ml-[0] ml-[72px] relative w-[92%] md:w-full">
          <div className="absolute bg-gray-50 flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-8 sm:px-5 right-[0] rounded-[16px] shadow-bs2 w-[54%]">
            <div className="flex flex-col gap-10 items-start justify-start my-[9px] w-auto sm:w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtInterBold18"
              >
                {props?.questionone}
              </Text>
              <Text
                className="leading-[24.00px] max-w-[472px] md:max-w-full text-base text-black-900"
                size="txtInterRegular16Black900"
              >
                {props?.answerone}
              </Text>
            </div>
          </div>
          <List
            className="absolute flex flex-col items-start left-[0] top-[7%] w-auto"
            orientation="vertical"
          >
            <div className="bg-white-A700 flex flex-col items-start justify-start px-4 py-6 shadow-bs3 w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="bg-indigo-A100 h-6 rounded-[50%] w-6"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    {props?.questiontwo}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col items-start justify-start px-4 py-6 shadow-bs3 w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="bg-indigo-A200 h-6 rounded-[50%] w-6"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    {props?.questionthree}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_indigo_a200.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start px-4 py-6 shadow-bs3 w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="bg-indigo-A100 h-6 rounded-[50%] w-6"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    {props?.questionfour}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start px-4 py-6 shadow-bs3 w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="bg-indigo-A100 h-6 rounded-[50%] w-6"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    {props?.questionfive}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start px-4 py-6 shadow-bs3 w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="bg-indigo-A100 h-6 rounded-[50%] w-6"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    {props?.questionsix}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

FaQFaq.defaultProps = {
  sectiontitle: "Frequently Asked Questions",
  questionone: "How does HomeChef Helper recommend recipes?",
  answerone:
    "HomeChef Helper suggests recipes based on your culinary preferences",
  questiontwo: "What is a HomeChef Helper?",
  questionthree: "How does HomeChef Helper recommend recipes?",
  questionfour: "Can I customize my meal plan on HomeChef Helper?",
  questionfive: "How do I create a user profile?",
  questionsix: "Can I publish my own cooking blogs on HomeChef Helper?",
};

export default FaQFaq;
