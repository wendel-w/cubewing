"use client";
import { useEffect, useState } from "react";
import styles from "./AlgGrid.module.css";
import ColorSchemeSelector from "../ColorSchemeSelector/ColorSchemeSelector";
import Cube from "cubejs/lib/cube";
export default function AlgGrid({algSource, SvgComponent}) {
    const [algset, setAlgset] = useState({});
    const [colorScheme, setColorScheme] = useState({});
    useEffect(() => {
        fetch(algSource)
        .then(res => res.json())
        .then(data => setAlgset(data));
    }, []);
    function createLinkAlg(alg) {
        return alg.split("'").join("-").split(" ").join("_");
    }
    return (
        <>
            <ColorSchemeSelector colorScheme={colorScheme} setColorScheme={setColorScheme} />
            {
                algset.categories &&
                    Object.entries(algset.categories).map(([category, algs]) => (
                        <div className={styles.categoryContainer} key={category}>
                            <h2 className={styles.categoryTitle}>{category}</h2>
                            <ul className={styles.caseContainer}>
                            {algs.map(({ name, alg }) =>{ 
                                const cleanAlg = alg.split("’").join("'").split("(").join("").split(")").join("").split("2'").join("2");
                                const inverseCleanAlg = Cube.inverse(cleanAlg);
                                const linkAlg = createLinkAlg(cleanAlg);
                                const linkInverseAlg = createLinkAlg(inverseCleanAlg);

                                return(
                                <li key={name} className={styles.case}>
                                    <a className={styles.a} target="_blank" rel="noopener noreferrer" href={`https://alg.cubing.net/?setup=${linkInverseAlg}&alg=${linkAlg}`}>
                                        <SvgComponent className={styles.svg} algorithm={cleanAlg} colorScheme={colorScheme} />
                                    </a>
                                    <div className={styles.caseInfo}>
                                        <p className={styles.caseTitle}>{name}:</p>
                                        <p className={styles.caseAlg}>{alg}</p>
                                    </div>
                                </li>
                                );
                            }
                            )}
                            </ul>
                        </div>
                    ))
            }
            
        </>
    );
}