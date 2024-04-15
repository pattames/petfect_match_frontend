import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserProfile from "./UserProfile";
import PetDash from "./PetDash";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#f2e5e5" }}>
      <h1
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        User dashboard
      </h1>
      <Tabs>
        <TabList style={{ fontSize: "1.5rem" }}>
          <Tab>User info</Tab>
          <Tab>Pet info</Tab>
        </TabList>

        <TabPanel>
          <UserProfile />
        </TabPanel>
        <TabPanel>
          <PetDash />
        </TabPanel>
      </Tabs>
    </div>
  );
}
