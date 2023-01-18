import Header from '../../components/Header'
import coffeHomeImage from '../../assets/coffe-home.png'
import theme from '../../styles/theme'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Container,
  DescriptionContent,
  Haha,
  ImageContainer,
  InfoContent,
  RoundedIcon,
  TextContainer,
} from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Haha />
        <DescriptionContent>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora.
            </p>
            <InfoContent>
              <span>
                <RoundedIcon style={{ backgroundColor: theme['yellow-dark'] }}>
                  <ShoppingCart weight="fill" />
                </RoundedIcon>
                Compra simples e segura
              </span>
              <span>
                <RoundedIcon style={{ backgroundColor: theme['base-text'] }}>
                  <Package weight="fill" />
                </RoundedIcon>
                Embalagem mantém o café intacto
              </span>
              <span>
                <RoundedIcon style={{ backgroundColor: theme.yellow }}>
                  <Timer weight="fill" />
                </RoundedIcon>
                Entrega rápida e rastreada
              </span>
              <span>
                <RoundedIcon style={{ backgroundColor: theme.purple }}>
                  <Coffee weight="fill" />
                </RoundedIcon>
                O café chega fresquinho até você
              </span>
            </InfoContent>
          </TextContainer>
          <ImageContainer>
            <img src={coffeHomeImage} />
          </ImageContainer>
        </DescriptionContent>
      </Container>
    </>
  )
}

export default Home
