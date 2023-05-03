import React, { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { toast } from "react-toastify";
import { TLinkFormValues } from "../components/Modals/AddLinkModal/LinkSchema";

interface ILinkProviderProps {
  children: React.ReactNode;
}

export interface ILink {
  id: number;
  title: string;
  link: string;
  img: string;
  comments: string;
  userId: number;
}

interface ILinkContext {
  listLinks: ILink[];
  newLink: (
    formData: TLinkFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  deleteLink: (linkId: number) => Promise<void>;
}

export const LinkContext = createContext({} as ILinkContext);

export const LinkProvider = ({ children }: ILinkProviderProps) => {
  const [listLinks, setListLinks] = useState<ILink[]>([]);

  const getLinks = async () => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    try {
      const { data } = await api.get<ILink[]>(`/users/${userId}?_embed=links`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListLinks(data);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const deleteLink = async (linkId: number) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`/links/${linkId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newListLinks = listLinks.filter(
        (currentLink) => currentLink.id !== linkId
      );
      setListLinks(newListLinks);
      toast.success("Link removido com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado!");
    }
  };

  const newLink = async (
    formData: TLinkFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const { data } = await api.post("/links", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListLinks([...listLinks, data]);
      toast.success("Link adicionado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinkContext.Provider
      value={{
        listLinks,
        deleteLink,
        newLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
