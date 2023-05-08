export interface Ytelsesperiode {
  fomDato: string;
  tomDato: string;
}

export interface Rettighetshaver {
  ident: string;
  navn: string;
}

export interface PosteringData {
  beregningsId: string;
  rettighetshaver: Rettighetshaver;
  posteringsdato: string;
  utbetalingsdato: string;
  utbetalingNettobeloep: string;
  bilagsnummer: string;
  posteringskonto: string;
  ytelsesperiode: Ytelsesperiode;
  ansvarssted: string;
  kostnadssted: string;
}
