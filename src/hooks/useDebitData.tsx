import { http } from '@/global/config/baseUrl'
import { CreateDebtFormData, ResultItem } from '@/global/types/types'
import stale from '@/global/utils/stale'
import { useQuery, useMutation } from '@tanstack/react-query'

export const DebitKey = 'debitData'

export default function useDebitData() {
    const query = useQuery<
        any,
        any,
        { d: { __count: number; results: ResultItem[] } },
        any
    >(
        [DebitKey],
        () =>
            http
                .get(`Divida/GetOData`)
                .then((res) => {
                    return res?.data
                })
                .catch((err) => err),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )

    const mutation = useMutation(
        (values: CreateDebtFormData) => {
            const method = values.clienteId ? 'put' : 'post'
            const action = values.clienteId ? 'Debit/Pagar' : 'Debit'

            const body: any = {
                ...values,
            } as CreateDebtFormData

            return http[method](`${action}`, ...body)
        },
        {
            onSuccess: ({ data }) => {
                console.log('mutation membro', data)
                query.refetch()
            },
        }
    )

    return {
        DebitQuery: query,
        DebitMutation: mutation,
    }
}
