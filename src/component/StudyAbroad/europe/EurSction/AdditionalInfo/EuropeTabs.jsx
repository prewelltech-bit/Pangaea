import React, { useState } from "react";
import EuropeFeesLivingCost from "./EuropeFeesLivingCost";
import EuropeFutureOppo from "./EuropeFutureOppo";
import EuropeScholarships from "./EuropeScholarship";

const EuropeTabs = () => {
  const [activeTab, setActiveTab] = useState("fees");

  const renderContent = () => {
    switch (activeTab) {
      case "fees":
        return <EuropeFeesLivingCost />;
      case "scholarships":
        return <EuropeScholarships />;
      case "future":
        return <EuropeFutureOppo />;
      default:
        return <EuropeFeesLivingCost />;
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

export default EuropeTabs;
