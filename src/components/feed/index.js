import React from 'react';

import { Container, InnerContainer, PostWrapper, PostLinkWrapper, PostImage, PostImageOverlay, PostContentWrapper, 
    PostContentName, PostContentSubtitle, PostContentDate} from './styles/feed';

export default function Feed({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Feed.InnerContainer = function FeedInnerContainer ({ ...restProps}) {
    return <InnerContainer {...restProps } />;
}

Feed.PostWrapper = function FeedPostWrapper ({ ...restProps}) {
    return <PostWrapper {...restProps } />;
}

Feed.PostLinkWrapper = function FeedPostLinkWrapper ({ ...restProps}) {
    return <PostLinkWrapper {...restProps } />;
}

Feed.PostImage = function FeedPostImage ({ ...restProps}) {
    return <PostImage {...restProps } />;
}

Feed.PostImageOverlay = function FeedPostImageOverlay ({ ...restProps}) {
    return <PostImageOverlay {...restProps } />;
}

Feed.PostContentWrapper = function FeedPostContentWrapper ({ ...restProps}) {
    return <PostContentWrapper {...restProps } />;
}

Feed.PostContentName = function FeedPostContentName ({ ...restProps}) {
    return <PostContentName {...restProps } />;
}

Feed.PostContentSubtitle = function FeedPostContentSubtitle ({ ...restProps}) {
    return <PostContentSubtitle {...restProps } />;
}

Feed.PostContentDate = function FeedPostContentDate ({ ...restProps}) {
    return <PostContentDate {...restProps } />;
}