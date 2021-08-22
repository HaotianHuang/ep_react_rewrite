import React from 'react';
import { CovidsationsBody } from '../components';
import { elena, juan, saadat, sergio, synne} from '../data/covidsations_image_index'

export function CovidsationsBodyContainer() {
    return (
        <CovidsationsBody>
            <CovidsationsBody.InnerContainer>
                <CovidsationsBody.PostSubtitle>Coronavirus through the lens of final year medical students around the globe</CovidsationsBody.PostSubtitle>
                <CovidsationsBody.PostDate>MAY 3, 2020</CovidsationsBody.PostDate>

                <CovidsationsBody.TextContainer>
                    <CovidsationsBody.PostAuthor>Written by Jonathan Tsiglopoulos</CovidsationsBody.PostAuthor>
                    <CovidsationsBody.Text>Whether it’s memes depicting final year medical students in Italy being prematurely thrust into the Battle for Middle-Earth, or clickbait articles featuring “unqualified Doctors” being rushed onto the wards, it’s difficult to know exactly what role fellow medical students are playing in the current COVID-19 pandemic. Given that we live in the era of “fake news” (and an unlimited supply of it), I decided to chat with 5 final year medical students from across the globe in order to gain some insight into how their respective countries have responded to the situation, and the role that they are likely to play in the coming weeks and months. </CovidsationsBody.Text>
                    <CovidsationsBody.Text>Juan from the University of Buenos Aires in Argentina, and Sergio from the University of Oviedo in Spain, spoke about their respective country’s initial response to the pandemic, highlighting both the core cultural values that shone through during this difficult time as well as the underlying problems unmasked because of it.</CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Subtitle><i>Tell me a bit about how your country responded to the pandemic?</i></CovidsationsBody.Subtitle>
                </CovidsationsBody.TextContainer>

                <CovidsationsBody.PhotoTextContainer>
                    <CovidsationsBody.PhotoTextContainerTextContainer>
                        <CovidsationsBody.Text><i>Unfortunately, the first thing that came out was the mean side of society – <b>The panic was worse than the pandemic.</b> People were yelling at each other if they saw them out on the street during quarantine, without considering that there may be a good reason for it. Perhaps they were going to work or buying groceries.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“I think the trigger for this was the government’s initial response to the situation. They tried to downplay the effect that it would have, which made the population angry with the government and with each other.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“It’s much better now. People are being much nicer to each other and helping each other out. For instance, some people are volunteering to obtain groceries for the elderly or those with disabilities. <b>I think after the initial panic, the true solidarity of the Spaniards came to light.”</b></i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><b><i>- Sergio</i></b></CovidsationsBody.Text>
                    </CovidsationsBody.PhotoTextContainerTextContainer>
                    <CovidsationsBody.PhotoTextContainerPhotoContainer>
                        <CovidsationsBody.PhotoTextContainerPhoto src={sergio}/>
                    </CovidsationsBody.PhotoTextContainerPhotoContainer>
                </CovidsationsBody.PhotoTextContainer>

                <CovidsationsBody.PhotoTextContainer>
                    <CovidsationsBody.PhotoTextContainerPhotoContainer>
                        <CovidsationsBody.PhotoTextContainerPhoto src={juan}/>
                    </CovidsationsBody.PhotoTextContainerPhotoContainer>
                    <CovidsationsBody.PhotoTextContainerTextContainer>
                        <CovidsationsBody.Text><i>“The Argentinian people have demonstrated amazing solidarity. <b>At 9pm every day, no matter where you are, everyone starts clapping to show their support for the healthcare professionals putting their own health on the line.</b> It’s really quite amazing to see.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“Although it’s been greatly appreciated by the healthcare workers, I’ve also seen a lot of posts on social media calling for more ongoing support. Healthcare workers are financially neglected in Argentina, and although the clapping is nice, people are hoping that it’s not forgotten when this is all over. It’s not like it is for the medical profession over there (referencing Australia), the first year doctor is one of the worst paid professionals in the country. That’s a fact.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i><b>- Juan</b></i></CovidsationsBody.Text>
                    </CovidsationsBody.PhotoTextContainerTextContainer>
                </CovidsationsBody.PhotoTextContainer>

                <CovidsationsBody.TextContainer>
                    <CovidsationsBody.Subtitle><i>What effect has this had on your studies, and what role will you be undertaking as a final year medical student in the coming months?</i></CovidsationsBody.Subtitle>
                </CovidsationsBody.TextContainer>

                <CovidsationsBody.PhotoTextContainer>
                    <CovidsationsBody.PhotoTextContainerPhotoContainer>
                        <CovidsationsBody.PhotoTextContainerPhoto src={elena}/>
                    </CovidsationsBody.PhotoTextContainerPhotoContainer>
                    <CovidsationsBody.PhotoTextContainerTextContainer>
                        <CovidsationsBody.Text>Elena from Ludwig-Maximilians-University of Munich (left), spoke about her frustration at the poor treatment of final year medical students in the South of Germany.</CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“Our final exam was meant to be in a few weeks, but unfortunately the government has officially cancelled it. This is an exam we’ve been studying for, for almost half a year, and we might now have to wait until as late as next year to sit it and graduate.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“They want us to work in the hospitals in areas such as the COVID-19 stations, on telephone hotlines… we don’t really know. Unfortunately, there won’t be any compulsory payment for these roles. <b>I think even in a pandemic, medical students should be handled in a fair way.”</b></i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>- Elena</i></CovidsationsBody.Text>
                    </CovidsationsBody.PhotoTextContainerTextContainer>
                </CovidsationsBody.PhotoTextContainer>

                <CovidsationsBody.TextContainer>
                    <CovidsationsBody.Text>In contrast to Elena’s delayed graduation, Saadat (pictured below), from the University of Manchester, claims that some students in the UK have had their graduation accelerated.</CovidsationsBody.Text>
                </CovidsationsBody.TextContainer>

                <CovidsationsBody.PhotoTextContainer>
                    <CovidsationsBody.PhotoTextContainerTextContainer>
                        <CovidsationsBody.Text><i>“I was supposed to graduate in July and start working in August, but they have fast-tracked that process and have allowed us to graduate a few months earlier. I had already finished my exams, so it was just a matter of spending some more clinical time in the hospitals. Earlier years have had their exams moved online, and third year onwards have just been automatically progressed to the next year”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“They’ve created a new role for us, which is designed to get us helping with the very basic jobs. The contracts are yet to be drawn up, as decisions are still being made about things like our ability to prescribe medication. They haven’t really been clear about when and where we will start working, or how they will allocate jobs, and that has been frustrating. What is clear though, is that we will have far more supervision than a junior doctor.” </i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“At the end of the day though, all of us are happy to help.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>- Saadat</i></CovidsationsBody.Text>
                    </CovidsationsBody.PhotoTextContainerTextContainer>
                    <CovidsationsBody.PhotoTextContainerPhotoContainer>
                        <CovidsationsBody.PhotoTextContainerPhoto src={saadat}/>
                    </CovidsationsBody.PhotoTextContainerPhotoContainer>
                </CovidsationsBody.PhotoTextContainer>

                <CovidsationsBody.TextContainer>
                    <CovidsationsBody.Text>Sergio and Juan both emphasize that although they’ve been given the opportunity to volunteer at the hospitals, there is currently no talk of accelerating graduation.</CovidsationsBody.Text>
                    <CovidsationsBody.Text><i>“It’s been very frustrating. We haven’t transitioned into online classes yet, so we are just reading lecture notes at home. Most of our teachers haven’t made contact with us since the pandemic began. We have our exams in one month and haven’t been given any news about how it will occur, what content it will cover…nothing.” </i></CovidsationsBody.Text>
                    <CovidsationsBody.Text><i>- Sergio</i></CovidsationsBody.Text>
                </CovidsationsBody.TextContainer>

                <CovidsationsBody.PhotoTextContainer>
                    <CovidsationsBody.PhotoTextContainerTextContainer>
                        <CovidsationsBody.Text>In contrast to Sergio, Synne from the University of Oslo (right) claims that the transition to online study has been fast. <i>“We’ve been begging for online classes for about 6 years, and now they made it happen in 2 weeks.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text>Synne and her colleagues find themselves in a unique situation. Being final year students in Norway they already have their licence to work, however according to Synne the University maintained that it was <i>“more important for us to remain focused on our studies”.</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><i>“Most students work during the weekend anyway. We’ve probably picked up more shifts than before, but there haven’t really been any big changes in that respect.”</i></CovidsationsBody.Text>
                        <CovidsationsBody.Text><b><i>- Synne</i></b></CovidsationsBody.Text>
                    </CovidsationsBody.PhotoTextContainerTextContainer>
                    <CovidsationsBody.PhotoTextContainerPhotoContainer>
                        <CovidsationsBody.PhotoTextContainerPhoto src={synne}/>
                    </CovidsationsBody.PhotoTextContainerPhotoContainer>
                </CovidsationsBody.PhotoTextContainer>

                <CovidsationsBody.TextContainer>
                    <CovidsationsBody.Subtitle>Is there a silver lining to this cloud?</CovidsationsBody.Subtitle>
                <i>
                    <CovidsationsBody.Text>“I would say it’s had a positive effect on people’s perception of migrants in the UK. More than 50% of our NHS are foreign workers, and they’re now getting a lot more respect for the work that they’re doing. It seems that people are starting to recognize that a lot of the professions undertaken by migrants are really important to the country. Even Piers Morgan is speaking positively about it!” </CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Saadat</b></CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Text>“There’s been an enormous increase in people being outside and exercising. People are just exploring the country and engaging with the nature” </CovidsationsBody.Text>
                    <CovidsationsBody.Text>“People might change their habits after this – I hope so. Maybe we can start recognizing the value in things that are close to us, rather than just the material things in our life.”</CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Synne</b></CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Text>“There has always been talk of transitioning to virtual classes to replace the live ones. Now, amongst all of this mess, most of the subjects are changing. I think this will be a positive push to developing new ways of learning and communication that will be helpful for students.” </CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Juan</b></CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Text>“As a cohort, we are closer than we have been in all of our studies”</CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Sergio</b></CovidsationsBody.Text>
                    <br />
                </i>
                </CovidsationsBody.TextContainer>

                <CovidsationsBody.TextContainer>
                    <CovidsationsBody.Subtitle>Finally – Is there a message you would like to send to Australian medical students?</CovidsationsBody.Subtitle>
                <i>
                    <CovidsationsBody.Text>“I know the changes are inconvenient, but please be grateful if you have any certainty in regard to what is going to happen with your studies. I wish I could say with certainty that my classes or exams will now be online.” </CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Sergio</b></CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Text>“Don’t forget to put yourself first. People can get caught up in the whole ‘I’m a medical student’, ‘I’m basically a Doctor’, ‘I want to help’, but you have assess your personal situation, take into account your family or the people you live with, and evaluate if it’s suitable or not for you.” </CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Saadat</b></CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Text>“We’ve chosen a career that will always be relevant. It will always be interesting. It’s kind of reassuring knowing that you will be needed, knowing that you will always have the opportunity to help other people” </CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Synne</b></CovidsationsBody.Text>
                    <br />
                    <CovidsationsBody.Text>“Sometimes it’s easy to become disillusioned with your studies. Initially when I felt this strong desire to help, I was frustrated that I couldn’t. However, I soon recognized that this desire to help has brought back that passion and reason for wanting to study medicine. I’ve seen this with my friends as well – most people are eager to give a helping hand. It’s nice to see that solidarity awakening; and not just in the medical profession” </CovidsationsBody.Text>
                    <CovidsationsBody.Text><b>- Juan</b></CovidsationsBody.Text>
                    <br />
                </i>
                </CovidsationsBody.TextContainer>

            </CovidsationsBody.InnerContainer>
        </CovidsationsBody>
    )
}