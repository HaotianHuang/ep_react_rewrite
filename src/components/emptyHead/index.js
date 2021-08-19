import React from 'react';

import { Container} from './styles/emptyHead';

export default function EmptyHead({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}