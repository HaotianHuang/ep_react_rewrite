import React from 'react';
import { Container, Image, Link } from './styles/Covidsation';

export default function Covidsation({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Covidsation.Image = function CovidsationImage({ ...restProps }) {
    return <Image {...restProps } />;
}

Covidsation.Link = function CovidsationLink( { ...restProps}) {
    return <Link {...restProps} />;
}