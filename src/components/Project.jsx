export default function Project(props) {
  return (
    <div className="project">
      <img src={props.img} alt="project" />
      <div className="info">
        <h4>{props.name}</h4>
        <button>
          <a target="_blank" href={props.url}>
            View Project
          </a>
        </button>
      </div>
    </div>
  );
}
