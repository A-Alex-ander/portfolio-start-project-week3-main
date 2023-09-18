import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>Alexander</Name>
            <SocialList>
                <SocialItem>
                    <SocialList>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} vieBox={"0 0 21 21"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialList>
                </SocialItem>
                <SocialItem>
                    <SocialList>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} vieBox={"0 0 21 21"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialList>
                </SocialItem>
                <SocialItem>
                    <SocialList>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} vieBox={"0 0 21 21"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialList>
                </SocialItem>

            </SocialList>
            <Copyright>© 2023 Alexander Dubrov, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #ffc209;
  min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`