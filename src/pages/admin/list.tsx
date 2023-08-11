import { deleteP } from "../../api/products";
import { Link } from 'react-router-dom'
import { IProducts } from "../../types";

function Listproduct({ data }: { data: IProducts[] }) {

    const hDelete = (id: number) => {
        confirm(`Are you sure you want to delete?`) ?
            deleteP(id).then(() => {
                alert('Xóa thành công?'),
                    window.location.reload()
            }) : undefined
    }
    return (
        <div className="overflow-x-auto">
            <Link to={'/admin/products/add'}>Add product</Link>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Date of Birth
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Role
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Salary
                        </th>
                        <th className="px-4 py-2" />
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {item?.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item?.price}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item?.desc}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <img src={item?.img} alt="err" />
                                </td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <Link to={`/admin/products/edit/${item?.id}`} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                        Update
                                    </Link>
                                    <a onClick={() => hDelete(item?.id)} href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default Listproduct;