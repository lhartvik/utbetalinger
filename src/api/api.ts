import { QueryFunctionContext } from "react-query";
import { PosteringSøkedata } from "../types/PosteringSøkedata";
import { posteringApiUrl } from "./urls";

const checkResponse = (response: Response) => {
  if (!response.ok && response.status != 204) {
    throw new Error("Fetch request failed");
  }
};

export const hentUbetalingsdata = async (søkedata: PosteringSøkedata) => {
  console.log(`Klargjør for å hente ubetalingsdata for rettighetshaver ${søkedata.rettighetshaver}`);

  console.log(`url for å hente data er: ${posteringApiUrl}`);

  const json = JSON.stringify({ søkedata });
  console.log(`json som postes: ${json}`);

  const response = await fetch(posteringApiUrl, {
    method: "POST",
    body: JSON.stringify({ rettighetshaver: søkedata.rettighetshaver }),
    credentials: "include",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
  });

  checkResponse(response);

  if (response.status === 204) {
    return null;
  }

  return response.json();
};
