import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className='mb-12'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu" description="Would you like to try a dish?" />
            {/* main cover */}
            <SectionTitle
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
            />
                {/* offerd menu items */}
            <MenuCategory items={offered} />

            {/* dessert menu items */}
            <MenuCategory 
            items={desserts}
            title="dessert"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={dessertImg}
            />

            <MenuCategory 
            items={pizza}
            title="pizza"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={pizzaImg}
            />

            <MenuCategory 
            items={salad}
            title="palad"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={saladImg}
            />
            <MenuCategory 
            items={soup}
            title="soup"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={soupImg}
            />

        </div>
    );
};

export default Menu;