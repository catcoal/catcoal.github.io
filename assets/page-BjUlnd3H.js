import{r as o,j as s}from"./index-Cc1FA9YN.js";function h(){const n=o.useRef(null);let[r,t]=p(n);return s.jsx("div",{className:"w-full h-full flex items-center justify-center p-10",children:s.jsx("div",{ref:n,style:{transform:`perspective(500px) rotateX(${-t}deg) rotateY(${r}deg) scale3d(1, 1, 1)`},className:"flex items-center justify-center w-1/2 min-h-28 bg-slate-300 rounded-2xl",children:s.jsx("p",{className:"text-blue-500 text-3xl pointer-events-none font-bold select-none",style:{transform:`translate(${r*3}px,${t*3}px)`},children:"content"})})})}const p=n=>{const[r,t]=o.useState([0,0]);return o.useEffect(()=>{const e=n.current;if(!e)return;const i=({offsetX:a,offsetY:d})=>{const{clientWidth:u,clientHeight:x}=e,f=(a-u/2)/10*2,v=(d-x/2)/10*2;t([f,v])},l=()=>{t([0,0])},c=()=>{e.removeEventListener("pointermove",i),e.removeEventListener("pointerleave",l)};return e.addEventListener("pointerleave",l),e.addEventListener("pointermove",i),c},[]),r};export{h as default};
