import React from "react";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { GlobalStyles } from "@mui/styled-engine";
import Layout from "./Layout";
import Header from "./Header";
import SideNav from "./SideNav";
import MainContent from "./MainContent";
import RightContent from "./RightContent";
import MainFiller from "./MainFiller";
import LeftFiller from "./LeftFiller";



const App = () => 

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
        <SideNav>
          <LeftFiller/>
        </SideNav>
        <MainContent>
          <MainFiller />
        </MainContent>
        <RightContent />
      </Layout>
    </CssVarsProvider>


export default App;
