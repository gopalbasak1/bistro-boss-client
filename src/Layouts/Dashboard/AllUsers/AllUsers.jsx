import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
          const token = localStorage.getItem('access-token');
          console.log('token', token);
            const res = await axiosSecure.get('/users');
           return res.data
        }
    });

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete = user =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
        
            axiosSecure.delete(`/users/${user._id}`)
            .then(res =>{
              if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            })
  
          }
        });
      }


    return (
        <div className="container mx-auto">
           <div className="flex justify-evenly my-4">
           <h3 className="text-3xl">All Users</h3>

           <h3 className="text-3xl">Total Users: {users.length}</h3>
           </div>

           <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
               {
                users.map((user,index) =>
                    <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>

                    <td>

                    {user.role === 'admin' ? 'Admin' : <button
                  onClick={()=>handleMakeAdmin(user)}
                  className="btn btn-ghost bg-[#d48917] text-white btn-xs">
                    <HiOutlineUserGroup className="text-2xl" />
                  </button>

                        }
                    </td>

                    <td>
                    <button
                  onClick={()=>handleDelete(user)}
                  className="btn btn-ghost text-red-600 btn-xs">
                    <FaTrashAlt/>
                  </button>
                    </td>
                </tr>
                )
               }
                
                </tbody>
            </table>
            </div>

        </div>
    );
};

export default AllUsers;