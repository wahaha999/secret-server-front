import axios from "axios";

const API_URL = "https://api-secretserver.herokuapp.com/v1";

export async function getSecrets() {
  const Service_URL = `${API_URL}/get`;

  return axios.get(Service_URL);
}

export async function createSecret(payload: any) {
  return axios.post(`${API_URL}/secret`, payload);
}

export const getSecret = (hash: string) => {
  return axios.get(`${API_URL}/secret/${hash}`);
};
