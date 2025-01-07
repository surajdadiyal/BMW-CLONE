import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import data from "../db/data";
import MobileLayoutFooter from "../responsive-view/mobile-device/footer/MobileLayoutFooter";
import TabLayoutFooter from "../responsive-view/tab-device/footer/TabLayoutFooter";
import LargeLayoutFooter from "../responsive-view/large-device/footer/LargeLayoutFooter";

function Footer() {

    const [screenSize, setScreenSize] = useState('large')

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("mobile");
            } else if (width < 1024) {
                setScreenSize("tablet");
            } else {
                setScreenSize("large");
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const renderView = () => {
        if (screenSize === "mobile") return <MobileLayoutFooter data={data.mobile} />;
        if (screenSize === "tablet") return <TabLayoutFooter data={data.tablet} />;
        return <LargeLayoutFooter data={data.large} />;
    };

    return (
        <div className="w-full flex items-center justify-center py-5 bg-neutral-950">
            <div className="w-11/12 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-start space-x-5">
                    <span className="text-base font-normal uppercase text-white">Find Your BMW</span>
                    <Link
                        className="text-base font-semibold text-white"
                        to={'/Models'}
                    >
                        All Models
                    </Link>
                </div>

                <div className="w-full flex flex-col items-center justify-center my-5 border-t-2 border-white">
                    {renderView()}
                </div>
            </div>
        </div>
    )
}

export default Footer