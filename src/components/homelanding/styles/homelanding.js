import styled from 'styled-components';

export const Container = styled.div`
    min-height: 850px;
    padding-top: 100px;
    background-image: url("https://uploads-ssl.webflow.com/5b3db92fdf53bd5cfe96e75a/5b45aa64371a1edf85f36771_angel.svg"), linear-gradient(135deg, rgba(0, 77, 240, 0.92) 24%, rgba(0, 233, 94, 0.94));
    background-position: 0px 6px, 0px 0px;
    background-size: cover, auto;
    background-repeat: no-repeat, repeat;
    background-attachment: scroll, scroll;
`;

export const InnerContainer = styled.div`
    position: relative;
    left: 0px;
    top: 15%;
    z-index: 2;
    display: block;
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    padding-left: 30px;
    padding-right: 30px;

    @media (min-width: 700px) {
        margin-top: 40px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }


`;

export const LeftInnerContainer = styled.div`
    font-family: Lato, sans-serif;
    color: #fff;

    @media (min-width: 700px) {
        width: 60%;
        padding-right: 15%;
        max-width: 90%;
        margin-top: 130px;
    }

    @media (max-width: 700px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const LeftInnerContainerH1 = styled.h1`
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 700px) {
        font-size: 2.1rem;
        line-height: 1.1em;
        text-align: center;
    }

    font-size: 2.9rem;
    line-height: 1.2em;
`;

export const LeftInnerContainerText = styled.p`
    font-size: 1.4rem;
    margin-bottom: 35px;
    font-family: Merriweather, serif;

    @media (max-width: 700px) {
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
    }
`;

export const SocialMediaButton = styled.a`
    margin-right: 12px;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-rendering: auto;
    -moz-osx-font-smoothing: grayscale;
    pointer: cursor;

    &:hover {
        opacity: 0.6;
    }
}
`;

export const RightInnerContainer = styled.div`  

    @media (min-width: 700px) {
        width: 40%;
    }

    @media (max-width: 700px) {
        padding-top: 50px;
    }

`;

export const FormContainer = styled.div`
    width: 100%;
    float: right;
    padding: 40px 30px 20px;
    border-radius: 9px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 0 #000;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: #1a1a1a;
    font-family: Lato, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
`;

export const FormText = styled.p`
    margin-top: 0px;
    line-height: 20px;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    padding-top: 20px;
`;

export const FormInput = styled.input`
    height: 40px;
    border-radius: 6px;
    background-color: #fafafa;
    color: #9ba4af;
    display: block;
    width: 100%;
    padding: 8px 12px;
    margin-bottom: 10px;
    line-height: 1.42857143;
    border: 1px solid #cccccc;
    font-family: Lato, sans-serif;
    font-size: 0.875rem;
`;

export const FormTextField = styled.textarea`
    height: auto;
    min-height: 150px;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: #fafafa;
    color: #9ba4af;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    line-height: 1.42857143;
    border: 1px solid #cccccc;
    font-family: Lato, sans-serif;
    font-size: 0.875rem;
`;

export const SubmitButton = styled.input`
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    font-family: Lato,sans-serif;
    text-transform: uppercase;
    width: 100%;
    border-style: none;
    border-bottom-width: 1px;
    border-bottom-color: #29a1ff;
    border-radius: 8px;
    font-size: 12px;
    letter-spacing: 1px;
    display: inline-block;
    color: #fff;
    padding: 18px 35px 16px;
    font-weight: 400;
    margin-top: 10px;
    background-image: linear-gradient(301deg,#12c51e,#04c7aa 55%,#004cff);
    transition: box-shadow 400ms ease,all 400ms ease;
    background-color: rgba(0,77,240,0.92);

    &:hover {
        background-color: #00e95e;
        border: 0px none #fff;
        box-shadow: ${props => props.disabled ? "none" : "0 20px 20px 0 rgba(0,0,0,0.15)"};
        transform: ${props => props.disabled ? "none" : "translate(0px,-5px)"};
    }
`;