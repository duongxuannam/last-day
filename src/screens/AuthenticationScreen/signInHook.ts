import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppInfoStoreActions } from 'src/store/appInfo';
import { delay } from 'src/utils/time';
import { useUserStoreActions } from 'src/store/user';

export type SignInFormData = {
    email: string;
    password: string;
};
const schema = z.object({
    email: z
        .string()
        .min(5, { message: 'Tối thiếu 5 ký tự' })
        .email('Đây không phải email'),
    password: z.string().min(5, { message: 'Tối thiếu 5 ký tự' }),
});

export const useSignInHook = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(schema),
    });

    const { setIsLoading } = useAppInfoStoreActions();
    const { setUserData } = useUserStoreActions();

    const onSubmit = async (data: SignInFormData) => {
        console.log(data);
        setIsLoading(true);
        await delay(1000);
        setUserData({
            isLogin: true,
            username: data.email,
            email: data.email,
        });
        setIsLoading(false);
    };

    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        reset,
        emailError: errors?.email?.message,
        passwordError: errors?.password?.message,
    };
};
