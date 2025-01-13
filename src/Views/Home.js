import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from '../Component/Cards';
import { UserRoundPlus as AddInfo} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        FetchInfo();
    }, [])

    const FetchInfo = async () => {
        toast.loading("Loading Data...")
        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URl}/students`);
            setData(response.data.data);

            toast.dismiss();
        }

        catch (error) {
            toast.dismiss();

            console.log(error)
        }

    }

    return (
        <>
            <h1 className='text-center text-3xl font-bold m-5'>Show Records</h1>

            <div className=' w-3/4 h-96 m-auto p-1 overflow-y-scroll '>
                {
                    data?.map((info) => {
                        const { id, name } = info;

                        return (
                            <Cards id={id} name={name} key={id} />
                        )
                    })
                }
            </div>
            
            <Link to={"/Adddetails"}>
                <AddInfo size={50} className='fixed right-10 bottom-10 hover:scale-125 duration-1000 duration-300'  />
            </Link>

            <Toaster />
        </>)
}


export default Home;