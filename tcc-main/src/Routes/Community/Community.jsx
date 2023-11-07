import "./Community.css";

export default function Community() {
  return (
    <div>
      <div className="container-community">
        <h1 className="h1-title">Atividades Cognitivas</h1>
        <p className="p">
          A atividade cognitiva é um dos principais conceitos da teoria do
          conhecimento. Podemos dizer que a cognição é a capacidade do cérebro
          em perceber, raciocinar e armazenar as informações captadas pelos
          sentidos.
        </p>
      </div>

      <div className="div">
        <div className="img-community">
          <img className="img" src="img.png" alt="" />
        </div>

        <p className="paragrafo">
          O intelecto recebe a informação percebida através dos sentidos externo
          proporcionando dados visuais, olfativos, auditivos e aspectos
          vinculados ao tato e ao paladar. Isto é, estes dados não são
          finalizados de forma isolada, mas podem ser postos em interconecção
          mediante os exercícios de abstração. O intelecto processa toda essa
          informação através da atividade cognitiva mediante os processos
          mentais. Na atividade cognitiva, o ser humano não ocupa um papel
          passivo, mas participa de forma ativa neste conhecimento como mostra o
          exercício de refletir à partir de ideias concretas.
        </p>
      </div>

      <div>
        <div className="video-container">
          <video width="640" height="360" controls>
            <source
              src="https://www.youtube.com/watch?v=bDhwCY_4wTI"
              type="video/mp4"
            />
            <p className="p"> Seu navegador não suporta o elemento de vídeo.</p>
          </video>
        </div>

        <p className="p">
          A atividade cognitiva parte da curiosidade sadia de um sujeito em
          fazer perguntas. Este tipo de ação apresenta características de
          conotações especificas. Por exemplo, a faculdade intelectual é
          imaterial. do Mesmo modo, o conhecimento se une ao objetivo no
          exercício intelectual através da apreesão dese objetivo. É muito
          importante potencializar a atividade cognitiva para alcançar a
          sabedoria e também o bem-estar pessoal, uma vez que o conhecimento
          alimenta o espírito.{" "}
        </p>
      </div>

      <h1>Lembre-se Disso!!</h1>

      <main className="cards">
        <section className="card">
          <img src="albert.png" alt="Foto deArbert" />
          <h3>Albert Einstein</h3>
          <p className="p">
            Uma pessoa inteligente resolve um problema, um sábio o previne!
          </p>
        </section>
        <section className="card">
          <img src="augusto" alt="Foto de Augusto" />
          <h3>Augusto Cury</h3>
          <p className="p">
            Se o tempo envelhecer o seu corpo, mas não envelhecer a sua emoção,
            você será sempre feliz!
          </p>
        </section>
        <section className="card">
          <img src="cortela.png" alt="Foto do Cortela" />
          <h3>Cortella</h3>
          <p className="p">
            Faça o teu melhor, na condição que você tem, enquanto você não tem
            condição melhores, para fazer melhor ainda!
          </p>
        </section>
        <section className="card">
          <img src="aristosteles.png" alt="Imagem de Alistosteles" />
          <h3>Aristoteles</h3>
          <p className="p">
            Conhecer a si mesmo é o começo de toda a sabedoria!
          </p>
        </section>
      </main>
    </div>
  );
}
