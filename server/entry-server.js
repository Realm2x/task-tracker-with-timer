import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { createSlice } from "@reduxjs/toolkit";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import "chart.js/auto";
import { Bar, getElementAtEvent } from "react-chartjs-2";
function Tomato() {
  return /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("path", { d: "M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z", fill: "#DC3E22" }),
      /* @__PURE__ */ jsx("path", { d: "M28.238 12.6066C27.3211 11.673 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99494 26.2227 9.61816C28.1713 8.65365 31.0576 8.56485 31.0576 8.56485C31.0576 8.56485 27.6509 6.8042 25.1601 6.91468C24.5259 6.94257 23.8571 7.16658 23.2118 7.48403C23.5757 6.97054 23.9205 6.45998 24.1409 6.07643C24.8152 4.90368 25.524 3.42627 25.524 3.42627C25.524 3.42627 22.9122 3.56573 21.7008 5.01565C21.2407 5.56645 20.8934 6.26625 20.6392 6.92275C20.1878 6.40419 19.6896 5.94242 19.1913 5.58195C16.6999 3.77896 12.7192 4.16903 12.7192 4.16903C12.7192 4.16903 15.7263 5.87486 17.0793 7.57656C17.6076 8.2411 18.1437 8.54842 18.4642 9.29352C17.3564 9.05367 14.8569 9.13565 13.63 9.59057C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3443 16.3813 11.8565C17.3017 11.5295 18.2748 11.4429 19.1229 11.4578C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1647 21.403 15.6157C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.006 28.238 12.6066Z", fill: "#899441" }),
      /* @__PURE__ */ jsx("path", { d: "M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z", fill: "#A8B64F" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "40", height: "40", fill: "white" }) })
  ] });
}
function Equalizer() {
  return /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z", fill: "#DC3E22" }) }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "24", height: "24", fill: "white" }) })
  ] });
}
function TimerSvg() {
  return /* @__PURE__ */ jsxs("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", children: [
    /* @__PURE__ */ jsx("circle", { cx: "25", cy: "25", r: "25" }),
    /* @__PURE__ */ jsx("path", { d: "M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z", fill: "white" })
  ] });
}
function MenuTask() {
  return /* @__PURE__ */ jsxs("svg", { width: "26", height: "6", viewBox: "0 0 26 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("circle", { cx: "3", cy: "3", r: "3" }),
    /* @__PURE__ */ jsx("circle", { cx: "13", cy: "3", r: "3" }),
    /* @__PURE__ */ jsx("circle", { cx: "23", cy: "3", r: "3" })
  ] });
}
function MenuDelete() {
  return /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "M12 6.75V14.25H6V6.75H12ZM10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625L10.875 2.25ZM13.5 5.25H4.5V14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25Z", fill: "#A8B64F" }) }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "18", height: "18", fill: "white" }) })
  ] });
}
function MenuEdit() {
  return /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "M10.545 6.765L11.235 7.455L4.44 14.25H3.75V13.56L10.545 6.765ZM13.245 2.25C13.0575 2.25 12.8625 2.325 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.6275 2.3175 13.44 2.25 13.245 2.25ZM10.545 4.6425L2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425Z", fill: "#A8B64F" }) }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "18", height: "18", fill: "white" }) })
  ] });
}
function MenuIncrease() {
  return /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "M9.75 5.25H8.25V8.25H5.25V9.75H8.25V12.75H9.75V9.75H12.75V8.25H9.75V5.25ZM9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z", fill: "#A8B64F" }) }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "18", height: "18", fill: "white" }) })
  ] });
}
function MenuReduce() {
  return /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("path", { d: "M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z", fill: "#C4C4C4" }),
      /* @__PURE__ */ jsx("path", { d: "M5.25 8.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z", fill: "#C4C4C4" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "18", height: "18", fill: "white" }) })
  ] });
}
const timerBell = "/assets/timerBell-Yu4rmQRd.mp3";
function Arrow() {
  return /* @__PURE__ */ jsxs("svg", { height: "40px", width: "40px", version: "1.1", id: "Layer_1", viewBox: "0 0 512 512", children: [
    /* @__PURE__ */ jsx("path", { d: "M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256\r\n			C512,114.608,397.392,0,256,0z" }),
    /* @__PURE__ */ jsx("polygon", { fill: "white", points: "306.8,360.048 233.776,288.8 410.016,288.8 410.016,222.352 233.776,222.352 306.8,151.12 \r\n			260.288,103.696 104.576,255.584 260.288,407.472 " })
  ] });
}
function TomatoStat() {
  return /* @__PURE__ */ jsxs("svg", { width: "81", height: "81", viewBox: "0 0 81 81", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("path", { d: "M78.8031 47.4453C78.8031 68.5505 61.6937 81.2964 40.5884 81.2964C19.4825 81.2964 2.37305 64.187 2.37305 43.0811C2.37305 21.9758 20.017 9.00003 41.1223 9.00003C62.2283 9.00003 78.8031 26.3393 78.8031 47.4453Z", fill: "#DC3E22" }),
      /* @__PURE__ */ jsx("path", { d: "M57.1821 25.5283C55.3254 23.6378 52.3214 21.8798 50.0845 21.3658C51.3138 20.2757 51.5612 20.2398 53.1011 19.4768C57.0471 17.5237 62.8917 17.3438 62.8917 17.3438C62.8917 17.3438 55.9932 13.7785 50.9492 14.0022C49.6651 14.0587 48.3107 14.5124 47.004 15.1552C47.7408 14.1154 48.439 13.0815 48.8853 12.3048C50.2508 9.92997 51.6862 6.93822 51.6862 6.93822C51.6862 6.93822 46.3974 7.22062 43.9441 10.1567C43.0125 11.2721 42.3092 12.6892 41.7945 14.0186C40.8804 12.9685 39.8715 12.0334 38.8625 11.3035C33.8174 7.65241 25.7565 8.4423 25.7565 8.4423C25.7565 8.4423 31.8459 11.8966 34.5857 15.3425C35.6554 16.6882 36.7411 17.3106 37.3901 18.8194C35.1468 18.3337 30.0853 18.4997 27.6007 19.4209C21.2162 21.7888 18.4651 31.3165 18.4651 31.3165C18.4651 31.3165 24.6953 27.0221 33.1722 24.0095C35.036 23.3473 37.0065 23.1718 38.7239 23.202C37.9443 24.4165 37.0926 25.9936 36.4481 27.8531C34.88 32.3805 36.9521 43.1555 36.9521 43.1555C36.9521 43.1555 41.4915 36.7834 43.3412 31.6218C44.2905 28.9723 44.5255 26.3121 44.5307 24.3491C46.2141 25.0961 48.1968 26.1872 49.6786 27.131C57.2658 31.9651 60.8959 40.7907 60.8959 40.7907C60.8959 40.7907 61.9531 30.3871 57.1821 25.5283Z", fill: "#899441" }),
      /* @__PURE__ */ jsx("path", { d: "M41.5144 20.8766C41.4903 20.8766 41.4662 20.876 41.4421 20.8754C39.9416 20.8365 38.757 19.5894 38.7934 18.0902C38.7965 17.9604 38.9275 8.83157 33.8564 4.86227C32.6735 3.93653 32.4647 2.2272 33.3904 1.04376C34.3168 -0.139053 36.0261 -0.347931 37.2089 0.578423C44.4609 6.25335 44.2446 17.7416 44.2323 18.228C44.1933 19.705 42.9833 20.8766 41.5144 20.8766Z", fill: "#A8B64F" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("rect", { width: "81", height: "81", fill: "white" }) })
  ] });
}
function SettingsSvg() {
  return /* @__PURE__ */ jsx("svg", { version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 478.703 478.703", children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("path", { d: "M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8 c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2 c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8 c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1 c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8 c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5 l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6 c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1 l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1 C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9 c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8 c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42 c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8 c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8 c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2 c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42 c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6 c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1 c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8 c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7 c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z" }),
    /* @__PURE__ */ jsx("path", { d: "M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001 z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z" })
  ] }) }) });
}
function LightTheme() {
  return /* @__PURE__ */ jsxs("svg", { id: "Layer_1", viewBox: "0 0 256 256", children: [
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("circle", { cx: "128", cy: "128", r: "54.242" }) }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m128.001 61.342c-3.866 0-7-3.134-7-7v-15.381c0-3.866 3.134-7 7-7s7 3.134 7 7v15.381c0 3.866-3.134 7-7 7z" }) }),
          /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m128.001 224.039c-3.866 0-7-3.134-7-7v-15.381c0-3.866 3.134-7 7-7s7 3.134 7 7v15.381c0 3.866-3.134 7-7 7z" }) })
        ] }),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m192.145 98.781c-2.442 0-4.814-1.28-6.103-3.561-1.899-3.366-.713-7.636 2.654-9.537l13.394-7.563c3.367-1.901 7.637-.712 9.537 2.654s.713 7.636-2.654 9.537l-13.394 7.563c-1.087.616-2.268.907-3.434.907z" }) }),
          /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m50.476 178.782c-2.443 0-4.816-1.28-6.103-3.56-1.9-3.367-.712-7.638 2.654-9.537l13.395-7.563c3.37-1.902 7.638-.712 9.537 2.654 1.9 3.367.712 7.637-2.654 9.537l-13.395 7.562c-1.088.616-2.269.907-3.434.907z" }) })
        ] }),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m63.856 98.781c-1.165 0-2.347-.291-3.435-.905l-13.395-7.563c-3.366-1.9-4.555-6.171-2.654-9.537s6.168-4.556 9.537-2.654l13.395 7.563c3.366 1.9 4.555 6.171 2.654 9.537-1.286 2.279-3.658 3.559-6.102 3.559z" }) }),
          /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m205.523 178.782c-1.164 0-2.347-.291-3.435-.905l-13.394-7.563c-3.366-1.899-4.555-6.17-2.654-9.537 1.9-3.365 6.169-4.557 9.537-2.653l13.395 7.562c3.365 1.9 4.555 6.172 2.653 9.537-1.285 2.279-3.657 3.559-6.102 3.559z" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "m165.515 128.497c-1.981 0-3.702-1.472-3.962-3.489-2.16-16.759-15.941-29.973-32.771-31.419-2.201-.189-3.832-2.127-3.643-4.328s2.124-3.824 4.328-3.643c20.552 1.767 37.383 17.902 40.02 38.367.282 2.191-1.265 4.196-3.456 4.479-.174.022-.346.033-.516.033z" }) }) })
  ] });
}
function DarkTheme() {
  return /* @__PURE__ */ jsx("svg", { height: "20px", width: "20px", version: "1.1", id: "Layer_1", viewBox: "0 0 511.999 511.999", children: /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
    /* @__PURE__ */ jsx("path", { d: "M417.106,46.24c-10.459-10.459-21.582-19.838-33.23-28.156 c73.207,102.433,63.846,245.706-28.12,337.671s-235.237,101.327-337.671,28.12c8.318,11.647,17.697,22.772,28.156,33.23 c102.41,102.41,268.456,102.41,370.865,0S519.516,148.65,417.106,46.24z" }),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("path", { d: "M231.675,511.999c-74.878,0-145.274-29.158-198.222-82.103 c-10.974-10.974-21.097-22.922-30.085-35.507c-5.138-7.194-4.322-17.051,1.932-23.302c6.254-6.25,16.111-7.062,23.302-1.923 c41.476,29.641,90.491,45.306,141.746,45.304c65.211-0.004,126.516-25.396,172.62-71.5c84.774-84.774,95.79-216.986,26.193-314.366 c-5.142-7.194-4.328-17.049,1.923-23.302c6.249-6.252,16.107-7.07,23.3-1.933c12.584,8.987,24.531,19.107,35.511,30.087 c52.946,52.946,82.103,123.342,82.103,198.222s-29.154,145.271-82.101,198.216S306.553,511.999,231.675,511.999z M111.935,444.576 c36.139,20.395,77.106,31.25,119.739,31.25c65.219,0,126.531-25.396,172.643-71.511c79.079-79.079,92.472-199.345,40.172-292.372 c5.561,26.181,7.408,53.235,5.297,80.306c-5.18,66.477-34.032,129.084-81.241,176.295 c-52.937,52.937-123.322,82.091-198.195,82.094C150.51,450.638,130.961,448.593,111.935,444.576z" }),
      /* @__PURE__ */ jsx("path", { d: "M94.638,303.439c-1.016,0-2.044-0.087-3.078-0.264c-9.844-1.689-16.456-11.039-14.769-20.883 l11.629-67.801l-49.26-48.017c-4.93-4.805-6.704-11.993-4.577-18.54c2.127-6.547,7.788-11.32,14.601-12.311l68.076-9.891 l30.445-61.686c3.047-6.173,9.334-10.081,16.217-10.081s13.172,3.908,16.217,10.081l30.445,61.688l68.078,9.891 c6.813,0.991,12.472,5.764,14.599,12.311s0.353,13.734-4.576,18.54l-49.262,48.017l11.629,67.801 c1.165,6.786-1.624,13.642-7.194,17.688c-5.572,4.046-12.955,4.577-19.046,1.378l-69.306-36.435 c-8.842-4.648-12.24-15.583-7.592-24.425c4.648-8.842,15.583-12.239,24.423-7.592l36.869,19.384l-7.041-41.054 c-1.007-5.867,0.939-11.853,5.201-16.009l29.829-29.074l-41.221-5.99c-5.89-0.857-10.983-4.558-13.617-9.895l-18.436-37.354 l-18.436,37.354c-2.635,5.337-7.726,9.037-13.617,9.895l-41.221,5.988l29.829,29.074c4.263,4.156,6.209,10.141,5.201,16.009 l-13.235,77.173C110.931,297.218,103.285,303.439,94.638,303.439z" })
    ] })
  ] }) });
}
function DragVertical() {
  return /* @__PURE__ */ jsx("svg", { id: "Layer_1", width: 40, height: 40, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "m21.7070313 11.2929688-3-3c-.2861328-.2866211-.7158203-.3701172-1.0898438-.2167969-.3740234.1547851-.6171875.5195312-.6171875.9238281v1h-3v-3h1c.4042969 0 .7695313-.2436523.9238281-.6171875.1552734-.3740234.0693359-.8037109-.2167969-1.0898438l-3-3c-.390625-.390625-1.0234375-.390625-1.4140625 0l-3 3c-.2861328.2861329-.3720703.7158204-.2167968 1.0898438.1542969.3735352.5195312.6171875.9238281.6171875h1v3h-3v-1c0-.4042969-.2431641-.769043-.6171875-.9238281-.3730469-.1542969-.8027344-.0698242-1.0898437.2167969l-3 3c-.390625.390625-.390625 1.0234375 0 1.4140625l3 3c.1914062.1914062.4472656.2929687.7070312.2929687.1289063 0 .2587891-.0249023.3828125-.0761719.3740234-.1547851.6171875-.5195312.6171875-.9238281v-1h3v3h-1c-.4042969 0-.7695313.2436523-.9238281.6171875-.1552734.3740234-.0693359.8037109.2167969 1.0898438l3 3c.1953125.1953125.4511718.2929687.7070312.2929687s.5117188-.0976563.7070313-.2929688l3-3c.2861328-.2861328.3720703-.7158203.2167969-1.0898438-.1542969-.3735351-.5195313-.6171874-.9238282-.6171874h-1v-3h3v1c0 .4042969.2431641.769043.6171875.9238281.1240234.0512696.2539063.0761719.3828125.0761719.2597656 0 .515625-.1015625.7070313-.2929688l3-3c.390625-.3906249.390625-1.0234374 0-1.4140624z" }) });
}
function Pomidor() {
  return /* @__PURE__ */ jsx("svg", { version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 53.679 53.679", children: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("path", { d: "M11.766,11.973c2.4-0.438,4.418-0.493,5.795-0.154c-1.519,1.104-3.811,3.232-5.368,6.787 c-0.229,0.522-0.184,1.092,0.124,1.563c0.524,0.801,1.729,1.002,2.481,0.384c2.895-2.384,5.548-3.675,7.521-3.531 c-0.026,2.813,0.123,8.916,1.795,11.519c0.312,0.484,0.84,0.772,1.413,0.772c0.532,0,1.039-0.257,1.354-0.689 c1.036-1.424,3.412-5.354,3.405-11.434c1.461,0.096,4.433,0.587,6.794,2.894c0.667,0.65,1.816,0.595,2.424-0.096 c0.315-0.357,0.462-0.839,0.401-1.319c-0.241-1.901-1.218-4.553-4.433-6.701c0.909-0.155,2.243-0.292,4.122-0.292 c0.454,0,0.938,0.008,1.512,0.025c0.749,0,1.396-0.483,1.606-1.204c0.211-0.719-0.071-1.475-0.703-1.88 c-2.012-1.289-5.13-2.826-8.562-2.826c-1.373,0-2.82,0.464-4.056,0.957V3c0-1.536-0.984-3-2.353-3h-2.223 c-1.369,0-2.482,1.25-2.425,2.786v4.104c-0.848-0.142-1.958-0.28-3.266-0.28c-3.127,0-5.992,0.765-8.518,2.273 c-0.653,0.391-0.955,1.146-0.753,1.881C10.088,11.604,10.854,12.138,11.766,11.973z", fill: "green" }),
    /* @__PURE__ */ jsx("path", { d: "M44.487,11.44c-0.565,1.364-1.872,2.261-3.38,2.261c-0.394-0.012-0.726-0.019-1.029-0.022 c1.165,1.694,1.641,3.389,1.813,4.738c0.132,1.052-0.19,2.106-0.886,2.895c-0.687,0.78-1.695,1.229-2.766,1.229 c-0.97,0-1.877-0.364-2.555-1.025c-1.103-1.077-2.383-1.664-3.507-1.982c-0.51,5.357-2.677,8.891-3.679,10.268 c-0.691,0.948-1.802,1.513-2.972,1.513c-1.257,0-2.414-0.632-3.096-1.69c-1.488-2.317-1.981-6.488-2.09-10.228 c-1.005,0.394-2.415,1.174-4.271,2.702c-0.643,0.528-1.464,0.818-2.314,0.818c-1.271,0-2.435-0.617-3.111-1.65 c-0.675-1.034-0.779-2.326-0.283-3.461c0.679-1.55,1.483-2.86,2.319-3.959c-0.183,0.029-0.367,0.062-0.556,0.096 c-1.632,0.29-3.066-0.454-3.808-1.748c-5.044,4.54-7.923,10.779-7.923,17.271c0,13.353,11.863,24.215,26.446,24.215 s26.446-10.862,26.446-24.215C53.286,22.494,50.101,16.034,44.487,11.44z M5.4,22.775c0.189-0.519,0.765-0.784,1.283-0.596 c0.519,0.19,0.785,0.765,0.596,1.283c-0.381,1.04-0.614,2.146-0.694,3.285c-0.036,0.527-0.476,0.931-0.996,0.931 c-0.023,0-0.047-0.001-0.07-0.003c-0.552-0.038-0.967-0.516-0.929-1.066C4.683,25.281,4.956,23.991,5.4,22.775z M7.3,35.496 c-0.16,0.095-0.336,0.14-0.509,0.14c-0.342,0-0.675-0.175-0.861-0.49C5.182,33.883,4.691,32.487,4.473,31 c-0.08-0.547,0.298-1.055,0.844-1.135c0.556-0.087,1.055,0.298,1.135,0.844c0.181,1.229,0.584,2.379,1.199,3.417 C7.932,34.601,7.776,35.215,7.3,35.496z" })
  ] }) });
}
const useTheme = () => {
  const localTheme = localStorage.getItem("app-theme");
  const [theme, setTheme] = useState(localTheme || "light");
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);
  return { theme, setTheme };
};
const changeThemeButton = "_changeThemeButton_ihj9a_1";
const styles$w = {
  changeThemeButton
};
function ChangeTheme() {
  const { theme, setTheme } = useTheme();
  const handleLightThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx("button", { className: styles$w.changeThemeButton, onClick: handleLightThemeClick, children: theme === "light" ? /* @__PURE__ */ jsx(LightTheme, {}) : /* @__PURE__ */ jsx(DarkTheme, {}) });
}
const header = "_header_1wy4m_1";
const headerContent = "_headerContent_1wy4m_23";
const styles$v = {
  header,
  headerContent
};
const headerLogo = "_headerLogo_ndg21_1";
const logo = "_logo_ndg21_13";
const headerLogoText = "_headerLogoText_ndg21_37";
const styles$u = {
  headerLogo,
  logo,
  headerLogoText
};
function Logo() {
  return /* @__PURE__ */ jsx("div", { className: styles$u.headerLogo, children: /* @__PURE__ */ jsxs(Link, { to: "/", className: styles$u.logo, children: [
    /* @__PURE__ */ jsx(Tomato, {}),
    /* @__PURE__ */ jsx("span", { className: styles$u.headerLogoText, children: "pomodoro_box" })
  ] }) });
}
function PomidoroDurationReduce({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsReduce", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
function PomidoroDurationIncrease({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsIncrease", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
const REC_SET_KEY = "rsk";
const initialState$5 = {
  modal: false,
  pomidoroDuration: 25,
  shortBreakDuration: 3,
  longBreakDuration: 15,
  longBreakFrequency: 4,
  notification: true
};
const modalSettingsSlice = createSlice({
  name: "modalSettings",
  initialState: initialState$5,
  reducers: {
    modalActive: (state, action) => {
      state.modal = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesPomidoroDuration: (state, action) => {
      state.pomidoroDuration = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesShortBreakDuration: (state, action) => {
      state.shortBreakDuration = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesLongBreakDuration: (state, action) => {
      state.longBreakDuration = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesLongBreakFrequency: (state, action) => {
      state.longBreakFrequency = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesNotification: (state, action) => {
      state.notification = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    }
  }
});
const { modalActive, changesPomidoroDuration, changesShortBreakDuration, changesLongBreakDuration, changesLongBreakFrequency, changesNotification } = modalSettingsSlice.actions;
modalSettingsSlice.reducer;
function BreakLongIncrease({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsIncrease", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
function BreakLongReduce({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsReduce", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
function BreakShortIncrease({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsIncrease", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
function BreakShortReduce({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsReduce", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
function FrequencyPomidoroReduce({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsReduce", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
function FrequencyPomidoroIncrease({ onClick }) {
  return /* @__PURE__ */ jsx("button", { className: "buttonSettingsIncrease", onClick, children: /* @__PURE__ */ jsx(Arrow, {}) });
}
const notificationBtn = "_notificationBtn_stba0_1";
const notificationBtnActive = "_notificationBtnActive_stba0_17";
const notificationBtnDeactivate = "_notificationBtnDeactivate_stba0_35";
const styles$t = {
  notificationBtn,
  notificationBtnActive,
  notificationBtnDeactivate
};
function ButtonNotification() {
  const { notification } = useSelector((state) => state.modalSettings);
  const dispatch = useDispatch();
  function onClick() {
    dispatch(changesNotification(!notification));
  }
  return /* @__PURE__ */ jsx(Fragment, { children: notification ? /* @__PURE__ */ jsx("button", { className: `${styles$t.notificationBtn} ${styles$t.notificationBtnActive}`, onClick, children: "Выключить" }) : /* @__PURE__ */ jsx("button", { className: `${styles$t.notificationBtn} ${styles$t.notificationBtnDeactivate}`, onClick, children: "Включить" }) });
}
function TimerSettings({ nodeSettingsRef }) {
  const { pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency } = useSelector((state) => state.modalSettings);
  const dispatch = useDispatch();
  function onClose() {
    dispatch(modalActive(false));
  }
  useEffect(() => {
    function handleClick(event) {
      var _a;
      if (event.target instanceof Node && !((_a = ref.current) == null ? void 0 : _a.contains(event.target))) {
        onClose();
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const pomidoroDurationReduce = () => {
    if (pomidoroDuration > 1) {
      dispatch(changesPomidoroDuration(pomidoroDuration - 1));
    }
  };
  const pomidoroDurationIncrease = () => {
    if (pomidoroDuration < 30) {
      dispatch(changesPomidoroDuration(pomidoroDuration + 1));
    }
  };
  const breakShortReduce = () => {
    if (shortBreakDuration > 1) {
      dispatch(changesShortBreakDuration(shortBreakDuration - 1));
    }
  };
  const breakShortIncrease = () => {
    if (shortBreakDuration < 5) {
      dispatch(changesShortBreakDuration(shortBreakDuration + 1));
    }
  };
  const breakLongReduce = () => {
    if (longBreakDuration > 1) {
      dispatch(changesLongBreakDuration(longBreakDuration - 1));
    }
  };
  const breakLongIncrease = () => {
    if (longBreakDuration < 30) {
      dispatch(changesLongBreakDuration(longBreakDuration + 1));
    }
  };
  const frequencyTomatoReduce = () => {
    if (longBreakFrequency > 1) {
      dispatch(changesLongBreakFrequency(longBreakFrequency - 1));
    }
  };
  const frequencyTomatoIncrease = () => {
    if (longBreakFrequency < 6) {
      dispatch(changesLongBreakFrequency(longBreakFrequency + 1));
    }
  };
  const ref = useRef(null);
  const node = document.querySelector("#modal_root");
  if (!node)
    return null;
  return createPortal(/* @__PURE__ */ jsx("div", { className: "modalWrapperSettings modales", ref: nodeSettingsRef, children: /* @__PURE__ */ jsxs("div", { className: "modalSettings", ref, children: [
    /* @__PURE__ */ jsx("h2", { className: "modalTitleSettings", children: "Настройка таймера" }),
    /* @__PURE__ */ jsxs("div", { className: "buttonPomidoroSetting buttonSettings", children: [
      /* @__PURE__ */ jsx("p", { className: "buttonTitleName", children: "Длительность помидора" }),
      /* @__PURE__ */ jsxs("div", { className: "buttonSettingsGroup", children: [
        /* @__PURE__ */ jsx(PomidoroDurationReduce, { onClick: pomidoroDurationReduce }),
        /* @__PURE__ */ jsx("span", { className: "buttonSettingsText", children: pomidoroDuration }),
        /* @__PURE__ */ jsx(PomidoroDurationIncrease, { onClick: pomidoroDurationIncrease })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "buttonBreakShortSetting buttonSettings", children: [
      /* @__PURE__ */ jsx("p", { className: "buttonTitleName", children: "Длительность короткого перерыва" }),
      /* @__PURE__ */ jsxs("div", { className: "buttonSettingsGroup", children: [
        /* @__PURE__ */ jsx(BreakShortReduce, { onClick: breakShortReduce }),
        /* @__PURE__ */ jsx("span", { className: "buttonSettingsText", children: shortBreakDuration }),
        /* @__PURE__ */ jsx(BreakShortIncrease, { onClick: breakShortIncrease })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "buttonBreakLongSetting buttonSettings", children: [
      /* @__PURE__ */ jsx("p", { className: "buttonTitleName", children: "Длительность длинного перерыва" }),
      /* @__PURE__ */ jsxs("div", { className: "buttonSettingsGroup", children: [
        /* @__PURE__ */ jsx(BreakLongReduce, { onClick: breakLongReduce }),
        /* @__PURE__ */ jsx("span", { className: "buttonSettingsText", children: longBreakDuration }),
        /* @__PURE__ */ jsx(BreakLongIncrease, { onClick: breakLongIncrease })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "buttonFrequencyBreakSetting buttonSettings", children: [
      /* @__PURE__ */ jsx("p", { className: "buttonTitleName", children: "Кол-во помидоров до длинного перерыва" }),
      /* @__PURE__ */ jsxs("div", { className: "buttonSettingsGroup", children: [
        /* @__PURE__ */ jsx(FrequencyPomidoroReduce, { onClick: frequencyTomatoReduce }),
        /* @__PURE__ */ jsx("span", { className: "buttonSettingsText", children: longBreakFrequency }),
        /* @__PURE__ */ jsx(FrequencyPomidoroIncrease, { onClick: frequencyTomatoIncrease })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "buttonNotificationSetting", children: [
      /* @__PURE__ */ jsx("p", { className: "buttonTitleName", children: "Уведомления" }),
      /* @__PURE__ */ jsx(ButtonNotification, {})
    ] })
  ] }) }), node);
}
function SettingsTimer() {
  const { modal } = useSelector((state) => state.modalSettings);
  const [isModal, setIsModal] = useState(modal);
  const dispatch = useDispatch();
  const onClick = (event) => {
    event.preventDefault();
    dispatch(modalActive(true));
  };
  useEffect(() => {
    setIsModal(modal);
  }, [modal, isModal]);
  const nodeSettingsRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { className: "timerButtonSettings", onClick, children: /* @__PURE__ */ jsx(SettingsSvg, {}) }),
    /* @__PURE__ */ jsx(
      CSSTransition,
      {
        in: isModal,
        timeout: 300,
        classNames: "modales",
        unmountOnExit: true,
        nodeRef: nodeSettingsRef,
        children: /* @__PURE__ */ jsx(TimerSettings, { nodeSettingsRef })
      }
    )
  ] });
}
const headerEqualizer = "_headerEqualizer_14r46_1";
const headerEqualizerLink = "_headerEqualizerLink_14r46_15";
const headerEqualizerText = "_headerEqualizerText_14r46_39";
const styles$s = {
  headerEqualizer,
  headerEqualizerLink,
  headerEqualizerText
};
function Statistic() {
  return /* @__PURE__ */ jsx("div", { className: styles$s.headerEqualizer, children: /* @__PURE__ */ jsxs(Link, { to: "/stat", className: styles$s.headerEqualizerLink, children: [
    /* @__PURE__ */ jsx(Equalizer, {}),
    /* @__PURE__ */ jsx("p", { className: styles$s.headerEqualizerText, children: "Статистика" })
  ] }) });
}
function Header() {
  return /* @__PURE__ */ jsxs("header", { className: styles$v.header, children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsxs("div", { className: styles$v.headerContent, children: [
      /* @__PURE__ */ jsx(Statistic, {}),
      /* @__PURE__ */ jsx(ChangeTheme, {}),
      /* @__PURE__ */ jsx(SettingsTimer, {})
    ] })
  ] });
}
const main = "_main_pyvjz_1";
const styles$r = {
  main
};
function Main({ children }) {
  return /* @__PURE__ */ jsx("main", { className: styles$r.main, children });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
const leftContent = "_leftContent_1snoz_1";
const manual = "_manual_1snoz_25";
const maunal__title = "_maunal__title_1snoz_33";
const manual__checklist = "_manual__checklist_1snoz_49";
const manual__list = "_manual__list_1snoz_61";
const tasks__list = "_tasks__list_1snoz_81";
const tasks__time = "_tasks__time_1snoz_93";
const rightContent = "_rightContent_1snoz_105";
const styles$q = {
  leftContent,
  manual,
  maunal__title,
  manual__checklist,
  manual__list,
  tasks__list,
  tasks__time,
  rightContent
};
const taskForm = "_taskForm_2pykx_1";
const taskForm__input = "_taskForm__input_2pykx_13";
const taskForm__button = "_taskForm__button_2pykx_39";
const taskForm__validate = "_taskForm__validate_2pykx_69";
const styles$p = {
  taskForm,
  taskForm__input,
  taskForm__button,
  taskForm__validate
};
const REC_FAV_KEY = "rfk";
const initialState$4 = [];
const taskSlice = createSlice({
  name: "task",
  initialState: initialState$4,
  reducers: {
    taskAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
        localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
      },
      prepare: (text, taskNumber) => ({
        payload: {
          text,
          id: v4(),
          pomidoro: 1,
          currentPomidoro: 1,
          taskNumber
        }
      })
    },
    taskDelete: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);
      state.splice(index, 1);
      for (let i = 0; i < state.length; i++) {
        state[i].taskNumber = i + 1;
      }
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskIncrease: (state, action) => {
      state.map((e) => e.id === action.payload ? e.pomidoro++ : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskCurrentPomidoro: (state, action) => {
      state.map((e) => e.id === action.payload ? e.currentPomidoro++ : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskReduce: (state, action) => {
      state.map((e) => e.id === action.payload ? e.pomidoro-- : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskChange: (state, action) => {
      state.map((e) => e.id === action.payload.id ? e.text = action.payload.text : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskFilter: (state, action) => {
      const newState = action.payload;
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(newState));
      return newState;
    }
  }
});
const { taskAdded, taskDelete, taskIncrease, taskReduce, taskChange, taskFilter, taskCurrentPomidoro } = taskSlice.actions;
taskSlice.reducer;
function TaskForm({ taskNumber }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    if (taskDescription.length < 3 || taskDescription.length > 20)
      return setValidate(true);
    dispatch(taskAdded(taskDescription, ++taskNumber));
    setTaskDescription("");
  };
  const onChange = (event) => {
    setTaskDescription(event.target.value);
    setValidate(false);
  };
  return /* @__PURE__ */ jsxs("form", { className: styles$p.taskForm, onSubmit, action: "", children: [
    validate ? /* @__PURE__ */ jsx("span", { className: styles$p.taskForm__validate, children: "Нужно ввести от 3 до 20 символов" }) : null,
    /* @__PURE__ */ jsx(
      "input",
      {
        onChange,
        value: taskDescription,
        id: "task",
        className: styles$p.taskForm__input,
        placeholder: "Название задачи"
      }
    ),
    /* @__PURE__ */ jsx("button", { className: styles$p.taskForm__button, children: "Добавить" })
  ] });
}
const NOOP = () => {
};
function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }) {
  const ref = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  const [position, setPosition] = useState(null);
  const handleOpen = (e) => {
    if (isOpen === void 0) {
      const bounds = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: bounds.x - 62,
        y: bounds.y + bounds.height + window.scrollY
      });
      setIsDropdownOpen(!isDropdownOpen);
    }
  };
  useEffect(() => {
    function handleClick(event) {
      var _a;
      if (event.target instanceof Node && !((_a = ref.current) == null ? void 0 : _a.contains(event.target))) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const node = document.querySelector("#modal_root");
  if (!node)
    return null;
  return /* @__PURE__ */ jsxs("div", { ref, children: [
    /* @__PURE__ */ jsx("div", { onClick: handleOpen, children: button }),
    isDropdownOpen && position && createPortal(
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", left: position.x, top: position.y, zIndex: 20 }, onClick: () => setIsDropdownOpen(false), children }) }),
      node
    )
  ] });
}
const menuButton$3 = "_menuButton_16esa_1";
const taskMenuDelete = "_taskMenuDelete_16esa_21";
const styles$o = {
  menuButton: menuButton$3,
  taskMenuDelete
};
const initialState$3 = {
  modal: false,
  id: ""
};
const modalDeleteSlice = createSlice({
  name: "modal",
  initialState: initialState$3,
  reducers: {
    modalAdd: (state, action) => {
      state.modal = action.payload;
    },
    modalAddId: (state, action) => {
      state.id = action.payload;
    },
    modalRemove: (state, action) => {
      state.modal = action.payload;
    },
    modalRemoveId: (state, action) => {
      state.id = action.payload;
    }
  }
});
const { modalAdd, modalAddId, modalRemove, modalRemoveId } = modalDeleteSlice.actions;
modalDeleteSlice.reducer;
function MenuDeleteButton({ id }) {
  const dispatch = useDispatch();
  const onClick = (event) => {
    event.preventDefault();
    dispatch(modalAdd(true));
    dispatch(modalAddId(id));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("button", { className: `${styles$o.taskMenuDelete} ${styles$o.menuButton}`, onClick, children: [
    /* @__PURE__ */ jsx(MenuDelete, {}),
    "Удалить"
  ] }) });
}
const menuButton$2 = "_menuButton_1n65i_1";
const styles$n = {
  menuButton: menuButton$2
};
const initialState$2 = {
  modal: false,
  id: "",
  descr: ""
};
const modalEditSlice = createSlice({
  name: "modalEdit",
  initialState: initialState$2,
  reducers: {
    modalEditAdd: (state, action) => {
      state.modal = action.payload;
    },
    modalEditAddId: (state, action) => {
      state.id = action.payload;
    },
    modalEditAddText: (state, action) => {
      state.descr = action.payload;
    },
    modalEditRemoveId: (state, action) => {
      state.id = action.payload;
    },
    modalEditRemoveText: (state, action) => {
      state.descr = action.payload;
    }
  }
});
const { modalEditAdd, modalEditAddId, modalEditAddText, modalEditRemoveId, modalEditRemoveText } = modalEditSlice.actions;
modalEditSlice.reducer;
function MenuEditButton({ id, text }) {
  const dispatch = useDispatch();
  const onClick = (event) => {
    event.preventDefault();
    dispatch(modalEditAdd(true));
    dispatch(modalEditAddId(id));
    dispatch(modalEditAddText(text));
  };
  return /* @__PURE__ */ jsxs("button", { className: `${styles$n.taskMenuEdit} ${styles$n.menuButton}`, onClick, children: [
    /* @__PURE__ */ jsx(MenuEdit, {}),
    "Редактировать"
  ] });
}
const menuButton$1 = "_menuButton_1n65i_1";
const styles$m = {
  menuButton: menuButton$1
};
function MenuIncreaseButton({ id, pomidoro }) {
  const dispatch = useDispatch();
  const increase = (event) => {
    if (pomidoro < 8) {
      event.preventDefault();
      dispatch(taskIncrease(id));
    }
  };
  return /* @__PURE__ */ jsxs("button", { className: `${styles$m.taskMenuIncrease} ${styles$m.menuButton}`, onClick: increase, children: [
    /* @__PURE__ */ jsx(MenuIncrease, {}),
    "Увеличить"
  ] });
}
const menuButton = "_menuButton_1n65i_1";
const styles$l = {
  menuButton
};
function MenuReduceButton({ id, pomidoro }) {
  const dispatch = useDispatch();
  const reduce = (event) => {
    if (pomidoro > 1) {
      event.preventDefault();
      dispatch(taskReduce(id));
    }
  };
  return /* @__PURE__ */ jsxs("button", { className: `${styles$l.taskMenuReduce} ${styles$l.menuButton}`, onClick: reduce, children: [
    /* @__PURE__ */ jsx(MenuReduce, {}),
    "Уменьшить"
  ] });
}
const taskMenu = "_taskMenu_1ntrb_1";
const styles$k = {
  taskMenu
};
function TaskMenu({ id, pomidoro, text }) {
  return /* @__PURE__ */ jsxs("div", { className: styles$k.taskMenu, children: [
    /* @__PURE__ */ jsx(MenuIncreaseButton, { id, pomidoro }),
    /* @__PURE__ */ jsx(MenuReduceButton, { id, pomidoro }),
    /* @__PURE__ */ jsx(MenuEditButton, { id, text }),
    /* @__PURE__ */ jsx(MenuDeleteButton, { id })
  ] });
}
const task__menuButton = "_task__menuButton_1ef7y_1";
const styles$j = {
  task__menuButton,
  "task__menu-button": "_task__menu-button_1ef7y_33"
};
function TaskMenuButton() {
  return /* @__PURE__ */ jsx("button", { className: styles$j.task__menuButton, type: "button", children: /* @__PURE__ */ jsx(MenuTask, {}) });
}
const tasksLists = "_tasksLists_1pk8e_1";
const taskListItem = "_taskListItem_1pk8e_11";
const taskListText = "_taskListText_1pk8e_43";
const taskListButtonTap = "_taskListButtonTap_1pk8e_55";
const taskListNumber = "_taskListNumber_1pk8e_75";
const styles$i = {
  tasksLists,
  taskListItem,
  taskListText,
  taskListButtonTap,
  taskListNumber
};
const SortableTask = ({ list }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: list.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  };
  return /* @__PURE__ */ jsxs("li", { className: styles$i.taskListItem, style, children: [
    /* @__PURE__ */ jsxs("p", { className: styles$i.taskListText, children: [
      /* @__PURE__ */ jsx("span", { className: styles$i.taskListNumber, children: list.pomidoro }),
      list.text
    ] }),
    /* @__PURE__ */ jsx("button", { className: styles$i.taskListButtonTap, ref: setNodeRef, ...attributes, ...listeners, children: /* @__PURE__ */ jsx(DragVertical, {}) }),
    /* @__PURE__ */ jsx(Dropdown, { button: /* @__PURE__ */ jsx(TaskMenuButton, {}), children: /* @__PURE__ */ jsx(TaskMenu, { id: list.id, pomidoro: list.pomidoro, text: list.text }) })
  ] }, list.id);
};
function TaskList() {
  const lists = useSelector((state) => state.task);
  const [tasks, setTasks] = useState(lists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskFilter(tasks));
  }, [tasks]);
  useEffect(() => {
    setTasks(lists);
  }, [lists]);
  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === (over == null ? void 0 : over.id)) {
      return;
    }
    if (over) {
      setTasks((tasks2) => {
        const newTasks = arrayMove(tasks2, tasks2.findIndex((list) => list.id === active.id), tasks2.findIndex((list) => list.id === over.id));
        dispatch(taskFilter(newTasks));
        return newTasks;
      });
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("ul", { className: styles$i.tasksLists, children: /* @__PURE__ */ jsx(DndContext, { collisionDetection: closestCenter, onDragEnd, children: /* @__PURE__ */ jsx(SortableContext, { items: tasks, strategy: verticalListSortingStrategy, children: tasks.map((list) => /* @__PURE__ */ jsx(SortableTask, { list }, list.id)) }) }) }) });
}
const getPadTime = (time) => time.toString().padStart(2, "0");
const timerBlock = "_timerBlock_r4zxn_1";
const styles$h = {
  timerBlock
};
const timerButton$6 = "_timerButton_ju4yf_1";
const timerButtonLeft$3 = "_timerButtonLeft_ju4yf_19";
const timerButtonStart$2 = "_timerButtonStart_ju4yf_27";
const styles$g = {
  timerButton: timerButton$6,
  timerButtonLeft: timerButtonLeft$3,
  timerButtonStart: timerButtonStart$2
};
const STA_DAT_KEY = "sdk";
const initialState$1 = [];
const statisticDataSlice = createSlice({
  name: "statisticData",
  initialState: initialState$1,
  reducers: {
    dataAdd: {
      reducer: (state, action) => {
        const newState = state.find((e) => e.currentDate === action.payload.currentDate);
        if (!newState) {
          state.push(action.payload);
          localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
        }
      },
      prepare: (currentDate) => ({
        payload: {
          currentDate,
          timeWorking: 0,
          quantityPomidoro: 0,
          focus: 0,
          stops: 0,
          timeOnPause: 0,
          quantityTimeOnPause: 0,
          activeDay: false
        }
      })
    },
    timeWorking: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.timeWorking += 1 : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    timeQuantityPomidoro: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.quantityPomidoro += 1 : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    stopsQuantity: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.stops += 1 : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    timeFocus: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.focus = Math.floor(e.timeWorking / (e.quantityTimeOnPause + e.timeWorking) * 100) : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    timeOnPause: (state, action) => {
      state.map((e) => e.currentDate === action.payload.formattedDate ? e.timeOnPause = action.payload.miliseconds : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    quantityTimeOnPause: (state, action) => {
      state.map((e) => {
        if (e.currentDate === action.payload) {
          const pauseTime = e.timeOnPause;
          const currentTime = Date.now();
          e.quantityTimeOnPause += Math.floor((currentTime - pauseTime) / (1e3 * 60));
        }
        return e;
      });
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    activeDay: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.activeDay = true : e.activeDay = false);
    }
  }
});
const { dataAdd, timeWorking, timeQuantityPomidoro, stopsQuantity, timeFocus, timeOnPause, quantityTimeOnPause, activeDay } = statisticDataSlice.actions;
statisticDataSlice.reducer;
function ButtonTimerContinue({ setIsWork }) {
  const dispatch = useDispatch();
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const handleContinue = () => {
    setIsWork(true);
    dispatch(quantityTimeOnPause(formattedDate));
  };
  return /* @__PURE__ */ jsx("button", { className: `${styles$g.timerButton} ${styles$g.timerButtonLeft} ${styles$g.timerButtonStart}`, onClick: handleContinue, children: "Продолжить" });
}
const timerButton$5 = "_timerButton_w3830_1";
const timerButtonLeft$2 = "_timerButtonLeft_w3830_19";
const timerButtonPause$1 = "_timerButtonPause_w3830_27";
const styles$f = {
  timerButton: timerButton$5,
  timerButtonLeft: timerButtonLeft$2,
  timerButtonPause: timerButtonPause$1
};
function ButtonTimerPause({ setIsWork, setIsPause }) {
  const dispatch = useDispatch();
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const miliseconds = date.getTime();
  const handlePause = () => {
    setIsWork(false);
    setIsPause(true);
    dispatch(timeOnPause({ formattedDate, miliseconds }));
  };
  return /* @__PURE__ */ jsx("button", { className: `${styles$f.timerButton} ${styles$f.timerButtonLeft} ${styles$f.timerButtonPause}`, onClick: handlePause, children: "Пауза" });
}
const timerButton$4 = "_timerButton_kqugo_1";
const timerButtonSkip$1 = "_timerButtonSkip_kqugo_19";
const styles$e = {
  timerButton: timerButton$4,
  timerButtonSkip: timerButtonSkip$1
};
function ButtonTimerSkip({ setIsBreak, setTimer, setIsWork, setIsSound }) {
  const { pomidoroDuration } = useSelector((state) => state.modalSettings);
  const handleBreak = () => {
    setIsBreak(false);
    setIsWork(false);
    setTimer(60 * pomidoroDuration);
    setIsSound(true);
  };
  return /* @__PURE__ */ jsx("button", { className: `${styles$e.timerButton} ${styles$e.timerButtonSkip}`, onClick: handleBreak, children: "Пропустить" });
}
const timerButton$3 = "_timerButton_ju4yf_1";
const timerButtonLeft$1 = "_timerButtonLeft_ju4yf_19";
const timerButtonStart$1 = "_timerButtonStart_ju4yf_27";
const styles$d = {
  timerButton: timerButton$3,
  timerButtonLeft: timerButtonLeft$1,
  timerButtonStart: timerButtonStart$1
};
function ButtonTimerStart({ setIsWork }) {
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const dispatch = useDispatch();
  const handleStart = () => {
    setIsWork(true);
    dispatch(dataAdd(formattedDate));
  };
  return /* @__PURE__ */ jsx("button", { className: `${styles$d.timerButton} ${styles$d.timerButtonLeft} ${styles$d.timerButtonStart}`, onClick: handleStart, children: "Старт" });
}
const timerTitle$1 = "_timerTitle_15i58_1";
const timerTitleBreak$1 = "_timerTitleBreak_15i58_23";
const timerTitleActive$1 = "_timerTitleActive_15i58_31";
const timerTitleTask$1 = "_timerTitleTask_15i58_41";
const timerTitleNumber$1 = "_timerTitleNumber_15i58_51";
const timerCounter$1 = "_timerCounter_15i58_61";
const timerPomidorImg$1 = "_timerPomidorImg_15i58_77";
const timerTask$1 = "_timerTask_15i58_103";
const timerNumber$1 = "_timerNumber_15i58_115";
const timerNumberActive$1 = "_timerNumberActive_15i58_131";
const timerNumberBreak$1 = "_timerNumberBreak_15i58_139";
const timerTaskText$1 = "_timerTaskText_15i58_147";
const timerTaskNumber$1 = "_timerTaskNumber_15i58_163";
const timerButtonSettings$1 = "_timerButtonSettings_15i58_171";
const timerButtonGroup$1 = "_timerButtonGroup_15i58_189";
const timerButton$2 = "_timerButton_15i58_171";
const timerButtonLeft = "_timerButtonLeft_15i58_215";
const timerButtonStart = "_timerButtonStart_15i58_223";
const timerButtonPause = "_timerButtonPause_15i58_225";
const timerButtonStop$1 = "_timerButtonStop_15i58_245";
const timerButtonDone$1 = "_timerButtonDone_15i58_261";
const timerButtonSkip = "_timerButtonSkip_15i58_263";
const timerButtonStopActive$1 = "_timerButtonStopActive_15i58_271";
const styles$c = {
  timerTitle: timerTitle$1,
  timerTitleBreak: timerTitleBreak$1,
  timerTitleActive: timerTitleActive$1,
  timerTitleTask: timerTitleTask$1,
  timerTitleNumber: timerTitleNumber$1,
  timerCounter: timerCounter$1,
  timerPomidorImg: timerPomidorImg$1,
  timerTask: timerTask$1,
  timerNumber: timerNumber$1,
  timerNumberActive: timerNumberActive$1,
  timerNumberBreak: timerNumberBreak$1,
  timerTaskText: timerTaskText$1,
  timerTaskNumber: timerTaskNumber$1,
  timerButtonSettings: timerButtonSettings$1,
  timerButtonGroup: timerButtonGroup$1,
  timerButton: timerButton$2,
  timerButtonLeft,
  timerButtonStart,
  timerButtonPause,
  timerButtonStop: timerButtonStop$1,
  timerButtonDone: timerButtonDone$1,
  timerButtonSkip,
  timerButtonStopActive: timerButtonStopActive$1
};
const timerButtonPomidor = "_timerButtonPomidor_v44ey_1";
const styles$b = {
  timerButtonPomidor
};
function TimerButton({ timer, setTimer, isBreak, timerBreak, setTimerBreak }) {
  const increase = (event) => {
    if (!isBreak)
      setTimer(timer + 60);
    if (isBreak)
      setTimerBreak(timerBreak + 60);
  };
  return /* @__PURE__ */ jsx("button", { className: styles$b.timerButtonPomidor, onClick: increase, children: /* @__PURE__ */ jsx(TimerSvg, {}) });
}
function TimerBreak({ id, work, pause, isBreak, timerBreak, setTimerBreak, text, minutes, seconds, taskNumber, setIsWork, setIsPause, setTimer, timer, setIsBreak, currentPomidoro, isSound, setIsSound }) {
  const { notification } = useSelector((state) => state.modalSettings);
  useEffect(() => {
    if (isSound === true && notification === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      };
      setTimeout(() => {
        alert("Пора приступить к работе!");
      }, 100);
      setIsSound(false);
      return playSoundAndAlert;
    } else if (isSound === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      };
      return playSoundAndAlert;
    }
  }, [isSound]);
  const variants = {
    active: {
      scale: [2],
      rotate: [0, 360]
    },
    pause: { scale: [1] }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `${styles$c.timerTitle} ${styles$c.timerTitleBreak}`, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$c.timerTitleTask, children: text }),
      work ? /* @__PURE__ */ jsxs("p", { className: styles$c.timerTitleNumber, children: [
        "Перерыв ",
        currentPomidoro - 1
      ] }) : /* @__PURE__ */ jsxs("p", { className: styles$c.timerTitleNumber, children: [
        "Перерыв ",
        currentPomidoro - 1
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$c.timerCounter, children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: styles$c.timerPomidorImg,
          animate: work ? "active" : "pause",
          variants,
          transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          },
          drag: true,
          dragConstraints: {
            top: -20,
            left: -20,
            right: 20,
            bottom: 20
          },
          children: /* @__PURE__ */ jsx(Pomidor, {})
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$c.timerTask, children: [
        work ? /* @__PURE__ */ jsxs("p", { className: `${styles$c.timerNumber} ${styles$c.timerNumberBreak}`, children: [
          minutes,
          ":",
          seconds,
          " "
        ] }) : /* @__PURE__ */ jsxs("p", { className: styles$c.timerNumber, children: [
          minutes,
          ":",
          seconds,
          " "
        ] }),
        /* @__PURE__ */ jsx(TimerButton, { timer, setTimer, isBreak, isWork: work, timerBreak, setTimerBreak })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: styles$c.timerTaskText, children: [
        /* @__PURE__ */ jsxs("span", { className: styles$c.timerTaskNumber, children: [
          "Задача ",
          taskNumber,
          " - "
        ] }),
        text,
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$c.timerButtonGroup, children: [
        work ? /* @__PURE__ */ jsx(ButtonTimerPause, { setIsWork, setIsPause }) : null,
        work ? /* @__PURE__ */ jsx(ButtonTimerSkip, { id, setIsBreak, setIsWork, setTimer, setIsSound }) : null,
        !work && !pause ? /* @__PURE__ */ jsx(ButtonTimerStart, { setIsWork }) : null,
        !work && !pause ? /* @__PURE__ */ jsx(ButtonTimerSkip, { id, setIsBreak, setIsWork, setTimer, setIsSound }) : null,
        !work && pause ? /* @__PURE__ */ jsx(ButtonTimerContinue, { setIsWork }) : null,
        !work && pause ? /* @__PURE__ */ jsx(ButtonTimerSkip, { id, setIsBreak, setIsWork, setTimer, setIsSound }) : null
      ] })
    ] })
  ] });
}
const timerButton$1 = "_timerButton_niwrl_1";
const timerButtonDone = "_timerButtonDone_niwrl_19";
const styles$a = {
  timerButton: timerButton$1,
  timerButtonDone
};
function ButtonTimerDone({ setIsWork, setIsPause, setTimer, id, pomidoro }) {
  const { pomidoroDuration } = useSelector((state) => state.modalSettings);
  const dispatch = useDispatch();
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const handleDone = () => {
    if (pomidoro > 1) {
      setIsWork(false);
      setIsPause(false);
      setTimer(60 * pomidoroDuration);
      dispatch(taskReduce(id));
      dispatch(taskCurrentPomidoro(id));
      dispatch(timeQuantityPomidoro(formattedDate));
    } else {
      setIsWork(false);
      setIsPause(false);
      setTimer(60 * pomidoroDuration);
      dispatch(quantityTimeOnPause(formattedDate));
      dispatch(timeQuantityPomidoro(formattedDate));
      dispatch(timeFocus(formattedDate));
      dispatch(taskDelete(id));
    }
  };
  return /* @__PURE__ */ jsx("button", { className: `${styles$a.timerButton} ${styles$a.timerButtonDone}`, onClick: handleDone, children: "Сделано" });
}
const timerButton = "_timerButton_3jga8_1";
const timerButtonStop = "_timerButtonStop_3jga8_19";
const timerButtonStopActive = "_timerButtonStopActive_3jga8_35";
const styles$9 = {
  timerButton,
  timerButtonStop,
  timerButtonStopActive
};
function ButtonTimerStop({ switches, setIsWork, setIsPause, setTimer }) {
  const { pomidoroDuration } = useSelector((state) => state.modalSettings);
  const dispatch = useDispatch();
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const handleStop = () => {
    setIsWork(false);
    setIsPause(false);
    setTimer(60 * pomidoroDuration);
    dispatch(stopsQuantity(formattedDate));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: switches ? /* @__PURE__ */ jsx("button", { className: `${styles$9.timerButton} ${styles$9.timerButtonStop} ${styles$9.timerButtonStopActive}`, onClick: handleStop, disabled: !switches, children: "Стоп" }) : /* @__PURE__ */ jsx("button", { className: `${styles$9.timerButton} ${styles$9.timerButtonStop}`, onClick: handleStop, disabled: !switches, children: "Стоп" }) });
}
const timerTitle = "_timerTitle_nqct1_5";
const timerTitleBreak = "_timerTitleBreak_nqct1_27";
const timerTitleActive = "_timerTitleActive_nqct1_35";
const timerTitleTask = "_timerTitleTask_nqct1_45";
const timerTitleNumber = "_timerTitleNumber_nqct1_55";
const timerCounter = "_timerCounter_nqct1_65";
const timerPomidorImg = "_timerPomidorImg_nqct1_81";
const timerTask = "_timerTask_nqct1_107";
const timerNumber = "_timerNumber_nqct1_119";
const timerNumberActive = "_timerNumberActive_nqct1_135";
const timerNumberBreak = "_timerNumberBreak_nqct1_143";
const timerTaskText = "_timerTaskText_nqct1_151";
const timerTaskNumber = "_timerTaskNumber_nqct1_167";
const timerButtonSettings = "_timerButtonSettings_nqct1_175";
const timerButtonGroup = "_timerButtonGroup_nqct1_193";
const styles$8 = {
  timerTitle,
  timerTitleBreak,
  timerTitleActive,
  timerTitleTask,
  timerTitleNumber,
  timerCounter,
  timerPomidorImg,
  timerTask,
  timerNumber,
  timerNumberActive,
  timerNumberBreak,
  timerTaskText,
  timerTaskNumber,
  timerButtonSettings,
  timerButtonGroup
};
function TimerWork({ work, pause, isBreak, timerBreak, setTimerBreak, text, minutes, seconds, taskNumber, setIsWork, setIsPause, setTimer, timer, id, currentPomidoro, pomidoro, isSound, setIsSound }) {
  const { notification } = useSelector((state) => state.modalSettings);
  useEffect(() => {
    if (isSound === true && notification === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      };
      setTimeout(() => {
        alert("Время отдохнуть!");
      }, 100);
      setIsSound(false);
      return playSoundAndAlert;
    } else if (isSound === true) {
      const playSoundAndAlert = () => {
        new Audio(timerBell).play();
      };
      return playSoundAndAlert;
    }
  }, [isSound]);
  const variants = {
    active: {
      scale: [2],
      rotate: [0, 360]
    },
    pause: { scale: [1] }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    work || pause ? /* @__PURE__ */ jsxs("div", { className: `${styles$8.timerTitle} ${styles$8.timerTitleActive}`, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$8.timerTitleTask, children: text }),
      /* @__PURE__ */ jsxs("p", { className: styles$8.timerTitleNumber, children: [
        "Помидор ",
        currentPomidoro
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: styles$8.timerTitle, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$8.timerTitleTask, children: text }),
      /* @__PURE__ */ jsxs("p", { className: styles$8.timerTitleNumber, children: [
        "Помидор ",
        currentPomidoro
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$8.timerCounter, children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: styles$8.timerPomidorImg,
          animate: work ? "active" : "pause",
          variants,
          transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          },
          drag: true,
          dragConstraints: {
            top: -20,
            left: -20,
            right: 20,
            bottom: 20
          },
          children: /* @__PURE__ */ jsx(Pomidor, {})
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$8.timerTask, children: [
        work || pause ? /* @__PURE__ */ jsxs("p", { className: `${styles$8.timerNumber} ${styles$8.timerNumberActive}`, children: [
          minutes,
          ":",
          seconds,
          " "
        ] }) : /* @__PURE__ */ jsxs("p", { className: styles$8.timerNumber, children: [
          minutes,
          ":",
          seconds,
          " "
        ] }),
        /* @__PURE__ */ jsx(TimerButton, { timer, setTimer, isBreak, isWork: work, timerBreak, setTimerBreak })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: styles$8.timerTaskText, children: [
        /* @__PURE__ */ jsxs("span", { className: styles$8.timerTaskNumber, children: [
          "Задача ",
          taskNumber,
          " - "
        ] }),
        text,
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$8.timerButtonGroup, children: [
        work ? /* @__PURE__ */ jsx(ButtonTimerPause, { setIsWork, setIsPause }) : null,
        work ? /* @__PURE__ */ jsx(ButtonTimerStop, { switches: work, setIsWork, setIsPause, setTimer }) : null,
        !work && !pause ? /* @__PURE__ */ jsx(ButtonTimerStart, { setIsWork }) : null,
        !work && !pause ? /* @__PURE__ */ jsx(ButtonTimerStop, { switches: work, setIsWork, setIsPause, setTimer }) : null,
        !work && pause ? /* @__PURE__ */ jsx(ButtonTimerContinue, { setIsWork }) : null,
        !work && pause ? /* @__PURE__ */ jsx(ButtonTimerDone, { setIsWork, setIsPause, setTimer, id, pomidoro }) : null
      ] })
    ] })
  ] });
}
function TimerBlock({ pomidoro, taskText, taskNumber, id, currentPomidoro }) {
  const { pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency } = useSelector((state) => state.modalSettings);
  const [isWork, setIsWork] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [timer, setTimer] = useState(60 * pomidoroDuration);
  const [timeBreak, setTimeBreak] = useState(60 * shortBreakDuration);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - parseInt(minutes) * 60);
  const minutesBreak = getPadTime(Math.floor(timeBreak / 60));
  const secondsBreak = getPadTime(timeBreak - parseInt(minutesBreak) * 60);
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isWork && !isPause && !isBreak) {
      setTimer(60 * pomidoroDuration);
      setTimeBreak(60 * shortBreakDuration);
      if (currentPomidoro % longBreakFrequency === 0) {
        setTimeBreak(60 * longBreakDuration);
      } else {
        setTimeBreak(60 * shortBreakDuration);
      }
    }
  }, [pomidoroDuration, shortBreakDuration, longBreakDuration, longBreakFrequency]);
  useEffect(() => {
    setIsSound(false);
    if (pomidoro >= 1 && isWork && !isBreak) {
      const interval = setInterval(() => {
        setTimer((timer2) => timer2 >= 0 ? --timer2 : 0);
      }, 1e3);
      if (timer % 60 === 0 && timer < pomidoroDuration * 60) {
        dispatch(timeWorking(formattedDate));
      }
      if (timer < 0) {
        setIsSound(true);
        dispatch(timeQuantityPomidoro(formattedDate));
        dispatch(timeFocus(formattedDate));
        setIsWork(false);
        setIsBreak(true);
        if (pomidoro > 1) {
          dispatch(taskReduce(id));
          dispatch(taskCurrentPomidoro(id));
        } else {
          setIsBreak(false);
          setIsWork(false);
          setTimer(60 * pomidoroDuration);
          dispatch(timeFocus(formattedDate));
          const deleteTask = () => dispatch(taskDelete(id));
          setTimeout(deleteTask, 100);
        }
        if (currentPomidoro % longBreakFrequency === 0) {
          setTimeBreak(60 * longBreakDuration);
        } else {
          setTimeBreak(60 * shortBreakDuration);
        }
      }
      return () => {
        clearInterval(interval);
      };
    }
  }, [isWork, timer, isBreak]);
  useEffect(() => {
    setIsSound(false);
    if (isBreak && isWork) {
      const interval = setInterval(() => {
        setTimeBreak((timeBreak2) => timeBreak2 >= 0 ? --timeBreak2 : 0);
      }, 1e3);
      if (timeBreak < 0) {
        setIsSound(true);
        setIsBreak(false);
        setIsWork(false);
        setTimer(60 * pomidoroDuration);
        dispatch(timeFocus(formattedDate));
      }
      return () => {
        clearInterval(interval);
      };
    }
  }, [isBreak, timeBreak, isWork]);
  return /* @__PURE__ */ jsx("div", { className: styles$h.timerBlock, children: !isBreak ? /* @__PURE__ */ jsx(
    TimerWork,
    {
      work: isWork,
      pause: isPause,
      isBreak,
      text: taskText,
      currentPomidoro,
      minutes,
      seconds,
      taskNumber,
      setIsWork,
      setIsPause,
      timer,
      setTimer,
      setTimerBreak: setTimeBreak,
      timerBreak: timeBreak,
      id,
      isSound,
      setIsSound,
      pomidoro
    }
  ) : /* @__PURE__ */ jsx(
    TimerBreak,
    {
      id,
      work: isWork,
      pause: isPause,
      isBreak,
      text: taskText,
      pomidoro,
      currentPomidoro,
      minutes: minutesBreak,
      seconds: secondsBreak,
      taskNumber,
      setIsWork,
      setIsPause,
      timer,
      setTimer,
      setTimerBreak: setTimeBreak,
      timerBreak: timeBreak,
      setIsBreak,
      isSound,
      setIsSound
    }
  ) });
}
const modalButtonDelete = "_modalButtonDelete_1icz2_1";
const styles$7 = {
  modalButtonDelete
};
function ButtonModalDelete({ id }) {
  const dispatch = useDispatch();
  const removeTask = (event) => {
    event.preventDefault();
    dispatch(taskDelete(id));
    dispatch(modalAdd(false));
    dispatch(modalAddId(""));
  };
  return /* @__PURE__ */ jsx("button", { className: styles$7.modalButtonDelete, onClick: removeTask, children: "Удалить" });
}
const modalButtonCancel = "_modalButtonCancel_p44mi_1";
const styles$6 = {
  modalButtonCancel
};
function ButtonModalCancel() {
  const dispatch = useDispatch();
  const onClick = (event) => {
    event.preventDefault();
    dispatch(modalAdd(false));
    dispatch(modalAddId(""));
  };
  return /* @__PURE__ */ jsx("button", { className: styles$6.modalButtonCancel, onClick, children: "Отмена" });
}
function DeleteModal({ id, nodeRef }) {
  const dispatch = useDispatch();
  function onClose() {
    dispatch(modalRemove(false));
    dispatch(modalRemoveId(""));
  }
  useEffect(() => {
    function handleClick(event) {
      var _a;
      if (event.target instanceof Node && !((_a = ref.current) == null ? void 0 : _a.contains(event.target))) {
        onClose();
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const ref = useRef(null);
  const node = document.querySelector("#modal_root");
  if (!node)
    return null;
  return createPortal(/* @__PURE__ */ jsx("div", { className: "modales modalWrapper", ref: nodeRef, children: /* @__PURE__ */ jsxs("div", { className: "modal", ref, children: [
    /* @__PURE__ */ jsx("p", { className: "modalText", children: "Удалить задачу?" }),
    /* @__PURE__ */ jsx(ButtonModalDelete, { id }),
    /* @__PURE__ */ jsx(ButtonModalCancel, {})
  ] }) }), node);
}
const changeFormLabel = "_changeFormLabel_30lig_1";
const changeFormInput = "_changeFormInput_30lig_15";
const changeFormButton = "_changeFormButton_30lig_33";
const styles$5 = {
  changeFormLabel,
  changeFormInput,
  changeFormButton
};
function ChangeForm() {
  const { descr, id } = useSelector((state) => state.modalEdit);
  const [text, setText] = useState(descr);
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    if (text.length < 3 || text.length > 20)
      return setValidate(true);
    dispatch(taskChange({ text, id }));
    dispatch(modalEditAdd(false));
    dispatch(modalEditRemoveId(""));
  };
  const onChange = (event) => {
    setText(event.target.value);
    setValidate(false);
  };
  return /* @__PURE__ */ jsxs("form", { className: styles$5.changeForm, action: "", onSubmit, children: [
    validate ? /* @__PURE__ */ jsx("span", { className: styles$5.taskForm__validate, children: "Нужно ввести от 3 до 20 символов" }) : null,
    /* @__PURE__ */ jsx("label", { htmlFor: "editInput", className: styles$5.changeFormLabel, children: "Редактирование" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: "editInput",
        name: "editInput",
        className: styles$5.changeFormInput,
        type: "text",
        onChange,
        value: text
      }
    ),
    /* @__PURE__ */ jsx("button", { className: styles$5.changeFormButton, children: "Изменить" })
  ] });
}
function ChangeModal({ nodeRef }) {
  const dispatch = useDispatch();
  function onClose() {
    dispatch(modalEditAdd(false));
    dispatch(modalEditRemoveId(""));
    dispatch(modalEditRemoveText(""));
  }
  useEffect(() => {
    function handleClick(event) {
      var _a;
      if (event.target instanceof Node && !((_a = ref.current) == null ? void 0 : _a.contains(event.target))) {
        onClose();
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const ref = useRef(null);
  const node = document.querySelector("#modal_root");
  if (!node)
    return null;
  return createPortal(/* @__PURE__ */ jsx("div", { className: "modales modalWrapper", ref: nodeRef, children: /* @__PURE__ */ jsxs("div", { className: "modalEdit", ref, children: [
    /* @__PURE__ */ jsx("h2", { className: "changeTitle", children: "Редактирование" }),
    /* @__PURE__ */ jsx(ChangeForm, {})
  ] }) }), node);
}
function TimerPage() {
  const taskList = useSelector((state) => state.task);
  const modalStateDelete = useSelector((state) => state.modalDelete);
  const modalStateEdit = useSelector((state) => state.modalEdit);
  const modalSettings = useSelector((state) => state.modalSettings);
  const taskListDone = taskList;
  const [isModal, setIsModal] = useState(modalStateDelete.modal);
  const [isEditModal, setIsEditModal] = useState(modalStateEdit.modal);
  const quantityPomidoro = taskListDone.map((task) => task.pomidoro);
  let sum = quantityPomidoro.reduce(function(x, y) {
    return x + y;
  }, 0);
  const pomidoroDuration = modalSettings.pomidoroDuration * sum;
  const taskNumber = taskListDone.length;
  useEffect(() => {
    setIsModal(modalStateDelete.modal);
  }, [modalStateDelete]);
  useEffect(() => {
    setIsEditModal(modalStateEdit.modal);
  }, [modalStateEdit]);
  const nodeChangeRef = useRef(null);
  const nodeDeleteRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: styles$q.leftContent, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$q.manual, children: [
        /* @__PURE__ */ jsx("h2", { className: styles$q.maunal__title, children: "Ура! Теперь можно начать работать:" }),
        /* @__PURE__ */ jsxs("ul", { className: styles$q.manual__checklist, children: [
          /* @__PURE__ */ jsx("li", { className: styles$q.manual__list, children: /* @__PURE__ */ jsx("span", { children: "Выберите категорию и напишите название текущей задачи" }) }),
          /* @__PURE__ */ jsx("li", { className: styles$q.manual__list, children: /* @__PURE__ */ jsx("span", { children: "Запустите таймер («помидор»)" }) }),
          /* @__PURE__ */ jsx("li", { className: styles$q.manual__list, children: /* @__PURE__ */ jsx("span", { children: "Работайте пока «помидор» не прозвонит" }) }),
          /* @__PURE__ */ jsx("li", { className: styles$q.manual__list, children: /* @__PURE__ */ jsx("span", { children: "Сделайте короткий перерыв (3-5 минут)" }) }),
          /* @__PURE__ */ jsx("li", { className: styles$q.manual__list, children: /* @__PURE__ */ jsx("span", { children: "Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(TaskForm, { taskNumber }),
      /* @__PURE__ */ jsx(TaskList, {}),
      /* @__PURE__ */ jsxs("div", { className: styles$q.tasks__time, children: [
        pomidoroDuration,
        " минут"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$q.rightContent, children: taskListDone.length > 0 ? /* @__PURE__ */ jsx(
      TimerBlock,
      {
        pomidoro: taskListDone[0].pomidoro,
        taskText: taskListDone[0].text,
        taskNumber: taskListDone[0].taskNumber,
        id: taskListDone[0].id,
        currentPomidoro: taskListDone[0].currentPomidoro
      }
    ) : null }),
    /* @__PURE__ */ jsx(
      CSSTransition,
      {
        in: isModal,
        timeout: 300,
        classNames: "modales",
        unmountOnExit: true,
        nodeRef: nodeDeleteRef,
        children: /* @__PURE__ */ jsx(DeleteModal, { id: modalStateDelete.id, nodeRef: nodeDeleteRef })
      }
    ),
    /* @__PURE__ */ jsx(
      CSSTransition,
      {
        in: isEditModal,
        timeout: 300,
        classNames: "modales",
        unmountOnExit: true,
        nodeRef: nodeChangeRef,
        children: /* @__PURE__ */ jsx(ChangeModal, { nodeRef: nodeChangeRef })
      }
    )
  ] });
}
const statisticSelect = "_statisticSelect_bdft4_1";
const statisticSelectOption = "_statisticSelectOption_bdft4_13";
const statisticSelectButton = "_statisticSelectButton_bdft4_29";
const statisticSelectDropdown = "_statisticSelectDropdown_bdft4_95";
const statisticSelectList = "_statisticSelectList_bdft4_107";
const styles$4 = {
  statisticSelect,
  statisticSelectOption,
  statisticSelectButton,
  statisticSelectDropdown,
  statisticSelectList
};
const initialState = [
  { currentWeek: "Эта неделя", active: true, weekDay: 0 },
  { currentWeek: "Прошедшая неделя", active: false, weekDay: 7 },
  { currentWeek: "2 недели назад", active: false, weekDay: 14 }
];
const choiceWeekSlice = createSlice({
  name: "choiceWeek",
  initialState,
  reducers: {
    choosingTheWeek: (state, action) => {
      state.forEach((e) => e.active = e.currentWeek === action.payload ? true : false);
    }
  }
});
const { choosingTheWeek } = choiceWeekSlice.actions;
choiceWeekSlice.reducer;
function SelectorChoiceWeek() {
  const choseWeek = useSelector((state) => state.choiceWeek);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const lists = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
  };
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    function handleClick(event) {
      var _a;
      if (event.target instanceof Node && !((_a = ref.current) == null ? void 0 : _a.contains(event.target))) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const chose = choseWeek.filter((e) => !e.active);
  const currentChose = choseWeek.filter((e) => e.active);
  const list = chose.map((e) => /* @__PURE__ */ jsx(motion.button, { variants: item, className: styles$4.statisticSelectList, onClick: function handleChoise() {
    dispatch(choosingTheWeek(e.currentWeek));
    setIsOpen(!isOpen);
  }, children: e.currentWeek }, e.currentWeek));
  const ref = useRef(null);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: styles$4.statisticSelect,
      ref,
      initial: "hidden",
      animate: "visible",
      variants: lists,
      children: [
        /* @__PURE__ */ jsx("button", { className: styles$4.statisticSelectButton, onClick, children: currentChose[0].currentWeek }),
        isOpen ? /* @__PURE__ */ jsx("div", { className: styles$4.statisticSelectDropdown, children: /* @__PURE__ */ jsx("div", { className: styles$4.statisticSelectOption, children: list }) }) : null
      ]
    }
  );
}
const statisticDiagramWeek = "_statisticDiagramWeek_1cdmm_1";
const styles$3 = {
  statisticDiagramWeek
};
const dateConversion = ({ statistic, currentWeekDay }) => {
  const orderedObjects = [];
  for (let i = 1; i <= 7; i++) {
    const currentDate = /* @__PURE__ */ new Date();
    let index = currentDate.getDay() + currentWeekDay;
    currentDate.setDate(currentDate.getDate() - (index - i));
    const foundObject = statistic.find((obj) => obj.currentDate === currentDate.toISOString().split("T")[0]);
    if (foundObject) {
      orderedObjects.push(foundObject);
    } else {
      orderedObjects.push({ currentDate: currentDate.toISOString().split("T")[0], timeWorking: 0 });
    }
  }
  return orderedObjects;
};
function DiagramWeek() {
  var _a;
  const statistic = useSelector((state) => state.statistic);
  const choseWeek = useSelector((state) => state.choiceWeek);
  const [statisticData, setStatisticData] = useState(new Array());
  const dispatch = useDispatch();
  const currentWeekDay = ((_a = choseWeek.find((e) => e.active === true)) == null ? void 0 : _a.weekDay) || 0;
  useEffect(() => {
    const dataStat = dateConversion({ statistic, currentWeekDay });
    setStatisticData(dataStat);
  }, [statistic, choseWeek]);
  const chartRef = useRef();
  const onClick = (event) => {
    const elem = getElementAtEvent(chartRef.current, event);
    if (elem.length > 0) {
      const index = elem[0].index;
      dispatch(activeDay(statisticData[index].currentDate));
    }
  };
  const data = {
    labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
    datasets: [{
      data: statisticData.map((e) => e.timeWorking),
      backgroundColor: "#EA8979",
      links: [""]
    }]
  };
  return /* @__PURE__ */ jsx("div", { className: styles$3.statisticDiagramWeek, children: /* @__PURE__ */ jsx(
    Bar,
    {
      data,
      ref: chartRef,
      onClick,
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        events: ["click", "mousemove"],
        scales: {
          y: {
            min: 0,
            max: 100,
            position: "right",
            border: {
              display: false
            },
            ticks: {
              stepSize: 25,
              callback: function(value) {
                if (value === 0) {
                  return null;
                }
                let hours;
                if (+value < 60) {
                  return value + " мин";
                }
                if (+value >= 60) {
                  hours = Math.floor(+value / 60);
                  value = +value - hours * 60;
                  return hours + " час " + value + " мин";
                }
              }
            }
          },
          x: {
            backgroundColor: "#ECECEC",
            grid: {
              display: false
            }
          }
        }
      }
    }
  ) });
}
const statisticBlockContent = "_statisticBlockContent_1iod8_1";
const statisticLeftBlock = "_statisticLeftBlock_1iod8_11";
const statisticDayBlock = "_statisticDayBlock_1iod8_23";
const statisticDayTitle = "_statisticDayTitle_1iod8_39";
const statisticDayDescr = "_statisticDayDescr_1iod8_55";
const statisticDaySpan = "_statisticDaySpan_1iod8_71";
const statisticPomidoroDayDescr = "_statisticPomidoroDayDescr_1iod8_83";
const statisticPomidoroDayButton = "_statisticPomidoroDayButton_1iod8_113";
const styles$2 = {
  statisticBlockContent,
  statisticLeftBlock,
  statisticDayBlock,
  statisticDayTitle,
  statisticDayDescr,
  statisticDaySpan,
  statisticPomidoroDayDescr,
  statisticPomidoroDayButton
};
function StatisticBlockContent() {
  const statistic = useSelector((state) => state.statistic);
  const [activeDay2, setActiveDay] = useState(statistic);
  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const date = new Date(activeDay2.length > 0 ? activeDay2[0].currentDate : "");
  const indexDay = date.getDay();
  const dayOfWeek = daysOfWeek[indexDay];
  useEffect(() => {
    if (statistic.length > 0) {
      const filteredActiveDay = statistic.filter((e) => e.activeDay);
      setActiveDay(filteredActiveDay);
    }
  }, [statistic]);
  return /* @__PURE__ */ jsxs("div", { className: styles$2.statisticBlockContent, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$2.statisticLeftBlock, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$2.statisticDayBlock, children: [
        /* @__PURE__ */ jsx("h3", { className: styles$2.statisticDayTitle, children: dayOfWeek || "Выберите день" }),
        /* @__PURE__ */ jsxs("p", { className: styles$2.statisticDayDescr, children: [
          "Вы работали над задачами в течение ",
          /* @__PURE__ */ jsxs("span", { className: "statisticDaySpan", children: [
            activeDay2.length > 0 ? activeDay2[0].timeWorking : 0,
            " минут"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$2.statisticPomidoroDay, children: [
        /* @__PURE__ */ jsxs("p", { className: styles$2.statisticPomidoroDayDescr, children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(TomatoStat, {}) }),
          " x ",
          activeDay2.length > 0 ? activeDay2[0].quantityPomidoro : 0
        ] }),
        /* @__PURE__ */ jsxs("button", { className: styles$2.statisticPomidoroDayButton, children: [
          activeDay2.length > 0 ? activeDay2[0].quantityPomidoro : 0,
          " помидор"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(DiagramWeek, {})
  ] });
}
const statisticDay = "_statisticDay_153cq_1";
const statistickDayInfo = "_statistickDayInfo_153cq_13";
const statistickDayFocus = "_statistickDayFocus_153cq_29";
const statisticDayPause = "_statisticDayPause_153cq_41";
const statisticDayStops = "_statisticDayStops_153cq_53";
const statisticInfoTitle = "_statisticInfoTitle_153cq_63";
const statisticInfoDescr = "_statisticInfoDescr_153cq_79";
const styles$1 = {
  statisticDay,
  statistickDayInfo,
  statistickDayFocus,
  statisticDayPause,
  statisticDayStops,
  statisticInfoTitle,
  statisticInfoDescr
};
function StatisticDayInfo() {
  const statistic = useSelector((state) => state.statistic);
  const [activeDay2, setActiveDay] = useState(statistic);
  useEffect(() => {
    if (statistic.length > 0) {
      const filteredActiveDay = statistic.filter((e) => e.activeDay);
      setActiveDay(filteredActiveDay);
    }
  }, [statistic]);
  return /* @__PURE__ */ jsxs("div", { className: styles$1.statisticDay, children: [
    /* @__PURE__ */ jsxs("div", { className: `${styles$1.statistickDayInfo} ${styles$1.statistickDayFocus}`, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$1.statisticInfoTitle, children: "Фокус" }),
      /* @__PURE__ */ jsxs("p", { className: styles$1.statisticInfoDescr, children: [
        activeDay2.length > 0 ? activeDay2[0].focus : 0,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${styles$1.statistickDayInfo} ${styles$1.statisticDayPause}`, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$1.statisticInfoTitle, children: "Время на паузе" }),
      /* @__PURE__ */ jsxs("p", { className: styles$1.statisticInfoDescr, children: [
        activeDay2.length > 0 ? activeDay2[0].quantityTimeOnPause : 0,
        "м"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${styles$1.statistickDayInfo} ${styles$1.statisticDayStops}`, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$1.statisticInfoTitle, children: "Остановки" }),
      /* @__PURE__ */ jsx("p", { className: styles$1.statisticInfoDescr, children: activeDay2.length > 0 ? activeDay2[0].stops : 0 })
    ] })
  ] });
}
const statisticPage = "_statisticPage_yum8i_1";
const statistickHead = "_statistickHead_yum8i_19";
const statisticTitle = "_statisticTitle_yum8i_35";
const styles = {
  statisticPage,
  statistickHead,
  statisticTitle
};
function StatisticPage() {
  return /* @__PURE__ */ jsxs("div", { className: styles.statisticPage, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.statistickHead, children: [
      /* @__PURE__ */ jsx("h2", { className: styles.statisticTitle, children: "Ваша активность" }),
      /* @__PURE__ */ jsx(SelectorChoiceWeek, {})
    ] }),
    /* @__PURE__ */ jsx(StatisticBlockContent, {}),
    /* @__PURE__ */ jsx(StatisticDayInfo, {})
  ] });
}
function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: mounted && /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(TimerPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/stat", element: /* @__PURE__ */ jsx(StatisticPage, {}) })
    ] }) })
  ] }) });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
