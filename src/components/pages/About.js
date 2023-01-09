import React from 'react';
import spaceNeedle from '../../images/spaceNeedle.jpg'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AboutIntroduction from './AboutIntroduction';


export default function About() {
  return (
    <div>
      <div >
        <img src={spaceNeedle} style={{ width: "100%"}}/>
          <View style={{position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center',  alignItems: 'center'}}>
            {/* <Text style={{width:"100%", textAlign:"Center", fontSize:"60px", fontFamily: "'Source Sans Pro',         Helvetica, Arial, sans-serif;", color:"#b7a57a", backgroundColor: "#4b2e83"}}>Hello from the Pacific  Northwest!</Text> */}
          </View>
      </div>
      <div style={{marginTop:"400px"}}>
        <AboutIntroduction />;
      </div>
    </div>
  );
}
