import React from "react";
import { Icon } from "@iconify/react";

function onClick() {
    window.location.assign("/Login")
}

function Top_input() {
    return <div className=" p-[11.25px] pl-[3.75px] h-[75px] flex justify-between items-center bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
        <div className=" w-[37.5px] h-[37.5px] flex justify-center items-center" onClick={onClick}>
            <Icon style={{fontSize: "30px"}} icon="ic:twotone-menu" />
        </div>
        <div>
            <input onClick={() => window.location.assign("/search")} type="text" className=" w-[281.4px] h-[37.5px] rounded-[18.75px] border-[#cccef7] border-[1px] outline-none text-[16px] pl-[30px] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2" placeholder="Love Is Gone(Acoustic)" />
        </div>
        <div className=" w-[30px] h-[30px] flex justify-center items-center">
            <Icon style={{fontSize: "25px"}} icon="tabler:microphone" />
        </div>
    </div>
}

export default Top_input;