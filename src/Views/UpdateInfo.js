import React, { useEffect, useState } from 'react'
import Inputsfields from '../Component/Inputsfields';
import { Home as HomeIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


function UpdateInfo() {

    const { id } = useParams();
    // console.log(id)

    const [frmData, setFrmData] = useState({
        id: "",
        name: "",
        mobile: "",
        bloodGroup: ""
    })

    const ShowData = async (id) => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URl}/students/${id}`);
            setFrmData(response?.data?.data);
        }
        catch (error) {
            toast.error(error)
        }
    }

    const UpdateName = async (id) => {
        try {

            const response = await axios.patch(`${process.env.REACT_APP_API_URl}/students/name/${id}`,
                {
                    name: frmData.name
                }
            );

            setFrmData(response?.data?.data)
        }
        catch (error) {
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        ShowData(id);
    }, [id])


    return (
        <>
            <h1 className='text-center text-3xl font-bold m-5'>Update Info</h1>

            <div className='w-2/5  border-2 border-solid border-gray-600 m-auto flex flex-col justify-items-center items-center  rounded'>

                <Inputsfields
                    type={'number'}
                    name={'t1'}
                    placeholder={'Enter Id'}
                    value={frmData?.id}
                    disabled

                    onChange={(e) => {
                        setFrmData({
                            ...frmData,
                            id: e.target.value
                        })
                    }}
                />


                <Inputsfields
                    type={'text'}
                    name={'t2'}
                    placeholder={'Enter Name'}
                    value={frmData?.name}
                    onChange={(e) => {
                        setFrmData({
                            ...frmData,
                            name: e.target.value
                        })
                    }}
                />

                <Inputsfields
                    type={'number'}
                    name={'t3'}
                    placeholder={'Enter Mobile No'}
                    value={frmData?.mobile}
                    disabled

                    onChange={(e) => {
                        setFrmData(
                            {
                                ...frmData,
                                mobile: e.target.value
                            }
                        )
                    }}

                />

                <Inputsfields
                    type={'text'}
                    name={'t4'}
                    placeholder={'Enter BloodGroup'}
                    value={frmData?.bloodGroup}
                    disabled

                    onChange={(e) => {
                        setFrmData({
                            ...frmData,
                            bloodGroup: e.target.value
                        })
                    }}
                />

                <button
                    className='bg-red-600 p-1 w-64 m-1 rounded text-sm text-stone-100 cursor-pointer'
                    onClick={() => {
                        UpdateName(id);
                    }}>
                    Update
                </button>

            </div>

            <Link to="/">
                <HomeIcon size={50} className='fixed right-10 bottom-10 hover:scale-125 duration-300' />
            </Link >
        </>
    )
}

export default UpdateInfo