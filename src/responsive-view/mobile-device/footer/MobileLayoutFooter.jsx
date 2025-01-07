import { Link } from "react-router-dom";
import data from "../../../db/data";
import Accordions from "../../../ui/Accordions";


function MobileLayoutFooter() {
    return (
        <div className="w-full flex items-center justify-center my-5">
            <div className="w-4/5 flex flex-col items-center justify-between">
                {data.map(({ heading, listing, type }, index) => {
                    const category = type === "MOBILE-FOOTER-DATA";
                    return (category && (
                        <Accordions
                            key={index}
                            heading={heading}
                            className="text-white"
                            list={listing.map(({ name, to }, index) => (
                                <Link
                                    key={index}
                                    to={to}
                                >
                                    <li className="list-none w-full flex items-center py-2 text-white/50 hover:text-neutral-800">{name}</li>
                                </Link>

                            ))}
                        />
                    ))
                })}
            </div>
        </div>
    )
}

export default MobileLayoutFooter