import './index.css';
import Card from '../../components/Card';
import BarraPerfil from '../../components/BarraPerfil';

function Home() {
    return (
        <div>
            <BarraPerfil></BarraPerfil>
            <div className="container">
                <div className="row">
                    <Card
                        link={'/listacompras'}
                        funcao="Lista de Mercado"
                    />
                    <Card
                        link={'/contaspagar'}
                        funcao="Contas de Casa"
                    />
                </div>
                <div className="row">
                    <Card
                        link={'https://www.google.com'}
                        funcao="Lista de Tarefas"
                    />
                    <Card
                        link={'https://www.google.com'}
                        funcao="Outros"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
