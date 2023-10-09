import React, { useEffect, useState } from "react";
import Axios from "axios";

function List(props) {
    let [data, setdata] = useState([]);

    useEffect(() => {
        Axios
        .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${props.id}`)
        .then((res) => {
            setdata(res.data.playlist.tracks);
        })
    }, [])

    return <div>
        <ul>
            {
                data.map((value, index) => {
                    return index < 20 ? <li key={index} className=" flex h-[31px] text-[12px] items-center">
                        <div className={index < 3 ? " w-[33px] text-[red] flex justify-center" : " w-[33px] flex justify-center"}>{index + 1}</div>
                        <div className=" line-clamp-1 w-[187px]">{value.name}</div>
                    </li> : null;
                })
            }
        </ul>
    </div>
}

export default List;