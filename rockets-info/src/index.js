import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
