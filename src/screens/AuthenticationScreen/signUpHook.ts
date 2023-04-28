import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export type SignUpFormData = {
    account: string;
    email: string;
    password: string;
};
const schema = z.object({
    account: z.string().min(5, { message: 'Tối thiếu 5 ký tự' }),
    email: z
        .string()
        .min(5, { message: 'Tối thiếu 5 ký tự' })
        .email('Đây không phải email'),
    password: z.string().min(5, { message: 'Tối thiếu 5 ký tự' }),
});

export const useSignUpHook = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<SignUpFormData>({
        defaultValues: {
            account: '',
            email: '',
            password: '',
        },
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: SignUpFormData) => console.log(data);

    return {
        control,
        handleSubmit,
        onSubmit,
        reset,
        accountError: errors?.account?.message,
        emailError: errors?.email?.message,
        passwordError: errors?.password?.message,
    };
};
