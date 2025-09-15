import { useEffect, useState } from "react";
import styles from "./AlgGrid.module.css";
export default function AlgGrid({algSource, SvgComponent, colorScheme}) {
    const [algset, setAlgset] = useState({});
    useEffect(() => {
        fetch(algSource)
        .then(res => res.json())
        .then(data => setAlgset(data));
    }, []);
    return (
        <>
            {
                algset.categories &&
                    Object.entries(algset.categories).map(([category, algs]) => (
                        <div className={styles.categoryContainer} key={category}>
                            <h2 className={styles.categoryTitle}>{category}</h2>
                            <ul className={styles.caseContainer}>
                            {algs.map(({ name, alg }) => (
                                <li key={name} className={styles.case}>
                                    <SvgComponent className={styles.svg} algorithm={alg.split("’").join("'").split("(").join("").split(")").join("").split("2'").join("2")} colorScheme={colorScheme} />
                                    <div className={styles.caseInfo}>
                                        <p className={styles.caseTitle}>{name}:</p>
                                        <p className={styles.caseAlg}>{alg}</p>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))
            }
            
        </>
    );
}