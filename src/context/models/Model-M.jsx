import ShinyText from '../../ui/ShinyText'
import Image from '../../ui/Image'
import SpotlightCard from '../../ui/SpotlightCard'
import { useModels } from '../ModelContext';
import { TypewriterEffectSmooth } from '../../ui/Typewriter-effect';
import { Link } from 'react-router-dom';

function ModelM() {

    const { modelList } = useModels(); // Access the model data

    let words = [
        {
            text: "Model",
            className: "textxl dark:text-xl"
        },
        {
            text: ":-",
            className: "text-xl dark:text-xl"
        },
        {
            text: "M",
            className: "text-blue-500 dark:text-blue-500 text-xl dark:text-xl"
        },
    ];

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-start border-b'>
                <TypewriterEffectSmooth
                    words={words}
                    className={'text-blue-500 dark:text-blue-500'} />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-5">
                {modelList.map(({ img, name, title, svg, price, model }, index) => {
                    const type = model === 'M';
                    return type && (
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
                                        className={'object-cover w-full hover:scale-110 transition duration-300'}
                                    />
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
                    );
                })}
            </div>
        </div>
    )
}

export default ModelM