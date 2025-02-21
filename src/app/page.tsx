"use client";
import LogIn from "@/app/login/components/Log-In";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const getData = async () => {
    const response = await axios.get(`http://localhost:4007`);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <LogIn/>
    </>
  );
}
