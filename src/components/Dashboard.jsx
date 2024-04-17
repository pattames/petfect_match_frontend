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
            display: "flex",
            justifyContent: "center",
            gap: " 5px",
          }}
        >
          <Tab
            style={{
              marginRight: "15px",
              fontSize: "20px",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: "10px 20px ",
              cursor: "pointer",
              color: "#792F6C",
              transition: "all ease-in-out .2s",
              borderBottom: "2px solid #792F6C ",
            }}
          >
            My pets
          </Tab>
          <Tab
            style={{
              marginRight: "15px",
              fontSize: "20px",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: "10px 20px ",
              cursor: "pointer",
              color: "#792F6C",
              transition: "all ease-in-out .2s",
              borderBottom: "2px solid #792F6C ",
            }}
          >
            Update user info
          </Tab>
        </TabList>

        <TabPanel
          style={{
            height: "auto",
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
