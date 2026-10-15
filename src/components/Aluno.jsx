export default function Aluno({ nome, turma }) {
    return (
      <div
        style={{
          margin: '10px 0',
          padding: '5px',
          borderBottom: '1px solid #ccc'
        }}
      >
        <h2>{nome}</h2>
        <p>Turma: {turma}</p>
      </div>
    );
  }