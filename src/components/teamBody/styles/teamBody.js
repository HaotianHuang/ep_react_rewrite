import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 20px;
    border-color: transparent;
    border-top-style: none;
    border-top-width: 1px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    background-color: #fff;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    display: block;
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    font-family: Montserrat, sans-serif;
    color: #1a1a1a;
    transition: background-color 200ms ease;
`;

export const ImageContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -100px;
    max-width: 940px;

    @media (max-width: 991px) {
        max-width: 728px;
    }

    @media (max-width: 767px) {
        max-width: 95vm;
    }

    @media (max-width: 479px) {
        max-width: 92vm;
    }
`;

export const Image = styled.img`
    padding-top: 50px;
    padding-bottom: 150px;
`;

export const TeamContainer = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    border-color: transparent;
    border-top-style: none;
    border-top-width: 1px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

export const TeamInnerContainer = styled.div`
    height: auto;
    padding: 0px;
    background-color: transparent;
    position: relative;
    text-align: center;
    clear: both;
    position: relative;
    display: block;
    overflow: hidden;
    z-index: 1;
    left: 0;
    right: 0;
    height: 100%;
    white-space: nowrap;
    transform: translateX(0px);
    opacity: 1;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    white-space: normal;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const TeamInnerContainerTitle = styled.h1`
    font-weight: 500;
    text-transform: none;
    font-family: Roboto, sans-serif;
    font-size: 35px;
    line-height: 40px;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
    text-align: center;
    grid-column: 1 / -1;
`;

export const TeamProfileWrapper = styled.div`
    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    display: block;
    width: 96%;
    margin-top: 1.3vw;
    margin-right: auto;
    margin-left: auto;
    padding: 30px 40px;
    border: 1px solid #e4ecf6;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 7px 7px 10px 0 #f3f8ff;
    text-align: center;
`;


export const TeamProfilePosition = styled.h4`
    margin-bottom: 10px;
    border-color: rgba(228, 236, 246, 0.57);
    background-color: transparent;
    font-family: Merriweather, serif;
    color: rgba(0, 77, 240, 0.92);
    font-weight: 500;
    text-transform: none;
    display: block;
    width: 120px;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 10px;
    letter-spacing: 1px;
`;

export const TeamProfileName = styled.h4`
    margin-bottom: 5px;
    color: #1f2532;
    font-size: 19px;
    margin-top: 0px;
    font-weight: 600;
    text-align: center;
    font-family: Roboto, sans-serif;
    line-height: 27px;
    text-transform: uppercase;
`;

export const TeamProfileImage = styled.div`
    background-position: 0px 0px;
    background-size: contain;
    width: 125px;
    height: 125px;
    margin-top: 0px;
    display: block;
    margin-right: auto;
    margin-bottom: 15px;
    margin-left: auto;
    border-radius: 100px;
`;

export const TeamProfileText = styled.p`
    font-family: Merriweather, serif;
    color: #9ba4af;
    font-size: 15px;
    line-height: 24px;
    font-weight: 300;
    margin-top: 0px;
    margin-bottom: 20px;
`;

