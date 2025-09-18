import AlgGrid from "@/components/AlgGrid/AlgGrid";
import GetLseCaseSVG from "@/public/algorithms/lse/lse.js";

export default function RouxLSE() {
    return (
        <>
            <div>Roux LSE Page</div>
            <AlgGrid algSource={"/algorithms/lse/lse.json"} SvgComponent={GetLseCaseSVG} />
        </>
    )
}