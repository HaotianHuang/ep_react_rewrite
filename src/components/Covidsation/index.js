import React from 'react';
import { Container, Image, StyledLink } from './styles/Covidsation';

export default function Covidsation({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Covidsation.Image = function CovidsationImage({ ...restProps }) {
    return <Image {...restProps } />;
}

Covidsation.StyledLink = function CovidsationStyledLink( { ...restProps}) {
    return <StyledLink {...restProps} />;
}