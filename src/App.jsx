import React from "react";
import "./gota.css";

const App = () => {
  return (
    <svg viewBox="0 0 5200 9500">
      <rect x="-1" y="1" className="st0" width="5200" height="9500" fill="black"/>
      <defs>
        <linearGradient id="aspaNaranja">
          <stop offset="0%" stopColor="#F6850F" stopOpacity="100%" />
          <stop offset="100%" stopColor="#fff" stopOpacity="100%" />
        </linearGradient>
        <linearGradient id="aspaGris">
          <stop offset="0%" stopColor="#474747" stopOpacity="100%" />
          <stop offset="100%" stopColor="#fff" stopOpacity="100%" />
        </linearGradient>
        <linearGradient id="aspaVerde">
          <stop offset="0%" stopColor="#1C94AD" stopOpacity="100%" />
          <stop offset="100%" stopColor="#fff" stopOpacity="100%" />
        </linearGradient>
      </defs>
      <path
        className="aspaNaranja"
        // d="M2697.4,8164.8c548.5-7.9,817.4-714.2,394.6-1102.3c-549.3,165.7-1022.8-425-751.5-900.6 C1644.9,6738.8,1846.5,7859,2697.4,8164.8"

        // d="M2024,1466.6 c-318.3,1024.7,1603.4,1339.7,1133.3-133.2 C2944.9,809,2798,615.2,2614.5,348.1 C2382.5,694.1,2218,937.2,2024,1466.6"

        d="M2024,7056.9c-318.3,992.4,1603.4,1297.4,1133.3-129c-212.3-507.9-359.3-695.5-542.7-954.2 C2382.5,6308.8,2218,6544.2,2024,7056.9"
      />
      
      <path
        className="aspaVerde"
        d="M2024,7056.9c-318.3,992.4,1603.4,1297.4,1133.3-129c-212.3-507.9-359.3-695.5-542.7-954.2 C2382.5,6308.8,2218,6544.2,2024,7056.9"
      />
      <path
        className="aspaGris"
        d="M2024,7056.9c-318.3,992.4,1603.4,1297.4,1133.3-129c-212.3-507.9-359.3-695.5-542.7-954.2 C2382.5,6308.8,2218,6544.2,2024,7056.9"
      />
    </svg>
  );
};

export default App;
