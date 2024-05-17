import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');


    return (
        <div className="mb-12">
            <SectionTitle
            subHeading="Check it out"
            heading="FROM OUR MENU"
            />

            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div>

            <div className="flex justify-center mt-10">
            <button className="btn btn-outline border-0 border-b-4 border-black">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;