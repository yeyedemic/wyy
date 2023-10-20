/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Icon } from '@iconify/react';
import { NoticeBar } from 'antd-mobile';

function VideoPlayer() {
  const id = window.location.hash.substring(4);
  const [data, setData] = useState([]);
  const [nameData, setNameData] = useState([]);
  const [jj, setJJ] = useState([]);
  const [head, setHead] = useState([]);
  const videoRef = useRef();
  const bfRef = useRef();
  const [w, setW] = useState(0);

  const xqRef = useRef();
  const timeRef = useRef();
  const [ctime, setCtime] = useState(0);
  const [dtime, setDtime] = useState(0);

  const usenMount = (callback) => {
    useEffect(() => callback, []);
  };

  const useInterval = (callback, interval = 1000) => {
    const timer = useRef(null);
    useEffect(() => {
      timer.current = setInterval(callback, interval);
    }, []);
    usenMount(() => clearInterval(timer.current));
  };

  useInterval(() => {
    setW((videoRef.current.currentTime * 100) / videoRef.current.duration);
  }, 1000);

  const numbf = (num) => {
    return num > 100000000
      ? `${parseInt(num / 100000000, 10)}亿`
      : num > 10000
      ? `${parseFloat(num / 10000, 10).toFixed(1)}万`
      : num;
  };

  useEffect(() => {
    Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/url?id=${id}`).then(
      (res) => {
        setData(res.data.data);
      },
    );
    Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail?mvid=${id}`).then(
      (res) => {
        setNameData(res.data.data);
        setHead(res.data.data.artists[0]);
      },
    );
    Axios.get(
      `https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail/info?mvid=${id}`,
    ).then((res) => {
      setJJ(res.data);
    });
  }, []);

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

  function timeNow() {
    setDtime(videoRef.current.duration);
  }

  return (
    <div className=" w-[100vw] h-[100vh] bg-[black]">
      <div className=" flex justify-between h-[45px] px-[22.5px] pt-[11.256px] box-border text-[white] text-[22.5px]">
        <div className=" flex items-center" onClick={() => window.location.assign('/Mv')}>
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
        <div ref={xqRef} className=" flex px-[15px] pb-[11.256px] box-border">
          <div className=" flex-1 flex flex-col justify-end">
            <div className=" flex items-center mb-[11.256px]">
              <div className=" w-[33.76px] h-[33.76px] rounded-[50%] overflow-hidden border-solid border-[white] border-[2px]">
                <img src={head.img1v1Url} className=" w-[100%] h-[100%]" alt="" />
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
                <NoticeBar
                  content={nameData.name}
                  icon=""
                  style={{
                    '--background-color': 'black',
                    '--height': '18.75px',
                    '--border-color': 'black',
                    padding: '0',
                  }}
                />
              </div>
              <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
            </div>
          </div>
          <div className=" flex flex-col">
            <div className=" flex flex-col items-center mb-[15px] text-[11.256px]">
              <Icon
                icon="iconamoon:like-fill"
                style={{
                  fontSize: '22.5px',
                  marginBottom: '7.5px',
                }}
              />
              {numbf(jj.likedCount)}
            </div>
            <div className=" flex flex-col items-center mb-[15px] text-[11.256px]">
              <Icon
                icon="ant-design:message-filled"
                style={{
                  fontSize: '22.5px',
                  marginBottom: '7.5px',
                }}
              />
              {numbf(jj.commentCount)}
            </div>
            <div className=" flex flex-col items-center mb-[15px] text-[11.256px]">
              <Icon
                icon="typcn:arrow-forward"
                style={{
                  fontSize: '22.5px',
                  marginBottom: '7.5px',
                }}
              />
              {numbf(jj.shareCount)}
            </div>
            <div className=" flex flex-col items-center mb-[15px] text-[11.256px]">
              <Icon
                icon="fluent:collections-24-filled"
                style={{
                  fontSize: '22.5px',
                  marginBottom: '7.5px',
                }}
              />
              收藏
            </div>
            <div className=" w-[26.26px] h-[26.26px] rounded-[50%] overflow-hidden">
              <img
                className=" animate-[spin_10s_linear_infinite] w-[100%] h-[100%]"
                src={nameData.cover}
                alt=""
              />
            </div>
          </div>
        </div>
        <div ref={timeRef} className=" text-[5vw] items-center justify-center h-[44vw] hidden">
          <span>
            {parseInt(ctime / 60, 10)}:{parseInt(ctime % 60, 10)}
          </span>
          <span>/</span>
          <span>
            {parseInt(dtime / 60, 10)}:{parseInt(dtime % 60, 10)}
          </span>
        </div>
        <div
          className=" py-[7px] overflow-hidden"
          onTouchStart={(e) => {
            setW(e.changedTouches[0].clientX / (window.innerWidth / 100));
            videoRef.current.currentTime =
              (e.changedTouches[0].clientX / window.innerWidth) * videoRef.current.duration;
            timeNow();
          }}
          onTouchMove={(e) => {
            if (e.changedTouches[0].clientX < window.innerWidth) {
              setW(e.changedTouches[0].clientX / (window.innerWidth / 100));
              videoRef.current.currentTime =
                (e.changedTouches[0].clientX / window.innerWidth) * videoRef.current.duration;
              timeRef.current.style.display = 'flex';
              xqRef.current.style.display = 'none';
              setCtime(videoRef.current.currentTime);
            }
          }}
          onTouchEnd={() => {
            timeRef.current.style.display = 'none';
            xqRef.current.style.display = 'flex';
          }}
        >
          <div className=" w-[100vw] h-[4px] bg-[#5f5f5f]">
            <div
              className=" h-[4px] bg-[white] flex items-center justify-end"
              style={{
                width: `${w}vw`,
              }}
            >
              <div className=" box-border w-[7.5px] flex-shrink-0 h-[7.5px] bg-[white] rounded-[50%] mr-[-3.75px]"></div>
            </div>
          </div>
        </div>
        <div className=" p-[15px] text-[#4d4d4d] text-[15px] flex justify-between">
          <div>发条评论结识有趣的人</div>
          <div></div>
          <Icon icon="material-symbols:expand-content-rounded" rotate={1} fontSize="20px" />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
