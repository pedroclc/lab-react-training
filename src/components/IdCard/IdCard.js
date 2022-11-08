import './IdCard.css';
export default function IdCard(props) {
  return (
    <div className="cartao">
      <img src={props.picture} alt="foto de perfil" className="imagem" />
      <div className="informacoes">
        <p>
          <b>First Name: </b> {props.firstName}
        </p>
        <p>
          <b>Last Name: </b> {props.lastName}
        </p>
        <p>
          <b>Gender: </b> {props.gender}
        </p>
        <p>
          <b>Height: </b> {props.height}
        </p>
        <p>
          <b>Birth: </b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
