import React from "react";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { GlobalStyles } from "@mui/styled-engine";
import Layout from "./Layout";
import Header from "./Header";
import SideNav from "./SideNav";



const App = () => {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={() => ({
          body: {
            margin: 0,
            backgroundColor: "#FFDEA6"
          },
        })}
      />
      <Layout>
        <Header />
        <SideNav />
      </Layout>
    </CssVarsProvider>
  );
};

export default App;
