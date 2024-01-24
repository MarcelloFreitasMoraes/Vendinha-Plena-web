import { http } from '@/global/config/baseUrl';
import stale from '@/global/utils/stale';
import { useQuery, useMutation } from '@tanstack/react-query';

export const ClientKey = 'clientData';

export default function useClientData() {
  const query = useQuery<any, any>(
    [ClientKey],
    () =>
      http
        .get(`Cliente/GetOData`)
        .then((res) => {
          return res.data.data;
        })
        .catch((err) => err),
    {
      staleTime: stale.never,
      cacheTime: 0,
      enabled: true,
    }
  );
  

  const mutation = useMutation(
    (values: any) => {   
      const method = values.id ? 'put' : 'post'
     
      const body: any = {
        ...values,
      } 

      return http[method](
        `Cliente/`,       
         ...body,          
      )
    },
    {
      onSuccess: ({ data }) => {
        console.log('mutation membro', data)
        query.refetch()
      },
    },
  )

  return {
    ClientQuery: query,
    ClientMutation: mutation,
  };
}
