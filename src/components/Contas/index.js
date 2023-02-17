import './index.css'
import { useState, useEffect } from 'react';

function ContasPagar() {
  const [contas, setContas] = useState([]);

  const adicionarConta = (valor, parcelas, descricao) => {
    const novasContas = [];
    for (let i = 1; i <= parcelas; i++) {
      novasContas.push({
        valor: valor / parcelas,
        pago: false,
        descricao: descricao,
        numParcela: i,
      });
    }
    setContas([...contas, ...novasContas]);
  };
  const removerConta = (index) => {
    const novasContas = [...contas];
    novasContas.splice(index, 1);
    setContas(novasContas);
  };

  const marcarComoPago = (index) => {
    const novasContas = [...contas];
    novasContas[index].pago = true;
    setContas(novasContas);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const contasAtualizadas = contas.map((conta) => {
        if (conta.pago) {
          return conta;
        } else {
          return { ...conta, numParcela: conta.numParcela + 1 };
        }
      });
      setContas(contasAtualizadas);
    }, 2000);
    return () => clearTimeout(timer);
  }, [contas]);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h2>Contas a pagar</h2>
      <form className='d-flex flex-column align-items-end'
        onSubmit={(event) => {
          event.preventDefault();
          const valor = Number(event.target.elements.valor.value);
          const parcelas = Number(event.target.elements.parcelas.value) || 1;
          const descricao = event.target.elements.descricao.value;
          adicionarConta(valor, parcelas, descricao);
          event.target.reset();
        }}
      >
        <label>
          Valor:
          <input className='ms-1' type="number" name="valor" placeholder="Valor total" step="0.01" required />
        </label>
        <label>
          Parcelas:
          <input className='ms-1' type="number" placeholder="Dividir em:" name="parcelas" required />
        </label>
        <label>
          Descrição:
          <input type="text" name="descricao" placeholder="Digite uma descrição"/>
        </label>
        <button className='w-100 btn-primary' type="submit">Adicionar conta</button>
      </form>
      <table className='w-100'>
        <thead className='w-100'>
          <tr className='d-flex w-100 justify-content-spacearound'>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Parcelas</th>
            <th>Pago</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contas.map((conta, index) => (
            <tr key={index} className={conta.pago ? 'pago d-flex w-100 justify-content-spacearound' : 'd-flex w-100 justify-content-spacearound'}>
              <td>{conta.valor.toFixed(2)}</td>
              <td>{conta.descricao}</td>
              <td>{`${conta.numParcela}/${conta.numParcela +
                conta.parcelas -
                1}`}</td>
              <td>
                <button
                  onClick={() => marcarComoPago(index)}
                  disabled={conta.pago}
                >
                  Pagar
                </button>
                <button className='btn-danger' onClick={() => removerConta(index)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContasPagar;
