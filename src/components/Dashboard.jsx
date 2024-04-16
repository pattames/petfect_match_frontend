import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserProfile from "./UserProfile";
import PetDash from "./PetDash";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#f2e5e5" }}>
      {/* <h1
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        User dashboard
      </h1> */}
      <Tabs>
        <TabList style={{ fontSize: "1.5rem" }}>
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
