import { createContext, useEffect, useState } from "react"
import { api } from "../Services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface IUserProviderProps{
    children: React.ReactNode
}

interface IUserContext{
    user: IUser | null,
    userLogin: (formData) => Promise<void>,
    userRegister: (formData) => Promise<void>,
    userLogout: () => void
}

interface ILoginResponse{
    accessToken: string,
    user: IUser
}

interface IRegisterResponse{
    accessToken: string,
    user: IUser
}

interface IUser{
    name: string,
    email: string,
    id: number
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProviderProps) =>{
    const [user,setUser] = useState<IUser | null>(null)

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const autoLogin = async () => {
            try{
                const {data} = await api.get<IUser>(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            }catch(error){
                console.log(error)
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
            }
        }

        if (token && userId){
            autoLogin()
        }
    }, [])

    const userLogin = async (formData) => {
        try{
            const {data} = await api.post<ILoginResponse>("/login", formData)
            localStorage.setItem("@TOKEN", data.accessToken)
            localStorage.setItem("@USERID", JSON.stringify(data.user.id))
            setUser(data.user)
        }catch(error){
            console.log(error)
        }
    }

    const userRegister = async (formData) => {
        try{
            const {data} = await api.post<IRegisterResponse>("/users", formData)
            toast.success("Cadastro efetuado com sucesso")
        }catch(error){
            console.log(error)
        }
    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }

    return(
        <UserContext.Provider value={{user, userLogin, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}