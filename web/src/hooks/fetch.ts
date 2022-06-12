import { useQuery, QueryFunction } from 'react-query';

export function useFetch<T>(key: string, func: QueryFunction<T>) {
  return useQuery<T>(key, func);
}
