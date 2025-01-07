import Button from "../../../ui/Button"
import Image from "../../../ui/Image"
import data from "../../../db/data";
import ShinyText from "../../../ui/ShinyText";
import Accordions from "../../../ui/Accordions";

function ElectricMobileLayout() {

    const listData = [
        { listdes: "Performance data as measured in the Range & Consumption test done under controlled conditions of environment, driving cycle etc. as per Whole Vehicle Type Approval Certificate issued by European Union (WLTP cycle)." },
        { listdes: "Terms and Conditions apply. For further information, please refer to the product brochure or contact your local Authorised BMW Dealer." },
        { listdes: "For available colour and upholstery combinations, please check with your local Authorised BMW Dealer." },
        { listdes: "For detailed Terms & Conditions, scope of services (inclusions & exclusions) and coverage duration (in years) & mileage (in kilometers), please refer to BSI brochure and/or contact your Authorised BMW Dealer" },
        { listdes: "The models, equipment and possible vehicle configurations illustrated in this specification sheet may differ from vehicles supplied in the Indian market." }
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center bg-neutral-950">
            <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="w-full flex items-center justify-center relative">
                <Image
                    src={`https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/i-series/i4/2023/1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1689668730065.jpg`}
                    alt={`https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/i-series/i4/2023/1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1689668730065.jpg`}
                    loading={'lazy'}
                    className={'w-full object-cover'}
                />
            </div>

            <div className="w-11/12 flex flex-col items-center justify-center my-5">
                <div
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    className="w-full flex flex-col items-start justify-center space-y-7">
                    <h2 className="text-4xl text-white font-medium">BMW ELECTRIC CARS</h2>
                    <h4 className="text-xl text-white font-normal">EXCLUSIVE FESTIVE EMI STARTING AT ₹59,999/MONTH*</h4>
                    <div className="w-4/5 flex items-center justify-start">
                        <Button
                            className="w-64 flex items-center justify-center p-5 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded-sm"
                            text="Book a test drive"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[90%] flex flex-col items-center justify-center mt-10 py-5">
                <div className="flex items-center justify-center">
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="flex items-start justify-center flex-col space-y-5">
                        <h1 className="text-4xl font-medium text-white">THE BMW ELECTRIC CARS.</h1>
                        <h4 className="text-lg font-medium text-white/65">100 % electric. 100 % driving pleasure. 100 % BMW.</h4>
                        <h5 className="text-base font-normal text-white/65">
                            Experience an entirely new sensation of sheer driving pleasure.
                            After all, nothing compares with the feeling of gliding almost
                            silently through urban or rural traffic, the instant response of
                            the electric engine and unique acceleration from stand-still. And
                            all of this is free of exhaust fumes and local emissions. Join us
                            to explore the world of BMW electric cars.
                        </h5>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-center my-5">
                    <div className="flex items-start justify-start py-5">
                        <h2 className="text-3xl font-medium text-white">EXPERIENCE THE JOY OF ELECTRIC DRIVING</h2>
                    </div>
                    
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        className="w-full flex items-center justify-center my-5">
                        <div className="flex items-center justify-center">
                            <Image
                                src={"https://www.bmw.in/content/dam/bmw/common/topics/fascination-bmw/electromobility2020-new/bev-new/bmw-emobility-bev-vc-01.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1633095055815.jpg"}
                                alt={"https://www.bmw.in/content/dam/bmw/common/topics/fascination-bmw/electromobility2020-new/bev-new/bmw-emobility-bev-vc-01.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1633095055815.jpg"}
                                className={'w-full object-cover'}
                                loading={'lazy'}
                            />
                        </div>
                    </div>
                    
                </div>

                <div
                    data-aos="zoom-out"
                    data-aos-duration="3000"
                    className="w-full flex flex-col items-start justify-center my-5"
                >
                    <div
                        className="flex items-center justify-start py-5">
                        <h2 className="text-3xl font-medium text-white">#BORNELECTRIC</h2>
                    </div>

                    {data.map((repetition, index) => {
                        const { heading, img, content, event, type, category } = repetition;
                        const show = type === "render";
                        const hide = type !== "render";
                        const render = category === "electric-view"
                        return render && (
                            <div
                                className={`${event} w-full flex flex-col items-center justify-center my-10`}
                                key={index}
                            >
                                {/* FOR EVENT RESPONSIVENESS CHECK APP.CSS */}
                                <div
                                    data-aos="zoom-in"
                                    data-aos-duration="3000"
                                    className="w-full flex">
                                    <Image
                                        src={img}
                                        alt={img}
                                        className={'w-full object-cover rounded-md'}
                                        loading={'lazy'}
                                    />
                                </div>

                                <div
                                    data-aos="zoom-out"
                                    data-aos-duration="3000"
                                    className="w-full flex flex-col p-4 space-y-5">
                                    <ShinyText
                                        text={heading}
                                        speed={3}
                                        disabled={false}
                                        className="text-3xl" />
                                    <p className="text-base font-normal text-white/65 text-justify text-wrap">{hide && content}</p>
                                    <ul>
                                        {show &&
                                            content.map((arr, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="list-disc text-white/65">
                                                        {arr}
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ACCORDIONS */}

                <div className="w-full flex flex-col items-center justify-center space-y-5">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        className="w-full flex items-center justify-start">
                        <h2 className="text-2xl text-white font-medium">FAQ: THE MOST IMPORTANT QUESTIONS AND ANSWERS ON BMW ELECTRIC CARS.</h2>
                    </div>
                    {data.map(({ img, heading, list, type }, index) => {
                        const category = type === 'Electric-accordions'
                        return category && (
                            <div
                                className="w-full flex items-center justify-center"
                                key={index}>
                                <Accordions
                                    heading={heading}
                                    className={'text-white/65 font-semibold text-left text-base'}
                                    img={img}
                                    list={list.map((lists, index) => (
                                        <li
                                            key={index}
                                            className="list-none text-white/65"
                                        >
                                            {lists}
                                        </li>
                                    ))}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className="w-full flex flex-col items-center justify-center space-y-5 my-5">
                    <div className="w-full flex items-center justify-start">
                        <h2 className="text-2xl text-white font-medium">FAQ: QUESTIONS & ANSWERS ABOUT THE RANGE OF BMW ELECTRIC CARS.</h2>
                    </div>
                    {data.map(({ img, heading, list, type }, index) => {
                        const category = type === 'Electric-accordions-second'
                        return category && (
                            <div
                                className="w-full flex items-center justify-center"
                                key={index}>
                                <Accordions
                                    heading={heading}
                                    className={'text-white/65 font-semibold text-left text-base'}
                                    img={img}
                                    list={list.map((lists, index) => (
                                        <li
                                            key={index}
                                            className="list-none text-white/65"
                                        >
                                            {lists}
                                        </li>
                                    ))}
                                />
                            </div>
                        )
                    })}
                </div>

                <div
                    data-aos="zoom-out"
                    data-aos-duration="3000"
                    className="w-full flex flex-col items-start justify-center my-5 text-white">
                    <h2 className="text-white text-3xl font-medium italic">Electric consumption and CO2 emissions.</h2>
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="w-full flex flex-col items-start justify-center py-5 space-y-1">
                        <p className="text-white/60 text-lg font-normal italic">
                            * Values are preliminary; measured according to the WLTP test
                            cycle
                        </p>
                        <p className="text-white/60 text-lg font-normal italic">
                            ** Market-specific offer valid for new vehicles from BMW
                            authorized dealerships in India.
                        </p>
                        <h4 className="text-white text-lg font-normal italic">BMW i4 eDrive40(1):</h4>
                        <h5 className="text-white/60 text-lg font-normal italic">Power consumption in kWh/100 km: 19.1 – 16.1</h5>
                        <h5 className="text-white/60 text-lg font-normal italic">CO2 emissions in g/km: 0</h5>
                        <br />
                        <h4 className="text-white text-lg font-normal italic">BMW iX xDrive50(1):</h4>
                        <h5 className="text-white/60 text-lg font-normal italic">Power consumption in kWh/100 km: 20.7-18.7</h5>
                        <h5 className="text-white/60 text-lg font-normal italic">CO2 emissions in g/km: 0</h5>
                        <br />
                        <h4 className="text-white text-lg font-normal italic">BMW i7 xDrive60*:</h4>
                        <h5 className="text-white/60 text-lg font-normal italic">Power consumption in kWh/100 km:(combined, WLTP): 19.6–18.4</h5>
                        <h5 className="text-white/60 text-lg font-normal italic">CO2 emissions in g/km: 0</h5>
                        <br />
                        <h4 className="text-white text-lg font-normal italic">BMW iX1 xDrive30 M Sport*:</h4>
                        <h5 className="text-white/60 text-lg font-normal italic">Power consumption in kWh/100 km:(combined, WLTP): 18.1–16.8</h5>
                        <h5 className="text-white/60 text-lg font-normal italic">CO2 emissions in g/km: 0</h5>
                        <br />
                        <h4 className="text-white text-lg font-normal italic">BMW i5 M60 xDrive*:</h4>
                        <h5 className="text-white/60 text-lg font-normal italic">Power consumption in kWh/100 km:(combined, WLTP): 20.6–18.2</h5>
                        <h5 className="text-white/60 text-lg font-normal italic">CO2 emissions in g/km: 0</h5>
                        <br />
                        <h4 className="text-white text-lg font-normal italic">
                            ***The model, equipment and possible vehicle configurations
                            illustrated in the advertisement may differ from the vehicle
                            supplied in the India market.
                        </h4>
                    </div>

                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="w-11/12 flex flex-col items-center justify-center my-5">
                        <ul className="list-disc">
                            {listData.map(({ listdes }, index) => <li key={index} className="py-2 italic">{listdes}</li>)}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ElectricMobileLayout