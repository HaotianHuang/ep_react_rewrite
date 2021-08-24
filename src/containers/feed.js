import React from 'react';
import { Feed } from '../components';
import postData from '../data/postData.json';
import feed_images from '../data/feed_image_index'

const processPostData = postData.map ((post, index) => {
    let newPost = {...post}
    newPost.image = feed_images[index]
    return newPost
})

const finalPostData = processPostData.reverse()

export function FeedContainer() {
    return (
        <Feed>
            <Feed.InnerContainer>
                {finalPostData.map((post) => (
                        <Feed.PostWrapper key={post.id}>
                            <Feed.PostLinkWrapper to={`/blog/${post.pagename}`}>
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