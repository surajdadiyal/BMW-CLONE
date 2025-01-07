import { Link } from "react-router-dom";
import data from "../../../db/data";
import Card from "../../../ui/Card";

function TabLayoutFooter() {
  return (
    <div className="w-full flex flex-wrap items-center justify-around my-5">
            {data.map(({ heading, listing, type }, index) => {
                const category = type === "MOBILE-FOOTER-DATA";
                return (category && (
                    <Card
                        key={index}
                        heading={heading}
                        list={listing.map(({ name, to }, index) => (
                            <Link
                                key={index}
                                to={to}
                            >
                                <li className="list-none py-1.5 text-white/50 hover:text-neutral-800">{name}</li>
                            </Link>
                        ))}
                    />
                ))
            })}
        </div>
  )
}

export default TabLayoutFooter