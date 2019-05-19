export class CheckSummaryModel {
  responsible: string;
  number: number;
  date: string;
  status: StatusEnum;
  id: number;
}

export enum StatusEnum {
  Pendente = 1,
  Finalizado = 2
}
