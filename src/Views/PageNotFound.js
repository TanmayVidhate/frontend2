import React from 'react'
import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'
function PageNotFound() {
    return (
        <div>
            <p>PageNotFound</p>
            <Link to="/">
                <HomeIcon size={50} className='fixed right-10' />
            </Link >
        </div>
    )
}

export default PageNotFound