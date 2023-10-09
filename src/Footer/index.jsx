import React from "react";
import { Icon } from "@iconify/react";
import LazyComponent from "@/components/LazyComponent";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

function Footer() {
  const tabs = [
    {
      key: "/viwes",
      title: "首页",
      icon: (
        <Icon icon="ri:netease-cloud-music-fill" style={{ fontSize: "22px" }} />
      ),
    },
    {
      key: "/Mv",
      title: "排行榜",
      icon: (
        <Icon icon="icon-park-outline:ranking" style={{ fontSize: "22px" }} />
      ),
    },
    {
      key: "/My",
      title: "我的",
      icon: <Icon icon="akar-icons:music" style={{ fontSize: "22px" }} />,
    },
    {
      key: "4",
      title: "关注",
      icon: <Icon icon="ep:avatar" style={{ fontSize: "22px" }} />,
    },
    {
      key: "5",
      title: "社区",
      icon: (
        <Icon icon="ant-design:message-outlined" style={{ fontSize: "22px" }} />
      ),
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/viwes" />} />
        <Route path="/viwes" element={<LazyComponent path="viwes" />} />
        <Route path="/Mv" element={<LazyComponent path="Mv" />} />
        <Route path="/My" element={<LazyComponent path="My" />} />
        <Route path="/Login" element={<LazyComponent path="Login" />} />
        <Route path="/search" element={<LazyComponent path="search" />} />
        <Route path="*" element={""} />
      </Routes>

      <div
        className=" flex fixed right-0 left-0 bottom-0 bg-[white] h-[45px]"
        style={
          window.location.pathname == "/search"
            ? { display: "none" }
            : window.location.pathname == "/Login"
            ? { display: "none" }
            : null
        }
      >
        {tabs.map(({ key, title, icon }) => {
          return (
            <NavLink
              key={key}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#eb4954" : "#9297a1",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderTop: "1px solid #f4f4f4",
                };
              }}
              to={key}
            >
              {icon}
              {title}
            </NavLink>
          );
        })}
      </div>
    </BrowserRouter>
  );
}

export default Footer;
