import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation"
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";

export default function App() {
    return (
      <XyzTransition appear duration="auto">
        <div className="page-wrap">
          <Navigation />
        </div>
      </XyzTransition>
    );
  }

