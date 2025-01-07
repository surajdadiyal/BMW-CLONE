import { useState, useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Accordions({ heading, list,className }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.maxHeight = "0px";
        }
    }, [isOpen]);

    return (
        <div
            id="accordion-flush"
            className="w-full border-b"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
            <h2 id="accordion-flush-heading-1">
                <button
                    type="button"
                    onClick={toggleAccordion}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded={isOpen}
                    aria-controls="accordion-flush-body-1"
                >
                    <span className={className}>{heading}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform ${isOpen ? "rotate-180 transition-all transform duration-300 ease-in-out" : ""} transition-all transform duration-300 ease-in-out shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-flush-body-1"
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
                }}
                aria-labelledby="accordion-flush-heading-1"
            >
                <div className="w-3/4 lg:w-2/5 flex flex-col justify-center">
                    <span className="text-base font-medium py-5 space-y-5">{list}</span>
                </div>
            </div>
        </div>
    );
}

export default Accordions;
