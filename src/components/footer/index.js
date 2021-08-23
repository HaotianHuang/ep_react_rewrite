import React from 'react';
import { Container, Text, InnerContainer } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Footer.InnerContainer = function FooterInnerContainer({ ...restProps }) {
    return <InnerContainer {...restProps } />;
}

Footer.Text = function FooterText({ ...restProps }) {
    return <Text {...restProps } />;
}