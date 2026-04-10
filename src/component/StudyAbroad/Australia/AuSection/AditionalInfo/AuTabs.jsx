import React, { useState } from "react";
import "./AuTabs.css";
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
        return <AuFutureOppo />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <div className="tabs">
          <button
            className={activeTab === "fees" ? "active" : ""}
            onClick={() => setActiveTab("fees")}
          >
            Fees & Living Cost
          </button>
          <button
            className={activeTab === "scholarships" ? "active" : ""}
            onClick={() => setActiveTab("scholarships")}
          >
            Scholarships
          </button>
          <button
            className={activeTab === "future" ? "active" : ""}
            onClick={() => setActiveTab("future")}
          >
            PR & Future Opportunities
          </button>
        </div>

        {renderContent()}
      </div>
    </>
  );
};

export default AuTabs;
