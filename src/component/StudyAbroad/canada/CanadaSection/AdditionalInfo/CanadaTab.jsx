import React, { useState } from "react";
import CanadaFeesCost from "./CanadaFeesCost";
import CanadaFutureOppo from "./CanadaFutureOppo";
import CanadaScholarships from "./CanadaScholarships";

const CanadaTab = () => {
  const [activeTab, setActiveTab] = useState("fees");

  const renderContent = () => {
    switch (activeTab) {
      case "fees":
        return <CanadaFeesCost />;
      case "scholarships":
        return <CanadaScholarships />;
      case "future":
        return <CanadaFutureOppo />;
      default:
        return null;
    }
  };
  return (
    <>
      <div>
        <div className="tabs">
          <button onClick={() => setActiveTab("fees")}>
            Fees & Living Cost
          </button>
          <button onClick={() => setActiveTab("scholarships")}>
            Scholarships
          </button>
          <button onClick={() => setActiveTab("future")}>
            PR & Future Opportunities
          </button>
        </div>

        {renderContent()}
      </div>
    </>
  );
};

export default CanadaTab;
