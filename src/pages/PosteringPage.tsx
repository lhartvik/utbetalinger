import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import React, { useState } from "react";
import { PosteringSøkedata } from "../types/PosteringSøkedata";
import { PosteringSøkPage } from "./PosteringSøkPage";
import { PosteringResultatPage } from "./PosteringResultatPage";
import { Periodetype } from "../types/Periodetype";

export function PosteringPage() {
  const [posteringSøkedata, setPosteringSøkedata] = useState<PosteringSøkedata>(initialiserSøkeparametre());

  const [søkAngitt, setSøkAngitt] = useState(false);
  console.log(
    `Søkedata er nå: utbetalingsmottaker:${posteringSøkedata.utbetalingsmottaker} periodetype:${posteringSøkedata.periodetype}`
  );

  const handleChange = (verdi: PosteringSøkedata) => {
    setPosteringSøkedata(verdi);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Submit utført");
    setSøkAngitt(true);
  };

  const handleSøk = (nullstilleSøkeparametre: boolean) => {
    setSøkAngitt(false);
    if (nullstilleSøkeparametre) {
      setPosteringSøkedata(initialiserSøkeparametre);
    }
  };

  return (
    <>
      <div>{søkAngitt && <PosteringResultatPage søkeData={posteringSøkedata} handleSøk={handleSøk} />}</div>
      {!søkAngitt && (
        <PosteringSøkPage
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          posteringSøkedata={posteringSøkedata}
        />
      )}
    </>
  );
}

function initialiserSøkeparametre() {
  return {
    utbetalingsmottaker: "",
    rettighetshaver: "",
    periodetype: Periodetype.UTBETALINGS_PERIODE,
    fraDato: "",
    tilDato: "",
    ansvarssted: "",
    kostnadssted: "",
    posteringskontoFra: "",
    posteringskontoTil: "",
  };
}
