import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <video src="/videos/1564674844-disney.mp4" autoPlay muted loop />
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <video src="videos/1564676714-pixar.mp4" autoPlay muted loop />
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <video src="/videos/1564676115-marvel.mp4" autoPlay muted loop />
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <video src="videos/1608229455-star-wars.mp4" autoPlay muted loop />
        <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <video
          src="videos/1564676296-national-geographic.mp4"
          autoPlay
          muted
          loop
        />
        <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  max-height: 150px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    visibility: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      visibility: visible;
    }
  }
`;
