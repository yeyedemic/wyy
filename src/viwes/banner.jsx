import React, { useState, useEffect } from "react";
import { Swiper, Image } from 'antd-mobile';
import Axios from "axios";





function Banner() {
    let [ data, updataList ] = useState([]);

    useEffect(() => {
        Axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/")
        .then((res) => {
            updataList(res.data.data.blocks[0].extInfo.banners);
        })
    }, []);

    const items = data.map((url, index) => (
        <Swiper.Item key={index}>
            <Image src={url.pic} width={"100%"} height={"135px"} />
        </Swiper.Item>
    ))

    return <div className=" w-[338px] rounded-[12px] m-[auto] overflow-auto">
        <Swiper autoplay loop>{items}</Swiper>
    </div>
}

export default Banner;