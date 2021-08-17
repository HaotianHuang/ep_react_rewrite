import styled from 'styled-components';

export const Container = styled.div`
    height: 850px;
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

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const LeftInnerContainer = styled.div`
    padding-left: 20px;
    padding-right: 15%;
    max-width: 90%;
    margin-top: 130px;
    font-family: Lato, sans-serif;
    color: #fff;

    @media (min-width: 600px) {
        width: 60%;
    }
`;

export const LeftInnerContainerH1 = styled.h1`
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 800px) {
        font-size: 2.1rem;
        line-height: 1.1em;
    }

    font-size: 2.9rem;
    line-height: 1.2em;
`;

export const LeftInnerContainerText = styled.p`
    font-size: 1.4rem;
    margin-bottom: 35px;
    font-family: Merriweather, serif;
`;

export const ButtonContainer = styled.div`
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
    @media (min-width: 600px) {
        width: 40%;
    }
`;

export const FormContainer = styled.div`
    width: 90%;
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
    font-weight: 400;
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
    font-size: 14px;
    line-height: 1.42857143;
    border: 1px solid #cccccc;
`;

export const FormTextField = styled.textarea`
    height: auto;
    min-height: 150px;
    padding-bottom: 10px;
    border-radius: 6px;
    background-color: #fafafa;
    color: #9ba4af;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    border: 1px solid #cccccc;
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
        box-shadow: 0 20px 20px 0 rgba(0,0,0,0.15);
        transform: translate(0px,-5px);
    }
`;