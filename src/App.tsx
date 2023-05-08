import "./App.css";
import { PosteringPage } from "./pages/PosteringPage";

const App = () => {
  return (
    <main className="main">
      <div className="app">
        <section className="page-wrapper-microfrontend">
          <PosteringPage />
        </section>
      </div>
    </main>
  );
};

export default App;
