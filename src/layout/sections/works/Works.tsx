import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'

const worksItems = ["ALL", "ANDING PAGE", "REACT", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                My Works
            </SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={'Social Networ'}
                      src={socialImg}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
                <Work title={"Timer"}
                src={timerImg}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                />
            </FlexWrapper>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #c2e7ff;

`