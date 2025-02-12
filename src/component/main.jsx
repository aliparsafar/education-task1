
import { Sectionnavigate } from "./sectionnavigate";
import { Sectionourbenefits } from "./sectionourbenefits";
import { Sectionourtestimonials } from "./sectionourtestimonials";

export function Main(){
    return(
        <main>
            <Sectionourbenefits />
            <Sectionourtestimonials />
            <Sectionnavigate />
        </main>
    )
}