import "../../App.css";
import "./Homecs.css";
import HeroSection from "../NavbarPages/HomePages/HeroSection";
import { Link } from "react-router-dom";
import BableshAAzad from "../NavbarPages/HomePages/BableshAAzad";
import YoutubeData from "../NavbarPages/HomePages/YoutubeData";
import { Box, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import Projects from '../../Projects/Projects';
// import pic from '../../images/tirath.jpg';
import AgeCalculate from "./../../Projects/AgeCalculator/AgeCalculate"

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
          <div className="proje mb-4" style={{textWrap: "wrap"}}>
            <Link to="/projects" className="projectN">
              | 1.Text-Editor |
            </Link>
            <Link to="/ageCalulate" className="projectN" style={{color : "green"}}>
              | 2.Age-Calculator |
            </Link>
            <Link to="/" className="projectM">
              | 3.Pdf-Merge |
            </Link>
            <Link to="/" className="projectM">
              | 4.News-App |
            </Link>
          </div>
          <YoutubeData></YoutubeData>
        </OpenPage>
        <OpenPage page={activePage} index={2}>
          <Projects heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />
        </OpenPage>
        <OpenPage page={activePage} index={3}>
          <AgeCalculate />
        </OpenPage>
        <OpenPage page={activePage} index={4}>
          <h2>Next project is coming soon...</h2>
          {/* <Link href="#" className="homeTirath"> */}
          {/* <img src={pic} alt="Tirathgarh" className="homeTirath"/> */}
          {/* </Link> */}
        </OpenPage>
        <OpenPage page={activePage} index={5}>
          Page5
        </OpenPage>
        <OpenPage page={activePage} index={6}>
          Page6
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
          Page10
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
