import React from "react";
import { RightOutline } from "antd-mobile-icons"
import { Icon } from "@iconify/react";


function Title(props) {
    return <div className="h-[45px] flex justify-between items-center px-[15px]">
        <div className=" text-[15px] font-bold flex items-center">{props.title}<RightOutline className=" w-[12px] h-[12px]" /></div>
        <div className=" w-[15px] h-[22.5px] flex justify-center items-center">
            <Icon style={{fontSize: "15px", color: "#999"}} icon="ep:more-filled" rotate={1} />
        </div>
    </div>
}

export default Title;