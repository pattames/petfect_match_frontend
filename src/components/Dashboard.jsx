import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserProfile from "./UserProfile";
import PetDash from "./PetDash";

export default function Dashboard() {
  return (
    <>
      <h1>User dashboard</h1>
      <Tabs>
        <TabList>
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
    </>
  );
}
