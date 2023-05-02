/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TLoginFormValues } from "../Components/LoginForm/schema";
import { api } from "../Services/api";

interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    userLogin: (
        formData: TLoginFormValues,
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

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
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
            navigate("/shop");
        } catch (error) {
            toast.error("Ops, algo deu errado!", { autoClose: 2000 });
        } finally {
            setLoading(false);
        }
    };

    const navigate = useNavigate();

    return (
        <UserContext.Provider
            value={{
                userLogin,
                user,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
