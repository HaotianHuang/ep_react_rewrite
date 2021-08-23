import styled from 'styled-components';

export const Container = styled.div`
`;

export const InnerContainer = styled.div`
    color: #333;
    margin-left: auto;
    margin-right: auto;
    max-width: 920px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;
`;

// Post Header

export const PostTitle = styled.div`
    padding-top: 20px;
    padding-bottom: 30px;
    font-size: 38px;    
    line-height: 24px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 700px) {
        font-size: 30px;
    }
`;

export const PostSubtitle = styled.div`
    font-size: 19px;
    line-height: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid;
    border-bottom: 1px solid #000;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Exo', sans-serif;

    @media (max-width: 700px) {
        font-size: 15px;
    }
`;

export const PostDate = styled.div`
    margin-top: 20px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    line-height: 22px;

    @media (max-width: 700px) {
        font-size: 12px;
    }
`;

export const PostAuthor = styled.h4`
    font-family: Roboto, sans-serif;
    font-size: 20px;
    line-height: 22px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;

// DIV with photo + text horizontally aligned

export const PhotoTextContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;

    @media (min-width: 700px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

    // flex-direction: ${({ left }) => left ? 'row' : 'row-reverse'};

export const PhotoTextContainerTextContainer = styled.div`
    width: 60%
    padding-right: 10px;
    position: static;
    text-align: center;
    object-fit: fill;
    flex: 0 0 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 700px) {
        margin-top: 20px;
    }
`;

export const PhotoTextContainerPhotoContainer = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 700px) {
        text-align: center;
        flex: 0 0 40%;
    }

    @media (min-width: 700px) {
        text-align: right;
        flex: 0 0 40%;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const PhotoTextContainerPhoto = styled.img`
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    border: 0;
    object-fit: cover;
    height: 480px;
    width: 300px;


`;

// BOTTOM QUESTIONS

export const TextContainer = styled.div`
    margin-top: 30px;
`;

export const Subtitle = styled.h4`
    text-align: center;
    font-style: italic;
    font-family: Roboto, sans-serif;
    font-size: 1.4rem;
    line-height: 27px;
    font-weight: 600;
    margin-bottom: 20px

    @media (max-width: 700px) {
        font-size: 1.1rem;
    }
`;

export const Text = styled.p`
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 1.1rem;
    margin-top: 0px;
    margin-bottom: 20px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 0.1px;
    text-align: justify;

    @media (max-width: 700px) {
        font-size: 0.9rem;
    }
`;