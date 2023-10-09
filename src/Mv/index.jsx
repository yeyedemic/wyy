import React from "react";
import Mvcontent from "@/Mv/Mvcontent.jsx";

import { Tabs } from "antd-mobile";

function Mv() {
  return (
    <div className=" mb-[50px]">
      <div className=" py-[11.25px] px-[15px]">
        <h1 className=" text-[15.75px] font-bold flex justify-center">
          MV排行榜
        </h1>
      </div>
      <Tabs
        activeLineMode="fixed"
        style={{
          padding: 0,
          color: "#9595a3",
          "--active-line-color": "red",
          "--active-title-color": "black",
          "--fixed-active-line-width": "15px",
        }}
      >
        <Tabs.Tab title="内地" key="fruits">
          <Mvcontent limit="limit=20&area=%E5%86%85%E5%9C%B0" />
        </Tabs.Tab>
        <Tabs.Tab title="港台" key="vegetables">
          <Mvcontent limit="limit=20&area=%E6%B8%AF%E5%8F%B0" />
        </Tabs.Tab>
        <Tabs.Tab title="欧美" key="animals">
          <Mvcontent limit="limit=20&area=%E6%AC%A7%E7%BE%8E" />
        </Tabs.Tab>
        <Tabs.Tab title="韩国" key="animalsfb">
          <Mvcontent limit="limit=20&area=%E9%9F%A9%E5%9B%BD" />
        </Tabs.Tab>
        <Tabs.Tab title="日本" key="animalsfc">
          <Mvcontent limit="limit=20&area=%E6%97%A5%E6%9C%AC" />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Mv;
