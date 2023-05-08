import { GuidePanel } from "@navikt/ds-react";
import React from "react";
import penger from "../images/penger.png";

function Penger() {
  return <img src={penger} alt="bilde mangler" />;
}

export function Velkommen() {
  return (
    <>
      <GuidePanel illustration={<Penger />}>
        Velkomment til ny frontend for utbetalinger. Her skal det bli mulig å søke etter utbetalinger fra UR.
      </GuidePanel>
    </>
  );
}
