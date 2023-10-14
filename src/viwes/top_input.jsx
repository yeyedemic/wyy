/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Popup, Switch } from 'antd-mobile';
import BetterScroll from '../components/BetterScrool';

function Top_input() {
  const [visible, setVisible] = useState(false);

  const cen = [
    {
      icon: <Icon icon="solar:letter-line-duotone" />,
      text: '我的消息',
      span: '',
    },
    {
      icon: <Icon icon="simple-icons:shell" />,
      text: '云贝中心',
      span: '签到',
    },
    {
      icon: <Icon icon="tabler:bulb" />,
      text: '创作者中心',
      span: '',
    },
  ];
  const song = [
    {
      icon: <Icon icon="emojione-monotone:dotted-six-pointed-star" />,
      text: '趣测',
      span: '查看今日运势',
    },
    {
      icon: <Icon icon="ion:ticket-outline" />,
      text: '云村有票',
      span: '',
    },
    {
      icon: <Icon icon="mdi:help-box-outline" />,
      text: '多多西西口袋',
      span: '',
    },
    {
      icon: <Icon icon="ph:bag-thin" />,
      text: '商店',
      span: '',
    },
    {
      icon: <Icon icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" />,
      text: 'Beat专区',
      span: '顶尖制作邀你创作',
    },
    {
      icon: <Icon icon="tabler:bell" />,
      text: '口袋彩铃',
      span: '',
    },
    {
      icon: <Icon icon="mingcute:game-1-line" />,
      text: '游戏专区',
      span: '音乐浇灌治愈花园',
    },
  ];

  const qt = [
    {
      icon: <Icon icon="basil:settings-outline" />,
      text: '设置',
      span: '',
    },
    {
      icon: <Icon icon="line-md:moon" />,
      text: '深色模式',
      span: '',
      switch: true,
    },
    {
      icon: <Icon icon="lucide:alarm-clock" />,
      text: '定时关闭',
      span: '',
    },
    {
      icon: <Icon icon="ph:t-shirt" />,
      text: '个性装扮',
      span: '',
    },
    {
      icon: <Icon icon="iconoir:headset-issue" />,
      text: '边听边存',
      span: '未开启',
    },
    {
      icon: <Icon icon="iconoir:headset-issue" />,
      text: '在线听歌免流量',
      span: '',
    },
    {
      icon: <Icon icon="material-symbols:featured-play-list-outline-sharp" />,
      text: '音乐黑名单',
      span: '未开启',
    },
    {
      icon: <Icon icon="mdi:forbid" />,
      text: '青少年模式',
      span: '未开启',
    },
    {
      icon: <Icon icon="ep:alarm-clock" />,
      text: '音乐闹钟',
      span: '',
    },
  ];
  const gst = [
    {
      icon: <Icon icon="fluent:document-bullet-list-16-regular" />,
      text: '我的订单',
    },
    {
      icon: <Icon icon="ion:ticket-outline" />,
      text: '优惠卷',
    },
    {
      icon: <Icon icon="teenyicons:headset-outline" />,
      text: '我的客服',
    },
    {
      icon: <Icon icon="ph:share" />,
      text: '分享网易云音乐',
    },
    {
      icon: <Icon icon="akar-icons:paper" />,
      text: '个人信息收集及使用清单',
    },
    {
      icon: <Icon icon="solar:checklist-minimalistic-linear" />,
      text: '个人信息第三方共享清单',
    },
    {
      icon: (
        <Icon icon="streamline:interface-security-shield-1-shield-protection-security-defend-crime-war-cover" />
      ),
      text: '个人信息与隐私保护',
    },
    {
      icon: <Icon icon="quill:warning-alt" />,
      text: '关于',
    },
  ];

  return (
    <div className=" p-[11.25px] pl-[3.75px] h-[75px] flex justify-between items-center bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2 box-border">
      <div
        className=" w-[37.5px] h-[37.5px] flex justify-center items-center"
        onClick={() => setVisible(true)}
      >
        <Icon style={{ fontSize: '30px' }} icon="ic:twotone-menu" />
      </div>

      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        position="left"
        bodyStyle={{ width: '315px', backgroundColor: '#f4f4f4' }}
      >
        <div className=" flex px-[18.76px] h-[60px] justify-between">
          <div className=" flex items-center" onClick={() => window.location.assign('/Login')}>
            <Icon
              className=" text-[#f9dada] mr-[7.5px] text-[26.26px] bg-[#ebebe7] rounded-[13.13px] overflow-hidden"
              icon="mingcute:user-3-fill"
            />
            <span>立刻登录</span>
            <Icon className=" text-[15px] mt-[2px]" icon="ri:arrow-up-s-line" rotate={1} />
          </div>
          <div className=" flex items-center">
            <Icon className=" text-[18.75px]" icon="teenyicons:scan-outline" />
          </div>
        </div>
        <BetterScroll
          style={{ overflow: 'hidden', height: '91vh' }}
          config={{ scrollX: false, scrollY: true, click: true }}
        >
          <div className=" overflow-hidden">
            <div className="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px] box-border">
              <div className=" flex justify-between">
                <div className=" text-[13.5px] text-[#ffeeeb] flex items-center">开通黑胶VIP</div>
                <div className=" w-[59.2px] h-[24.6px] border-solid border-[#9e8f8f] border-[1px] mt-[11.25px] text-[9.38px] rounded-[12.3px] flex justify-center items-center">
                  会员中心
                </div>
              </div>
              <div className=" h-[26.26px] text-[10.24px]">
                <p>点击恢复超21项专属特权</p>
              </div>
              <div className=" text-[9.38px] h-[39px] flex justify-between items-center mr-[16.6964px]">
                <div>受邀专享，黑胶VIP低至0.27元/天！</div>
                <div className=" scale-50 w-[8vw]">
                  <div className=" w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50 box-border">
                    受邀专享
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[285px] bg-[white] rounded-[15px] px-[15px] box-border m-auto mt-[15px]">
              {cen.map((value, index) => {
                return (
                  <div
                    className=" h-[45px] px-[13.5px] box-border flex justify-between"
                    key={index}
                  >
                    <div className=" flex items-center">
                      <div className=" flex items-center mr-[10px] text-[15px]">{value.icon}</div>
                      <div className=" text-[13.132px]">{value.text}</div>
                    </div>
                    <div className=" flex items-center text-[#a7a7a7]">
                      <div className="text-[11.256px]">{value.span ? value.span : null}</div>
                      <div className=" flex items-center text-[15px] mr-[7.5px]">
                        <Icon icon="ep:arrow-up-bold" rotate={1} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" w-[285px] bg-[white] rounded-[15px] box-border m-auto mt-[15px]">
              <div className=" text-[11.256px] text-[#969696] px-[15px] py-[11.256px] border-b-[1px] border-solid border-l-0 border-t-0 border-r-0 border-[#e6e6e6]">
                音乐服务
              </div>
              <div className=" px-[15px]">
                {song.map((value, index) => {
                  return (
                    <div
                      className=" h-[45px] px-[13.5px] box-border flex justify-between"
                      key={index}
                    >
                      <div className=" flex items-center">
                        <div className=" flex items-center mr-[10px] text-[15px]">{value.icon}</div>
                        <div className=" text-[13.132px]">{value.text}</div>
                      </div>
                      <div className=" flex items-center text-[#a7a7a7]">
                        <div className="text-[11.256px]">{value.span ? value.span : null}</div>
                        <div className=" flex items-center text-[15px] mr-[7.5px]">
                          <Icon icon="ep:arrow-up-bold" rotate={1} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" w-[285px] bg-[white] rounded-[15px] box-border m-auto mt-[15px]">
              <div className=" text-[11.256px] text-[#969696] px-[15px] py-[11.256px] border-b-[1px] border-solid border-l-0 border-t-0 border-r-0 border-[#e6e6e6]">
                其他
              </div>
              <div className=" px-[15px]">
                {qt.map((value, index) => {
                  return (
                    <div
                      className=" h-[45px] px-[13.5px] box-border flex justify-between"
                      key={index}
                    >
                      <div className=" flex items-center">
                        <div className=" flex items-center mr-[10px] text-[15px]">{value.icon}</div>
                        <div className=" text-[13.132px]">{value.text}</div>
                      </div>
                      <div className=" flex items-center text-[#a7a7a7]">
                        <div className="text-[11.256px]">{value.span ? value.span : null}</div>
                        <div className=" flex items-center text-[15px] mr-[7.5px]">
                          {value.text === '深色模式' ? (
                            <Switch
                              style={{
                                '--width': '37.5px',
                                '--height': '22.5px',
                              }}
                            />
                          ) : (
                            <Icon icon="ep:arrow-up-bold" rotate={1} />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" w-[285px] bg-[white] rounded-[15px] px-[15px] box-border m-auto mt-[15px]">
              {gst.map((value, index) => {
                return (
                  <div
                    className=" h-[45px] px-[13.5px] box-border flex justify-between"
                    key={index}
                  >
                    <div className=" flex items-center">
                      <div className=" flex items-center mr-[10px] text-[15px]">{value.icon}</div>
                      <div className=" text-[13.132px]">{value.text}</div>
                    </div>
                    <div className=" flex items-center text-[#a7a7a7]">
                      <div className="text-[11.256px]">{value.span ? value.span : null}</div>
                      <div className=" flex items-center text-[15px] mr-[7.5px]">
                        <Icon icon="ep:arrow-up-bold" rotate={1} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" w-[285px] m-auto my-[15px] h-[45px] p-[13.5px] box-border text-[#ef4239] flex justify-center items-center bg-[white] rounded-[15px]">
              关闭云音乐
            </div>
          </div>
        </BetterScroll>
      </Popup>

      <div>
        <input
          onClick={() => window.location.assign('/search')}
          type="text"
          className=" w-[281.4px] h-[37.5px] border-0 rounded-[18.75px] border-[#cccef7] outline-none text-[16px] pl-[30px] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 box-border"
          placeholder="Love Is Gone(Acoustic)"
        />
      </div>
      <div className=" w-[30px] h-[30px] flex justify-center items-center">
        <Icon style={{ fontSize: '25px' }} icon="tabler:microphone" />
      </div>
    </div>
  );
}

export default Top_input;
