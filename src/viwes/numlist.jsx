import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Swiper } from "antd-mobile";

function NumList() {
  let [data, updataList] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/"
    ).then((res) => {
      updataList(res.data.data.blocks[3].creatives);
    });
  }, []);

  const items = data.map((value, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[330px] bg-[white] rounded-[10px] py-[15px] m-[auto] mb-[14.25px]">
        <div className=" flex justify-between pl-[7.5px] pr-[18.67px] h-[45px]">
          <div className=" font-bold text-[15px]">
            {value.uiElement.mainTitle.title}
          </div>
          <div className=" text-[16px] text-[#939ba1]">
            {value.uiElement.mainTitle.titleDesc}
          </div>
        </div>
        <div>
          {value.resources.map((value, index) => {
            return (
              <div key={index} className=" flex pt-[10px] pl-[7.5px]">
                <div>
                  <img
                    className=" w-[54px] h-[54px] rounded-[10px]"
                    src={value.uiElement.image.imageUrl}
                    alt=""
                  />
                </div>
                <div className=" flex pl-[12.25px] pr-[21.38px] items-center text-[12px]">
                  <div
                    className={
                      index === 0
                        ? " w-[8px] mr-[11.25px] text-[#c28e28]"
                        : index === 1
                        ? " w-[8px] mr-[11.25px] text-[#818aac]"
                        : " w-[8px] mr-[11.25px] text-[#cd8354]"
                    }
                  >
                    {index + 1}
                  </div>
                  <div className=" w-[150px]">
                    <p className=" text-[13px]">
                      {value.uiElement.mainTitle.title}
                    </p>
                    <p>
                      {value.resourceExtInfo
                        ? value.resourceExtInfo.artists[0].name
                        : ""}
                    </p>
                  </div>
                  <div className=" ml-[15px]">
                    <span
                      className={
                        value.uiElement.labelText.text === "新晋"
                          ? " text-[#39b184]"
                          : " text-[#ff3836]"
                      }
                    >
                      {value.uiElement.labelText.text}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Swiper.Item>
  ));

  return (
    <div>
      <Swiper indicator={() => null} slideSize={93} defaultIndex={0}>
        {items}
      </Swiper>
    </div>
  );
}

export default NumList;
