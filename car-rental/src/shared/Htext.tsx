type Props = {
    children: React.ReactNode;
}

const Htext = ({ children }: Props) => {
    return (
        <h1 className="md:w-full mx-auto mt-10 md:text-center font-montserrat text-3xl text-red-800 font-bold ">
            {children}
        </h1>
    );
};
export default Htext;