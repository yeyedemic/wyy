import React, { useState, useEffect, useRef } from "react";
import { Swiper, Image } from 'antd-mobile';
import Axios from "axios";





function Navlist() {
    let [ data, updataList ] = useState([]);

    useEffect(() => {
        Axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball")
        .then((res) => {
            updataList(res.data.data);
        })
    }, []);

    const items = data.map((item, index) => (
        <Swiper.Item key={index}>
          <div
            className=" w-[48.79px] h-[75px] text-[12px] flex flex-col items-center justify-evenly ml-[13px] text-[#666f7d]"
          >
            <Image src={item.iconUrl} className=" w-[48.79px] h-[48.79px]" style={{filter: `url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize")`}} />
            <p>{item.name}</p>
          </div>
        </Swiper.Item>
        
    ))

    return <div>
        <Swiper 
            indicator={() => null}
            slideSize={20}
            defaultIndex={0}
        >{items}</Swiper>
    </div>
}

export default Navlist;