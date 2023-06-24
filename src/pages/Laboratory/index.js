import ContentTab from "../../components/contentTab";
import PatientsTable from "../../components/patientsTable";
import { useState } from "react";

const Laboratory = () => {
  const [state, setState] = useState("Laboratory");
  console.log(state);

  const tabs = ["Laboratory", "Radiology"];
  return (
    <>
      <ContentTab state={state} setState={setState} tabs={tabs} />
      <PatientsTable />;
    </>
  );
};
export default Laboratory;
