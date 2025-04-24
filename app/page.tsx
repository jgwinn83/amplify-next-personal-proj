"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import RootLayout from "./layout";

Amplify.configure(outputs);

type City = {
  id: number;
  name: string;
  discription: string;
  country: string;
  population: number;
  image: string;
  isCapital: boolean;
}

type Country = {
  id: number;
  name: string;
  discription: string;
  capital: City;
  population: number;
  image: string;
}

export default function App() {

  
  

  return (
    <main>
      
      
      
      
    </main>
  );
}
