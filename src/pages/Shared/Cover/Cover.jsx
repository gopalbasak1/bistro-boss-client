import { Parallax } from 'react-parallax';

const Cover = ({img, title, description }) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[700px]" >
        <div className="hero-overlay bg-opacity-60"></div> 
        <div className="hero-content text-center text-neutral-content">
            <div className="w-[750px] r px-48 py-[100px] bg-[#15151599]">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
            
            </div>
        </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;