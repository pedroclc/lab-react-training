import './Random.css';
export default function Random(props) {
  const aleatory =
    props.min + Math.round((props.max - props.min) * Math.random());

  return (
    <div className="item">
      <b>
        Random value between {props.min} and {props.max} = {aleatory}
      </b>
    </div>
  );
}
