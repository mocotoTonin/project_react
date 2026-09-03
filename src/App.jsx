import { useState } from "react";

function App() {
  const [tecnologias] = useState([
    {
      numero: "01",
      nome: "React",
      descricao: "Biblioteca JavaScript para criação de interfaces.",
    },
    {
      numero: "02",
      nome: "Vue",
      descricao: "Framework progressivo para desenvolvimento Web.",
    },
    {
      numero: "03",
      nome: "Angular",
      descricao: "Framework completo baseado em TypeScript.",
    },
    {
      numero: "04",
      nome: "Next.js",
      descricao: "Framework React para aplicações Web modernas.",
    },
  ]);

  return (
    <div className="app">

      <header className="header">
        <div className="logo">DEVHUB</div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#tecnologias">Tecnologias</a>
        </nav>
      </header>

      <main>

        <section id="inicio" className="hero">

          <p className="hero-tag">
            TECNOLOGIAS FRONT-END
          </p>

          <h1>
            DESENVOLVIMENTO
            <span>FRONT-END</span>
          </h1>

          <p className="hero-text">
            Conheça algumas das principais tecnologias
            utilizadas no desenvolvimento Web moderno.
          </p>

          <a href="#tecnologias" className="button">
            Conhecer tecnologias
          </a>

        </section>

        <section id="tecnologias" className="technologies">

          <div className="section-title">
            <p>ECOSSISTEMA WEB</p>
            <h2>TECNOLOGIAS</h2>
          </div>

          <div className="cards">

            {tecnologias.map((tecnologia) => (
              <article className="card" key={tecnologia.nome}>

                <span className="card-number">
                  {tecnologia.numero}
                </span>

                <h3>{tecnologia.nome}</h3>

                <p>
                  {tecnologia.descricao}
                </p>

                <span className="arrow">
                  →
                </span>

              </article>
            ))}

          </div>

        </section>

      </main>

      <footer className="footer">
        <span>DEVHUB</span>
        <span>FRAMEWORKS FRONT-END • 2026</span>
      </footer>

    </div>
  );
}

export default App;