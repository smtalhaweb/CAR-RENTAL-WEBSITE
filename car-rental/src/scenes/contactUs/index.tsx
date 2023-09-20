import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import luxuryOne from "@/assets/luxuryOne.jpg";
import luxuryTwo from "@/assets/luxuryTwo.png";
import exoticCars from "@/assets/exoticCars.png";
import comingSoon from "@/assets/comingSoon.png";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section id="contactus" className="mx-auto w-5/6 pt-20 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div
                    className="md:w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className="font-bold text-center text-3xl text-red-500">
                        Cruise into Contact <br />
                        <span className="text-red-700">Reach out to us and let us drive your inquiries away
                        </span>
                    </h1>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className="mt-10 md:justify-center gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form
                            target="blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/"
                            method="POST"
                        >
                            {/* FOR NAME BLOCK */}
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "max length has 100 characters."}
                                </p>
                            )}

                            {/* FOR EMAIL BLOCK */}
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "invalid email address"}
                                </p>
                            )}
                            {/* FOR MESSAGE BLOCK   */}
                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={5}
                                cols={4}
                                {...register("message", {
                                    required: true,
                                    maxLength: 100
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "max length has 2000 characters."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-1 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                </div>
                {/* IMAGE SECTION OF COMING SOON CARS */}
                <div className="md:flex md:justify-center md:flex-col">
                    <motion.div
                        className="md:mx-auto mt-10 md:my-10 md:p-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <img
                            src={luxuryOne}
                            alt="first-luxury-car-image"
                        />
                    </motion.div>
                    <motion.div
                        className="md:mx-auto mt-10 md:my-10 md:p-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <img
                            src={luxuryTwo}
                            alt="second-luxury-car-image"
                        />
                    </motion.div>
                    <motion.div
                        className="md:mx-auto mt-10 md:my-10 md:p-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <img
                            src={exoticCars}
                            alt="exotic-cars-image"
                        />
                    </motion.div>
                    <motion.div
                        className="md:mx-auto mt-10 md:my-10 md:p-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 1, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <img
                            className=""
                            src={comingSoon}
                            alt="coming-soon-image"
                        />
                    </motion.div>                  
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs;