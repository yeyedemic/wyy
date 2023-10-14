/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Popup } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { Icon } from '@iconify/react';

function Title(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="h-[45px] flex justify-between items-center px-[15px]">
      <div className=" text-[15px] font-bold flex items-center">
        {props.title}
        <RightOutline className=" w-[12px] h-[12px]" />
      </div>
      <div
        className=" w-[15px] h-[22.5px] flex justify-center items-center"
        onClick={() => setVisible(true)}
      >
        <Icon style={{ fontSize: '15px', color: '#999' }} icon="ep:more-filled" rotate={1} />
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{
          height: '172.55px',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      >
        <div>
          <div className=" h-[37.5px] px-[18.76px] flex justify-between items-center border-b-[1px] border-t-0 border-l-0 border-r-0 border-solid border-[#eeeded]">
            <div className=" text-[11.256px] text-[#939ba1]">{props.title}</div>
            <div
              className=" w-[22.5px] h-[22.5px] rounded-[50%] bg-[#f2f2f3] text-[22.5px] flex justify-center items-center"
              onClick={() => setVisible(false)}
            >
              <Icon icon="heroicons:x-mark-20-solid" />
            </div>
          </div>
          <div className=" ml-[18.76px]">
            <div className=" flex h-[45px] items-center text-[22.5px]">
              <Icon icon="iconamoon:like-light" />
              <span className=" text-[11.256px] ml-[7.5px]">优先推荐</span>
            </div>
            <div className=" flex h-[45px] items-center text-[20px]">
              <Icon icon="ion:heart-dislike-outline" hFlip={true} />
              <span className=" text-[11.256px] ml-[7.5px]">减少推荐</span>
            </div>
            <div className=" flex h-[45px] items-center text-[22.5px]">
              <Icon icon="mingcute:more-4-line" />
              <span className=" text-[11.256px] ml-[7.5px]">更多内容</span>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Title;
