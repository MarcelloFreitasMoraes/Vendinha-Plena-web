import { CardList, Content, InputField } from '@/components'
import React from 'react'
import * as M from '@mui/material'
import useDebitData from '@/hooks/useDebitData'
import { useRouter } from 'next/router'

const Client: React.FC = () => {
    const { DebitQuery } = useDebitData()
    const { push } = useRouter()

    const handleItemClick = (itemId: number) => {
        push(`/ClientDetails?id=${itemId}`)
    }
    return (
        <Content title={'Clientes'}>
            <M.Grid mt={1} mb={4}>
                <InputField name={'teste'} flag />
            </M.Grid>
            {DebitQuery &&
                DebitQuery?.data?.d?.results.map((item) => {
                    return (
                        <M.Grid
                            key={item.id}
                            mb={2}
                            onClick={() => handleItemClick(item.id)}
                            sx={{cursor:'pointer'}}
                        >
                            <CardList.Root>
                                <CardList.Resumos
                                    title={item?.cliente?.nome || ''}
                                    qtde="CPF:"
                                    qtdeValor={item?.cliente?.cpf || ''}
                                    titleTotal="E-mail:"
                                    valorTotal={item?.cliente?.email || ''}
                                    clientJustify
                                />
                                <CardList.Footer
                                    titleDivida="Valor da dívida:"
                                    valorTotal={
                                        `R$ ${item?.valor?.toLocaleString(
                                            'pt-BR',
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}` || '0'
                                    }
                                />
                            </CardList.Root>
                        </M.Grid>
                    )
                })}
        </Content>
    )
}

export default Client
