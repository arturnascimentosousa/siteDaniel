import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 40px 0 16px;
  box-shadow: -5px 0.5px 0 #c7c7c7,-5px -5px 10px #f9f9f9;
`;

export const Divona = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
`

export const Promotion = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const dropDown = styled.select`
background: none;
position: absolute;
right: 12%;
border: none;
color: white;
cursor: pointer;
&:focus{
  outline: none;
}
`

export const elementsDropDown = styled.option`
color: white;
background-color: black;
`

export const navList = styled.ul`
display:flex;
gap:30px;
text-decoration: none;
list-style: none;
`
export const inputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #f5f5f5;
  height: 36px;
 
  input {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 7px 12px 7px 20px;
  }
`

export const inputSearch = styled.input`
background-color: #f5f5f5;
border: none;
border-radius: 5px;
padding: 7px 12px 7px 20px;
outline: none;
`
export const navItem = styled.li`
text-decoration: none;
color: black;
`

export const navLink = styled.a`
text-decoration: none;
&:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }

  &:link {
    color: blue;
  }

  &:visited {
    color: blue;
  }

  &:active {
    color: blue;
  }
`

export const LinkHeader = styled.a`
  color: white;
  text-decoration: underline;
  margin-left: 15px;
  &:hover {
    color: blue;
  }

  &:link {
    color: blue;
  }

  &:visited {
    color: blue;
  }

  &:active {
    color: blue;
  }
`;

export const Title = styled.p`
   margin: 40px;
  font-weight: 60px;
`;
