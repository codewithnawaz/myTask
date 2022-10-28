import styled from "styled-components"
import { mobile } from "../Responsive"

const BigContainer = styled.div`
    justify-content: space-around;
    display: flex;
    margin-bottom: 30px;
    margin-top: 30px;
    ${mobile({ flexDirection: "column",padding:"10px",justifyContent:"space-between"})}
    
`

const Container = styled.div`
    margin-left: 20px;
    border: 3px solid gray;
    height: 25vh;
    width: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:	#080808;
    border-radius: 5px;
    &:hover{
        border-color: blue;       
    }
    ${mobile({ marginBottom:"25px" ,width:" 40vh" })}
`

const Left = styled.div`
    flex: 1;
`

const ImageContainer = styled.div`
height: 100px;  

`

const Image = styled.img`
    object-fit: cover;
`

const Right = styled.div`
    flex: 2;
    
`

const InfoContainer = styled.div`
    flex-direction: column;
`

const Title = styled.h2`
   text-align: center;
   color: white;
   font-size: 27px;
`

const Desc = styled.span`
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 17px;
    color: gray;
    font-size: 14px;
`

const Button = styled.button`
flex-direction: column;
margin-left: 70px;
color: white;
background-color: #484848;
font-weight: 35px;
border-radius: 5px;
&:hover{
    border-color: blue;
}
${mobile({marginTop:"20px",marginRight:"35px"})}
`


export default function Card() {
    return (
        <>
        <BigContainer>
        <Container>
            <Left>
                <ImageContainer>
                    <Image src=" ./image/Screenshot2.png" />
                </ImageContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Title>Cyber squad</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius.</Desc>
                    <Button>interested</Button>
                </InfoContainer>
            </Right>
        </Container>
        <Container>
            <Left>
                <ImageContainer>
                    <Image src=" ./image/Screenshot2.png" />
                </ImageContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Title>Cyber round</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius.</Desc>
                    <Button>interested</Button>
                </InfoContainer>
            </Right>
        </Container>
        <Container>
            <Left>
                <ImageContainer>
                    <Image src=" ./image/Screenshot2.png" />
                </ImageContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Title>Cyber round</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius.</Desc>
                    <Button>interested</Button>
                </InfoContainer>
            </Right>
        </Container>
        </BigContainer>
        <BigContainer>
        <Container>
            <Left>
                <ImageContainer>
                    <Image src=" ./image/Screenshot2.png" />
                </ImageContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Title>Cyber round</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius.</Desc>
                    <Button>interested</Button>
                </InfoContainer>
            </Right>
        </Container>
        <Container>
            <Left>
                <ImageContainer>
                    <Image src=" ./image/Screenshot2.png" />
                </ImageContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Title>Cyber round</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius.</Desc>
                    <Button>interested</Button>
                </InfoContainer>
            </Right>
        </Container>
        <Container>
            <Left>
                <ImageContainer>
                    <Image src=" ./image/Screenshot2.png" />
                </ImageContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Title>Cyber round</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius.</Desc>
                    <Button>interested</Button>
                </InfoContainer>
            </Right>
        </Container>
        </BigContainer>
    </>
    )
}
