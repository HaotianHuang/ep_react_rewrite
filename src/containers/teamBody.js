import React from 'react';
import { TeamBody } from '../components';
import { anthony_foster, david_townsend, erica_musgrove, hutch_ozdil, jeff_tang, michael_wu, peter_cui, sumudu_perera, 
    team_photo, tom_xia, victor_lin} from '../data/team_image_index'

export function TeamBodyContainer() {
    return (
        <TeamBody>
            <TeamBody.ImageContainer>
                <TeamBody.Image src={team_photo} />
            </TeamBody.ImageContainer>

            <TeamBody.TeamContainer>

                <TeamBody.TeamInnerContainer>

                    <TeamBody.TeamInnerContainerTitle>About the Founder</TeamBody.TeamInnerContainerTitle>

                    <TeamBody.TeamProfileWrapperCenter>
                        <TeamBody.TeamProfilePosition>Founder</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Jefferson Tang</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${jeff_tang})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Hailing from Melbourne, Jefferson is a junior doctor who is insatiably curious about the untold stories of well-lived lives.</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapperCenter>
                </TeamBody.TeamInnerContainer>

                <TeamBody.TeamInnerContainer>
                    <TeamBody.TeamInnerContainerTitle>Operations Team</TeamBody.TeamInnerContainerTitle>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Senior Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Erica Musgrove</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${erica_musgrove})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Senior Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Sarah Jackson</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>
                    
                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Michael Wu</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${michael_wu})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Sydney</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>David Townsend</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${david_townsend})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Sydney</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Nada Haridy</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Jasmine Davis</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Avi Bart</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Jessie Zhou</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>MBBS<br />Monash University</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Chris Erian</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Queensland</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Journalist</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>JONATHAN TSIGLOPOULOS</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                </TeamBody.TeamInnerContainer>

                <TeamBody.TeamInnerContainer>
                    <TeamBody.TeamInnerContainerTitle>Board of Directors</TeamBody.TeamInnerContainerTitle>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Strategy</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Victor Lin</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${victor_lin})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Strategy</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Peter Cui</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${peter_cui})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor of Medicine<br />University of Melbourne</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Operations</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Tommy Xia</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${tom_xia})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Solicitor<br />Colin Biggers & Paisley Lawyers</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Technology</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Anthony Foster</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${anthony_foster})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Co-founder<br />Swifthero</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Technology</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Hutch Ozdil</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${hutch_ozdil})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Co-founder<br />Swifthero</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                    <TeamBody.TeamProfileWrapper>
                        <TeamBody.TeamProfilePosition>Media</TeamBody.TeamProfilePosition>
                        <TeamBody.TeamProfileName>Sumudu Perera</TeamBody.TeamProfileName>
                        <TeamBody.TeamProfileImage style={{backgroundImage: `url(${sumudu_perera})`}}></TeamBody.TeamProfileImage>
                        <TeamBody.TeamProfileText>Doctor<br />Royal Melbourne Hospital</TeamBody.TeamProfileText>
                    </TeamBody.TeamProfileWrapper>

                </TeamBody.TeamInnerContainer>

            </TeamBody.TeamContainer>
        </TeamBody>
    )
}