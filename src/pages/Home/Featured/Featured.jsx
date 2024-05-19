import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item-b text-white w-full pt-8 my-50">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            />
            <div className="featured-content md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="Featured" />
                </div>
                <div className="md:ml-10 text-white font-medium">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
