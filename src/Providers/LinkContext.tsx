import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { toast } from "react-toastify";
import { TLinkFormValues } from "../components/Modals/AddLinkModal/LinkSchema";
import { UserContext } from "./UserContext";

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
  category: string;
}

interface IUser {
  email: string;
  id: number;
  links: ILink[];
  name: string;
  password: string;
}

interface ILinkContext {
  listLinks: ILink[];

  getLinks: () => Promise<ILink[] | undefined>;
  newLink: (
    formData: TLinkFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  deleteLink: (linkId: number) => Promise<void>;
  listCategories: string[];
  setListLinks: React.Dispatch<React.SetStateAction<ILink[]>>;
  filterLinks: (category: string) => Promise<void>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const LinkContext = createContext({} as ILinkContext);

export const LinkProvider = ({ children }: ILinkProviderProps) => {
  const [listLinks, setListLinks] = useState<ILink[]>([]);

  const [originalListLinks, setOriginalListLinks] = useState<ILink[]>([]);
  const { user } = useContext(UserContext);
  const [listCategories, setListCategories] = useState<string[]>([]);

  const [searchValue, setSearchValue] = useState("");

  const getLinks = async () => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    try {
      const response = await api.get<IUser>(`/users/${userId}?_embed=links`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListLinks(response.data.links);
      setOriginalListLinks(response.data.links);
      getCategories(response.data.links);

      return response.data.links;
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const newCategories = [...listCategories];

  const getCategories = (links: ILink[]) => {
    links.forEach((currentLink) => {
      if (!newCategories.includes(currentLink.category)) {
        newCategories.push(currentLink.category);
      }
    });
    setListCategories(newCategories);
  };

  const filterLinks = async (category: string) => {
    const listLinks = await getLinks();
    if (listLinks) {
      const newListLinks = listLinks.filter((currentLink) => {
        return currentLink.category === category;
      });
      setListLinks(newListLinks);
    }
  };

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

  const newLink = async (
    formData: TLinkFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const { data } = await api.post(
        "/links",
        { ...formData, userId: user?.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setListLinks([...listLinks, data]);
      if (!listCategories.includes(data.category)) {
        setListCategories([...listCategories, data.category]);
      }
      toast.success("Link adicionado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    () =>
      setListLinks(
        originalListLinks.filter((link) => {
          return link.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      ),
    [searchValue]
  );

  return (
    <LinkContext.Provider
      value={{
        listLinks,
        deleteLink,
        newLink,
        listCategories,
        getLinks,
        setListLinks,
        searchValue,
        setSearchValue,
        filterLinks,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
