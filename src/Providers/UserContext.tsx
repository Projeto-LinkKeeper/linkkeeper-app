/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TLoginFormValues } from "../components/LoginForm/schema";
import { api } from "../Services/api";
import { IResgisterFormData } from "../components/RegisterForm";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: IResgisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  user: IUser | null;
}

interface IUser {
  email: string;
  password: string;
  name: string;
  id: string;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN") as string;
  const userId = localStorage.getItem("@USERID") as string;

  useEffect(() => {
    const userVerification = async () => {
      const token = localStorage.getItem("@TOKEN") as string;
      const userId = localStorage.getItem("@USERID") as string;
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/home");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    if (token && userId) {
      userVerification();
    }
  }, []);

  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);

      setUser(data.user);
      toast.success("Login efetuado com sucesso!", {
        autoClose: 2000,
      });
      navigate("/home");
    } catch (error) {
      toast.error("Ops, algo deu errado!", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: IResgisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Cadastro efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

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
