import React from 'react';
import { PodcastBody } from '../components';
import podcastData from '../data/podcast.json';


export function PodcastBodyContainer() {
    return (
        <PodcastBody>
            <PodcastBody.InnerContainer>

            <PodcastBody.PodcastContainerTitle>PODCAST</PodcastBody.PodcastContainerTitle>
            {podcastData.map((post) => (
                <PodcastBody.PodcastContainer key = {post.id}>
                    <PodcastBody.PodcastFileContainer>
                        <PodcastBody.PodcastFile src={post.link} scrolling="no" frameborder="0"></PodcastBody.PodcastFile>
                    </PodcastBody.PodcastFileContainer>

                    <PodcastBody.PodcastTextContainer>
                        <PodcastBody.PodcastTitle>{post.title}</PodcastBody.PodcastTitle>
                        <PodcastBody.PodcastText>{post.text}</PodcastBody.PodcastText>
                    </PodcastBody.PodcastTextContainer>
                </PodcastBody.PodcastContainer>
            ))}

            </PodcastBody.InnerContainer>
        </PodcastBody>
    )
}






