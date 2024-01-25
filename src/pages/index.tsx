import { Content } from '@/components'
import { CardList } from '@/components/Card'
import useClientData from '@/hooks/useClientData'

export default function Home() {
    const { ClientQuery, ClientMutation } = useClientData()
    console.log(ClientQuery.data, 'ClientQuery')

    return (
            <Content title={'Resumo de dívidas'}>
                <CardList.Root>
                    <CardList.Resumos
                        title="Dívidas em aberto"
                        qtde="Qtde:"
                        qtdeValor="32"
                        titleTotal="Valor total:"
                        valorTotal="R$ 43.243,09"
                    />
                </CardList.Root>
            </Content>
    )
}
