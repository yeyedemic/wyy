import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Rllist() {
  let [data, dataList] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=${
        Date.now() - 172800000
      }&endTime=${Date.now()}`,
    ).then((res) => {
      dataList(res.data.data.calendarEvents);
    });
  }, []);

  function times(num) {
    let time = new Date(num);
    let month = time.getMonth();
    let today = time.getDate();
    return `${month + 1 < 10 ? '0' + (month + 1) : month + 1}/${today < 10 ? '0' + today : today}`;
  }

  return (
    <div className=" w-[341px] rounded-[10px] bg-[white] p-[15px] ml-[7.5px]">
      <ul>
        {data.map((value, index) => {
          return (
            <li key={index} className=" h-[56px] flex justify-between mt-[11.25px]">
              <div className=" text-[13px]">
                <p className=" text-[12px] text-[#aaadb5]">{times(value.onlineTime)}</p>
                <p className=" w-[255px] leading-[20.7px] h-[41.4px] overflow-hidden">
                  {value.title}
                </p>
              </div>
              <div className=" w-[56px] h-[56px] rounded-[10px] overflow-hidden">
                <img className=" w-[100%] h-[100%]" src={value.imgUrl} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Rllist;
