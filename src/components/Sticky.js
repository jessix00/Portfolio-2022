import {Link} from "react-router-dom"


function Sticky(props) {
  return (
    <Link to={`/Projects/${props.id}`} className='sticky sticky-anchor'>
      <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      </div>
    </Link>
  );
}

export default Sticky;
