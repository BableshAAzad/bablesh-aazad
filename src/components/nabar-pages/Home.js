import { Box, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import AgeCalculate from "../../projects/age-calculator/AgeCalculate";
import AnalogWatch from "../../projects/analog-clock/AnalogWatch";
import BasicCalculatorFirst from "../../projects/basic-calculator-first/BasicCalculatorFirst";
import DotPuzzleGame from "../../projects/puzzle-game/DotPuzzleGame";
import Projects from '../../projects/text-editor/TextEditor';
import BableshAAzad from "../navbar/home-page/BableshAAzad";
import HeroSection from "../navbar/home-page/HeroSection";
import YoutubeData from "../navbar/home-page/YoutubeData";
import "./Homecs.css";

const OpenPage = (props) => {
  const { children, page, index } = props;
  return (
    <div hidden={page !== index}>
      {page === index && <Box mt={2}>{children}</Box>}
    </div>
  );
};

export default function Home(props) {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Box>
        <OpenPage page={activePage} index={1}>
          <HeroSection heading="Want Affordable Website" />
          <BableshAAzad heading="Hi I am Bablesh AAzad"></BableshAAzad>
          <section id="mainMarquee">
            <h3 className="my-3" id='marqueeTag'>
              Visit my projects and use on your requirment
            </h3>
          </section>
          <div className="proje mb-4" style={{ textWrap: "wrap" }}>
            <Link to="/projects/textEditor" className="projectN">
              | 1.Text-Editor |
            </Link>
            <Link to="/projects/ageCalculate" className="projectN" style={{ color: "green" }}>
              | 2.Age-Calculator |
            </Link>
            <Link to="https://github.com/BableshAAzad/pdf-merge-main" target="_blank" className="projectN">
              | 3.Pdf-Merge |
            </Link>
            <Link to="/" className="projectM">
              | 4.News-App |
            </Link>
            <Link to="/projects/analogClock" className="projectN" style={{ color: "green" }}>
              | 5.Analog-Clock |
            </Link>
            <Link to="/projects/basicCalculatorFirst" className="projectN">
              | 6.Basic-Calculator-First |
            </Link>
            <Link to="/projects/puzzle-game" className="projectN" style={{ color: "green" }}>
              | 7.Dot-Puzzle-Game |
            </Link>
          </div>
          <YoutubeData />
        </OpenPage>
        <OpenPage page={activePage} index={2}>
          <Projects heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />
        </OpenPage>
        <OpenPage page={activePage} index={3}>
          <AgeCalculate />
        </OpenPage>
        <OpenPage page={activePage} index={4}>
          <DotPuzzleGame />
        </OpenPage>
        <OpenPage page={activePage} index={5}>
          <AnalogWatch />
        </OpenPage>
        <OpenPage page={activePage} index={6}>
          <BasicCalculatorFirst />
        </OpenPage>
        <OpenPage page={activePage} index={7}>
          Page7
        </OpenPage>
        <OpenPage page={activePage} index={8}>
          Page8
        </OpenPage>
        <OpenPage page={activePage} index={9}>
          Page9
        </OpenPage>
        <OpenPage page={activePage} index={10}>
          <h2>Next project is coming soon...</h2>
        </OpenPage>
        <Typography variant="h5" color="secondary" align="center">
          See to more collections
        </Typography>
        <Box mt={2} mb={3} display="flex" justifyContent="center">
          <Pagination
            count={10}
            page={activePage}
            onChange={(event, newPage) => {
              setActivePage(newPage);
            }}
            size="large"
            color="secondary"
            defaultPage={0}
            siblingCount={0}
            boundaryCount={0}
            showFirstButton
            showLastButton
            variant="outlined"
            sx={{
              "Button.MuiPaginationItem-circular.Mui-selected": {
                bgcolor: "secondary.main",
                color: "#ffffff",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}
