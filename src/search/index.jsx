import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Axios from "axios";
import { Swiper } from 'antd-mobile';
import List from "./list";

function Search() {
    let [like, setlike] = useState([]);
    let [data, setdata] = useState([]);
    useEffect(() => {
        Axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail")
        .then((res) => {
            setlike(res.data.data);
        })
    }, [])

    useEffect(() => {
        Axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail")
        .then((res) => {
            setdata(res.data.list);
        })
    }, [])

    const items = data.map((value, index) => {
        if(index < 10) {
            return <Swiper.Item key={index}>
                <div className=" bg-[white] rounded-[10px] w-[243px] m-[auto] ml-[20px]">
                    <div className=" flex items-center h-[46px] border-[#f4f4f4] border-b-[1px]">
                        <div className=" text-[15px] px-[15px]">{value.name}</div>
                        <div className=" text-[12px] bg-[#e5e7eb] h-[18px] rounded-[9px] px-[7.5px]">播放</div>
                    </div>
                    <div>
                        <List id={value.id} />
                    </div>
                </div>
          </Swiper.Item>
        }
    })

    return <div className=" bg-[#efeff0] overflow-hidden pb-[45px]">
        <div className=" h-[75px] w-[341px] flex justify-between items-center m-[auto]">
            <div className=" w-[30px] h-[30px]" onClick={() => window.location.assign("/viwes")}>
                <Icon style={{fontSize: "30px"}} icon="mingcute:arrow-up-fill" rotate={3} />
            </div>
            <div>
                <input type="text" className=" w-[270px] h-[37.5px] rounded-[18.75px] outline-none pl-[30px]" />
            </div>
            <div className=" text-[14px] font-bold">搜索</div>
        </div>

        <div className=" flex mt-[11.25px] mb-[18.76px]">
            <div className=" flex flex-1 justify-center items-center">
                <Icon style={{fontSize: "18px", color: "red"}} icon="ep:avatar" />
                <span className=" ml-[7.5px]">歌手</span>
            </div>
            <div className=" flex flex-1 justify-center items-center">
                <Icon style={{fontSize: "18px", color: "red"}} icon="clarity:book-solid" />
                <span className=" ml-[7.5px]">曲风</span>
            </div>
            <div className=" flex flex-1 justify-center items-center">
                <Icon style={{color: "red", fontSize: "18px"}} icon="fluent-emoji-high-contrast:musical-notes" />
                <span className=" ml-[7.5px]">专区</span>
            </div>
            <div className=" flex flex-1 justify-center items-center">
                <Icon style={{fontSize: "18px", color: "red" }} icon="tabler:microphone" />
                <span className=" ml-[7.5px]">识曲</span>
            </div>
        </div>

        <div className=" px-[11.25px]">
            <div className=" flex justify-between">
                <div className=" text-[15px] font-bold">猜你喜欢</div>
                <div className=" w-[18.75px] h-[18.75px] flex justify-center items-center">
                    <Icon style={{color: "#999", fontSize: "18px"}} icon="ic:outline-refresh" />
                </div>
            </div>
            <div className=" flex">
                {
                    like.map((value,index) => {
                        return index < 5 ? <div key={index} className=" px-[11.25px] py-[7.5px] h-[34.7px] rounded-[17.35px] bg-[white] mt-[11.25px] mr-[7.5px] mb-[18.6px] shrink-0">{value.searchWord}</div> : ""
                    })
                }
            </div>
        </div>

        <Swiper
            indicator={() => null}
            slideSize={70}
            defaultIndex={0}
        >{items}</Swiper>
    </div>
}

export default Search;