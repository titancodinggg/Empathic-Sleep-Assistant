import { Button } from "../inputs/Button";
import { TextBox } from "../inputs/TextBox";
import { useKeypress } from "../../lib/hooks/keyPress";
import { useState,useEffect } from "react";
import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

enum Gender {
  Male = 'male',
  Female = 'female',
  NonBinary = 'non-binary'
}

interface UserData {
  name: string;
  age: number;
  profession: string;
  gender: Gender;
}

type LoginProps = {
  authenticate: (key: string) => void;
};

export function Login({ authenticate }: LoginProps) {
  const [key, setKey] = useState("");
  const [userData,setUserData] = useState<UserData>({
    name: '',
    age: 0,
    profession:'',
    gender:Gender.Male
  })
  useKeypress("Enter", () => authenticate(key), [key]);

  if (key.length === 48) {
    authenticate(key);
  }

  useEffect(() => {
    // Check if window object is defined (ensures running in the browser)
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('name');
      const storedAge = localStorage.getItem('age');
      const storedProf = localStorage.getItem('profession');
      const storedGen = localStorage.getItem('gender');
      if (storedName && storedAge && storedProf && storedGen) {
        setUserData({
          name: storedName,
          age: parseInt(storedAge, 10),
          profession:storedProf,
          gender:storedGen ? storedGen : Gender.Male
        });
      }
    }
  }, []);
  

  return (
    <div className="pt-40">
      <div className="grid justify-items-center px-5">
        <div className="flex w-full flex-col items-center rounded-xl border border-neutral-200 bg-white px-14 py-12 shadow md:w-[600px]">
          <div className="pb-10 text-2xl font-bold text-neutral-700 md:text-3xl">
            Hume AI Sleep Assistant
          </div>
          {/* <TextBox
            className="mb-6"
            inputClassName="text-center"
            placeholder="API Key"
            text={key}
            onChange={setKey}
            autoComplete="off"
            type="password"
          /> */}
          {/* <Button className="mt-2 w-20 text-center" text="Start Session" onClick={() => authenticate(key)} /> */}
          <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id="name" value = {userData.name} onChange={(event)=>{
                setUserData((prevState) => ({
                  ...prevState,
                  name: event.target.value
                }));
              }} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
          </div>
          <div className="mb-6">
              <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
              <input type="number" id="age" value = {userData.age} onChange={(event)=>{
                setUserData((prevState) => ({
                  ...prevState,
                  age: Number(event.target.value)
                }));
              }} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Age" required />
          </div> 
          <div className="mb-6">
              <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profession</label>
              <input type="text" value = {userData.profession} onChange={(event)=>{
                setUserData((prevState) => ({
                  ...prevState,
                  profession: event.target.value
                }));
              }}
              id="profession" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Profession" required />
          </div> 
          <div className="flex items-center mb-4 space-x-4">
              <input id="default-radio-1" checked={userData.gender=="male"} type="radio" value="male" onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  gender: Gender.Male
                }))
              }} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
              <input  id="default-radio-2" checked={userData.gender=="female"} onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  gender: Gender.Female
                }))
              }} type="radio" value="female"  name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
              <input id="default-radio-2" onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  gender: Gender.NonBinary
                }))
              }} checked={userData.gender=="non-binary"} type="radio" value="non-binary" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-binary</label>
          </div>
          <Button
            className="mt-2 w-40 text-center"
            text="Start Session"
            onClick={() =>{
              localStorage.setItem("name", userData.name);
              localStorage.setItem("age", `${userData.age}`);
              localStorage.setItem("profession", userData.profession);
              localStorage.setItem("gender", userData.gender);
              authenticate("5yuAvK4GMNhIEgN1SjG7IrdFwjqGGzI91ZdRo1bBV2Apw47H")
            }
            }
          />
        </div>
      </div>
    </div>
  );
}
