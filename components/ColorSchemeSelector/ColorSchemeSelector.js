"use client";
import {useEffect} from "react";
import styles from "./ColorSchemeSelector.module.css";

export default function ColorSchemeSelector({colorScheme, setColorScheme}) {

    function rotate(direction) {
        setColorScheme(prev => {
        let localColorScheme = { ...prev };
        let helper;

        console.log("rotating", direction);

        if (direction === "x") {
            helper = localColorScheme.U;
            localColorScheme.U = localColorScheme.F;
            localColorScheme.F = localColorScheme.D;
            localColorScheme.D = localColorScheme.B;
            localColorScheme.B = helper;
        } else if (direction === "y") {
            helper = localColorScheme.F;
            localColorScheme.F = localColorScheme.R;
            localColorScheme.R = localColorScheme.B;
            localColorScheme.B = localColorScheme.L;
            localColorScheme.L = helper;
        } else if (direction === "z") {
            helper = localColorScheme.U;
            localColorScheme.U = localColorScheme.L;
            localColorScheme.L = localColorScheme.D;
            localColorScheme.D = localColorScheme.R;
            localColorScheme.R = helper;
        }

        return localColorScheme;
        });
    }

    function setTopColor(color){
        let localColorScheme = {...colorScheme};
        switch(color) {
            case localColorScheme.U:
                console.log("detected U");
                break;

            case localColorScheme.D:
                console.log("detected D");
                rotate('z');
                rotate('z');
                break;

            case localColorScheme.F:
                console.log("detected F");
                rotate('x');
                break;

            case localColorScheme.B:
                rotate('x');
                rotate('x');
                rotate('x');
                break;

            case localColorScheme.L:
                console.log("detected L");    
                rotate('z');
                break;

            case localColorScheme.R:
                rotate('z');
                rotate('z');
                rotate('z');
                break;
        }
    }

    function setFrontColor(color){
        let localColorScheme = {...colorScheme};
        switch(color) {
            case localColorScheme.F:
                console.log("detected F");
                break;

            case localColorScheme.B:
                console.log("detected B");
                rotate('y');
                rotate('y');
                break;

            case localColorScheme.L:
                console.log("detected L");
                rotate('y');
                rotate('y');
                rotate('y');
                break;

            case localColorScheme.R:
                rotate('y');break;
        }
    }

    useEffect(() => {
        setColorScheme({U: 'White', D: 'Yellow', F: 'Green', B: 'Blue', L: 'Orange', R: 'Red'});
    }, []);
    useEffect(() => {
        console.log("Color scheme change detected in selector:");
        console.log(colorScheme);
    }, [colorScheme]);

    return (
        <div className={styles.colorSchemeSelector}>
            <p className={styles.title}>Select top color:</p>
            <div className={styles.circleContainer}> 
                <Circle color={"White"} target={'top'} />
                <Circle color={"Yellow"} target={'top'} />
                <Circle color={"Green"} target={'top'} />
                <Circle color={"Blue"} target={'top'} />
                <Circle color={"Red"} target={'top'} />
                <Circle color={"Orange"} target={'top'} />
            </div>
            <p className={styles.title}>Select front color:</p>
            <div className={styles.circleContainer}> 
                <Circle color={colorScheme.F} target={'front'} />
                <Circle color={colorScheme.B} target={'front'} />
                <Circle color={colorScheme.L} target={'front'} />
                <Circle color={colorScheme.R} target={'front'} />
            </div>
        </div>
    );
    function Circle({color, target}) {
        function setColor() {
            if (target === "top") {
                setTopColor(color);
            } else{
                setFrontColor(color);
            }
        }
        return (
            <svg className={styles.circle} viewBox="0 0 20 20">
                {
                    ((target === 'top' && colorScheme.U === color) || (target === 'front' && colorScheme.F === color)) && (
                        <>
                            <circle cx="10" cy="10" r="9" stroke="black" strokeWidth="2" fill="none" />
                            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1" fill="none" />
                        </>
                    )
                }
                <circle  onClick={()=>setColor()} cx="10" cy="10" r="8" fill={color} />
            </svg>
        );
    }
}