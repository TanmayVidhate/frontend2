import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { Home as HomeIcon } from 'lucide-react'

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        LoadData(id);
    }, [id])

    const LoadData = async (id) => {
        // console.log(id)
        toast.loading("Loading details of person...")
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URl}/students/${id}`);
            setData(response.data.data);
            toast.dismiss();
            toast.success("Data Loading 😀")

        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data);
        }
    }

    return (
        <>
            <h1 className='text-center text-3xl font-bold m-5'>Show Details</h1>

            <div className='w-1/2  bg-gray-200 m-auto p-4 rounded-xl  border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 border-2'>
                <p><span className='text-lg '>Id</span> : {data.id}</p>
                <p><span className='text-lg '>Name</span> : {data.name}</p>
                <p><span className='text-lg '>Mobile No</span> : {data.mobile}</p>
                <p><span className='text-lg '>BloodGroup</span> : {data.bloodGroup}</p>
            </div>

            <Link to="/">
                <HomeIcon size={50} className='fixed right-10 bottom-10 hover:scale-125 duration-300' />
            </Link >
            <Toaster/>
        </>
    )
}

export default Detail