import axios from "axios";

const baseURL = "http://localhost:3001/api/notes";

export const notesService = {
  getAll: async () => {
    return axios.get(baseURL).then((response) => response.data);
  },
  create: async (note) => {
    return axios.post(baseURL, note).then((response) => response.data);
  },
  update: async (id, note) => {
    return axios
      .put(`${baseURL}/${id}`, note)
      .then((response) => response.data);
  },
  remove: async (id) => {
    return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
  },
};
