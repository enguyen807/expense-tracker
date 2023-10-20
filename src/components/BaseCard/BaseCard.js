import "./BaseCard.css";

function BaseCard(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default BaseCard;
