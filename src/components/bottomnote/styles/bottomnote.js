import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 1px;
    background-image: url("https://uploads-ssl.webflow.com/5b3db92fdf53bd5cfe96e75a/5b45aa64371a1e5e93f36772_angel2.svg"), linear-gradient(135deg, rgba(0, 109, 240, 0.97) 40%, rgba(0, 233, 94, 0.89));
    background-position: 50% -143px, 0px 0px;
    background-size: cover, auto;
    background-repeat: no-repeat, repeat;
`;

export const Pane = styled.div`
    padding: 50px 20px 50px 20px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;
    max-width: 1040px;
    font-family: Lato, sans-serif;
    color: #fff;
    text-align: center;
    font-style: normal;

`;

export const Subtitle = styled.h3`
    color: hsla(0, 0%, 100%, 0.7);
    font-family: Merriweather, serif;
    font-size: 1.15rem;
    line-height: 1.7em;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0px;
`;

export const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 500;
    font-family: Lato, sans-serif;
    color: #fff;
    font-style: normal;
    box-sizing: border-box;
    text-transform: none;

    @media (max-width: 991px) {
        font-size: 2rem;
        line-height: 1.3em;
    }

    font-size: 2.7rem;
    line-height: 1.2em;
`;

export const Text = styled.p`
    font-family: Merriweather, serif;
    font-size: 1.1em;
    line-height: 1.4em;
    font-weight: 300;
`;