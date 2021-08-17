import React from 'react';
import { Covidsation } from '../components';
import covidsations_img from '../images/home/COVIDSATIONS.jpg';

export function CovidsationContainer() {
    return (
        <Covidsation>
            <Covidsation.Link href="/covidsations">
                <Covidsation.Image src={covidsations_img} alt="Covidsation" />
            </Covidsation.Link>
        </Covidsation>
    )
}