import { CardList, Content, InputField } from '@/components'
import useClientData from '@/hooks/useClientData'
import { Grid } from '@mui/material'
import React from 'react'

const Client: React.FC = () => {
    const { ClientQuery, ClientMutation } = useClientData()
    return (
        <Content title={'Clientes'}>
            <Grid mt={1} mb={4}>
                <InputField name={'teste'} />
            </Grid>
            {ClientQuery &&
                ClientQuery?.data?.d?.results.map((item) => {
                    console.log(item, 'item')

                    return (
                        <CardList.Root key={item.id}>
                            <CardList.Resumos
                                title="Maria Helena de Rodrigues"
                                qtde="CPF:"
                                qtdeValor="56640484846"
                                titleTotal="E-mail:"
                                valorTotal="maria.helena@gmail.com"
                                clientJustify
                            />
                            <CardList.Footer
                                titleDivida="Valor da dívida:"
                                valorTotal="R$ 990,90"
                            />
                        </CardList.Root>
                    )
                })}
        </Content>
    )
}

export default Client
