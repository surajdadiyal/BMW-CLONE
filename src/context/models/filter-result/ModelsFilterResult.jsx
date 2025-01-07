import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import models from '../../../db/models';
import ShinyText from '../../../ui/ShinyText';
import Image from '../../../ui/Image';
import SpotlightCard from '../../../ui/SpotlightCard';

const ModelsFilterResult = () => {
    const location = useLocation();  // Read the current location (URL)
    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const modelFilter = queryParams.get('model')?.split(',') || [];
        const fuelTypeFilter = queryParams.get('fuelType')?.split(',') || [];

        // Filter the models based on the selected query parameters
        const filtered = models.filter((model) => {
            const matchesModel = modelFilter.length === 0 || modelFilter.includes(model.model);
            const matchesFuelType = fuelTypeFilter.length === 0 || fuelTypeFilter.includes(model.title);
            return matchesModel && matchesFuelType;
        });

        setFilteredModels(filtered);
    }, [location.search]);  // Re-run whenever the query params change

    return (
        <div className="w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='w-11/12 flex items-center justify-center'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-5'>
                {filteredModels.length > 0 ? (
                    filteredModels.map(({ img, name, title, svg, price }, index) => (
                        <Link
                            key={index}
                            className="w-full flex items-center justify-center"
                            to={`/model/${name}`}
                        >
                            <SpotlightCard
                                className="custom-spotlight-card flex flex-col items-center justify-center"
                            >
                                <div
                                    data-aos="zoom-in" data-aos-duration="2000"
                                    className='w-full flex flex-col flex-wrap items-center justify-start'
                                >
                                    <Image
                                        src={img}
                                        alt={img}
                                        loading={'lazy'}
                                        className={'object-cover w-full'} />
                                    <div className='w-full flex items-center justify-start'>
                                        <Image
                                            src={svg}
                                            alt={svg}
                                            className={'w-8 object-cover'}
                                            loading={'lazy'} />
                                    </div>
                                    <div className='w-full flex flex-grow flex-col items-center justify-center space-y-2'>
                                        <div className='w-full flex items-center justify-start'>
                                            <ShinyText
                                                className='text-base font-normal text-wrap'
                                                text={name}
                                                disabled={false}
                                                speed={2} />
                                        </div>
                                        <div className='w-full flex items-center justify-start'>
                                            <span className='text-sm text-white font-medium'>{title}</span>
                                        </div>
                                        <div className='w-full flex items-center justify-start'>
                                            <span className='text-sm text-white font-medium'>{price}</span>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Link>
                    ))
                ) : (
                    <p className='text-white text-5xl'>No results found</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default ModelsFilterResult;
