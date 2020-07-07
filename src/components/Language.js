import React from "react";
import StateContext from "../contexts/index";

export default function LanguageProvider(props) {
  const [state, setState] = React.useState(
    {
      language: "Persian",
      words: {
        home: "خانه",
        events: "رویداد ها",
        aboutUs: "درباره ما",
        contactUs: "تماس با ما",
        language: "زبان"
      }}
  );
  const changeToPersian=()=>{
    setState(
      {
        language: "Persian",
        words: {
          home: "خانه",
          events: "رویداد ها",
          aboutUs: "درباره ما",
          contactUs: "تماس با ما",
          language: "زبان"
        }}
    )
  }
  const changeToEnglish=()=>{
    setState(()=>({ 
      language : "English",
      words: {
        home: "Home",
        events: "Events",
        aboutUs: "About Us",
        contactUs: "Contact Us",
        language: "Language",
      }
    }))
  }

  const { children } = props;
  return (
    <StateContext.Provider value={
      {fa:changeToPersian,en:changeToEnglish,state:state}}>
      {children}</StateContext.Provider>
  );
}
