import { useEffect, useState } from "react";
import GameTabWindow from "@/components/tab-hero/GameTabWindow";

export const TabManager = () => {
  const [tabs, setTabs] = useState([]); // Store active tabs
  const [tabId, setTabId] = useState(0); // To give each tab a unique ID

  useEffect(() => {
    const spawnTab = () => {
      // Spawn new tab with unique ID
      setTabId((prevId) => prevId + 1);
      setTabs((prevTabs) => [...prevTabs, { id: tabId, position: 0 }]);
    };

    const spawnInterval = setInterval(spawnTab, 1000); // Create a tab every second (1000ms)

    return () => clearInterval(spawnInterval); // Clean up interval
  }, [tabId]);

  return (
    <div>
      {tabs.map((tab) => (
        <GameTabWindow key={tab.id} tabId={tab.id} />
      ))}
    </div>
  );
};
