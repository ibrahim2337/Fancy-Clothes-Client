
// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading ,SubHeading}) => {
    return (
        <div className="mx-auto text-center my-8 md:w-4/12">
            <p className="text-[#151515]">{SubHeading}</p>
            <h3 className="text-[#151515] text-4xl ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;