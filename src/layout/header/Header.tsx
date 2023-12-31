import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";


const items = ["Home", "Skills", "Works", "Testimony", "", "Contact",]
export const Header = () => {
    return (

        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>

                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};


export const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

`