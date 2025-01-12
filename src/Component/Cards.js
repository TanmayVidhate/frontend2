import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";


function Cards({ id, name }) {

    let navigate = useNavigate();

    const deleteData = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URl}/students/${id}`);
            toast.success("Data Deleted 👍")
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='shadow-lg bg-gray-200 shadow-gray-800 p-4 max-w-100 m-5 rounded border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 border-2 relative' key={id}
            onClick={() => {
                navigate(`/detail/${id}`);
            }}>
            <p className='text-lg font-semibold'>{id}</p>
            <p className='text-lg'>{name}</p>

            <button
                className='bg-red-600 p-1 w-20 rounded text-sm text-stone-100 absolute top-5 right-10 cursor-pointer'
                onClick={(e) => {
                    e.stopPropagation()
                    deleteData(id);
                }}>
                Delete
            </button>

            <button
                className='bg-green-600 p-1 w-20 rounded text-sm text-stone-100 absolute top-10 right-10 mt-3  cursor-pointer'
                onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/edit/${id}`);
                }}>
                Edit
            </button>
        </div>
    )
}
export default Cards;