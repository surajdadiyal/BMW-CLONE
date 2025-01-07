import data from '../../../db/data';
import Button from '../../../ui/Button';
import Image from '../../../ui/Image';

function HomeLargeLayout() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-2.5">
      {data.map(({ name, img, title, type, btn }, index) => {
        const category = type === "Large-Home-Data";
        return (category && (
          <div
            key={index}
            className="w-full flex items-center justify-center relative my-2.5"
          >
            <div
              data-aos="zoom-out"
              data-aos-duration="3000"
              className="w-full flex items-center justify-center">
              <Image
                src={img}
                alt={img}
                className={"w-full object-cover"}
                loading={'lazy'}
              />
            </div>

            <div className="w-full flex flex-col items-center justify-center absolute">
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="w-11/12 flex flex-col items-start justify-center space-y-4">
                <h2 className="text-2xl text-white font-medium">{name}</h2>
                <h4 className="text-xl text-white font-light">{title}</h4>
                <Button
                  className="w-72 py-3 rounded-sm border border-white hover:border-white hover:border-2 text-white text-center text-base font-semibold"
                  text={btn}
                />
              </div>
            </div>
          </div>
        ))
      })}
    </div>
  )
}

export default HomeLargeLayout