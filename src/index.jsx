import React from "react";
import ReactDom from "react-dom/client";

import "@/index.css";

import Index from "@/viwes";
import Mv from "@/Mv";
import Search from "@/search";
import Footer from "@/Footer";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <div>
        {/* <Index /> */}
        {/* <Mv /> */}
        {/* <Search /> */}
        <Footer />
    </div>
);
