import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const UpdateItem = () => {

    const {name, category, recipe, price, _id}= useLoaderData();
    
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
        //image upload to imgbb and then get an url
        const image = data.image[0];
        const binaryImg = new FormData();
        binaryImg.append("image", image);
        const {data:res} = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        binaryImg
        );
        if(res.data.success){
          const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
          }
          const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
          console.log(menuRes.data);
          if(menuRes.data.modifiedCount > 0){
            //show success popup
            //reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} to updated the menu`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        //console.log('with image url', res.data);
      }

    return (
        <div>
            <SectionTitle
            heading='Update an Item'
            subHeading="Refresh info"
            >
            </SectionTitle>

            <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <label className="form-control w-full my-6">
            <div className="label">
                <span className="label-text">Recipe Name*</span>
            </div>
            <input
            {...register('name', {required: true})}
            type="text"
            defaultValue={name}
            placeholder="Recipe Name" className="input input-bordered w-full" />
            </label>

            <div className="flex items-center gap-5">
                {/* Category */}

           <div className="form-control w-full">
           <label className="label">
                <span className="label-text">Category*</span>
            </label>
           <select
           defaultValue={category}
            {...register('category', {required: true})}
            className="select select-bordered w-full">
            <option disabled value="default">Select a Category</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
            </select>
           </div>

            {/* Price */}

            <div className="form-control w-full ">
            <label className="">
            <div className="label">
                <span className="label-text">Price*</span>
            </div>
            <input
            {...register('price', {required: true})}
            type="number"
            defaultValue={price}
            placeholder="Price" className="input input-bordered w-full" />
            </label>
            </div>
            
            </div>

            {/* recipe details */}

            <label className="form-control">
            <div className="label">
                <span className="label-text">Recipe Details*</span>
            </div>
            <textarea {...register('recipe', {required: true})}
            defaultValue={recipe}
            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
            </label>

            <div className="form-control w-full my-6 ">
            <input
            {...register('image', {required: true})}
            type="file" className="file-input-base-200 file-input-bordered w-full max-w-xs" />
            </div>

          <button type="submit" className="btn bg-gradient-to-r from-[#835D23] from-0% to-[#B58130] to-100% text-white">
            Update menu Item <FaUtensils />
          </button>

            </form>
            </div>

        </div>
    );
};

export default UpdateItem;