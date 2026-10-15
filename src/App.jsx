import Titulo from './components/Titulo';
import Aluno from './components/Aluno';
import Nota from './components/Nota';
import Produto from './components/Produto';
import './App.css';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Titulo />

      <hr />

      <section>
        <h2>Lista de Alunos</h2>
        <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
        <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
        <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
      </section>

      <hr />

      <section>
        <h2>Notas das Disciplinas</h2>
        <Nota disciplina="React" nota={8.5} />
        <Nota disciplina="JavaScript" nota={9.0} />
        <Nota disciplina="Banco de Dados" nota={7.8} />
      </section>

      <hr />

      <section>
        <h2>Catálogo de Produtos</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse Sem Fio"
            descricao="Mouse ergonômico 4000 DPI"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Monitor 24'"
            descricao="Monitor Full HD 144Hz"
            preco={850}
            disponivel={false}
          />

          <Produto
            nome="Headset Gamer"
            descricao="Som Surround 7.1 com microfone"
            preco={199.90}
            disponivel={true}
          />
        </div>
      </section>
    </div>
  );
}