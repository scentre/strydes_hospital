import ContentTab from "../../components/contentTab";
import PatientsTable from "../../components/patientsTable";
import { useState } from "react";

const Records = () => {
  const tabs = ["Birth Records", "Death Records"];
  const [state, setState] = useState("Birth Records");
  return (
    <>
      <ContentTab state={state} setState={setState} tabs={tabs} />
      <PatientsTable name={"Records"} />;
    </>
  );
};

export default Records;
