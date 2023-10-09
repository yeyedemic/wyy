/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Top_input from "@/viwes/top_input.jsx";
import Banner from "@/viwes/banner.jsx";
import NavList from "@/viwes/navlist.jsx";
import SongList from "@/viwes/songList";
import NewList from "@/viwes/newList";
import NumList from "@/viwes/numlist";
import Hot from "@/viwes/hot.jsx";
import Rllist from "@/viwes/rllist.jsx";

import Title from "@/assembly/title";

function Index() {
  return (
    <div className=" bg-[#f4f4f4] pb-[90px]">
      <Top_input />
      <Banner />
      <NavList />
      <Title title="推荐歌单" />
      <SongList />
      <Title title="新歌新碟\数字专辑" />
      <NewList />
      <Title title="排行榜" />
      <NumList />
      <Title title="热门话题" />
      <Hot />
      <Title title="音乐日历" />
      <Rllist />
    </div>
  );
}

export default Index;
