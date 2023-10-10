/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import { Swiper } from 'antd-mobile';
import Axios from 'axios';

function SongList() {
  const [data, updataList] = useState([]);
  useEffect(() => {
    Axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/').then(
      (res) => {
        updataList(res.data.data.blocks[1].creatives);
      },
    );
  }, []);

  const [str, setstr] = useState(0);
  const items = data.map((value, index) => {
    if (value.resources.length !== 3) {
      return (
        <Swiper.Item key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className=" w-[116px] h-[170px]r">
            <div className=" w-[116px] h-[116px] rounded-[12px] overflow-hidden">
              <img
                src={value.resources[0].uiElement.image.imageUrl}
                alt=""
                className=" w-[100%] h-[100%]"
              />
            </div>
            <div className=" text-[12px]">{value.resources[0].uiElement.mainTitle.title}</div>
          </div>
        </Swiper.Item>
      );
    } else if (value.resources.length === 3) {
      return (
        <Swiper.Item key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className=" w-[116px] h-[170px]r">
            <div className=" w-[116px] h-[170px]">
              <Swiper
                direction="vertical"
                indicator={() => null}
                loop
                autoplay
                allowTouchMove={false}
                style={{
                  width: '116px',
                  height: '116px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
                onIndexChange={(index) => setstr(index)}
              >
                {value.resources.map((value, index) => {
                  return (
                    <Swiper.Item key={index}>
                      <div className=" w-[116px] h-[116px]">
                        <img
                          src={value.uiElement.image.imageUrl}
                          alt=""
                          className=" block w-[100%] h-[100%]"
                        />
                      </div>
                    </Swiper.Item>
                  );
                })}
              </Swiper>
              <div className=" text-[12px]">{value.resources[str].uiElement.mainTitle.title}</div>
            </div>
          </div>
        </Swiper.Item>
      );
    }
  });

  return (
    <div>
      <Swiper indicator={() => null} slideSize={35} defaultIndex={0}>
        {items}
      </Swiper>
    </div>
  );
}

export default SongList;
