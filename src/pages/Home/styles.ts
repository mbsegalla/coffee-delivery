import styled from 'styled-components'
import backgoundImage from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 500px;
`

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 550px;
  position: absolute;
  background-image: url(${backgoundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  filter: blur(80px);
`

export const DescriptionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const TextContainer = styled.div`
  padding: 32px 0 32px 160px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 32px 160px;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-size: 3rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 16px;
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-family: 'Roboto';
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 66px;
  font-weight: 400;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  svg {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
  }
`

export const InfoContent = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;
`

export const RoundedIcon = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 160px;
`

export const Image = styled.img`
  width: 476px;
  height: 360px;
  z-index: 9999999;

  @media (max-width: 1200px) {
    display: none;
  }
`
