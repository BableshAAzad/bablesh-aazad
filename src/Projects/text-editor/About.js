import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Icon from '@mui/icons-material';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 620);
  }, [pathname]);
  return null;
}

export default function About(props) {
  // let myStyle = {
  //   color: props.mode === 'dark' ? 'white' : '#042743',
  //   backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  // }
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container">
      <ScrollToTop/>
      <h1 className="my-3" style={{ color: "#23B1CD" }}>
        About Us Text Editor
      </h1>

      {/* <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>

      </div> */}

      <div style={{ backgroundColor: "#ECF5F5" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
             I. Analyze your text
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
             Use to this platform analyze properly
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              TextEditor gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count, summary to read
              time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
             II. Free to use
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              This resorce is tallay free and also get source code in github
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              TextEditor is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextEditor reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
             III. Browser Compatible
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              It is flexible to all platform eg. ios, linex, windows, android etc.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>

      <br />
      <br />
      <h4 style={{ color: "#23B1CD" }}>Description of functionality</h4>
      <br />
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <dl>
          <dt>1. Convert to Uppercase</dt>
          <dd className="mx-4">
            - Click on this button then auto conver all characters in uppercase
          </dd>
          <dt>2. Convert to Lowercase</dt>
          <dd className="mx-4">
            - Click on this button then auto conver all characters in lowercase
          </dd>
          <dt>3. Clear Text</dt>
          <dd className="mx-4">- It is clear all text to fill you...</dd>
          <dt>4. Copy Text</dt>
          <dd className="mx-4">
            - Without select all text, just click this button then auto copied
            to all your filled text.
          </dd>
          <dt>5. Remove Extra spaces</dt>
          <dd className="mx-4">
            - In Extra spaces between two words remove in a single space.
          </dd>
        </dl>
      </div>
    </div>
  );
}
