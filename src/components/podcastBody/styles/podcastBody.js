import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 70px;
    border-style: none;
`;

export const InnerContainer = styled.div`
    margin-bottom: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
`;

export const PodcastContainerTitle = styled.div`
    border-top-color: #000;
    border-bottom-color: #000;
    color: #000;
    font-size: 22px;
    line-height: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    font-family: Exo, sans-serif;
    font-style: italic;
    font-weight: 500;
    text-transform: uppercase;
`;

export const PodcastContainer = styled.div`
`;

export const PodcastFileContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 0px;
`;

export const PodcastFile = styled.iframe`
    width: 780px;
    height: 160px;
    border: none;
`;

export const PodcastTextContainer = styled.div`
    display: block;
    margin-top: 30px;
    margin-bottom: 0px;
`;

export const PodcastTitle = styled.h4`
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    text-align: justify;
    color: #333;
`;

export const PodcastText = styled.p`
    margin-top: 0px;
    margin-bottom: 20px;
    line-height: 22px;
    font-weight: 400;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 16px;
    text-align: justify;
    color: #333;
    white-space: pre-wrap;
`;