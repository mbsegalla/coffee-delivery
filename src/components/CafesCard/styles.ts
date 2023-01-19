import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 160px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  margin-bottom: 26px;
`

export const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  align-items: center;
  gap: 10px;
  margin: 40px 25px 40px 0;
`

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -50px;
`

export const Tag = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px 0 16px 0;
`

export const CoffeTag = styled.span`
  text-transform: uppercase;
  font-size: 0.625rem;
  font-family: 'Roboto';
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 4px 8px;
  border-radius: 100px;
`

export const CoffeName = styled.span`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeDescription = styled.p`
  font-size: 0.875rem;
  font-family: 'Roboto';
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  padding: 0 20px;
  margin-bottom: 33px;
`

export const CoffeFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px;
`
export const RealSign = styled.span`
  margin-right: 4px;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto';
`

export const CoffePrice = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.75rem;
  font-weight: 700;
  font-family: 'Baloo 2';
  height: 100%;
`

export const ButtonsFooter = styled.div`
  display: flex;
  gap: 8px;
`

export const SelectQtyCafes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 72px;
  height: 38px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
  }
`

export const Button = styled.button`
  display: flex;
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 38px;
  height: 38px;
  border: none;
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.white};
    font-size: 22px;
  }
`
