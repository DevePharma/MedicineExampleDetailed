import "./EveryMedication.css";
function EveryMedication({ medication }) {
  return (
    <li>
      <ul className="every-medication">
        {medication.id ? <li className={"idbox"}>{medication.id}</li> : null}
        {medication.name ? (
          <li className={medication.type === "SL" ? "sl-type" : ""}>
            {medication.name}
          </li>
        ) : null}
        {medication.ac ? (
          <li className={medication.type === "SL" ? "sl-type" : ""}>
            {medication.ac}
          </li>
        ) : null}
        {medication.category ? (
          <li className={medication.type === "SL" ? "sl-type" : ""}>
            {medication.category}
          </li>
        ) : null}
        {medication.price ? (
          <li className={medication.type === "SL" ? "sl-type" : ""}>
            {medication.price} SR
          </li>
        ) : null}
        {medication.img ? (
          <li className={medication.type === "SL" ? "sl-type" : ""}>
            <img src={medication.img} alt={medication.name} />
          </li>
        ) : null}
      </ul>
    </li>
  );
}
export default EveryMedication;
