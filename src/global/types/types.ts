export type CreateClientFormData = {
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: string;
  };

  export type CreateDebtFormData = {
    valor: string;
    dataPagamento: string;
    descricao: string;
    clienteId: number;
    creationDate: string;
  };