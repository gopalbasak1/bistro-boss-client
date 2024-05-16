

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 my-12 text-center">
            <p className="text-[#D99904] py-4">---{subHeading}---</p>
            <h3 className="text-[40px] uppercase border-y-4 border-[#E8E8E8] py-5 text-[#151515]">{heading}</h3>
        </div>
    );
};

export default SectionTitle;