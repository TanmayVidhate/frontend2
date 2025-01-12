import React from 'react'

function Inputsfields({ type, name, placeholder, onChange,value, disabled}) {

    return (
        <>
            <input
                className='w-3/4 block m-3 p-1 border-none outline-none rounded '
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value || 'end'}
                disabled={disabled}
                required />
        </>
    )
}

export default Inputsfields;