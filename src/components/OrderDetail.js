import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function OrderDetail(props) {
  const location = useLocation();
  const order = location.state?.data;

  console.log(props, " props");
  console.log(location, " useLocation Hook");

  return (
    <>
      <div className=""></div>
    </>
  );
}
