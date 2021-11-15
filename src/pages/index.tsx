import * as React from "react"
import styled from "styled-components"

import PurchaseButton from "../components/buttons/PurchaseButton"

const IndexPage = () => (
  <Wrapper>
    <TextWrapper>
      <Logo src="/images/logos/react-logo.svg" alt="icon" />
      <Title>Build a web app with React Hooks</Title>
      <Caption>20 sections - 3 hours of videos</Caption>
      <Description>
        Learn how we build the new DesignCode site with React Hooks
      </Description>
      <AuthorWrapper>
        <AuthorImage src="/images/avatars/Meng.png" alt="author image" />
        <Caption>Taghout by jydev</Caption>
      </AuthorWrapper>
      <PurchaseButton />
    </TextWrapper>
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db, #9076e7);
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  padding-top: 220px;
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`
const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-wieght: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-size: 15px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`
const AuthorImage = styled.img`
  widht: 32px;
  height: 32px;
`
