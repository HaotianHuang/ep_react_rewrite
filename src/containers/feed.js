import React from 'react';
import { Feed } from '../components';
import feedData from '../data/feed.json';
import feed_images from '../data/feed_image_index'
import moment from 'moment';

const mappedFeedData = feedData.map ((post, index) => {
    let newPost = {...post}
    newPost.image = feed_images[index]
    newPost.date = moment(newPost.date, "MM-DD-YYYY").format('ll')
    return newPost
})

const updatedFeedData = mappedFeedData.reverse()

export function FeedContainer() {
    return (
        <Feed>
            <Feed.InnerContainer>
                {updatedFeedData.map((post) => (
                        <Feed.PostWrapper key={post.id}>
                            <Feed.PostLinkWrapper>
                                <Feed.PostImage style={{backgroundImage: `url(${post.image})`}}>
                                    <Feed.PostImageOverlay>
                                        <Feed.PostContentWrapper>
                                            <Feed.PostContentName>{post.name}</Feed.PostContentName>
                                            <Feed.PostContentSubtitle>{post.subtitle}</Feed.PostContentSubtitle>
                                            <Feed.PostContentDate>{post.date}</Feed.PostContentDate>
                                        </Feed.PostContentWrapper>
                                    </Feed.PostImageOverlay>
                                </Feed.PostImage>
                            </Feed.PostLinkWrapper>
                        </Feed.PostWrapper>
                ))}
            </Feed.InnerContainer>
        </Feed>
    )
}