import { LoginForm } from "../../components/LoginForm"
import logo from "../../assets/logo.svg"

export const LoginPage = () => {
    return (
        <main>
            <div>
            <img src={logo} alt="logo" />
            <LoginForm/>
            </div>
        </main> 
    )
}