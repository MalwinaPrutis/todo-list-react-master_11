// src/features/author/AuthorPage.js

import React from "react";
// Importy muszą uwzględniać to, że Section i Header są w 'common', dwa foldery wstecz (../../)
import Section from "../../common/Section";
import Header from "../../common/Header";

const AuthorPage = () => (
  <>
    <Header title="O autorze" />
    <Section
      title="Malwina Aniela Prutis"
      body={
        <p>
          Cześć 😊! Tworzę ten projekt w ramach nauki Reacta i rozwijania umiejętności programowania front-endowego. 
          Interesuję się nowoczesnymi technologiami, estetyką interfejsów i projektowaniem intuicyjnych aplikacji.
          W wolnym czasie lubię poznawać nowe narzędzia, które ułatwiają pracę z kodem.
          <br /><br />
          Więcej informacji o mnie znajdziesz na moich profilach społecznościowych:
          <br />
          <a href="https://www.facebook.com/Malwina.Aniela/" target="_blank" rel="noopener noreferrer">
            Mój Profil na Facebooku
          </a>
        </p>
      }
    />
  </>
);

export default AuthorPage;