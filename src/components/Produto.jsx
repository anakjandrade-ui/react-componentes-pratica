
export default function Produto({ nome, descricao, preco, disponivel }) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          margin: "10px",
          maxWidth: "250px",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3>{nome}</h3>
  
        <p>{descricao}</p>
  
        <p>
          <strong>Preço:</strong> R$ {preco.toFixed(2)}
        </p>
  
        <p
          style={{
            color: disponivel ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          Status: {disponivel ? "Disponível" : "Indisponível"}
        </p>
  
        <button
          disabled={!disponivel}
          style={{
            cursor: disponivel ? "pointer" : "not-allowed",
          }}
        >
          Comprar
        </button>
      </div>
    );
  }
  