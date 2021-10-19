// import { MenuBook } from "@material-ui/icons"

import React, { useState } from 'react'
import styled from 'styled-components';


import './Header.css'
// import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    const [toggleText, setToggleText] = useState('OPEN')
    const toggleMenu = e => {
        e.preventDefault()
        if (menuIcon === false && toggleText === "OPEN"){
            setMenuIcon(true)
            setToggleText('CLOSE')
        }else{
            setMenuIcon(false)
            setToggleText('OPEN')
        }
        console.log(menuIcon);
    }
    return (
        <Container>
            <Logo src="images/logo.svg"  />

            <Menu>
                <p><a href="#model-s">Model S</a></p>
                <p><a href="#model-3">Model 3</a></p>
                <p><a href="#model-x">Model X</a></p>
                <p><a href="#model-y">Model Y</a></p>
                <p><a href="#solar-roof">Solar Roof</a></p>
                <p><a href="#solar-panels">Solar Panels</a></p>
            </Menu>
            <RightMenu isOpen={menuIcon}>
                <p><a href="#model-y">Shop</a></p>
                <p><a href="#solar-roof">Account</a></p>
                <p onClick={toggleMenu} ><a href="#">Menu</a></p>
               {/* <MenuBook  /> */}
            </RightMenu>
            <HiddenMenu isOpen={menuIcon}>
                <p onClick={toggleMenu} ><a id='hidden' href="#">Menu</a></p>
              
            </HiddenMenu>
            <BurgerNav isOpen={menuIcon}>
                <CloseButton><p onClick={toggleMenu}>X</p></CloseButton>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive </a></li>
                <li><a href="#">Cybertruck </a></li>
                <li><a href="#">Roadster </a></li>
                <li><a href="#">Semi </a></li>
                <li><a href="#">Charging </a></li>
                <li><a href="#">Powerwall </a></li>
                <li><a href="#">Commercial Energy </a></li>
                <li><a href="#">Utilities </a></li>
                <li><a href="#">Find Us </a></li>
                <li><a href="#">Support </a></li>
                <li><a href="#">Investor Relations </a></li>
                <li><a href="#">United States</a></li>
                {/* <li><a href="/">{menuIcon}</a></li> */}
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height: 54px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    // marging: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    max-width: 100vw;

`

const Logo = styled.img `
    height: 20px;
    cursor: pointer;
    padding: 0;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    // flex: 1;
    
    a {

        font-weight: 700;
        border-radius: 50px;
        font-size: 16px;
        color: #181B21 !important;
        opacity: .7;
        padding: 7px 15px;
        flex-wrap: no-wrap;
        text-decoration: none;
        transition: background-color .5s ease-in-out;
        // transition-timing-function: 1s ease-in-out;

        
    }

    a::before{

    }

    a:hover{
        background-color: rgba(0, 0, 0, 0.1);

    }

    @media(max-width: 958px){
        display: none;
    }

`

const RightMenu = styled(Menu) `
   transition: transform 0.2s ease-in;
   
   @media(max-width: 958px){
        display: none;
   }
}
`

const HiddenMenu = styled(Menu) `
   transition: transform 0.2s ease-in;
   display: none;
   
   @media(max-width: 958px){
        display: flex;
   }
}
    
`


const BurgerNav = styled.div `
   position: fixed;
   top:0;
   right: 0;
   bottom: 0;
   background: white;
   width: 250px;
   z-index: 16;
   list-style: none;
   padding: 5px 20px;
   display: flex;
   flex-direction: column;
   text-align: start;
   animation: 3s ease-in 1s 2 reverse both paused slidein;
   transition: all;
   transform:   ${props => !props.isOpen? 'translateX(100%)' : 'translateX(0)'};
   transition: transform 0.2s ease-in;

   li{
       padding: 10px 0;
    //    border-bottom: 1px solid rgba(0, 0, 0, .2);

       a {
            font-weight: 700;
            border-radius: 50px;
            font-size: 14px;
            color: #181B21 !important;
            opacity: .7;
            padding: 7px 10px;
            flex-wrap: no-wrap;
            text-decoration: none;
       };

       p{
        font-weight: 700;
        opacity: .6;
        // max-width: 100vw;
        text-align: end;
        padding: 5px;
        margin-rigth: 0;
        position: absolute;

    };
    p:hover{
        //    padding: 10px;
           background-color: gray;
           border-radius: 50%;
       }
   }

   @media(max-width: 768px){
    // display: none;
   width: 70%;

}

`


const CloseButton = styled.div `
   cursor: ponter;
   display: flex;
   flex-direction: row;
   max-width: 100vw;
   justify-content: end;

   p{
    text-align: center;
       position: inline-block;
    font-weight: normal;

    padding: 2px 5px 2px 5px;
    // animation: 3s ease-in 1s 2 reverse both paused slidein;
    transition:  0.2s ease-in;

   };
   p:hover{
       background-color: #ccc;
    //    opacity: .6;
       border-radius: 50%;
       cursor: pointer;
    transition: background-color 0.5s ease-in;

   }

`