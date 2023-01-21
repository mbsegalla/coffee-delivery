import styled from 'styled-components'

interface IContainer {
  size: string
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 72px;
  height: ${(props) => (props.size === 'small' ? '32px' : '38px')};
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
