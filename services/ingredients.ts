import { Ingredient, Product } from "@prisma/client";
import { axiosInstance } from "./inctance";
import { ApiRouts } from "./constants";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRouts.INGREDIENTS)).data
};
