import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hello, I Am</span>
                    <Name> Alexander Dubrov</Name>
                    <h1>FRONT-END DEVELOPER. </h1>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

export default Main;

 const StyledMain = styled.div`
   min-height: 100vh;
   background-color: #e8e8e8;

 `

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2``