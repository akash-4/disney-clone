import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Based on the true story of Jordan Belfort, from his rise to a wealthy
          stock-broker living the high life to his fall involving crime,
          corruption and the federal government. Directors Based on the true
          story of Jordan Belfort, from his rise to a wealthy stock-broker
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  align-items: center;
  &:before {
    background-image: url("/images/home-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 80%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  margin-top: 8px;
  letter-spacing: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  line-height: 1.5;
  font-size: 11px;
  text-align: center;
  letter-spacing: 1.5px;
  color: rgb(249, 249, 249);
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
