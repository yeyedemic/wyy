import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon } from "@iconify/react";
import { Tabs } from "antd-mobile";

function My() {
  let [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://netease-cloud-music-api-five-roan-88.vercel.app/user/playlist?uid=2098846517&cookie=MUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fweapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fneapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fweapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fopenapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Feapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Feapi%2Ffeedback%3B+HTTPOnly%3B__csrf%3De5d78bbf477ee47532d5345c17da1ea9%3B+Max-Age%3D1296010%3B+Expires%3DThu,+12+Oct+2023+06:54:43+GMT%3B+Path%3D%2F%3B%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fwapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fneapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fwapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fweapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fwapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fneapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fwapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fopenapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_U%3D005400F6E49CF58F5136822BC6376F1BF98A4219ED6D419B27DC69AD9A711FB0AEBE711AE01ED754292811BB39E70F9E4FE276B57ADBD7F04734CCEFA45162F88409E6B95335ECB621BD20E2713574448CC47FB7337DADFBD9BABB36C2DBCBADCBC5E9717B62D081060D67CC7F4B70411C1FE2409C25FD14307351891315496421C51A083831C7898E3231F2DC033632ADDEF44FE50997B7105298D50C7672C108A7A47A32D5F2DFE50BA97A10F10D471A0E5F71A0DF2321A2B78D8AE61BCE8E74A43702C0022A92477D1A5AB1879653F26688A5A55801B2F47378E12CE9254F15A737A49344998C7C2A78B347EFA92B9691DAB437E916465445D6323CAF6BB2C92813FA9C1687F5B099FF804F776387903D6C2B2A9E30D8FF8DCCFD7F39DA7FD477856EA977D41B4C5DB84CFCD57CDE9F3A0FDC91B89636EC0077B4C9FBB0A485CB34CE962CC3EE1E5BA3125B8801DDE719E8EAAF67E302D063F2B261DAC6C2500FD1416E14519B4245534A9BF94506B0D9D5DCCF7111C8FA9B73AFA9E990626F%3B+Max-Age%3D15552000%3B+Expires%3DMon,+25+Mar+2024+06:54:33+GMT%3B+Path%3D%2F%3B+HTTPOnly%3BMUSIC_A_T%3D1578032110112%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_SNS%3D%3B+Max-Age%3D0%3B+Expires%3DWed,+27+Sep+2023+06:54:33+GMT%3B+Path%3D%2F%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Feapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Feapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fweapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1578032381441%3B+Max-Age%3D2147483647%3B+Expires%3DMon,+15+Oct+2091+10:08:40+GMT%3B+Path%3D%2Fneapi%2Fclientlog%3B+HTTPOnly"
    ).then((res) => {
      setData(res.data.playlist);
    });
  }, []);
  console.log(data);

  return (
    <div className=" bg-[#f4f4f4]">
      <div>
        {data.map((value, index) => {
          if (index == 0) {
            return (
              <div key={index}>
                <div className=" w-[100%] h-[277.64px]">
                  <img
                    className=" w-[100%] h-[100%]"
                    src={value.creator.backgroundUrl}
                    alt=""
                  />
                </div>
                <div className=" w-[345px] text-center rounded-[15px] m-[auto] bg-[#f4f4f4] translate-y-[-15px] pt-[41px] pb-[14px]">
                  <div className=" w-[67.53px] h-[67.53px] rounded-[50%] overflow-hidden m-[auto] mt-[-74.765px]">
                    <img
                      className=" w-[100%] h-[100%]"
                      src={value.creator.avatarUrl}
                      alt=""
                    />
                  </div>
                  <div className=" mt-[8px]">
                    <h2 className=" text-[18.76px] font-bold">
                      {value.creator.nickname}
                    </h2>
                  </div>
                  <div className=" mt-[7.5px]">
                    <span className=" px-[7.5px]">{value.playCount}关注</span>
                    <span className=" px-[7.5px]">
                      {value.subscribedCount} 粉丝
                    </span>
                    <span className=" px-[7.5px]">Lv3</span>
                  </div>
                  <div className=" flex justify-center h-[41.26px] items-center">
                    <div className=" border-[0.5px] border-[#999] bg-[white] pt-[3px] pr-[7.12px] pb-[3.75px] pl-[5.628px] ml-[5.628px] rounded-[10px]">
                      IP: 武汉
                    </div>
                    <div className=" border-[0.5px] border-[#999] bg-[white] pt-[3px] pr-[7.12px] pb-[3.75px] pl-[5.628px] ml-[5.628px] rounded-[10px]">
                      00后 摩羯座
                    </div>
                    <div className=" border-[0.5px] border-[#999] bg-[white] pt-[3px] pr-[7.12px] pb-[3.75px] pl-[5.628px] ml-[5.628px] rounded-[10px]">
                      村龄3年
                    </div>
                  </div>
                  <div className=" flex justify-center">
                    <div className=" rounded-[15px] font-bold py-[3.75px] px-[11.25px] ml-[5.628px] border-[1px] border-[#999]">
                      编辑资料
                    </div>
                    <div className=" flex justify-center items-center w-[28.89px] h-[28.89px] ml-[5.628px] rounded-[50%] border-[1px] border-[#999]">
                      <Icon
                        style={{ fontSize: "20px" }}
                        icon="iconamoon:arrow-up-2-light"
                        rotate={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div>
        <Tabs
          activeLineMode="fixed"
          style={{
            width: "300px",
            height: "56px",
            margin: "0 auto",
            "--title-font-size": "12.38px",
            "--fixed-active-line-width": "12.38px",
            "--active-title-color": "red",
            "--active-line-color": "red",
          }}
        >
          <Tabs.Tab title="主页" key="fruits"></Tabs.Tab>
          <Tabs.Tab title="动态" key="vegetables" disabled></Tabs.Tab>
          <Tabs.Tab title="播客" key="animals" disabled></Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default My;
