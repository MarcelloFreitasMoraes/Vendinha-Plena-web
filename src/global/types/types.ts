 //Debit

export type CreateClientFormData = {
    nome: string
    email: string
    cpf: string
    dataNascimento: string
    id?: number
}

export type CreateDebtFormData = {
    valor: string
    dataPagamento: string
    descricao: string
    clienteId: number
    creationDate: string
}

type Cliente = {
    id: number;
    ultimaAlteracao: string;
    criadoEm: string;
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: string;
  };
  
  export type ResultItem = {
    cliente: Cliente;
    id: number;
    ultimaAlteracao: string;
    criadoEm: string;
    valor: number;
    dataPagamento: string | null;
  };
  
//   type DebitData = {
//     __count: number;
//     results: ResultItem[];
//   };
  
  export type ApiResponse = {
    d: {
      __count: number;
      results: ResultItem[];
    };
  };

  //Client
