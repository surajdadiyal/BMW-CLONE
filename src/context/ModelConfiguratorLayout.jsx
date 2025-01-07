import Sedan from "./configurator-models/Sedan";
import Coupe from "./configurator-models/Coupe";
import Roadster from "./configurator-models/Roadster";
import Sports from "./configurator-models/Sports";
import IModel from "./configurator-models/Imodel";
import GranCoupe from "./configurator-models/GranCoupe";
import GranTurismo from "./configurator-models/GranTurismo"

function ModelConfiguratorLayout() {
    return (
        <div className="'w-full flex items-center justify-center flex-col pb-10">
            <Sedan/>
            <Coupe />
            <Roadster/>
            <Sports/>
            <IModel/>
            <GranCoupe/>
            <GranTurismo/>
        </div>
    )
}

export default ModelConfiguratorLayout