import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import carOne from "@/assets/carOne.png";
import carTwo from "@/assets/carTwo.png";
import carThree from "@/assets/carThree.png";
import wheel from "@/assets/wheel.svg";
import gas from "@/assets/gas.svg";
import gearshift from "@/assets/gearshift.svg";
import engine from "@/assets/engine.svg";
import seat from "@/assets/seat.svg";
import fourstar from "@/assets/fourstar.png";
import fivestar from "@/assets/fivestar.png";
import audi from '@/assets/audi.svg';
import bmw from '@/assets/bmw.svg';
import ford from '@/assets/ford.svg';
import mazda from '@/assets/mazda.svg';
import mercedes from '@/assets/mercedes.svg';
import skoda from '@/assets/skoda.svg';
import vw from '@/assets/vw.svg';
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
// mx-auto min-h-full py-20 w-5/6
const Cars = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section
            id="cars"
            className="md:mt-10 mt-30 md:py-20 mx-auto py-20 w-5/6"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Cars)}>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5 md:mx-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className="font-bold text-3xl text-red-800 text-center">Diversified Range of HATCH-BACK & SEDANS</h1>
                </motion.div>
                <div className="flex flex-wrap justify-center gap-6">
                    <motion.div
                        className="car-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        {/* CAR1 */}
                            <img src={carOne} alt="hatch-back" />
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-red-800">HATCH-BACK</p>
                                <img src={fivestar} alt="hatch-back" width={80} height={80} />
                            </div>
                            <p className="font-bold"> MIRAGE <br /><span className="text-red-800">$41/Day</span></p>
                            <div className="flex justify-between px-3 py-5 items-center">
                                <div className="flex flex-col">
                                    <img src={wheel} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">FWD</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={seat} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">5</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={gearshift} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">ATS</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={engine} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">40HP</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={gas} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">GAS</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="button" className="bg-blue-600 rounded-lg px-10 py-2 hover:bg-red-800 hover:text-white transition duration-500">Details</button>
                        </div>
                    </motion.div>
                    {/* CAR2 */}
                    <motion.div
                        className="car-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        >
                            <img src={carTwo} alt="hatch-back" />
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-red-800">SEDAN</p>
                                <img src={fourstar} alt="hatch-back" width={80} height={80} />
                            </div>
                            <p className="font-bold">TOYOTA-YARIS <br /><span className="text-red-800">$50/Day</span></p>
                            <div className="flex justify-between px-3 py-5 items-center">
                                <div className="flex flex-col">
                                    <img src={wheel} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">FWD</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={seat} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">5</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={gearshift} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">ATS</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={engine} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">40HP</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={gas} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">GAS</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="button" className="bg-blue-600 rounded-lg px-10 py-2 hover:bg-red-800 hover:text-white transition duration-500">Details</button>
                            </div>
                    </motion.div>
                    {/* CAR3 */}
                    <motion.div
                        className="car-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                            <img src={carThree} alt="hatch-back" />
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-red-800">SEDAN</p>
                                <img src={fourstar} alt="hatch-back" width={80} height={80} />
                            </div>
                            <p className="font-bold"> HYUNDAI-ELANTRA <br /><span className="text-red-800">$50/Day</span></p>
                            <div className="flex justify-between px-3 py-5 items-center">
                                <div className="flex flex-col">
                                    <img src={wheel} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">FWD</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={seat} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">5</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={gearshift} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">ATS</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={engine} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">40HP</p>
                                </div>
                                <div className="flex flex-col">
                                    <img src={gas} alt="" className="border-black rounded-full border-8 bg-black" />
                                    <p className="text-center text-gray-400">GAS</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="button" className="bg-blue-600 rounded-lg px-10 py-2 hover:bg-red-800 hover:text-white transition duration-500">Details</button>
                            </div>
                        </motion.div>
                </div>
            </motion.div>
            {isAboveMediumScreens && (
                <div className="h-[10px] mx-auto py-20">
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
        </section >
    );
};

export default Cars;