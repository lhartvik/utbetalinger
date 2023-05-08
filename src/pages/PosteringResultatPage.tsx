import { HentPosteringRespons } from "../types/HentPosteringRespons";
import { useQuery } from "react-query";
import { hentUbetalingsdata } from "../api/api";
import { Alert, Button, Heading, Loader, Table } from "@navikt/ds-react";
import React from "react";
import { PosteringSøkedata } from "../types/PosteringSøkedata";
import { b } from "vitest/dist/types-e3c9754d";

type Props = {
  søkeData: PosteringSøkedata;
  handleSøk: (nullstille: boolean) => void;
};

export function PosteringResultatPage(props: Props) {
  const søkeData: PosteringSøkedata = props.søkeData;
  const { isLoading, isError, data } = useQuery<HentPosteringRespons>(["hentUtbetlingsdata", søkeData], () =>
    hentUbetalingsdata(søkeData)
  );

  if (data === null) {
    return <Alert variant="info">Fant ingen data.</Alert>;
  }

  return (
    <>
      {isLoading ? (
        <Loader size="3xlarge" title="venter..." variant="interaction" />
      ) : isError ? (
        <Alert variant="error">Det oppstod en feil ved henting av posteringer</Alert>
      ) : (
        <div>
          <Heading size="large">Søkeresultat</Heading>
          <Table zebraStripes>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>BeregningsId</Table.HeaderCell>
                <Table.HeaderCell>Rettighetshaver</Table.HeaderCell>
                <Table.HeaderCell>Navn</Table.HeaderCell>
                <Table.HeaderCell>Utbetalingsdato</Table.HeaderCell>
                <Table.HeaderCell>Utbetalingsnettobeløp</Table.HeaderCell>
                <Table.HeaderCell>Posteringsdato</Table.HeaderCell>
                <Table.HeaderCell>Posteringskonto</Table.HeaderCell>
                <Table.HeaderCell>Ytelsesperiode fra</Table.HeaderCell>
                <Table.HeaderCell>Ytelsesperiode til</Table.HeaderCell>
                <Table.HeaderCell>Ansvarssted</Table.HeaderCell>
                <Table.HeaderCell>Kostnadssted</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data?.utbetalinger.map((item) => (
                <Table.Row key={item.beregningsId}>
                  <Table.DataCell>{item.beregningsId}</Table.DataCell>
                  <Table.DataCell>{item.rettighetshaver.ident}</Table.DataCell>
                  <Table.DataCell>{item.rettighetshaver.navn}</Table.DataCell>
                  <Table.DataCell>{item.utbetalingsdato}</Table.DataCell>
                  <Table.DataCell align="right">{item.utbetalingNettobeloep}</Table.DataCell>
                  <Table.DataCell>{item.posteringsdato}</Table.DataCell>
                  <Table.DataCell>{item.posteringskonto}</Table.DataCell>
                  <Table.DataCell>{item.ytelsesperiode.fomDato}</Table.DataCell>
                  <Table.DataCell>{item.ytelsesperiode.tomDato}</Table.DataCell>
                  <Table.DataCell>{item.ansvarssted}</Table.DataCell>
                  <Table.DataCell>{item.kostnadssted}</Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <br />
          <div className="flex flex-row gap-4">
            <Button size="small" onClick={() => props.handleSøk(false)}>
              Tilbake til gjeldende søk
            </Button>
            <Button size="small" onClick={() => props.handleSøk(true)}>
              Nytt søk
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
