

const MenuItem = ({item}) => {

    const {image, price, recipe, name} = item || {};

    return (
        <div className="flex space-x-3">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px] h-[104px] rounded" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;