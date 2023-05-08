import React from "react";
import ReactDOM from "react-dom/client";
import Mikrofrontend from "./Mikrofrontend";
import "./main.css";

class UtbetalingerFrontend extends HTMLElement {
  connectedCallback() {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(root);

    const shadowRoot = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
    shadowRoot.render(
      <React.StrictMode>
        <div className="page-wrapper">
          <div className="page-layout">
            <main>
              <Mikrofrontend />
            </main>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
const shadowRoot = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
if (shadowRoot) {
  shadowRoot.render(
    <React.StrictMode>
      <div className="page-wrapper">
        <div className="page-layout">
          <main>
            <Mikrofrontend />
          </main>
        </div>
      </div>
    </React.StrictMode>
  );
} else {
  window.customElements.define("tp-frontend", UtbetalingerFrontend);
}
