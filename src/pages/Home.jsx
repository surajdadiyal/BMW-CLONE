import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Image from "../ui/Image";
import VideoPlayer from "../ui/VideoPlayer"
import data from "../db/data";
import HomeTabLayout from "../responsive-view/tab-device/home/HomeTabLayout";
import HomeLargeLayout from "../responsive-view/large-device/home/HomeLargeLayout";
import HomeMobileLayout from "../responsive-view/mobile-device/home/HomeMobileLayout";

function Home() {

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
        if (screenSize === "mobile") return <HomeMobileLayout data={data.mobile} />;
        if (screenSize === "tablet") return <HomeTabLayout data={data.tablet} />;
        return <HomeLargeLayout data={data.large} />;
    };

    return (
        <div className="w-full flex flex-col items-center justify-center bg-neutral-950">
            <div className="w-full flex items-center justify-center">
                <VideoPlayer
                    className={`object-cover w-full`}
                />
            </div>

            {renderView()}

            <div className="w-full flex items-center justify-center my-5">
                <div className="w-11/12 flex flex-col items-center justify-between object-cover lg:flex lg:flex-row">
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="3000"
                        className="w-full lg:w-1/2 flex items-center justify-center">
                        <Image
                            src={`https://www.bmw.in/en/index/_jcr_content/root/maincontent/contentblueprint_1532906499/contentblueprint/contentblueprint/image.coreimg.jpeg/1725636281324/homepage-specialoffers.jpeg`}
                            alt={`https://www.bmw.in/en/index/_jcr_content/root/maincontent/contentblueprint_1532906499/contentblueprint/contentblueprint/image.coreimg.jpeg/1725636281324/homepage-specialoffers.jpeg`}
                            className={`w-full object-cover hover:scale-105 hover:rounded-md transition-all ease-in-out duration-300`}
                            loading={`lazy`}
                        />
                    </div>

                    <div className="w-full my-5 flex items-center justify-center lg:w-2/5">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                            className="w-full flex flex-col items-center justify-center space-y-5 md:items-start">
                            <h2 className="font-normal text-3xl text-white">BMW Special Offers.</h2>
                            <h4 className="font-normal text-base text-center mb-2 md:text-left text-white/65">Monthly EMI starting from Rs.49999*/Month. Check Out similar BMW finance offers available across the BMW range.</h4>

                            <Button
                                className="w-72 py-3 rounded-sm border border-white hover:border-white hover:border-2 text-white/65 text-center text-base font-semibold"
                                text="Know More"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full h-1" />
        </div>
    )
}

export default Home