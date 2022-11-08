import './Greetings.css';
export default function Greetings(props) {
  let greetingLang;
  if (props.lang === 'de') {
    greetingLang = 'Hallo';
  }
  if (props.lang === 'en') {
    greetingLang = 'Hello';
  }
  if (props.lang === 'es') {
    greetingLang = 'Hola';
  }
  if (props.lang === 'fr') {
    greetingLang = 'Bonjour';
  }

  return (
    <div className="item">
      <b>
        {greetingLang} {props.children}
      </b>
    </div>
  );
}
