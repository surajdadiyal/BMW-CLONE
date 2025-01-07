import { useState } from "react";
import Button from "../ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


function ToggleNavbar() {

    const nav = [
        { name: "Models", to: "/Models" },
        { name: "Electric", to: "/Electric" },
        { name: "Configurator", to: "/Configurator" },
        { name: "Visit Online Shop", to: "/Visit" },
    ]

    const [toggleNav, setToggleNav] = useState(false);

    const handleToggle = () => {
        setToggleNav(!toggleNav)
    }
    return (
        <div className="flex items-center justify-center">
            <Button
                className="w-10 h-10 text-white flex items-center justify-center"
                text={toggleNav ? (
                    <RxCross1 className="text-5xl text-white" />
                ) : (
                    <RxHamburgerMenu className="text-5xl text-whhite" />
                )}
                onClick={handleToggle}
            />

            {toggleNav && (
                <div className="absolute top-0 left-0 w-1/2 min-h-screen space-y-5 bg-neutral-900 shadow-lg z-10 transition-all duration-300 ease-in-out">
                    {nav.map(({ name, to }, index) => (
                        <div
                            key={index}
                            className="w-full py-5 flex items-center justify-center list-none border-b">
                            <a
                                href={to}
                            >
                                <li className="font-medium text-lg text-white/65">
                                    {name}
                                </li>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ToggleNavbar