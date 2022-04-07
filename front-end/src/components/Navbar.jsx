import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'

const Container = styled.div`
 height: 60px;
 ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}

`
//Left Navbar
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({ display: "none" })}

`
const Input = styled.input`
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    ${mobile({ width: "50px" })}

`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}

`
//right Navbar
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "8px" })}

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/> 
                    <SearchIcon style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>MegaStore</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar