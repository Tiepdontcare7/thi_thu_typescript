import { useParams } from 'react-router-dom'
import { IProducts } from '../types';

function DetailPage({ data }:{data: IProducts[]}) {
    const { id } = useParams()

    const product = data.find(p => p.id == id)

    return (
        <div>
            <img src={product?.img} alt="err" />
            <h2>{product?.name}</h2>
            <p>{product?.desc}</p>
            <p>{product?.price}</p>
        </div>
    );
}

export default DetailPage;