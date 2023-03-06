import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const CatGallery = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/cat',
        }).then((response) => {

            response.data.map((value, idx) => { console.log(value.breed) })

        })
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <div>CatGallery</div>
    )
}

export default CatGallery