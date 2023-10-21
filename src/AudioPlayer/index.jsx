/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon } from '@iconify/react';

function Audio() {
  const id = window.location.hash.substring(4);
  const [song, setSong] = useState([]);
  const [img, setImg] = useState([]);
  const [title, setTitle] = useState([]);
  const [sName, setSName] = useState([]);
  useEffect(() => {
    Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/song/detail?ids=${id}`).then(
      (res) => {
        setImg(res.data.songs[0].al);
        setTitle(res.data.songs[0]);
        setSName(res.data.songs[0].ar[0]);
        Axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/lyric?id=${id}`).then(
          () => {
            Axios.get(
              `https://netease-cloud-music-api-five-roan-88.vercel.app/song/url/v1?id=${id}&level=standard`,
            ).then((res) => {
              setSong(res.data.data[0].url);
            });
          },
        );
      },
    );
  }, []);
  console.log(song);
  return (
    <div>
      <div
        className=" w-[100vw] h-[100vh]"
        style={{
          backgroundImage: `url("${img.picUrl}")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(15px)',
        }}
      />
      <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between pb-[28.14px] box-border">
        <div className=" h-[56.28px] flex px-[15px] justify-between text-[22.5px] items-center text-[white]">
          <div>
            <Icon icon="ep:arrow-up-bold" rotate={2} />
          </div>
          <div className=" text-center">
            <div className=" text-[15px]">{title.name}</div>
            <div className=" text-[10.5px] mt-[7.5px] text-[#bcbfbf]">
              {sName.name}
              <span className="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">
                关注
              </span>
            </div>
          </div>
          <div>
            <Icon icon="streamline:interface-hierarchy-1-node-organization-links-structure-link-nodes-network-hierarchy" />
          </div>
        </div>
        <div className=" h-[450px] relative">
          <div
            className=" absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
            style={{ transform: 'rotate(-10deg)', transformOrigin: '0 0' }}
          >
            <img
              className=" h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
              src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
              alt=""
            />
          </div>
          <div className=" w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]">
            <div className=" absolute w-[80vw] h-[80vw]">
              <img
                className=" absolute top-0 w-[80vw] h-[80vw]"
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
              />
              <img
                className=" w-[80vw] h-[80vw] absolute top-0"
                src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                alt=""
              />
            </div>
            <div className="  w-[50vw] h-[50vw] absolute  rounded-[50%] border-[5px] border-solid border-[#000] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
              <img
                className=" w-[100%] h-[100%] animate-[spin_15s_linear_infinite]"
                src={img.picUrl}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" text-[22.5px] flex justify-evenly text-[white]">
            <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
            <Icon icon="gg:arrow-up-o" rotate={2} />
            <Icon icon="iconoir:group" />
            <Icon icon="uil:comment-message" />
            <Icon icon="charm:menu-kebab" />
          </div>
          <div>2</div>
          <div className=" flex justify-evenly items-center text-[white]">
            <Icon icon="teenyicons:loop-outline" className="text-[#ffffff] text-[18.75px]" />
            <Icon icon="ion:play-skip-back" />

            <div className=" w-[45px] h-[45px] rounded-[50%] bg-[white] text-[black] flex justify-center items-center">
              {/* <Icon icon="ic:round-pause" className="text-[20px]" /> */}
              <Icon icon="ph:play-fill" className="text-[20px]" />
            </div>

            <Icon icon="ion:play-skip-back" rotate={2} />
            <Icon icon="fontisto:play-list" className="text-[#ffffff] text-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio;
