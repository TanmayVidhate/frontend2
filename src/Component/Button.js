import React from 'react'

function Button({name}) {
    return (
        <>
            <button className='bg-red-600 p-1 w-20 rounded text-sm text-stone-100 absolute top-5 right-10 cursor-pointer'>
                {name}
            </button>
        </>
    )
}

export default Button