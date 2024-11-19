import { axiosInstance } from "./instance";
import { Product } from "@prisma/client";
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
  try {
    // return (await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data;
    const resp = await axiosInstance.get(ApiRoutes.SEARCH_PRODUCTS, {params: {query}});
    console.log('Полный ответ от API:', resp)
    console.log(resp.data, 'resp.data.products')
    return resp.data.products
  } catch (error) {
    console.error('Ошибка при выполнении запроса поиска продуктов:', error);
    return [];
  }
}
