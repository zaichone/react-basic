import React from 'react'
import {useParams} from 'react-router-dom';

function Order() {
    let { id } = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default Order
