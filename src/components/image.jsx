// 从加载开始到加载完成 给一张占位符 避免白屏
// 等到实际的图片加载完成 再用真实的图片去替换
// 如果请求失败 则使用一张uiji图片来应急
import React, { useRef,useEffect, useState } from "react";

const Image = (props) => {
    const [src, setSrc] = useState(props.src)

    // const imgRef = useRef(null);
    // useEffect((e) => {
    //     imgRef.current.addEventListener("error", function(e) {
    //         console.log(e)
    //     })
    // }, [])

    const errorHandler = () => {
        setSrc(`https://picsum.photos/${props.width ?? 200}/${props.height ?? 200}`);
    }

    return <div style={{width: `${props.width}px`, height: `${props.height}px`}}>
        <img style={{objectFit: "cover", width: "inherit", height: "inherit"}} onError={errorHandler} src={src} alt="" />
    </div>
}
export default Image;