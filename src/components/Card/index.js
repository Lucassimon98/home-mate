import { Link } from 'react-router-dom';
import imagemProv from '../../Imagens/logo192.png'

function Card(props) {
    return (
        <div className="col-6 d-flex justify-content-center">
            <Link to={props.link}>
                <div className="card bg-dark">
                    <img src={imagemProv} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h2 className="card-title">{props.funcao}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;