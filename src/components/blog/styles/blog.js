import styled from 'styled-components';

export const Container = styled.div`
    color: #333;
    padding-top: 100px;
    padding-bottom: 70px;
    border-style: none;
`;

export const PostContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
`;

// HEADER

export const HeaderContainer = styled.div`
margin-bottom: 30px;
text-align: center;
`;

export const PostTitle = styled.div`
    padding-top: 20px;
    padding-bottom: 30px;
    font-size: 38px;
    line-height: 24px;
    font-weight: 700;
    text-align: center;
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
`;

export const PostDate = styled.div`
    margin-top: 20px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    line-height: 22px;
`;

export const PostImage = styled.img`
    position: relative;
    right: 0px;
    display: inline-block;
    max-height: 600px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    max-width: 100%;
    vertical-align: middle;
`;

// TEXT

export const TextBlock = styled.div`
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Author = styled.h4`
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
`;

export const Subtitle = styled.h3`
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: Roboto, sans-serif;
    font-size: 26px;
    line-height: 33px;
    font-weight: 500;
    text-align: justify;
`;

export const Text = styled.p`
    margin-top: 0px;
    margin-bottom: 20px;
    line-height: 22px;
    font-weight: 400;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    text-align: justify;
    font-size: 16px;
`;

export const Quote = styled.blockquote`
    padding: 0px 20px;
    border-left: 5px solid #e2e2e2;
    font-size: 16px;
    margin: 0 0 20px 0;
    line-height: 22px;
`;

export const RecordingTitle = styled.div`
    margin-bottom: 15px;
    padding-left: 0px;
    border-left: 1px none #000;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    line-height: 22px;
`;

export const AudioContainer = styled.div`
    margin-top: 60px;
    margin-bottom: 0px;
    border-left: 1px none #000;
    text-align: center;
`;

export const Audio = styled.audio`
    display: inline-block;
    vertical-align: baseline;
    text-align: center;
`;

export const ReturnLink = styled.a`
    margin-top: 60px;
    padding-top: 0px;
    color: #2196f3;
    text-decoration: none;
    background-color: transparent;

    &:hover {
        color: #2144f3;
    }

    &:active{
        outline: 0;
    }
`;