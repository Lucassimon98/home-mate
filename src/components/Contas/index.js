import { useState, useEffect } from 'react';

function ContasPagar() {
  const [contas, setContas] = useState([]);

  const adicionarConta = (valor, parcelas) => {
    const novasContas = [];
    for (let i = 1; i <= parcelas; i++) {
      novasContas.push({ valor: valor / parcelas, pago: false });
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
      setContas(contas.filter(conta => !conta.pago));
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
          const parcelas = Number(event.target.elements.parcelas.value);
          adicionarConta(valor, parcelas);
          event.target.reset();
        }}
      >
        <label>
          Valor:
          <input className='ms-1' type="number" name="valor" step="0.01" required />
        </label>
        <label>
          Parcelas:
          <input className='ms-1' type="number" name="parcelas" required />
        </label>
        <button className='w-100 btn-primary' type="submit">Adicionar conta</button>
      </form>
      <table>
        <thead>
          <tr className='d-flex w-100 justify-content-around'>
            <th>Valor</th>
            <th>Pago</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contas.map((conta, index) => (
            <tr key={index} className={conta.pago ? 'pago d-flex w-100 justify-content-around' : 'd-flex w-100 justify-content-around'}>
              <td>{conta.valor.toFixed(2)}</td>
              <td>{conta.pago ? 'Sim' : 'Não'}</td>
              <td>
                <button className='btn-primary'
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
