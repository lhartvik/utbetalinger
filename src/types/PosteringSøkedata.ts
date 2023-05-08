import { Periodetype } from "./Periodetype";

export type PosteringSøkedata = {
  utbetalingsmottaker: string;
  rettighetshaver: string;
  periodetype: Periodetype;
  fraDato: string;
  tilDato: string;
  ansvarssted: string;
  kostnadssted: string;
  posteringskontoFra: string;
  posteringskontoTil: string;
};
