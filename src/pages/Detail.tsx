import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getOne } from '../api/products'
import { IProducts } from '../types'

function DetailPage() {
    const { id } = useParams()
    const [product, set] = useState()

    useEffect(() => {
        getOne(id).then(({ data }) => {
            set(data)
        })
    }, [id]);


    return (<div>
        <img src={product?.img} alt="err" />
        <h2>{product?.name}</h2>
        <p>{product?.desc}</p>
        <p>{product?.price}</p>
    </div>);
}

export default DetailPage;