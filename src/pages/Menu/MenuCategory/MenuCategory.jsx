import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const MenuCategory = ({items, title, description, img}) => {



    return (
        <div className="pt-8">
           {title && <Cover img={img} title={title} description={description}></Cover>}
             <div className="grid md:grid-cols-2 gap-8 mt-16">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">Order your favouite food</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;