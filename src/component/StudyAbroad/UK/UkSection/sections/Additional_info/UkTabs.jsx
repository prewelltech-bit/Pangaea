// import React from "react";
import React, { useState } from "react";
import FeesLivingCost from "./FeesLivingCost";
import NzScholarships from "../../../../NewZealand/NzSection/NzAdditionalInfo/NzScholarships";
import NzFutureOppo from "../../../../NewZealand/NzSection/NzAdditionalInfo/NzFutureOppo";

const UkTabs = () => {
  const [activeTab, setActiveTab] = useState("fees");

  const renderContent = () => {
    switch (activeTab) {
      case "fees":
        return <FeesLivingCost />;
      case "scholarships":
        return <NzScholarships />;
      case "future":
        return <NzFutureOppo />;
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
          <button onClick={() => setActiveTab("future")}>PR & Future Opportunities</button>
        </div>

        {renderContent()}
      </div>
    </>
  );
};

export default UkTabs;
