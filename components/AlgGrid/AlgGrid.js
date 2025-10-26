"use client";
import { useEffect, useState } from "react";
import styles from "./AlgGrid.module.css";
import ColorSchemeSelector from "../ColorSchemeSelector/ColorSchemeSelector";
import Cube from "cubejs/lib/cube";
export default function AlgGrid({algSource, SvgComponent}) {
    const [algset, setAlgset] = useState({});
    const [colorScheme, setColorScheme] = useState([]);

    // Fetch algorithms from algSource
    useEffect(() => {
        fetch(algSource)
        .then(res => res.json())
        .then(data =>{/*console.log(data);*/ setAlgset(data)});
    }, []);

    function createLinkAlg(alg) {
        return alg.split("'").join("-").split(" ").join("_").split("M2").join("M2'");
    }

    function RenderCategory({category}) {
        return (
            <>
                <h2 className={styles.categoryTitle}>
                    {category.categoryName}
                </h2>
                <ul className={`${category.subcategories? styles.categoryList : styles.caseList}`}>
                {/*algorithms*/}
                {category.algs?.map(({name, alg}) => { 
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
                })}
                {/*subcategories*/}
                {category.subcategories && category.subcategories.map((subcategory, index) => (
                    <RenderCategory key={index} category={subcategory} />
                ))}
                </ul>
            </>
        );
    }

function RenderCategory2({ category }) {
    return (
        <div className={styles.categoryContainer}>
            <h2 className={styles.categoryTitle}>{category.categoryName || category.name}</h2>
            <ul className={styles.categoryContentContainer}>
            {category.algs?.map(({ name, alg }) => (
                <li key={name}>
                <p className={styles.caseTitle}>{name}:</p>
                <p className={styles.caseAlg}>{alg}</p>
                </li>
            ))}
            </ul>

            {/* Recursively render subcategories if any */}
            {category.subcategories?.map((sub) => (
            <RenderCategory key={sub.name} category={sub} />
            ))}
        </div>
    );
}

    return (
        <>
            <ColorSchemeSelector colorScheme={colorScheme} setColorScheme={setColorScheme} />
            {
                /*algset.categories &&
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
                                
                            )
                            
                            </ul>
                        </div>
                    ))*/
            }
            <div className={`${styles.categoryList} ${styles.topContainer}`}>
                {(Array.isArray(algset)
                    ? algset
                    : algset && algset.categories
                    ? Object.values(algset.categories)
                    : []
                ).map((category, index) => (
                    <RenderCategory category={category} key={index} />
                ))}
            </div>
            
        </>
    );
}