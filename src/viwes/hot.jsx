import React, { useEffect,useState } from "react";
import Axios from "axios";
import { Swiper } from "antd-mobile";


export default function Hot() {
    let [ data, dataList ] = useState([]);
    useEffect(() => {
        Axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/topic/detail/event/hot?actid=111551188")
        .then((res) => {
            dataList(res.data.events);
        })
    },[])

    const items = data.map((value, index) => (
        <Swiper.Item key={index} style={{height: "128.73px"}}>
          <div className=" w-[237px] rounded-[10px] py-[15px] px-[11.25px] box-border relative ml-[10.5px]" style={{backgroundColor: "rgb(148, 148, 148)"}}>
            <div className=" flex items-center">
                <div className=" w-[15px] h-[15px] bg-[white]"></div>
                <div className=" text-[white] text-[15px]">{value.user.nickname}</div>
            </div>
            <p className=" text-[12px] text-[#d7d7d7]">484万热度</p>
            <p className=" w-[157.57px] text-[white] leading-[18.75px] h-[37.5px] overflow-hidden">{value.user.signature}</p>
            <div className=" w-[52px] h-[52px] rounded-[10px] overflow-hidden absolute right-[10px] bottom-[10px]">
                <img className=" w-[100%] h-[100%]" src={value.user.avatarUrl} alt="" />
            </div>
          </div>
        </Swiper.Item>
    ))


    return <Swiper
        indicator={() => null}
        slideSize={66}
        defaultIndex={0}
    >{items}</Swiper>
}