import React from 'react'
import { Card } from 'react-bootstrap'
import Cards from '/src/components/Cards'

//static images handling
const parrotcloud = new URL('/src/assets/images/parrotcloud.png', import.meta.url).href
const mostra = new URL('/src/assets/images/mostra_ifrj.png', import.meta.url).href
const calculadora = new URL('/src/assets/images/calculadora.png', import.meta.url).href
const last = new URL('/src/assets/images/last.png', import.meta.url).href
const crud = new URL('/src/assets/images/crud.png', import.meta.url).href

export default function Projects() {

  const container = {
    marginLeft: "4rem",
    marginRight: "1rem",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "none"
  }

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
          href={"https://mulekotd.github.io/simple-react-calculator/"}
          title={"React Simple Calculator"}
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
          href={"https://github.com/Mulekotd/php-crud"}
          title={"CRUD"}
          />
        </Card>
      </Card>
    </main>
  )
}