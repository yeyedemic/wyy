import React, { useEffect, useState } from "react";
import { Swiper } from "antd-mobile";
import Axios from "axios";

function NewList() {
    let [ data, updataList ] = useState([]);
    useEffect(() => {
        Axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/")
        .then((res) => {
            updataList(res.data.data.blocks[2].creatives);
        });
    }, []);

    const items = data.map((value, index) => {
        return <Swiper.Item key={index}>
            <div>
                {
                    value.resources.map((value, index) => {
                        return <div key={index} className=" pt-[10px] pl-[7.5px] flex">
                            <div className=" w-[54.4px] h-[54.4px] rounded-[10px] overflow-auto">
                                <img className=" w=[100%] h-[100%]" src={value.uiElement.image.imageUrl} alt="" />
                            </div>
                            <div className=" ml-[3.75px] pt-[10.69px] overflow-auto">
                                <p className=" text-[13.132px] w-[258px] text-[#3d465b] line-clamp-1">{value.uiElement.mainTitle.title}</p>
                                <p className=" h-[18px] text-[12px] text-[#79838f]">{value.uiElement.subTitle ? value.uiElement.subTitle.title : ``}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </Swiper.Item>
})

    return <div className=" pb-[14.2576px]">
        <Swiper
            indicator={() => null}
            slideSize={90}
            defaultIndex={0}
        >{items}</Swiper>
    </div>
}

export default NewList;