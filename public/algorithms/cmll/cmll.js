"use client";
import Cube from 'cubejs';
import { use, useEffect, useState } from 'react';
import './cmll.css';
export default function GetCmllCaseSVG({className, style, algorithm, colorScheme}) {
   const [cubeState, setCubeState] = useState('');
   const [stickers, setStickers] = useState([]);

   useEffect(() => {
      let cube = new Cube();
      cube.move(Cube.inverse(algorithm));
      setCubeState(cube.asString());


   }, []);
   function getColor(face) {
      switch(face) {
         case "U":
            return colorScheme.U;
         case "L":
            return colorScheme.L;
         case "F":
            return colorScheme.F;
         case "R":
            return colorScheme.R;
         case "B":
            return colorScheme.B;
         case "D":
            return colorScheme.D;
      }
   }
   function getStickerColor(sticker) {
      switch(sticker) {
         case "BACK":
            return "#262626";
         case "grey":
            return "#a38b8b";
         case "A":return getColor(cubeState[0]);
         case "B":return getColor(cubeState[2]);
         case "C":return getColor(cubeState[8]);
         case "D":return getColor(cubeState[6]);
         case "E":return getColor(cubeState[36]);
         case "F":return getColor(cubeState[38]);
         case "I":return getColor(cubeState[18]);
         case "J":return getColor(cubeState[20]);
         case "M":return getColor(cubeState[9]);
         case "N":return getColor(cubeState[11]);
         case "Q":return getColor(cubeState[45]);
         case "R":return getColor(cubeState[47]);
      }
   }
   function getStyle(sticker) {
      return {
         fill:getStickerColor(sticker)
      }
   }
   return (
      <div className={className} style={style}>
         <svg
            width="148"
            height="148"
            viewBox="0 0 39.158333 39.158333"
            version="1.1"
            id="svg5"
            xmlns="http://www.w3.org/2000/svg">
            <defs
               id="defs2" />
               <g
                  id="layer1">
                  <path
                     style={getStyle("BACK")}
                     d="M 7.4083333,0 6.6145833,6.6145833 -9.6666668e-8,7.4083333 V 31.75 L 6.6145833,32.54375 l 0.79375,6.614583 H 31.75 L 32.54375,32.54375 39.158334,31.75 V 7.4083333 L 32.54375,6.6145833 31.75,0 Z"
                     id="BACK" />
                  <path
                     style={getStyle("B")}
                     d="m 24.077086,15.081248 h 7.9375 V 7.14375 h -7.9375 z"
                     id="B" />
                  <path
                     style={getStyle("C")}
                     d="m 24.077086,32.014583 h 7.9375 v -7.9375 h -7.9375 z"
                     id="C" />
                  <path
                     style={getStyle("A")}
                     d="M 7.1437499,15.081248 H 15.081252 V 7.14375 H 7.1437499 Z"
                     id="A" />
                  <path
                     style={getStyle("D")}
                     d="m 7.1437522,32.014583 h 7.9374998 v -7.9375 H 7.1437522 Z"
                     id="D" />
                  <path
                     style={getStyle("grey")}
                     d="m 15.61042,7.14375 h 7.9375 c 0,7.9375 0,7.9375 -3.96875,7.9375 -3.96875,0 -3.96875,0 -3.96875,-7.9375 z"
                     id="path7872" />
                  <path
                     style={getStyle("grey")}
                     d="m 23.54792,32.014583 h -7.9375 c 0,-7.9375 0,-7.9375 3.96875,-7.9375 3.96875,0 3.96875,0 3.96875,7.9375 z"
                     id="path7874" />
                  <path
                     style={getStyle("grey")}
                     d="m 7.1437522,23.547916 v -7.9375 c 7.9375008,0 7.9375008,0 7.9375008,3.96875 0,3.96875 0,3.96875 -7.9375008,3.96875 z"
                     id="path7876" />
                  <path
                     style={getStyle("grey")}
                     d="m 32.014586,15.610416 v 7.9375 c -7.9375,0 -7.9375,0 -7.9375,-3.96875 0,-3.96875 0,-3.96875 7.9375,-3.96875 z"
                     id="path7878" />
                  <path
                     style={getStyle("grey")}
                     d="m 15.61042,19.579166 c 0,3.96875 0,3.96875 3.96875,3.96875 3.96875,0 3.96875,0 3.96875,-3.96875 0,-3.96875 0,-3.96875 -3.96875,-3.96875 -3.96875,0 -3.96875,0 -3.96875,3.96875 z"
                     id="path188-5" />
                  <path
                     style={getStyle("R")}
                     d="M 7.1437499,6.35 H 15.08125 V 0.52916677 l -7.4083334,-2e-7 z"
                     id="R" />
                  <path
                     style={getStyle("grey")}
                     d="m 15.610417,6.3499999 h 7.9375 V 0.52916667 h -7.9375 z"
                     id="path9015-7" />
                  <path
                     style={getStyle("Q")}
                     d="m 24.077084,6.3499999 h 7.9375 l -0.79375,-5.82083333 -7.14375,10e-8 z"
                     id="Q" />
                  <path
                     style={getStyle("N")}
                     d="m 32.808334,7.14375 v 7.9375 h 5.820834 l -10e-7,-7.14375 z"
                     id="N" />
                  <path
                     style={getStyle("grey")}
                     d="m 32.808334,15.610416 v 7.937501 h 5.820834 v -7.937501 z"
                     id="path9015-9-3-7" />
                  <path
                     style={getStyle("M")}
                     d="m 32.808334,24.077083 v 7.9375 l 5.820833,-0.529167 10e-7,-7.408333 z"
                     id="M" />
                  <path
                     style={getStyle("J")}
                     d="m 24.077084,38.629166 h 7.408333 l 0.529167,-5.820833 h -7.9375 z"
                     id="J" />
                  <path
                     style={getStyle("grey")}
                     d="m 15.610417,38.629166 h 7.9375 v -5.820833 h -7.9375 z"
                     id="path9015-9-2-0" />
                  <path
                     style={getStyle("I")}
                     d="M 7.6729166,38.629166 H 15.08125 V 32.808333 H 7.1437499 Z"
                     id="I" />
                  <path
                     style={getStyle("E")}
                     d="M 0.52916663,7.6729166 V 15.08125 H 6.3500006 v -7.9375 z"
                     id="E" />
                  <path
                     style={getStyle("grey")}
                     d="m 0.52916663,15.610416 v 7.937501 H 6.3500006 v -7.937501 z"
                     id="path9471" />
                  <path
                     style={getStyle("F")}
                     d="m 0.52916663,24.077083 v 7.408333 l 5.82083397,0.529167 v -7.9375 z"
                     id="F" />
               </g>
         </svg>

        </div>
    );
}