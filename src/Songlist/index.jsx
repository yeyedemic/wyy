/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useToggle } from 'ahooks';
import BetterScroll from '../components/BetterScrool';

function Songlist() {
  const [id, setId] = useState(window.location.hash.substring(4));
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const [tag, setTag] = useState([]);
  const [list, setList] = useState([]);
  const [state, { toggle }] = useToggle(false);
  const [tj, settj] = useState([]);

  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${id}`)
      .then((res) => {
        setData(res.data.playlist);
        setDetails(res.data.playlist.creator);
        setTag(res.data.playlist.tags);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${id}`)
      .then((res) => {
        setList(res.data.songs);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/related/playlist?id=${id}`)
      .then((res) => {
        settj(res.data.playlists);
      });
  }, [id]);

  const numbf = (num) => {
    return num > 100000000
      ? `${parseInt(num / 100000000, 10)}亿`
      : num > 100000
      ? `${parseInt(num / 10000, 10)}万`
      : num;
  };

  return (
    <div className=" bg-[#d77e7e] pt-[50.65px]">
      <div className=" z-50 bg-[#d77e7e] text-[white] flex justify-between text-[25px] h-[50.65px] pl-[14.6328px] pr-[12.7568px] box-border fixed top-0 left-0 right-0">
        <div className=" flex items-center">
          <Icon
            icon="mingcute:arrow-up-fill"
            rotate={3}
            onClick={() => window.location.assign('/viwes')}
          />
          <span className=" text-[15.785px] ml-[17.6344px]">歌单</span>
        </div>
        <div className=" flex items-center">
          <Icon style={{ marginRight: '18.76px' }} icon="grommet-icons:form-search" />
          <Icon icon="solar:menu-dots-bold" rotate={1} />
        </div>
      </div>

      <div className=" pl-[14.6328px] pr-[12.7568px] pb-[14px] box-border relative">
        {state ? (
          <div>
            <div className=" h-[37.5px] text-[11.256px] flex items-center text-[#e2e1e1]">
              喜欢这个歌单的用户也听了
            </div>
            <BetterScroll
              style={{ overflow: 'hidden', width: '100%', height: '143.83px' }}
              contentstyle={{ display: 'flex', width: '562.5px' }}
              config={{ scrollX: true, scrollY: false, click: true }}
            >
              {tj.map((value, index) => {
                return (
                  <div
                    className=" w-[105px] mr-[9.38px] flex-shrink-0"
                    key={index}
                    onClick={() => {
                      setId(value.id);
                      toggle();
                    }}
                  >
                    <div className=" w-[105px] h-[105px] rounded-[10px] overflow-hidden">
                      <img className=" w-[100%] h-[100%]" src={value.coverImgUrl} alt="" />
                    </div>
                    <p className=" mt-[7.5px] text-[10.43px] text-[#fff] w-[105px] line-clamp-2">
                      {value.name}
                    </p>
                  </div>
                );
              })}
            </BetterScroll>
          </div>
        ) : (
          <div>
            <div className=" pt-[9.7552px] flex justify-between">
              <div className=" w-[90px] h-[90px] rounded-[12px] mt-[3.75px] overflow-hidden relative">
                <img className=" z-0 w-[100%] h-[100%]" src={data.coverImgUrl} alt="" />
                <span className=" text-[white] absolute top-[5px] right-[5.25px] text-[5.68px] font-bold">
                  {numbf(data.playCount)}
                </span>
              </div>
              <div className=" w-[251.38px] pr-[45px] box-border">
                <p className=" text-[13.5px] text-[white] font-bold leading-[18.375px]">
                  {data.name}
                </p>
                <div className=" h-[39.39px] flex items-center text-[12px]  text-[#e8e2e2]">
                  <img
                    className=" w-[22.5px] h-[22.5px] rounded-[50%]"
                    src={details.avatarUrl}
                    alt=""
                  />
                  <span className=" ml-[7.5px] mr-[5.6px]">{details.nickname}</span>
                  <span className=" h-[27.38px] pr-[13.132px] pl-[7.5px] bg-[#ffffff33] rounded-[13.69px] flex items-center">
                    {details.followed ? '- 取消关注' : '+ 关注'}
                  </span>
                </div>
                <div className=" flex text-[12px] text-[white]">
                  {tag.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className=" whitespace-nowrap flex items-center h-[23.25px] pl-[9.38px] pr-[5.628px] mr-[5.25px] rounded-[5px] bg-[#ffffff33]"
                      >
                        {value}
                        <Icon style={{ fontSize: '15px' }} icon="ri:arrow-up-s-line" rotate={1} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" flex justify-between mt-[14.2576px]">
              <p className=" text-[10.5px] text-[#e8e2e2] w-[311px] whitespace-nowrap overflow-hidden">
                {data.description}
              </p>
              <Icon style={{ color: '#f4efef' }} icon="ri:arrow-up-s-line" rotate={1} />
            </div>
          </div>
        )}

        <div className=" font-bold mt-[13.132px] flex justify-between">
          <div className=" w-[108px] h-[37px] flex justify-center items-center rounded-[18.5px] bg-[#ffffff33] text-[white] text-[12px]">
            <Icon
              icon="typcn:arrow-forward"
              style={{ fontSize: '18.75px', marginRight: '6.75px' }}
            />
            {numbf(data.shareCount)}
          </div>
          <div className=" w-[108px] h-[37px] flex justify-center items-center rounded-[18.5px] bg-[#ffffff33] text-[white] text-[12px]">
            <Icon
              icon="ant-design:message-filled"
              style={{ fontSize: '18.75px', marginRight: '6.75px' }}
            />
            {numbf(data.commentCount)}
          </div>
          <div className=" w-[108px] h-[37px] flex justify-center items-center rounded-[18.5px] bg-[#ff2658] text-[white] text-[12px]">
            <Icon icon="mdi:star-plus" style={{ fontSize: '18.75px', marginRight: '6.75px' }} />
            {numbf(data.subscribedCount)}
          </div>
        </div>

        <div
          onClick={() => toggle()}
          className=" absolute top-[5px] right-[12px] text-[11.25px] w-[22.5px] h-[22.5px] rounded-[50%] bg-[#ffffff33] text-[white] flex justify-center items-center"
        >
          <Icon icon="ep:arrow-up-bold" rotate={state ? 0 : 2} />
        </div>
      </div>

      <div className=" bg-white rounded-t-[15px] px-[14.25px] box-border">
        <div
          className=" z-50 h-[48.78px] flex justify-between"
          style={{
            position: 'sticky',
            top: '50.55px',
            backgroundColor: 'white',
          }}
        >
          <div className=" flex items-center">
            <Icon icon="carbon:play-filled" style={{ fontSize: '24px', color: 'red' }} />
            <span className=" ml-[14.6328px] mr-[8.6206px] text-[13.8824px]">播放全部</span>
            <span className=" text-[12px] text-[#8c9094]">({list.length})</span>
          </div>
          <div className=" flex items-center">
            <Icon icon="clarity:download-line" style={{ fontSize: '18.75px' }} />
            <Icon
              icon="solar:list-down-linear"
              style={{ fontSize: '22.5px', margin: '3.75px 0 0 18.75px' }}
            />
          </div>
        </div>

        <div>
          {list.map((value, index) => {
            return (
              <div className=" h-[52.53px] flex items-center text-[#bfbfbf]" key={index}>
                <div className=" w-[15px] h-[18px] mr-[13.2px] text-[12px]">{index + 1}</div>
                <div className=" w-[240px]">
                  <div className=" text-[13.5px] text-[black] w-[187.6px] line-clamp-1">
                    {value.name}
                    {value.alia.length === 1 ? (
                      <span className=" text-[13.5px] text-[#949497] ml-[3px]">
                        {'["'}
                        {value.alia}
                        {'"]'}
                      </span>
                    ) : null}
                  </div>
                  <div className=" text-[12px] whitespace-nowrap overflow-hidden">
                    <div className=" flex items-center text-[10.5px] text-[#808080]">
                      {value.fee === 1 ? (
                        <div className=" flex">
                          <div className=" z-0 w-[8.5vw] h-[6vw] rounded-[3px] border-solid border-[1px] border-[red] font-[800] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]">
                            vip
                          </div>
                          <div className=" z-0 w-[8.5vw] h-[6vw] rounded-[3px] border-solid border-[1px] border-[#60BDEF] text-[3vw] text-[#60BDEF] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]">
                            试听
                          </div>
                        </div>
                      ) : null}
                      {value.ar[0].name}-{value.al.name}
                    </div>
                  </div>
                </div>
                <div>
                  <Icon
                    className=" ml-[17.25px]"
                    icon="arcticons:fpt-play"
                    style={{ fontSize: '22.5px' }}
                  />
                </div>
                <div>
                  <Icon
                    className=" ml-[17.25px]"
                    icon="majesticons:more-menu-vertical"
                    style={{ fontSize: '28px' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Songlist;
