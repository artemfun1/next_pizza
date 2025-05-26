import { Product } from "@prisma/client";
import { axiosInstance } from "./inctance";
import { ApiRouts } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRouts.SEARCH_PRODUCTS, {
    params: {
      query,
    },
  })).data
};
