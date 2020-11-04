import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';


export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${('../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
`;



export const Container = styled.div`
    display: flex;
    height: 64px;
    padding: 18px 56px  ;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left:0;
    right:0;
    z-index:1;
    background-color: ${({ color }) => (color ? "#111" : "transparent")};
    transition: background-color 0.5s cubic-bezier(0.5, 0, 0.1, 1);
    a {
        display: flex;
    }
    @media (max-width: 1000px) {
        padding: 5px 30px;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border:0;
    width:40px;
    height: 40px;
    cursor:pointer;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;


export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media(min-width:1449px){
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display:block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius:3px;
    padding:8px 17px;
    cursor: pointer;
    text-decoration:none;
    box-sizing: border-box;

    &:hover{
        background-color: #f40612;
    }
`;


export const Dropdown = styled.div`
   height:0px;
   background-color:black;
   position:absolute;
   overflow:hidden;
   top:25px;
   margin-top:20px;
   right:0;
   width:150px;
   flex-direction:column;
   display:flex;
   align-items:center;
   justify-content:center;
   transition: .25s ease-out;
   transition-delay: .50s;
   opacity:0;
   border: 1px solid grey; 
   /* */

   ${Group}:last-of-type ${Link} {
    cursor:pointer;
   }

   ${Group}{
       margin-bottom: 10px;
       &:last-of-type {
           margin-bottom:0;
       }
    ${Link},${Picture}{
        cursor: default;
    }
    &:hover > ${Link}{
        font-weight:normal;
    }
   }

   button{
       margin-right: 10px;
   }

   p{
       font-size: 15px;
       margin-bottom:0;
       margin-top:0;
   }
   
`;


export const Search = styled.div`
    display:flex;
    align-items:center;
    position: relative;
    svg{
        color:white;
        cursor:pointer;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border:0;
    outline:none;
    position: absolute;
    z-index:1;
    left:${({ active }) => (active === true ? "12px" : "-20px")};
    img{
        filter: brightness(0) invert(1);
        width: 20px;
    }
`;

export const SearchInput = styled.input`
    background-color: rgba(0, 0, 0, 0.5);
    text-indent: 25px;
    color:white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 15px;
    margin-left:${({ active }) => (active === true ? "10px" : "0")};
    padding: ${({ active }) => (active === true ? "2px 10px" : "0")};
    opacity:${({ active }) => (active === true ? "1" : "0")};
    width: ${({ active }) => (active === true ? "200px" : "0")};
`;


export const Profile = styled.div`
    display:flex;
    align-items: center;
    margin-left:20px;
    position:relative;
    
    button{
        cursor:pointer;
    }

    &:hover > ${Dropdown}{
        height:100px;
        flex-direction:column;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:  .3s ease-out;
        opacity: 1;
    }
`;