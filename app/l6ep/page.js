import AlgGrid from "@/components/AlgGrid/AlgGrid";
import GetLseCaseSVG from "@/public/algorithms/l6ep/l6ep.js";

export default function RouxLSE() {
    return (
        <>
            <div className="description">
                <p className="title"> Description: </p>
                
                    <p>You can view the source i used  <a href='https://docs.google.com/spreadsheets/d/1_V7I5yWftss7ezdfhs43eMoon8S3I6z6boeQmiH6lgU/edit?gid=1941046113#gid=1941046113'>here</a> and check what <a href="https://www.speedsolving.com/wiki/index.php?title=LSE#L6EP">SpeedSolving.com</a> says.</p>
                    <p className="subtitle">Please note that:</p>
                    <ul>
                        <li>This is not the recommended way to solve L6E(the Last 6 Edges) in Roux, this is an experimental approach.</li>
                        <li>The algorithms were selected by me, and I&apos;m not a proffessional. Feel free to explore other alternatives from the source or anywhere else.</li>
                        <li>I only included algorithms that use only M and U moves. In some cases the top recommendations use R, r or other moves.</li>
                    </ul>
                
            </div>
            <AlgGrid algSource={"/algorithms/l6ep/l6ep.json"} SvgComponent={GetLseCaseSVG} />
        </>
    )
}