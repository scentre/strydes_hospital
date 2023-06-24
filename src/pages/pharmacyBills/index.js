import ContentTab from "../../components/contentTab";
import PatientsTable from "../../components/patientsTable";
import { useState } from "react";

const PharmacyBills = () => {
  const tabs = ["Patient Bill", "Prescription History", " Medicine"];
  const [state, setState] = useState("Patient Bill");
  return (
    <>
      <ContentTab state={state} setState={setState} tabs={tabs} />
      <PatientsTable />;
    </>
  );
};

export default PharmacyBills;
