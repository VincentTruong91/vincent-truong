import LineGradient from "../components/LineGradient";
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        triger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await triger();
        if(!isValid){
            e.preventDefault();
        }
    }
    return(
        <section id="contact" className="md:pt-48 pb-5">
            {/*HEADINGS*/}
            <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.5 }} 
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}>
                <div>
                    <p className="font-playfair font-semibold text-6xl flex justify-center">
                        CONTACT!
                    </p>
                    <div className="flex my-5">
                        <LineGradient width="w-full" />
                    </div>
                </div>
            </motion.div>

            <div className="md:flex md:justify-between gap-16">
                <motion.div
                className="basis-1/2 flex justify-center"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }} 
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}>
                    <img src="../assets/egr classroom pic.png" alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2 mt:10 md:mt-0"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ delay: 0.2, duration: 0.5 }} 
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                        <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/8320c90ab9ed99ab5de10b7d9927e590"
                        method="POST">
                            <input 
                            className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-4 md:mt-10"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}/>
                            {errors.name && (
                                <p className="text-white mt-1">
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'maxLength' && "Max length is 100 char."}
                                </p>
                            )}


                            <input
                            className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\[A-Z]{2,}$/i,
                            })} />
                            {errors.email && (
                                <p className="text-red mt-1">
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'pattern' && "Invalid email address."}
                                </p>
                            )}


                            <textarea
                            className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })} />
                            {errors.message && (
                                <p className="text-red mt-1">
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'maxLength' && "Max length is 2000 characters."}
                                </p>
                            )}

                            <button
                            type="submit"
                            className="p-5 flex mx-auto bg-yellow font-semibold text-deep-blue mt-5 hover:bg-green hover:text-white transition duration-500">
                                SEND ME A MESSAGE
                            </button>
                        </form>

                    </motion.div>
            </div>
        </section>
    )
};

export default Contact;