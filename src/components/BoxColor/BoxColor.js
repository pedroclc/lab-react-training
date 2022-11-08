import './BoxColor.css';
export default function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };

  return (
    <div className="item" style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}
