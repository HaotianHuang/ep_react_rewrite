import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
`;

export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 999px) and (min-width: 601px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const PostWrapper = styled.div`
    padding-right: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
`;

export const PostLinkWrapper = styled.a`
    position: relative;
    display: block;
    overflow: hidden;
    max-width: 100%;
`;

export const PostImage = styled.div`
    height: 500px;  
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    transition: filter 350ms ease, -webkit-filter 350ms ease;

    &:hover {
        filter: grayscale(0%);
    }
`;

export const PostImageOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const PostContentWrapper = styled.div`
    position: absolute;
    left: 0px;
    top: 50%;
    right: 0px;
    transform: translate(0px, -50%);
    text-align: center;
`;

export const PostContentName = styled.div`
    display: inline-block;
    margin-bottom: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 0px none #fff;
    border-bottom: 0px none #fff;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const PostContentSubtitle = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-family: Exo, sans-serif;
    color: #f1f1f1;
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    text-transform: uppercase;
`;

export const PostContentDate = styled.h5`
    margin-top: 20px;
    font-family: Roboto, sans-serif;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
    line-height: 22px;
`;

