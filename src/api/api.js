import axios from "axios";

const api = axios.create({
  baseURL: "https://67841dc38b6c7a1316f6c119.mockapi.io",
});

export const getContacts = async () => {
  const { data } = await api.get("/contacts");
  return data;
};

export const addNewContact = async (contact) => {
  const { data } = await api.post("/contacts", contact);
  return data;
};

export const deleteContactById = async (id) => {
  await api.delete(`/contacts/${id}`);
};
