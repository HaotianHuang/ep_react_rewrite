import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    margin: 50px auto 50px auto;    
    max-width: 660px;
    height: auto;
    box-sizing: border-box;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
`;

export const StyledLink = styled(Link)`
    cursor: pointer;
    max-width: 100%;
    display: inline-block;
`;