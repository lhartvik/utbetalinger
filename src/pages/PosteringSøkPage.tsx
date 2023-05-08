import React, { FormEventHandler } from "react";
import { Button, GuidePanel, Heading, Radio, RadioGroup, TextField } from "@navikt/ds-react";
import { PosteringSøkedata } from "../types/PosteringSøkedata";
import { Periodetype } from "../types/Periodetype";

type Props = {
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleChange: (value: PosteringSøkedata) => void;
  posteringSøkedata: PosteringSøkedata;
};

export function PosteringSøkPage(props: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const søkeData = { ...props.posteringSøkedata, [name]: type === "checkbox" ? checked : value };
    props.handleChange(søkeData);
  };

  const handleChangeRadio = (val: Periodetype) => {
    const søkeData = { ...props.posteringSøkedata, periodetype: val };
    props.handleChange(søkeData);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="grid grid-cols-1 gap-2">
        <Heading size="large">SHADOW TEST</Heading>
        <div>
          <GuidePanel>
            Her kan du søke opp posteringer. Påkrevede felter er:
            <ul>
              <li>Utbetalingsmottaker eller Rettighetshaver</li>
              <li>Periodetype og periode</li>
            </ul>
          </GuidePanel>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div>
            <TextField
              htmlSize={11}
              size="small"
              label="Rettighetshaver"
              name="rettighetshaver"
              onChange={onChange}
              value={props.posteringSøkedata.rettighetshaver}
            />
          </div>
          <div>
            <TextField
              htmlSize={11}
              size="small"
              label="Utbetalingsmottaker"
              name="utbetalingsmottaker"
              onChange={onChange}
              value={props.posteringSøkedata.utbetalingsmottaker}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div>
            <RadioGroup
              legend="Velg periodetype"
              onChange={handleChangeRadio}
              size="small"
              name="periodetype"
              value={props.posteringSøkedata.periodetype}
            >
              <Radio value={Periodetype.UTBETALINGS_PERIODE}>Utbetalingsperiode</Radio>
              <Radio value={Periodetype.YTELSES_PERIODE}>Ytelsesperiode</Radio>
            </RadioGroup>
          </div>
          <div>
            <TextField
              htmlSize={10}
              size="small"
              label="Periode fra dato"
              name="fraDato"
              onChange={onChange}
              value={props.posteringSøkedata.fraDato}
            />
          </div>
          <div>
            <TextField
              htmlSize={10}
              size="small"
              label="Periode til dato"
              name="tilDato"
              onChange={onChange}
              value={props.posteringSøkedata.tilDato}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <>
            <TextField
              htmlSize={15}
              size="small"
              label="Ansvarssted"
              name="ansvarssted"
              onChange={onChange}
              value={props.posteringSøkedata.ansvarssted}
            />
          </>
          <>
            <TextField
              htmlSize={15}
              size="small"
              label="Kostnadssted"
              name="kostnadssted"
              onChange={onChange}
              value={props.posteringSøkedata.kostnadssted}
            />
          </>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div>
            <TextField
              htmlSize={15}
              size="small"
              label="Posteringskonto fra"
              name="posteringskontoFra"
              onChange={onChange}
              value={props.posteringSøkedata.posteringskontoFra}
            />
          </div>
          <div>
            <TextField
              htmlSize={15}
              size="small"
              label="Posteringskonto til"
              name="posteringskontoTil"
              onChange={onChange}
              value={props.posteringSøkedata.posteringskontoTil}
            />
          </div>
        </div>

        <div>
          <Button size="small">Søk</Button>
        </div>
      </div>
    </form>
  );
}
