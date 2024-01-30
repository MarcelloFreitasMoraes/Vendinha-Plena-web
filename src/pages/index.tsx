import { Content } from '@/components'
import { CardList } from '@/components/Card'
import { ResultItem } from '@/global/types/types'
import { calculateTotals } from '@/global/utils/debit'
import useDebitData from '@/hooks/useDebitData'
import * as M from '@mui/material'

export default function Home() {
    const { DebitQuery } = useDebitData()

    const { totalDebits, totalValue } = calculateTotals(
        DebitQuery?.data?.d?.results?.filter(
            (x: ResultItem) => x.dataPagamento === null
        )
    )

    const { totalDebits: debitPaid, totalValue: totalPaid } = calculateTotals(
        DebitQuery?.data?.d?.results?.filter((x: ResultItem) => x.dataPagamento)
    )

    const { totalDebits: fullRegistration, totalValue: totalFullRegistration } =
        calculateTotals(DebitQuery?.data?.d?.results)

    return (
        <Content title={'Resumo de dívidas'}>
            <CardList.Root>
                <CardList.Resumos
                    title="Dívidas em aberto"
                    qtde="Qtde:"
                    qtdeValor={totalDebits}
                    titleTotal="Valor total:"
                    valorTotal={`R$ ${totalValue.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}`}
                />
            </CardList.Root>
            <M.Grid mt={2}>
                <CardList.Root>
                    <CardList.Resumos
                        title="Dívidas pagas"
                        qtde="Qtde:"
                        qtdeValor={debitPaid}
                        titleTotal="Valor total:"
                        valorTotal={`R$ ${totalPaid.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}`}
                    />
                </CardList.Root>
            </M.Grid>
            <M.Grid mt={2}>
                <CardList.Root>
                    <CardList.Resumos
                        title="Dívidas pagas"
                        qtde="Qtde:"
                        qtdeValor={fullRegistration}
                        titleTotal="Valor total:"
                        valorTotal={`R$ ${totalFullRegistration.toLocaleString(
                            'pt-BR',
                            {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }
                        )}`}
                    />
                </CardList.Root>
            </M.Grid>
        </Content>
    )
}
