import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

export const useGetQuery = (query, key, params) => {
    const baseUrl = `https://api-eu-west-2.hygraph.com/v2/cluzgrztf149608uxwl5l0v0q/master`;

    const { data, isLoading, error } = useQuery({
        queryKey: [key.key, key?.refetch],
        queryFn: async () => request(baseUrl, query, params ? { ...params } : null),
      });

    return { data, isLoading, error }};