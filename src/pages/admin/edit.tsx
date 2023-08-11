import { useForm } from "react-hook-form";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updateP } from "../../api/products";
import { IProducts } from "../../types";

function EditProduct({ data }: { data: IProducts[] }) {
    const { id } = useParams();

    const { reset, register, formState: { errors }, handleSubmit } = useForm<IProducts>()


    useEffect(() => {
        const fil = data.find(p => p.id === +id)
        reset(fil)
    }, [data, id, reset]);

    const HandEdit = (data:IProducts) => {
        updateP(id, data).then(() => {
            alert('Updated successfully')
            window.location.href = 'http://localhost:5173/admin/products#';

        })
    }

    return (<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
            <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
        </div>
        <form action="" onSubmit={handleSubmit(HandEdit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Name</label>
                <div className="relative">
                    <input {...register('name', { required: 'Không được bỏ trống' })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter name" />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className="relative">
                    <input {...register('price', { required: 'Không được bỏ trống' })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter price" />
                    {errors.price && <p>{errors.price.message}</p>}
                </div>

                <div className="relative">
                    <input {...register('desc', { required: 'Không được bỏ trống' })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter decs" />
                    {errors.desc && <p>{errors.desc.message}</p>}
                </div>

                <div className="relative">
                    <input {...register('img', { required: 'Không được bỏ trống' })} type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter img" />
                    {errors.img && <p>{errors.img.message}</p>}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                    Update product
                </button>
            </div>
        </form>
    </div>);
}

export default EditProduct;