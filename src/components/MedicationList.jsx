import EveryMedication from "./EveryMedication";
import "./MedicationList.css";

function MedicationList({ medications }) {
  return (
    <ul className="medication-list">
      {medications.map((medication) => (
        <EveryMedication key={medication.id} medication={medication} />
      ))}
    </ul>
  );
}
export default MedicationList;
