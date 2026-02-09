import React, { useState } from 'react'
import NzFeesLivingCost from "./NzFeesLivingCost";
import NzScholarships from './NzScholarships';
import NzFutureOppo from './NzFutureOppo';
const NzTab = () => {
   const [activeTab, setActiveTab] = useState("fees");

  const renderContent = () => {
    switch (activeTab) {
      case "fees":
        return <NzFeesLivingCost />;
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
}

export default NzTab;
