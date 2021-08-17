import React from 'react';
import { Container, InnerContainer, LeftInnerContainer, LeftInnerContainerH1, LeftInnerContainerText, ButtonContainer, SocialMediaButton, 
    RightInnerContainer, FormContainer, Form, FormText, FormTextField, FormLabel, FormInput, SubmitButton } from './styles/homelanding';

export default function HomeLanding({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

HomeLanding.InnerContainer = function HomeLandingInnerContainer ({ ...restProps}) {
    return <InnerContainer {...restProps } />;
}

HomeLanding.LeftInnerContainer = function HomeLandingLeftInnerContainer ({ ...restProps}) {
    return <LeftInnerContainer {...restProps } />;
}

HomeLanding.LeftInnerContainerH1 = function HomeLandingLeftInnerContainerH1 ({ ...restProps}) {
    return <LeftInnerContainerH1 {...restProps } />;
}

HomeLanding.LeftInnerContainerText = function HomeLandingLeftInnerContainerText ({ ...restProps}) {
    return <LeftInnerContainerText {...restProps } />;
}

HomeLanding.ButtonContainer = function HomeLandingButtonContainer ({ ...restProps}) {
    return <ButtonContainer {...restProps } />;
}

HomeLanding.SocialMediaButton = function HomeLandingSocialMediaButton ({ ...restProps}) {
    return <SocialMediaButton {...restProps } />;
}


HomeLanding.RightInnerContainer = function HomeLandingRightInnerContainer ({ ...restProps}) {
    return <RightInnerContainer {...restProps } />;
}

HomeLanding.FormContainer = function HomeLandingFormContainer ({ ...restProps}) {
    return <FormContainer {...restProps } />;
}

HomeLanding.Form = function HomeLandingForm ({ ...restProps}) {
    return <Form {...restProps } />;
}

HomeLanding.FormText = function HomeLandingFormText ({ ...restProps}) {
    return <FormText {...restProps } />;
}

HomeLanding.FormTextField = function HomeLandingFormTextField ({ ...restProps}) {
    return <FormTextField {...restProps } />;
}

HomeLanding.FormLabel = function HomeLandingFormLabel ({ ...restProps}) {
    return <FormLabel {...restProps } />;
}

HomeLanding.FormInput = function HomeLandingFormInput ({ ...restProps}) {
    return <FormInput {...restProps } />;
}

HomeLanding.SubmitButton = function HomeLandingSubmitButton ({ ...restProps}) {
    return <SubmitButton {...restProps } />;
}