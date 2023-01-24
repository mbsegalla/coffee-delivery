import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 160px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
  line-height: 130%;
  font-family: 'Baloo 2';
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 40px;
`

export const OrderInfoCard = styled.div`
  height: 100%;
  width: 526px;
  margin: auto;
  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-top: 40px;
  margin: 0;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    display: flex;
    align-items: center;
  }
`

export const ContentText = styled.p``

export const RoundedIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`
