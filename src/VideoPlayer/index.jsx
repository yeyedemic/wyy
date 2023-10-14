/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Icon } from '@iconify/react';

function VideoPlayer() {
  const id = window.location.hash.substring(4);
  const [data, setData] = useState([]);
  const [nameData, setNameData] = useState([]);
  // const [jj, setJJ] = useState([]);
  const [head, setHead] = useState([]);
  const videoRef = useRef();
  const bfRef = useRef();
  const hdRef = useRef();

  useEffect(() => {}, []);

  useEffect(() => {
    Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/url?id=${id}`).then(
      (res) => {
        setData(res.data.data);
      },
    );
  }, []);

  useEffect(() => {
    Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail?mvid=${id}`).then(
      (res) => {
        setNameData(res.data.data);
        setHead(res.data.data.artists[0].img1v1Url);
      },
    );
  }, []);

  // useEffect(() => {
  //   Axios.get(
  //     `https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail/info?mvid=${id}`,
  //   ).then((res) => {
  //     setJJ(res.data.data);
  //   });
  // }, []);
  // console.log(nameData);
  // console.log(jj);

  function player() {
    const video = videoRef.current;
    const bf = bfRef.current;
    if (video.paused) {
      video.play();
      bf.style.display = 'none';
    } else {
      video.pause();
      bf.style.display = 'block';
    }
  }

  return (
    <div className=" w-[100vw] h-[100vh] bg-[black]">
      <div className=" flex justify-between h-[45px] px-[22.5px] pt-[11.256px] box-border text-[white] text-[22.5px]">
        <div className=" flex items-center">
          <Icon icon="ep:arrow-up-bold" rotate={3} />
        </div>
        <div className=" flex items-center">
          <Icon icon="fluent:picture-in-picture-enter-16-regular" className=" mr-[26.26px]" />
          <Icon icon="solar:menu-dots-bold" rotate={1} />
        </div>
      </div>

      <div className=" w-[100%] h-[54vw] absolute top-[12%]">
        <video
          ref={videoRef}
          className=" w-[100%] h-[54vw]"
          src={data.url}
          autoPlay="autoplay"
          loop
        ></video>
        <div
          className=" w-[100%] h-[54vw] absolute top-0 flex justify-center items-center opacity-[0.5]"
          onClick={player}
        >
          <div ref={bfRef} className=" text-[white] text-[50px] hidden">
            <Icon icon="ph:play-fill" />
          </div>
        </div>
      </div>

      <div className=" w-[100%] absolute bottom-[0vw] text-[white]">
        <div className=" flex px-[15px] pb-[11.256px] box-border">
          <div className=" flex-1">
            <div className=" flex items-center mb-[11.256px]">
              <div className=" w-[33.76px] h-[33.76px] rounded-[50%] overflow-hidden border-solid border-[white] border-[2px]">
                <img src={head} className=" w-[100%] h-[100%]" alt="" />
              </div>
              <div className=" mx-[7.5px]">{nameData.artistName}</div>
              <div className=" w-[26.26px] h-[18.75px] text-[15px] bg-[#eb4d44] flex justify-center items-center rounded-[5px]">
                <Icon icon="ri:add-line" />
              </div>
            </div>
            <div className=" flex text-[12px] mb-[18.76px] items-center">
              <div className=" text-[#acacac] mr-[7.5px] w-[27.39px] h-[19.5px] bg-[#333] flex justify-center items-center">
                MV
              </div>
              <div>{nameData.name}</div>
            </div>
            <div className=" flex items-center">
              <Icon icon="mingcute:music-2-fill" />
              <div className=" w-[95px] h-[18.75px] mx-[16px] overflow-hidden">
                <span ref={hdRef} className=" text-[14px]">
                  {nameData.name}
                </span>
              </div>
              <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
            </div>
          </div>
          <div>r</div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default VideoPlayer;
