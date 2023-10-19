import { useQuery } from "react-query";
import { useNhostClient } from "@nhost/react";
import axios from "axios";
import { BASE_URL } from "../consts/Base";
const Url = `${BASE_URL}`;

export const fetchPins = async (nhost:any) => {
  const apiUrl = `${Url}/showpin`;
  const response = await axios.get(apiUrl);
  return response.data.pins;
};


export const usePinsQuery = (nhost:any) => {
  return useQuery("pins", () => fetchPins(nhost));
};


export const fetchUserPins = async() =>{

  const apiUrl = "";


}