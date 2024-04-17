import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserProfile from "./UserProfile";
import PetDash from "./PetDash";
import styles from "../css/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div>
      {/* <h1
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        User dashboard
      </h1> */}
      <Tabs
        style={{
          fontFamily: "arial",
          margin: "0 auto",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <TabList>
          <Tab>My pets</Tab>
          <Tab>Update user info</Tab>
        </TabList>

        <TabPanel>
          <PetDash />
        </TabPanel>
        <TabPanel>
          <UserProfile />
        </TabPanel>
      </Tabs>
    </div>
  );
}
