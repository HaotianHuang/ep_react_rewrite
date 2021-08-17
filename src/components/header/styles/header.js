import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 1000;
    width: 100%;
    height: 80px;
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    -webkit-box-flex: 1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: transparent;
    margin-top: 5px;
`;

// LEFT

export const LogoBox = styled.a`
    padding-left: 20px;
    display: flex;
    text-decoration: none;
`;

export const Logo = styled.img`
    position: relative;
    display: inline-block;
    overflow: visible;
    margin-right: 6px;
    margin-left: 0px;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    align-self: center;

    transition: 1s;

    &:hover {
        transition: 1s;
        transform: rotate(180deg);
    }
`;

export const HomeLink = styled.h1`
    margin-left: 15px;
    line-height: 1.3em;
    color: #e9e9e9;
    align-self: center;
    font-family: Roboto, sans-serif;
    display: inline-block;
    
    &:hover {
        color: #8b8b8b;
    }

    @media (max-width: 600px) {
        font-size: 1.05em;
    }

    font-size: 1.375rem;
`;

/*

    position: relative;    
    letter-spacing: 2px;
    

*/


// RIGHT

export const LinkContainer = styled.nav`
    display: flex;
    height: 60px;
    align-items: top;
    position: relative;
    float: right;
    color: #e9e9e9;
    display: flex;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    color: #e9e9e9;
    vertical-align: middle;
    font-weight: 700;
    font-size: 1.1rem;
    align-self: center;

    &:hover {
        color: #8b8b8b;
    }
`;

// padding: 8px;
// border-radius: 6px;
// background-color: #fff;

export const StyledBurgerContainer = styled.div`
    position: absolute;
    top: 7px;
    right: 30px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    display: none;

    @media (max-width: 600px) {
        display: inline-block;
    }

`;

/*

SETTINGS FOR StyledBurger without the surrounding StyledBurgerContainer div

// position: absolute;
// top: 16px;
// right: 40px;

*/

export const StyledBurger = styled.button`
    display: none;

    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }
    div {
      width: 1.25rem;
      height: 0.2rem;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;

      transform-origin: 3.2px;

      :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg) translateX(3px)' : 'rotate(0)'};
      }
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg) translateX(3px)' : 'rotate(0)'};
      }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;

// display: ${({ open }) => open ? 'flex' : 'none'};

export const DropdownMenuContainer = styled.div`
    background-color: #034ef0;
    flex-direction: column;
    transition: max-height 0.3s ease-in-out;
    max-height: ${({ open }) => open ? '200px' : '0px'};
    
    @media (min-width: 600px) {
        display: none;
    }
`;

export const DropdownMenuText = styled.div`
    text-align: center
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    opacity: ${({ open }) => open ? '1' : '0'};
    transition: all 0.3s ease-in-out;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
`;

export const DropdownLink = styled.a`
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    color: #e9e9e9;
    vertical-align: middle;
    font-weight: 700;
    font-size: 0.9rem;
    align-self: center;

    &:hover {
        color: #8b8b8b;
    }
`;