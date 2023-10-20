/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon } from '@iconify/react';

function Mvcontent(props) {
  const [data, dataList] = useState([]);
  useEffect(() => {
    Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?${props.limit}`).then(
      (res) => {
        dataList(res.data.data);
      },
    );
  }, []);

  return (
    <div>
      {data.map((value, index) => {
        return (
          <div
            key={index}
            className=" px-[3px]"
            onClick={() => window.location.assign(`/VideoPlayer#id=${value.id}`)}
          >
            <div className=" h-[195px] rounded-[12px] m-[auto] mb-[10px] overflow-hidden">
              <img className=" w-[100%] h-[100%]" src={value.cover} alt="" />
            </div>
            <div className=" flex flex-col h-[56px] justify-evenly">
              <div className=" flex">
                <span className=" text-[#ff0000] mr-[10px] text-[16px]">{index + 1}</span>
                <span className=" text-[15px] font-bold line-clamp-1">{value.name}</span>
              </div>
              <div className=" flex text-[12px]">
                {value.lastRank === -1 ? (
                  <span>new</span>
                ) : value.lastRank - (index + 1) < 0 ? (
                  <span className=" flex">
                    <Icon icon="mdi:menu-down" className=" text-[20px] text-[red]" />
                    {value.lastRank - (index + 1) - (value.lastRank - (index + 1)) * 2}
                  </span>
                ) : (
                  <span className=" flex">
                    <Icon icon="mdi:menu-up" className=" text-[20px] text-[green]" />
                    {value.lastRank - (index + 1)}
                  </span>
                )}
                <span className=" ml-[10px] whitespace-nowrap line-clamp-1">
                  {value.artists.map((value, index) => {
                    return index === 0 ? value.name : '/' + value.name;
                  })}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mvcontent;
