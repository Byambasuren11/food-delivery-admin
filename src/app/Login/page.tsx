"use client";

import { ChangeEvent, useState } from "react";
import * as React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Login = {
  email: string;
  password: string;
};

const LogIn = () => {
  const router = useRouter();
  const [login, setLogin] = useState<Login>({ email: "", password: "" });
  const [error, setError] = useState<Login>({ email: "", password: "" });
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z]).+$/;

  const postData = async () => {
    const response = await axios.post(
      `http://localhost:4007/auth/login`,
      login
    );
    console.log("post", response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  };

  const handleClickLogin = () => {
    if (login.email?.search(emailPattern) === -1) {
      setError((prev) => ({
        ...prev,
        email: "Invalid email. Use a format like example@gmail.com ",
      }));
    } else {
      setError((prev) => ({ ...prev, email: " " }));
    }
    if (login.password?.search(passwordPattern) == -1) {
      setError((prev) => ({
        ...prev,
        password: "Weak password. Use numbers and symbols",
      }));
    } else {
      setError((prev) => ({ ...prev, password: " " }));
    }
    if (error.password == " " && error.email == " ") {
      postData();
      router.push(`/foodMenu`);
    }
  };
  const emailChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, email: event.target.value });
  };
  const passwordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: event.target.value });
  };
  return (
    <div className="flex w-full justify-between h-screen">
      <div className="w-2/5 h-full flex justify-center items-center text-gray-500 text-sm">
        <div className="w-2/5 h-1/3 flex flex-col gap-6">
          <div>
            <h3 className="text-black text-lg">Log In</h3>
            <p>Log in to enjoy your favorite dishes</p>
          </div>
          <div>
            <Input
              placeholder="Enter your email adress"
              onChange={emailChanged}
              name="email"
            />
            {error.email ? (
              <div className="text-red-500">{error.email}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <Input
              placeholder="Password"
              onChange={passwordChanged}
              name="password"
            />
            {error.password ? (
              <div className="text-red-500">{error.password}</div>
            ) : (
              <></>
            )}
          </div>
          <Button className="bg-gray-400" onClick={handleClickLogin}>
            Let&apos;s go
          </Button>
        </div>
      </div>
      <div className="w-3/5 h-screen">
        <img src="./bicycle.png" />
      </div>
    </div>
  );
};
export default LogIn;
