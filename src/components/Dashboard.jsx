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
          textAlign: "center",
        }}
      >
        <TabList
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            gap: " 5px",
          }}
        >
          <Tab className={styles.myPets_tabs}>My pets</Tab>
          <Tab className={styles.userInfo_tabs}>Update user info</Tab>
        </TabList>
        <TabPanel
          style={{
            height: "100%",
          }}
        >
          <PetDash />
        </TabPanel>
        <TabPanel>
          <UserProfile />
        </TabPanel>
      </Tabs>
    </div>
  );
}
