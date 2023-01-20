import styled from 'styled-components'

export const AdressContainer = styled.div``

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 700;
  margin-bottom: 15px;
`

export const AdressCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  width: 640px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const AdressTitle = styled.h3`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
  font-weight: 400;
  margin-bottom: 2px;

  svg {
    margin-right: 8px;
    font-size: 0.938rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Text = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  margin-left: 25px;
`

export const Input = styled.input`
  margin-bottom: 16px;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  height: 42px;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 18px;
  font-family: 'Roboto';
  padding: 0 12px;
  gap: 4px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
