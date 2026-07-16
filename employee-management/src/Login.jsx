import { useState, useNavigate,useContext } from "react";
import { login } from "./services/authService";
import { AuthContext } from "./context/AuthContext";
function Login(){
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogin(){
        login(form).then(response=>{
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
        });
        navigate('/employees');
    }
    return(
        <div>
            <h1>Login</h1>
            <input value={form.email} onChange={(e)=>{setForm({...form, email: e.target.value})}} />
            <input value={form.password} onChange={(e)=>{setForm({...form, password: e.target.value})}} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;