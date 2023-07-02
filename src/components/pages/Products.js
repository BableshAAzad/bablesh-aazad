
import "../../App.css";
import "./Products.css";
import Cards from "../NavbarPages/ProductsPages/Cards";
import Cards2 from "../NavbarPages/ProductsPages/Cards2";
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

export default function Products(props) {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Box>
        <OpenPage page={activePage} index={1}>
        <Cards heading="Check out these EPIC Templates!" />
        </OpenPage>
        <OpenPage page={activePage} index={2}>
          <Cards2 heading="Check out these EPIC Templates!" ></Cards2>
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
      </Box>

    </>
  );
}
