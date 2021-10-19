
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
// import Arrowdownd from 'material-ui/icons'


const Section = ({title, description, leftButton,rigthButton, backgroundImage, description2, section }) => {

    return (
        <Wrap id={section} bgImg={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1> {title} </h1>
                    <p> {description} </p>
                    {/* <span>{description2}</span>  */}
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <ButtonLeft>{leftButton} </ButtonLeft>
                        {
                            section === 'accessories' ? '':  <ButtonRigth>{rigthButton}</ButtonRigth>
                        
                        }
                    </ButtonGroup>
                    <WrapDownIcon>
                        <DownArrow src="svglogo.svg" />
                    </WrapDownIcon>
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section



const Wrap = styled.div`
    max-width: 100vw;
    height: 100vh;
    // background-color: orange;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => props.bgImg};
    scroll-snap-align: start;
    background-blend-mode: multiply;

   
`


const ItemText = styled.div`
   text-align: center;
   padding-top: 10vh;

   h1{
    //    letter-spacing: 2px;
       color: #393c41;
       font-size: 40px !important;
       padding-bottom: 0px;
   };

   p{
    padding-top: 0px;
    margin-top: 0;
    color: #5d5c61;
    font-size: 14px;
}

`

const Buttons = styled.div`
    
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
    @media(max-width: 768px){
        flex-direction: column
    }
`

const ButtonLeft = styled.div`
    height: 40px;
    width: 250px;
    background-color: ${props => props.section === 'accessories' ? '#000000' : 'rgba(23, 26, 32, 0.8)'} ;
    color: white;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const ButtonRigth = styled(ButtonLeft)`
    background-color: white;
    color: #000000;
    opacity: 0.6
`

const DownArrow = styled.img `
    width: 15px;
    height: 30px;
    animation: animateDown infinite 1.5s;
    color: white;
    // background-color: white
`

const WrapDownIcon = styled.div `
    text-align: center

`