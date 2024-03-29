import React from 'react';
import { Card } from 'react-bootstrap';
import Cards from '/src/components/Cards';

// static images handling
const parrotcloud = new URL('/src/assets/images/parrotcloud.png', import.meta.url).href;
const mostra = new URL('/src/assets/images/mostra_ifrj.png', import.meta.url).href;
const calculadora = new URL('/src/assets/images/calculadora.gif', import.meta.url).href;
const last = new URL('/src/assets/images/last.png', import.meta.url).href;
const crud = new URL('/src/assets/images/crud.gif', import.meta.url).href;
const excelgraphicx = new URL('/src/assets/images/excelgraphicx.gif', import.meta.url).href;

const container = {
  marginLeft: "4rem",
  marginRight: "1rem",
  flexDirection: "row",
  justifyContent: "space-between",
  border: "none"
};

export default function Projects() {
  return (
    <main
    className="mt-4"
    id="canvas_container"
    >
      <Card
      className="container"
      style={container}
      >
        <Card 
        className="row"
        style={container}
        >
          <Cards
          alt={"Parrotcloud"}
          src={parrotcloud}
          href={"https://mulekotd.github.io/store.parrotcloud/"}
          title={"Parrotcloud: Site de Publicação de Jogos"}
          />

          <Cards
          alt={"Mostra IFRJ"}
          src={mostra}
          href={"https://mostraifrjduquedecaxias.labculturadigital.com.br/"}
          title={"#Mostra IFRJ"}
          />

          <Cards
          alt={"Calculadora"}
          src={calculadora}
          className="col"
          href={"https://mulekotd.github.io/react-calculator/"}
          title={"Calculadora Simples em React"}
          />

          <Cards
          alt={"Last 2"}
          src={last}
          className="col"
          href={"https://app.last.app.br/dashboard/"}
          title={"Projeto LAST 2"}
          />

          <Cards
          alt={"CRUD em PHP"}
          src={crud}
          className="col"
          href={"http://ec2-3-90-40-114.compute-1.amazonaws.com/"}
          title={"CRUD em PHP"}
          />

          <Cards
          alt={"ExcelGraphicx"}
          src={excelgraphicx}
          className="col"
          href={"http://ec2-54-80-107-167.compute-1.amazonaws.com/"}
          title={"Conversor de Arquivos Excel em Gráficos com Python"}
          />
        </Card>
      </Card>
    </main>
  );
}
