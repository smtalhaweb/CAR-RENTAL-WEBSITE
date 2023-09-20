import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import BugattiChiron from '@/assets/BugattiChiron.png';
import audi from '@/assets/audi.svg';
import bmw from '@/assets/bmw.svg';
import ford from '@/assets/ford.svg';
import mazda from '@/assets/mazda.svg';
import mercedes from '@/assets/mercedes.svg';
import skoda from '@/assets/skoda.svg';
import vw from '@/assets/vw.svg';
import playBtn from '@/assets/playBtn.svg';
import appBtn from '@/assets/appBtn.svg';
import { motion } from "framer-motion";


type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section
            id="home"
            className="gap-16 py-10 md:h-full md:pb-0"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
            >
                {/* Main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* heading */}
                    <motion.div
                        className="md:mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:1, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible:{opacity: 1, x: 0}
                        }}
                    >
                        <div className="relative bottom-10">
                            <h1 className="text-5xl font-extrabold">Explore the Finest <br/><span className="text-blue-600">Global</span> Offers</h1>
                            <p className="text-md pt-2 text-red-700 font-semibold">Find your ideal ride for any adventure with our diverse range of affordable and dependable car rentals</p>
                        </div>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div
                        className="mb-20 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:1, duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible:{opacity: 1, x: 0}
                        }}
                    >
                        <button>
                            <img src={playBtn} alt="playstore-btn" />
                        </button>
                        <button>
                            <img src={appBtn} alt="appstore-btn" />
                        </button>
                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className="flex basis-4/5 justify-center md:z-10 md:ml-20 md:mt-16 md:justify-items-end">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:1, duration: 3 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible:{opacity: 1, x: 0}
                        }}
                    >
                        <img src={BugattiChiron} width={600} height={600} alt="bugatti-chiron" />
                    </motion.div>
                </div>
            </motion.div>
            {/* SPONSORS */}
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
        </section>
    );
};
export default Home;