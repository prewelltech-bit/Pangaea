import React, { useState } from "react";
import AuFeesLivingCost from "./AuFeesLivingCost";
import AuScholarships from "./AuScholarship";
import AuFutureOppo from "./AuFutureOppo";

const AuTabs = () => {
  const [activeTab, setActiveTab] = useState("fees");

  const renderContent = () => {
    switch (activeTab) {
      case "fees":
        return <AuFeesLivingCost />;
      case "scholarships":
        return <AuScholarships />;
      case "future":
        return <AuFutureOppo/>;
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

export default AuTabs;
