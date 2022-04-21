import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from './../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="./images/logo.svg" alt="Logo" />
            </a>
            <Menu>
                { cars && cars.map((car, index) => (
                    <a key={index}>{car}</a>
                )) }
            </Menu>
            <RightMenu>
                <a>Shop</a>
                <a>Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                { cars && cars.map((car, index) => (
                    <li key={index}><a>{car}</a></li>
                )) }
                <li><a>Used Inventory</a></li>
                <li><a>Trade-in</a></li>
                <li><a>Cybertruck</a></li>
                <li><a>Roadster</a></li>
                <li><a>Semi</a></li>
                <li><a>Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    justify-content: space-between;
    z-index: 100;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: white;
    width: 300px;
    z-index: 120;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transform: ${props => props.show? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a{
            font-weight: 600;
        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`