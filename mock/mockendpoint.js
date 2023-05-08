export default [
  {
    url: "/api/endpoint",
    method: "get",
    response: () => {
      return {
        tekst: "utbetalinger-frontend-poc !! Woohoo !!",
      };
    },
  },
  {
    url: "/mikrofrontend-api/api/utbetaling/hentPostering",
    method: "post",
    response: () => {
      return {
        utbetalinger: [
          {
            beregningsId: "111",
            rettighetshaver: {
              ident: "08838997318",
              navn: "TESTMOTTAKER 12345",
            },
            posteringsdato: "2023-02-06",
            utbetalingsdato: "2023-02-07",
            utbetalingNettobeloep: "800.00",
            utbetaltTilKonto: "DK9520000123456789",
            bilagsnummer: "123",
            posteringskonto: "424242",
            ytelsesperiode: {
              fomDato: "2023-01-01",
              tomDato: "2023-01-15",
            },
            ansvarssted: "1218",
            kostnadssted: "9710",
          },
          {
            beregningsId: "112",
            rettighetshaver: {
              ident: "088389973183",
              navn: "TESTMOTTAKER 12345",
            },
            posteringsdato: "2023-02-06",
            utbetalingsdato: "2023-02-07",
            utbetalingNettobeloep: "800.00",
            utbetaltTilKonto: "DK9520000123456789",
            bilagsnummer: "123",
            posteringskonto: "424242",
            ytelsesperiode: {
              fomDato: "2023-01-16",
              tomDato: "2023-01-31",
            },
            ansvarssted: "1218",
            kostnadssted: "9710",
          },
        ],
      };
    },
  },
  {
    url: "/mikrofrontend-api/api/utbetaling/hentPosteringNoContent",
    method: "post",
    statusCode: 204,
  },
];
