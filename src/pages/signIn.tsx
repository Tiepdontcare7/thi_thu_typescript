import { SubmitHandler, useForm } from "react-hook-form";
import bcryptjs from "bcryptjs";
import { Iuser } from "../types";

function SignIn({ datas }: { datas: Iuser[] }) {

    const { register, formState: { errors }, handleSubmit } = useForm<Iuser>()

    const HandAdd:SubmitHandler<Iuser> = async (data: Iuser) => {
        const fill: Iuser | undefined = datas.find(u => u.email == data.email)
        if (fill) {
            const checkPassword = await bcryptjs.compare(data.password, fill.password)

            if (!checkPassword) {
                alert('SAi mật khẩu')
            } else {
                if (fill.role == 1) {
                    alert('Login success Administrator')
                } else {
                    alert('Login Success')
                }
            }
        } else {
            alert('Acccount not found')
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>
            <form action="" onSubmit={handleSubmit(HandAdd)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                        <input {...register('email', { required: 'Không được bỏ trống' })} type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />
                        {errors.email && <p>{errors.email.message}</p>}

                    </div>
                </div>

                <div>

                    <div className="relative">
                        <input {...register('password', { required: 'Không được bỏ trống' })} type="password" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter pass" />
                        {errors.password && <p>{errors.password.message}</p>}

                    </div>
                </div>

                <div className="flex items-center justify-between">

                    <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                        Sign in
                    </button>
                </div>
            </form>
        </div>

    );
}

export default SignIn;