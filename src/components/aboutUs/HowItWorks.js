import React, { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";

const OpenPage = (props) => {
  const { children, page, index } = props;
  return (
    <div hidden={page !== index}>
      {page === index && <Box mt={2}>{children}</Box>}
    </div>
  );
};

const HowItWorks = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Box>
        <Typography variant="h5" color="secondary" align="center">
          Hello This is a BableshAAzad.com
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
            defaultPage={1}
            siblingCount={1}
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
        <OpenPage page={activePage} index={1}>
          Page1
        </OpenPage>
        <OpenPage page={activePage} index={2}>
          Page2
        </OpenPage>
        <OpenPage page={activePage} index={3}>
          Page3
        </OpenPage>
        <OpenPage page={activePage} index={4}>
          Page4
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
      </Box>
    </>
  );
};

export default HowItWorks;
