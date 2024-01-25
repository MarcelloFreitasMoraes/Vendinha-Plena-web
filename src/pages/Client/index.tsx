import { CardList, Content } from '@/components';
import React from 'react';

const Client: React.FC = () => {
  return (
    <Content title={'Clientes'}>
    <CardList.Root>
        <CardList.Resumos
            title="Maria Helena de Rodrigues"
            qtde="CPF:"
            qtdeValor="56640484846"
            titleTotal="E-mail:"
            valorTotal="maria.helena@gmail.com"
            clientJustify
        />
        <CardList.Footer titleDivida='Valor da dívida:' valorTotal='R$ 990,90'/>
    </CardList.Root>
</Content>
  );
}

export default Client;