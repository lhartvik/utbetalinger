# utbetalinger-frontend-poc

En proof of concept for å vise utbetalinger.

# Features

- vite-plugin-mock
- vitest
- @navikt/ds-css
- @navikt/ds-react
- precommit linting med a11y og react

## Tilpass repo-et

1. Kjør `chmod 755 setupTemplate.sh`
2. Kjør:
   ```
   ./setupTemplate.sh
   ```
3. Slett `setupTemplate.sh` hvis du er ferdig med endre navn på prosjektet

4. Sett riktig port i server/server.js, Dockerfile og nais.yaml.
5. Sett riktig namespace og team i nais manifestene, de ligger i mappen under `nais/<cluster>`
6. Sett opp secrets, som default er det lagt opp til at secrets kan hentes fra `<appnavn>-secrets`
7. Velg riktig ingress til appen i nais.yaml

# Kom i gang

1. Installere dependencies `npm intall`
2. Bygg utbetalinger-frontend-poc `npm run build`
3. Start appen lokalt `npm run dev`
4. Appen nås på http://localhost:5173

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling.
