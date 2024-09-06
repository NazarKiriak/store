import React, { useContext } from "react";
import { HistoryContext } from "../NavigationHistory/NavigationHistory";
import "./Debug.css";

export default function Debug() {
  const { history } = useContext(HistoryContext);

  return (
    <div className="debug-container">
      <h2>Історія перебування користувача</h2>
      {history.length > 0 ? (
        <ol>
          {history.map((path, index) => (
            <li key={index}>{path}</li>
          ))}
        </ol>
      ) : (
        <p>Історія порожня</p>
      )}
    </div>
  );
}
