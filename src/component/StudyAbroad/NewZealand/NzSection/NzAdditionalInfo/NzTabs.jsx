import React, { useState } from "react";
import NzFeesLivingCost from "./NzFeesLivingCost";


const NzTabs = () => {
  const [activeTab, setActiveTab] = useState("fees");

  const renderContent = () => {
    switch (activeTab) {
      case "fees":
        return <NzFeesLivingCost />;
      case "scholarships":
        return <Scholarships />;
      case "future":
        return <FutureOpportunities />;
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

export default NzTabs;
