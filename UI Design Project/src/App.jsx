import React from "react";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2.jsx";

const App = () => {
  const user = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color:'royalblue',
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      color: "orange",
      tag: "Underserved",
    },
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      color: "lightseagreen", 
      tag: "Underbanked" 
    },
    { img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color: "black", 
      tag: "Open to work" 
    },
  ];
  return (
    <div>
      <Page1 user={user}/>
      <Page2 />
    </div>
  );
};

export default App;
