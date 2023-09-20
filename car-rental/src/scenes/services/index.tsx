import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Civic from '@/assets/Civic.png';
import CarHonda from "@/assets/CarHonda.png";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import RentServices from './RentServices';
import audi from '@/assets/audi.svg';
import bmw from '@/assets/bmw.svg';
import ford from '@/assets/ford.svg';
import mazda from '@/assets/mazda.svg';
import mercedes from '@/assets/mercedes.svg';
import skoda from '@/assets/skoda.svg';
import vw from '@/assets/vw.svg';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
const Services = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section id="services" className="mt-10 md:mt-10 md:py-20 py-20 mx-auto w-5/6 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
            >
                <div className="font-bold text-3xl text-red-800 text-center ">
                    <h1 >
                        Cruise through our website and discover the myriad benefits<br />
                        <span className="text-primary-500">Make your car rental experience a breeze.</span>
                    </h1>
                </div>
                {/* CAR IMAGE % KEY IMAGE */}
                <motion.div
                    className="flex flex-col md:flex-row md:justify-between items-center justify-center md:mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <img src={CarHonda} alt="Car-Key" className="md:w-1/2" />
                    <img src={Civic} alt="civic-car" width={600} className="md:w-1/2" />
                </motion.div>
                <div className="flex relative before:absolute before:top-11 md:flex-col">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:0.3, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <RentServices />
                        <ActionButton
                            setSelectedPage={setSelectedPage}
                        >
                            Become a Member
                        </ActionButton>
                    </motion.div>
                </div>
            </motion.div>
            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div className="relative top-20 left-100 w-full py-10">
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
    )
};
export default Services;