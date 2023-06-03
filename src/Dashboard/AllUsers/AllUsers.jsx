import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const  [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["ussers"], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  });

  const handleDelete = id =>{
    console.log(id)
  }

  const handleMakeAdmin = id =>{
    console.log(id)
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-center text-3xl mb-5 font-bold ">
      Total User: {users.length}
      </h3>



      <div className="overflow-x-auto ">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>
                <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin'? 'admin' :
                <button onClick={()=>handleMakeAdmin(user._id)} className="btn bg-sky-500 text-white border-0 "><FaEdit></FaEdit> </button>
                } </td>
                                 

                <td><button onClick={()=>handleDelete(user)} className="btn bg-red-500 text-white border-0 "><FaTrashAlt></FaTrashAlt> </button></td>
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
