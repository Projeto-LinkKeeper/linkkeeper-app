import React, { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { toast } from "react-toastify";

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
  getUserLinks: () => Promise<void>;
  newLink: (formData) => Promise<void>;
  deleteLink: (linkId: number) => Promise<void>;
}

export const LinkContext = createContext({} as ILinkContext);

export const LinkProvider = ({ children }: ILinkProviderProps) => {
  const [listLinks, setListLinks] = useState<ILink[]>([]);

  const getLinks = async () => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem(JSON.parse("@USERID"));

    try {
      const { data } = await api.get<ILink[]>(`/users/${userId}?_embed=links`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListLinks(data);
    } catch (error) {
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
      toast.error("Algo deu errado!");
    }
  };

  const newLink = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/links", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListLinks([...listLinks, data]);
      toast.success("Link adicionado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  return (
    <LinkContext.Provider
      value={{
        listLinks,
        setListLinks,
        deleteLink,
        newLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
