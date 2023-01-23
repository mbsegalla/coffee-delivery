import styled from 'styled-components'

interface ButtonProps {
  isSelected?: boolean
}

export const PaymentMethodCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
  font-weight: 400;
  margin-bottom: 2px;

  svg {
    margin-right: 8px;
    font-size: 22px;
    color: ${(props) => props.theme.purple};
  }
`

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  margin-left: 30px;
  margin-bottom: 32px;
`

export const PaymentMethodBase = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentMethodButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};
  border: 0;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 16px;
  border-radius: 6px;
  min-width: 180px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  border: ${(props) =>
    props.isSelected ? `1px solid ${props.theme.purple}` : 'none'};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 1rem;
  }
`
