import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

// eslint-disable-next-line react/prop-types
function VideoPlayer({ className }) {
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        const smallScreenSrc = "https://bmw.scene7.com/is/content/BMW/BMW2407023_BR93929_BMW_NSC_DLR_G68_Resize_Adapt_July2024_IndiaAdapt_1080x1920-AVS.m3u8";
        const largeScreenSrc = "https://bmw.scene7.com/is/content/BMW/240708 BMW THE 5 LAUNCH_India_444-AVS.m3u8";

        const updateVideoSource = () => {
            const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
            setVideoSrc(isSmallScreen ? smallScreenSrc : largeScreenSrc);
        };

        updateVideoSource();

        const mediaQueryList = window.matchMedia("(max-width: 768px)");
        mediaQueryList.addEventListener("change", updateVideoSource);

        return () => mediaQueryList.removeEventListener("change", updateVideoSource);
    }, []);

    useEffect(() => {
        if (Hls.isSupported() && videoRef.current && videoSrc) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(videoRef.current);
            return () => {
                hls.destroy();
            };
        }
    }, [videoSrc]);

    return (
        <video
            className={className}
            ref={videoRef}
            autoPlay
            loop
            muted
        />
    );
}

export default VideoPlayer;
