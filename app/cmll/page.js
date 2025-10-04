"use client";
import React from "react";
import { useEffect } from "react";
import ColorSchemeSelector from "@/components/ColorSchemeSelector/ColorSchemeSelector";
import cmll from "@/public/algorithms/cmll/cmll.json";
import GetCmllCaseSVG from "@/public/algorithms/cmll/cmll";
import AlgGrid from "@/components/AlgGrid/AlgGrid";

export default function RouxCmll() {
    const [colorScheme, setColorScheme] = React.useState({});
    return (
        <div>
            <div>
                <h1>Is The Beta version of the site</h1>
                <h1>Roux CMLL</h1>
                <p>This is the Roux CMLL page.</p>
                {/*<ColorSchemeSelector colorScheme={colorScheme} setColorScheme={setColorScheme} />*/}
            </div>
            {/*<AlgGrid algSource={"/algorithms/cmll/cmll.json"} SvgComponent={GetCmllCaseSVG} colorScheme={colorScheme} />*/}
            <AlgGrid algSource={"/algorithms/cmll/cmll.json"} SvgComponent={GetCmllCaseSVG}/>
        </div>
    );
}