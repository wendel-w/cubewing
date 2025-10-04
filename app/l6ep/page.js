import AlgGrid from "@/components/AlgGrid/AlgGrid";
import GetLseCaseSVG from "@/public/algorithms/l6ep/l6ep.js";

export default function RouxLSE() {
    return (
        <>
            <div>Roux LSE Page</div>
            <AlgGrid algSource={"/algorithms/l6ep/l6ep.json"} SvgComponent={GetLseCaseSVG} />
        </>
    )
}