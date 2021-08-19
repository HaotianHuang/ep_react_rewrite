import React from 'react';

import { Container, ImageContainer, Image, TeamContainer, TeamInnerContainer, TeamInnerContainerTitle, TeamProfileWrapper, 
    TeamProfilePosition, TeamProfileName, TeamProfileImage, TeamProfileText} from './styles/teamBody';

export default function TeamBody({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

TeamBody.ImageContainer = function TeamBodyImageContainer ({ ...restProps}) {
    return <ImageContainer {...restProps } />;
}

TeamBody.Image = function TeamBodyImage ({ ...restProps}) {
    return <Image {...restProps } />;
}

TeamBody.TeamContainer = function TeamBodyTeamContainer ({ ...restProps}) {
    return <TeamContainer {...restProps } />;
}

TeamBody.TeamInnerContainer = function TeamBodyTeamInnerContainer ({ ...restProps}) {
    return <TeamInnerContainer {...restProps } />;
}

TeamBody.TeamInnerContainerTitle = function TeamBodyTeamInnerContainerTitle ({ ...restProps}) {
    return <TeamInnerContainerTitle {...restProps } />;
}

TeamBody.TeamProfileWrapper = function TeamBodyTeamProfileWrapper ({ ...restProps}) {
    return <TeamProfileWrapper {...restProps } />;
}

TeamBody.TeamProfilePosition = function TeamBodyTeamProfilePosition ({ ...restProps}) {
    return <TeamProfilePosition {...restProps } />;
}

TeamBody.TeamProfileName = function TeamBodyTeamProfileName ({ ...restProps}) {
    return <TeamProfileName {...restProps } />;
}

TeamBody.TeamProfileImage = function TeamBodyTeamProfileImage ({ ...restProps}) {
    return <TeamProfileImage {...restProps } />;
}

TeamBody.TeamProfileText = function TeamBodyTeamProfileText ({ ...restProps}) {
    return <TeamProfileText {...restProps } />;
}