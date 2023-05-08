import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./App.css";

const Mikrofrontend = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
