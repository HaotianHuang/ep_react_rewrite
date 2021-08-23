import React from 'react';

import { Container, InnerContainer, PostTitle, PostSubtitle, PostDate, PostAuthor, PhotoTextContainer, PhotoTextContainerTextContainer, 
    PhotoTextContainerPhotoContainer, PhotoTextContainerPhoto, TextContainer, Text, Subtitle} from './styles/covidsationsBody';

export default function CovidsationsBody({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

CovidsationsBody.InnerContainer = function CovidsationsBodyInnerContainer({ ...restProps }) {
    return <InnerContainer {...restProps } />;
}

CovidsationsBody.PostTitle = function CovidsationsBodyPostTitle({ ...restProps }) {
    return <PostTitle {...restProps } />;
}

CovidsationsBody.PostSubtitle = function CovidsationsBodyPostSubtitle({ ...restProps }) {
    return <PostSubtitle {...restProps } />;
}

CovidsationsBody.PostDate = function CovidsationsBodyPostDate({ ...restProps }) {
    return <PostDate {...restProps } />;
}

CovidsationsBody.PostAuthor = function CovidsationsBodyPostAuthor({ ...restProps }) {
    return <PostAuthor {...restProps } />;
}

CovidsationsBody.PhotoTextContainer = function CovidsationsBodyPhotoTextContainer({ ...restProps }) {
    return <PhotoTextContainer {...restProps } />;
}

CovidsationsBody.PhotoTextContainerTextContainer = function CovidsationsBodyPhotoTextContainerTextContainer({ ...restProps }) {
    return <PhotoTextContainerTextContainer {...restProps } />;
}

CovidsationsBody.PhotoTextContainerPhotoContainer = function CovidsationsBodyPhotoTextContainerPhotoContainer({ ...restProps }) {
    return <PhotoTextContainerPhotoContainer {...restProps } />;
}

CovidsationsBody.PhotoTextContainerPhoto = function CovidsationsBodyPhotoTextContainerPhoto({ ...restProps }) {
    return <PhotoTextContainerPhoto {...restProps } />;
}

CovidsationsBody.TextContainer = function CovidsationsBodyTextContainer({ ...restProps }) {
    return <TextContainer {...restProps } />;
}

CovidsationsBody.Text = function CovidsationsBodyText({ ...restProps }) {
    return <Text {...restProps } />;
}

CovidsationsBody.Subtitle = function CovidsationsBodySubtitle({ ...restProps }) {
    return <Subtitle {...restProps } />;
}