import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../db/data";
import Image from "../ui/Image";
import Button from "../ui/Button";
import ShinyText from "../ui/ShinyText";

import { FaUserAlt,FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Visit() {
    const [screenSize, setScreenSize] = useState("large");

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setScreenSize("mobile");
        } else if (width >= 768 && width < 1024) {
            setScreenSize("tablet");
        } else {
            setScreenSize("large");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const icons = [
        { icon: <FaUserAlt />, to: "/", text: "Contact Us" },
        { icon: <FaLocationDot />, to: "/", text: "Dealer Locator" },
        { icon: <FaCar />, to:"/", text: "Book a Test Drive" },
    ];

    const list = [
        { para: "The BMW 2 Series Gran Coupé 220i M Sport." },
        { para: "The BMW 3 Series Gran Limousine 330Li M Sport." },
        { para: "The BMW 7 Series Sedan 740i M Sport." },
        { para: "The BMW X1 sDrive18i M Sport." },
        { para: "The BMW X3 xDrive20d xLine." },
        { para: "The BMW X5 xDrive40i xLine." },
        { para: "The BMW X7 xDrive40i M Sport." },
        { para: "The BMW iX1 xDrive30 M Sport." },
        { para: "The BMW iX xDrive50." },
        { para: "The BMW i5 M60 xDrive." },
        { para: "The BMW i7 eDrive50." },
    ];

    return (
        <div className='w-full flex flex-1 flex-wrap items-center justify-center bg-neutral-950'>
            <div className="w-full flex flex-wrap items-center justify-center ">
                
                <div data-aos="zoom-in"
                    data-aos-duration="2000"
                    className="w-full flex items-center justify-center">
                    <Image
                        src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Topics/Special-offers/2023/june/offer-banner.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1686043102851.jpg"
                        alt="banner"
                        className={'w-full object-cover'}
                        loading={'lazy'}
                    />
                </div>
            </div>

            <div className='w-full flex flex-wrap items-center justify-start'>
                {data.map(({ heading, title, image, content, button_one, type }, index) => {
                    const category = type === "VISIT"
                    return (category && (
                        <div
                            key={index}
                            className='w-full flex flex-wrap flex-col items-center justify-center py-2 lg:py-5'>
                            <div className='w-full flex flex-wrap items-center justify-start'>
                                <div className="w-full flex flex-wrap items-center justify-center lg:py-4">
                                    <div data-aos="zoom-in"
                                        data-aos-duration="3000"
                                        className="w-11/12 flex items-start justify-start flex-col lg:w-4/5"
                                    >
                                        <ShinyText
                                            text={heading}
                                            className={"text-2xl font-medium lg:text-4xl lg:font-normal"}
                                            disabled={false}
                                            speed={3}
                                        />
                                        <br />
                                        <h3 className="text-xl font-normal lg:text-2xl lg:font-normal text-white/65">{title}</h3>
                                    </div>
                                </div>

                                <div className="w-full flex flex-wrap items-center justify-center py-2 lg:py-4">
                                    <div className="w-11/12 flex flex-wrap items-center justify-start pt-8 lg:w-4/5">
                                        <div className="w-1/2 flex border-b-4 border-white/65 lg:w-1/4"></div>
                                    </div>
                                </div>

                                <div className="w-full flex flex-wrap items-center justify-center py-1 lg:py-4">
                                    <div data-aos="fade-right"
                                        data-aos-duration="3000"
                                        className="w-full flex flex-wrap flex-col items-center justify-evenly lg:w-4/5 lg:items-start lg:flex-row"
                                    >
                                        <div
                                            className="w-11/12 flex flex-wrap items-start justify-start lg:w-2/4"
                                        >
                                            <Image
                                                src={image[screenSize]}
                                                alt={image[screenSize]}
                                                className={'w-full object-cover hover:rounded-md hover:scale-110 transition-all duration-300'}
                                                loading={'lazy'}
                                                width={"100%"}
                                            />
                                        </div>
                                        <div className="w-11/12 flex flex-wrap flex-col items-start justify-start px-6 my-2.5 md:my-4 lg:w-2/4 lg:my-0 lg:px-10">
                                            <ul data-aos="fade-left"
                                                data-aos-duration="3000"
                                                className="w-full flex flex-col items-start justify-start list-disc space-y-2"
                                            >
                                                {content.map((newcontent, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="text-sm text-white/65 font-medium lg:text-base"
                                                        >
                                                            {newcontent}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <div className="w-full flex justify-evenly items-end gap-1 my-2">
                                                <Link className='w-full flex justify-center items-center' to='/'>
                                                    <Button
                                                        key={button_one}
                                                        className="w-full flex justify-center items-center p-4 h-16 bg-neutral-900 border-white/45 border hover:rounded-md font-bold text-white shadow-lg transition ease-in-out duration-200 translate-10"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                })}
            </div>

            <div className='w-full flex  flex-wrap items-center justify-center py-2.5 lg:py-5'>
                <div data-aos="zoom-out"
                    data-aos-duration="3000"
                    className='w-11/12 flex flex-col items-center justify-evenly space-y-4 md:w-11/12 lg:gap-x-4 lg:w-4/5 lg:flex-row lg:space-y-0'
                >
                    {icons.map(({ icon, href, text }, index) => (
                        <Link
                            key={index}
                            to={href}
                            className='w-full flex items-center justify-center flex-wrap h-16 lg:h-32 bg-neutral-800 hover:bg-neutral-600 lg:w-1/3'>
                            <div className='w-full flex items-center justify-around lg:flex-col lg:justify-evenly lg:space-y-3'>
                                <span className="text-3xl text-white/65 flex items-center justify-center">{icon}</span>
                                <h4 className="text-xl text-left font-medium text-white/65">{text}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='w-full flex flex-wrap flex-col items-center justify-center py-5'>
                <div data-aos="zoom-out"
                    data-aos-duration="3000"
                    className='w-11/12 flex flex-col items-start justify-center lg:w-4/5'
                >
                    <ShinyText
                        text={"Terms and Conditions"}
                        className={"text-3xl font-bold"}
                        disabled={false}
                        speed={3}
                    />
                    <br />
                    <p className="text-base text-left text-wrap font-medium text-white/65 italic">
                        *Terms and conditions apply. All offers are from BMW dealerships. Please contact your nearest authorized BMW dealership for detailed terms and conditions. The above offer is only available on the BMW models listed below. The above offer is all inclusive of registration charges (Delhi RTO) and service package (BSI Plus 4 years/60000 km). Taxes, if any are extra as applicable. Offer valid till May 31st , 2024 and is subject to change without prior notice. Above calculations are on a sample basis, based on a specific tenure, mileage and finance amount. Finance is at the sole discretion of BMW India Financial Services Private Limited. Corporate benefits would differ from individual to individual. Assured buyback percentages are dependent on the finance tenure and mileage chosen. The model, equipment and possible vehicle configurations illustrated in this advertisement may differ from the vehicles supplied in the Indian market.
                    </p>
                    <p className="text-base text-left text-wrap font-medium my-2 text-white/65 italic">
                        Maximum range for BEVs as per WLTP (Worldwide Harmonized Light Vehicle Test Procedure), uses a combination of city and highway usage at an average speed of 46.6 km/hr over 30 minutes. However actual driving range may vary depending upon the driving behaviour, environmental and road conditions.
                    </p>

                    <p className="text-base text-left text-wrap font-medium text-white/65 italic">
                        Final offers may vary from state to state, please contact your nearest BMW authorized dealer to get more details.
                    </p>

                    <div className='w-full flex flex-col items-start justify-center py-5 lg:w-4/5'>

                        <p className="text-base text-left text-wrap font-medium text-white/65 italic">The above offer is only available for some states and on limited units:</p>

                        <div 
                        data-aos="zoom-out"
                    data-aos-duration="3000"
                        className='w-full flex flex-col items-start justify-center pt-5'>
                            {list.map(({ para }, index) => (
                                <li
                                    key={index}
                                    className="list-disc text-base text-left text-wrap font-semibold text-white/65 italic">
                                    {para}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visit