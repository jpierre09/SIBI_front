import React from "react";
import SibiDrawer from "../components/SibiDrawer/SibiDrawer";

export default function Layout({ children }) {
  return (
    <div>
      <SibiDrawer />
      {children}
    </div>
  )
}