import React, { useState } from 'react';
import Inputsfields from '../Component/Inputsfields.js';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import axios from 'axios';


function Adddetails() {

  const [frmdata, setFrmdata] = useState({
    id: "",
    name: "",
    mobile: "",
    bloodGroup: ""
  })

  const addInfo = async () => {
    try {

      const response = await axios.post(`${process.env.REACT_APP_API_URl}/students`, {
        id: frmdata.id,
        name: frmdata.name,
        mobile: frmdata.mobile,
        bloodGroup: frmdata.bloodGroup
      })

      console.log(response);

      toast.success("Data Add 👍");

      setFrmdata({
        id: "",
        name: "",
        mobile: "",
        bloodGroup: ""
      })

    }
    catch (error) {
      toast.error(error?.response?.data)
    }
  }


  return (
    <>
      <h1 className='text-center text-3xl font-bold m-5'>Add details</h1>

      <div className='w-2/5  border-2 border-solid border-gray-600 m-auto flex flex-col justify-items-center items-center  rounded'>

        <Inputsfields
          type={'number'}
          name={'t1'}
          placeholder={'Enter Id'}
          value={frmdata.id}
          onChange={(e) => {
            setFrmdata(
              {
                ...frmdata,
                id: e.target.value,
              }
            )
          }}
        />

        <Inputsfields
          type={'text'}
          name={'t2'}
          placeholder={'Enter Name'}
          value={frmdata.name}
          onChange={(e) => {
            setFrmdata(
              {
                ...frmdata,
                name: e.target.value,
              }
            )
          }}
        />

        <Inputsfields
          type={'number'}
          name={'t3'}
          placeholder={'Enter Mobile No'}
          value={frmdata.mobile}
          onChange={(e) => {
            setFrmdata({
              ...frmdata,
              mobile: e.target.value
            })
          }}
        />

        <Inputsfields
          type={'text'}
          name={'t4'}
          placeholder={'Enter BloodGroup'}
          value={frmdata.bloodGroup}
          onChange={(e) => {
            setFrmdata({
              ...frmdata,
              bloodGroup: e.target.value
            })
          }}
        />

        <button
          className='bg-red-600 p-1 m-3 w-3/4 rounded text-sm text-stone-100  cursor-pointer'
          onClick={() => {
            addInfo()
          }

          }>
          Add
        </button>

      </div>

      <Link to="/">
        <HomeIcon size={50} className='fixed right-10 bottom-10 hover:scale-125 duration-300' />
      </Link >
    </>
  )
}

export default Adddetails;