import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 32px 160px;
`

export const IconButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};

    svg {
      color: ${(props) => props.theme['yellow-light']};
    }
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    transition: ease-in-out 0.2s;
  }
`

export const TotalItems = styled.div`
  position: absolute;
  right: 10;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme['yellow-dark']};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 25px;
  right: 155px;
`
