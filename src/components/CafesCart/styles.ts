import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 700;
  margin-bottom: 15px;
`

export const ItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 448px;
  padding: 36px;
  gap: 24px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const ItemsContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const ItemsContainer = styled.div`
  display: flex;
  gap: 59px;
`

export const CoffeName = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffePrice = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-weight: 700;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const RemoveButton = styled.button`
  font-size: 0.75rem;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  border: none;
  gap: 4px;
  padding: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
  width: 100%;
`

export const Haha = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const InfoPayment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TextInfo = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const TextValue = styled(TextInfo)`
  font-size: 1rem;
`

export const Total = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
