import GTMComp1 from "./Components/GTMComp1";
import GTMComp2a from "./Components/GTMComp2a";
import GTMComp3 from "./Components/GTMComp3";
import GTMComp4 from "./Components/GTMComp4";
import GTMComp5 from "./Components/GTMComp5";
import GTMComp6 from "./Components/GTMComp6";
import GTMComp7 from "./Components/GTMComp7";
import GTMComp8 from "./Components/GTMComp8";
import GTMComp9 from "./Components/GTMComp9";
import GTMComp10 from "./Components/GTMComp10";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import GTMVectorComp from "./Components/GTMVectorComp";
import { useMediaQuery } from "react-responsive";

export default function GoToMarketing() {
    const showVector = useMediaQuery({ query: "(max-width: 1200px)" });
    return (
        <div className="">
            <GTMComp1 />
            <GTMComp2a />
            <GTMComp3 />
            <GTMComp4 />
            <GTMComp5 />
            <GTMComp6 />
            {!showVector && <GTMVectorComp />}
            <GTMComp7 />
            <GTMComp8 />
            <GTMComp9 />
            <GTMComp10 />
        </div>
    )
}
