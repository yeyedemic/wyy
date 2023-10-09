import React, { useEffect, useState, useRef } from "react";
import { createLoginQrKey, createLoginQrImage, checkLoginQr } from "../service";
import { Icon } from "@iconify/react";
import storejs from "storejs";

function Login() {
  const unikey = useRef("");
  const timer = useRef(null);
  const qr = useRef("");
  const [status, setStatus] = useState();
  const checkScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      checkLoginQr({ key: unikey.current, timestamp: Date.now() })
        .then((res) => {
          console.log(res);
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) {
            clearInterval(timer);
          }
          if (res.data.code === 803) {
            storejs.set("cookie", res.data.cookie);
            window.location.assign("/viwes");
          }
        })
        .catch((err) => {
          clearInterval(timer);
        });
    }, 1500);
  };
  useEffect(() => {
    createLoginQrKey()
      .then((res) => (unikey.current = res.data.data.unikey))
      .then((key) => createLoginQrImage({ key, qrimg: true }))
      .then((res) => (qr.current = res.data.data.qrimg))
      .then(() => checkScanStatus())
      .catch((err) => console.log(err));
    return () => clearInterval(timer.current);
  }, []);

  function onClick() {
    window.location.assign("/viwes");
  }

  return (
    <div className=" flex flex-col items-center">
      <div className=" w-[100%] h-[72px] px-[20px] flex justify-between items-center">
        <span onClick={onClick}>
          <Icon
            icon="ep:arrow-up-bold"
            rotate={3}
            style={{
              fontSize: "20px",
            }}
          />
        </span>
        <span className=" text-[15px] text-[#696969]">游客登录</span>
      </div>

      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
        alt=""
        className=" w-[142.5px] h-[27px] my-[30px]"
      />
      {[800, 801].includes(status) ? (
        <div className=" w-[100%] flex flex-col items-center">
          {status === 800 ? <div className="mask"></div> : null}
          <img src={qr.current} alt="" className=" w-[150px] h-[150px]" />
        </div>
      ) : null}
      {status === 802 ? (
        <img
          style={{ width: "150px", height: "150px" }}
          src="./img/queding.png"
          alt=""
        />
      ) : null}
      {status === 802 ? (
        <div className=" text-[12px] text-[#100a09] mt-[37.5px]">
          扫码成功请点击确认
        </div>
      ) : (
        <div className=" text-[12px] text-[#100a09] mt-[37.5px]">
          使用
          <span className=" text-[#2c6aa1]">网易云音乐APP</span>
          扫码登录
        </div>
      )}

      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
        alt=""
        className=" fixed bottom-0 left-0"
      />
    </div>
  );
}

export default Login;
