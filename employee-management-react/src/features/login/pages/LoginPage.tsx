import { useDispatch } from "react-redux";
import { saveUser } from "../../../slice/authSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginType } from "../schema/loginSchema";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });
    const handleLogin = (data: LoginType) => {
        dispatch(saveUser(data));
        navigate("/dashboard");
    };
    return(
        <form onSubmit={handleSubmit(handleLogin)}>
            <input type="email" placeholder="Email" {...register("email")} />
            <input type="password" placeholder="Password" {...register("password")} />
            <div>
                {errors.email && <span>{errors.email.message}</span>}
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginPage;