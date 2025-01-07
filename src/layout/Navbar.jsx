import { Link, useLocation } from "react-router-dom"
import ToggleNavbar from "./ToggleNavbar"
import Image from "../ui/Image";
import Button from "../ui/Button";

import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    const nav = [
        { name: "Models", to: "/Models" },
        { name: "Electric", to: "/Electric" },
        { name: "Configurator", to: "/Configurator" },
        { name: "Visit Online Shop", to: "/Visit" },
    ]

    return (
        <div className={`
        ${isHomepage ? "absolute top-0 z-20 bg-transparent" : "relative w-full"} 
        w-full flex flex-col gap-2.5 items-center justify-center pt-2.5 bg-neutral-950`}
        >
            <div className="w-11/12 flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <Link
                        to={'/'}
                        className="w-16 h-16 flex items-center justify-start">
                        {isHomepage ? (
                            <Image
                                src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"
                                alt="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"
                                className="object-cover"
                                loading={"lazy"}
                            />
                        ) : (
                            <Image
                                src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
                                alt="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
                                className="object-cover h-14 w-14"
                                loading={"lazy"}
                            />
                        )}
                    </Link>
                    <div className="hidden lg:w-[36rem] lg:flex lg:items-center lg:justify-center">
                        <div className="w-full flex items-center justify-evenly py-5">
                            {nav.map(({ name, to }, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center list-none">
                                    <a
                                        href={to}
                                    >
                                        <li className={`${isHomepage ?
                                            "text-white text-base font-semibold hover:text-white/65" :
                                            "text-white text-base hover:text-white/65 font-semibold"
                                            }`}>
                                            {name}
                                        </li>
                                    </a>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden lg:w-52 lg:flex lg:items-center lg:justify-center">
                    <div className="w-full flex items-center justify-evenly">
                        <Button
                            text={<FaRegUser />}
                            className={`${isHomepage ? 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65" : 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65"}`
                            }/>

                        <Button
                            className={`${isHomepage ? 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65" : 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65"}`}
                            text={<BsCart3 />}
                        />
                        <Button
                            className={`${isHomepage ? 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65" : 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65"}`}
                            text={<IoLocationOutline />}
                        />
                        <Button
                            className={`${isHomepage ? 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65" : 
                            "w-10 h-10 text-xl text-white flex items-center justify-center hover:text-white/65"}`}
                            text={<IoSearchOutline />}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center lg:hidden">
                    <div className="flex items-center justify-center">
                        <ToggleNavbar />
                    </div>
                </div>
            </div>
            <hr className="w-11/12 h-1" />
        </div>
    )
}

export default Navbar