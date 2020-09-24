import { Box, Container } from "@material-ui/core";
import React, { forwardRef } from "react";

import { Helmet } from "react-helmet";
import PageTop from "./PageTop";
import PropTypes from "prop-types";

const Page = forwardRef(({ children, title = "", ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>:: Crush it :: {title}</title>
      </Helmet>
      <Box>
        <Box pl={3} pr={3}>
          <PageTop title={title} />
        </Box>
        <Box mt={2}>
          <Container maxWidth="xl">{children}</Container>
        </Box>
      </Box>
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
