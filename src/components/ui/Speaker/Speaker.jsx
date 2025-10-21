import Card from "./Card/Card";

// Speaker component displays information about a speaker
function Speaker({ speaker }) {
  return (<Card speaker={speaker} />);
}

export default Speaker;