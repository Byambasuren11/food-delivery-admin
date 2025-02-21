"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";
import * as React from "react";
import { useRouter } from 'next/navigation'
 

  const LogIn = () => {
    type Error={
      email:string;
      password:string;
    }
  const router = useRouter()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordPattern=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError]=useState<Error>({email:"", password:""});

  const onClick = () => {
    if (email?.search(emailPattern) === -1){
      setError((prev) => ({ ...prev, email: "Invalid email. Use a format like example@gmail.com " }));
  }
  else{
    setError((prev) => ({ ...prev, email: "" }));
    // router.push('/home')}
  };
  if(password?.search(passwordPattern)==-1){
    setError((prev) => ({ ...prev, password: "Weak password. Use numbers and symbols" }));
}
else{
    setError((prev) => ({ ...prev, password: "" }));
}
if(!error.password && !error.email){
    router.push('/home')}
}

  const emailChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const passwordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
          />
           {error.email ? (
                  <div className="text-red-500">{error.email}</div>
                ) : (
                    <></>)}
        </div>
        <div>
          <Input placeholder="Password" onChange={passwordChanged} />
          {error.password? (
                  <div className="text-red-500">{error.password}</div>
                ) : (
                    <></>)}
        </div>
        <Button className="bg-gray-400" onClick={onClick}>
          Let's go
        </Button>
        <p className="text-center mt-2">
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
      </div>
      <div className="w-3/5 h-screen">
        <img src="./bicycle.png" />
      </div>
    </div>
  );
};
export default LogIn;
