import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion"
import { SelectedPage } from "@/shared/types";
import audi from '@/assets/audi.svg';
import bmw from '@/assets/bmw.svg';
import ford from '@/assets/ford.svg';
import mazda from '@/assets/mazda.svg';
import mercedes from '@/assets/mercedes.svg';
import skoda from '@/assets/skoda.svg';
import vw from '@/assets/vw.svg';
import reviewOne from '@/assets/reviewOne.png';
import reviewTwo from '@/assets/reviewTwo.png';
import reviewThree from '@/assets/reviewThree.png';
import fourstar from "@/assets/fourstar.png";
import fivestar from "@/assets/fivestar.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green"}}
      onClick={onClick}
    />
  );
}
const Testimonial = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const settings = {
        dots: true,
        infinite: true,
        fade:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
      prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
    };

    return (
        <section id="testimonial" className="py-20 mt-10">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Testimonial)}
            ></motion.div>
            <div className="w-5/6 mx-auto container">
                <h2 className="text-3xl font-semibold text-center mb-10 text-red-800">Our Satified Customers</h2>
                <Slider {...settings}>
                    <div className="mx-auto">
                        <img src={reviewThree} alt="Client-One" className="mx-auto" />
                        <p className="text-center text-lg mt-10 text-red-800 font-bold">"Effortless booking, wide car selection, and clear pricing -- a traveler's dream."</p>
                        <p className="text-center text-lg font-bold mt-2"> SYED TALHA
                        </p>
                        <img src={fivestar} alt="hatch-back" width={140} height={200}  className="mx-auto"/>
                    </div>
                    <div className="mx-auto">
                        <img src={reviewTwo} alt="Client-One" className="mx-auto"/>
                        <p className="text-center mt-10 text-lg text-red-800 font-bold">"User-friendly, real-time availability, and mobile convenience -- top-notch service."</p>
                        <p className="text-center text-lg font-bold mt-2">M.IBRAHIM</p>
                        <img src={fourstar} alt="hatch-back" width={140} height={200} className="mx-auto"/>
                    </div>
                    <div className="mx-auto">
                        <img src={reviewOne} alt="Client-One" className="mx-auto"/>
                        <p className="text-center mt-10 text-lg text-red-800 font-bold">"Sleek design, helpful customer reviews, and great deals -- my go-to for rentals." </p>
                        <p className="text-center text-lg font-bold mt-2">A.S.JULIA</p>
                        <img src={fourstar} alt="hatch-back" width={140} height={200} className="mx-auto"/>
                    </div>
                </Slider>
            </div>
            {isAboveMediumScreens && (
                <div className="h-[10px] mx-auto py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={audi} alt="audi" />
                            <img src={mercedes} alt="mercedes" />
                            <img src={bmw} alt="bmw" />
                            <img src={mazda} alt="mazda" />
                            <img src={skoda} alt="skoda" />
                            <img src={vw} alt="vw" />
                            <img src={ford} alt="ford" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonial;

