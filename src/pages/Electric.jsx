import { useEffect, useState } from "react";
import data from "../db/data";
import ElectricLargeLayout from "../responsive-view/large-device/electric/ElectricLargeLayout";
import ElectricTabLayout from "../responsive-view/tab-device/electric/ElectricTabLayout";
import ElectricMobileLayout from "../responsive-view/mobile-device/electric/ElectricMobileLayout";

function Electric() {

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
        if (screenSize === "mobile") return <ElectricMobileLayout data={data.mobile} />;
        if (screenSize === "tablet") return <ElectricTabLayout data={data.tablet} />;
        return <ElectricLargeLayout data={data.large} />;
    };
    return (
        <div className="flex items-center justify-center">
            {renderView()}
        </div>
    )
}

export default Electric