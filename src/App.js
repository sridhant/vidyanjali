import React from 'react';
import Banner from './Banner'
import About from './About'

function App() {

let BsvgH;
let BsvgW;
let mtsvg1;
let mth11;

let Adirect;
let amtr;
let asvgwr;
let asvghr;
let pmtlr;

let ScreenWidth = window.innerWidth;

ScreenWidth > 600 ?  BsvgH = "45vh" : BsvgH = "45vh" ;
ScreenWidth > 600 ?  BsvgW = "45vw" : BsvgW = "45vw" ;
ScreenWidth > 600 ?  mtsvg1 = "-25%" : mtsvg1 = "-10%" ;
ScreenWidth > 600 ?  mth11 = "-12%" : mth11 = "3%" ;

ScreenWidth > 600 ?  Adirect = "row" : Adirect = "column" ;
ScreenWidth > 600 ?  amtr = "-10%" : amtr = "-40%" ;
ScreenWidth > 600 ?  amtr = "-10%" : amtr = "-40%" ;
ScreenWidth > 600 ?  asvgwr = "40vw" : asvgwr = "60vw" ;
ScreenWidth > 600 ?  asvghr = "60vh" : asvghr = "40vh" ;
ScreenWidth > 600 ?  pmtlr = "10%" : pmtlr = "0%" ;

  return (

  <>

    <Banner 
      bannersvgheight = {BsvgH}
      bannersvgwidth = {BsvgW}
      mtsvg = {mtsvg1}
      mth1 = {mth11}
    />

    <About
      aboutdirection = {Adirect}
      amt = {amtr}
      asvgw = {asvgwr}
      asvgh = {asvghr}
      pmtl = {pmtlr}
    />

  </>

  );
}

export default App;
