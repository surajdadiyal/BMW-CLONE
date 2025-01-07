import Model2 from "./models/Model-2"
import Model3 from "./models/Model-3"
import Model7 from "./models/Model-7"
import Modeli from "./models/Model-i"
import ModelM from "./models/Model-M"
import ModelX from "./models/Model-X"
import ModelZ4 from "./models/Model-Z4"

function ModelLayout() {

    return (
        <div className='w-full flex items-center justify-center flex-col pb-10'>
            <Modeli />
            <ModelX />
            <ModelM />
            <Model7 />
            <Model3 />
            <Model2 />
            <ModelZ4 />
        </div>
    )
}

export default ModelLayout