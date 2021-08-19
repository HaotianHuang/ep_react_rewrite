import React from 'react';

import { Container, InnerContainer, PodcastContainerTitle, PodcastContainer, PodcastFileContainer, PodcastFile, 
    PodcastTextContainer, PodcastTitle, PodcastText} from './styles/podcastBody';

export default function PodcastBody({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

PodcastBody.InnerContainer = function PodcastBodyInnerContainer ({ ...restProps}) {
    return <InnerContainer {...restProps } />;
}

PodcastBody.PodcastContainerTitle = function PodcastBodyPodcastContainerTitle ({ ...restProps}) {
    return <PodcastContainerTitle {...restProps } />;
}

PodcastBody.PodcastContainer = function PodcastBodyPodcastContainer ({ ...restProps}) {
    return <PodcastContainer {...restProps } />;
}

PodcastBody.PodcastFileContainer = function PodcastBodyPodcastFileContainer ({ ...restProps}) {
    return <PodcastFileContainer {...restProps } />;
}

PodcastBody.PodcastFile = function PodcastBodyPodcastFile ({ ...restProps}) {
    return <PodcastFile {...restProps } />;
}

PodcastBody.PodcastTextContainer = function PodcastBodyPodcastTextContainer ({ ...restProps}) {
    return <PodcastTextContainer {...restProps } />;
}

PodcastBody.PodcastTitle = function PodcastBodyPodcastTitle ({ ...restProps}) {
    return <PodcastTitle {...restProps } />;
}

PodcastBody.PodcastText = function PodcastBodyPodcastText ({ ...restProps}) {
    return <PodcastText {...restProps } />;
}