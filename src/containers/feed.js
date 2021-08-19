import React from 'react';
import { Feed } from '../components';
import feedData from '../data/feed.json';
import feed_images from '../data/feed_image_index'
import moment from 'moment';

// TODO - Fix up CSS
// TODO - Fix up useParams and links
// TODO - Create post page templates

const mappedFeedData = feedData.map ((post, index) => {
    let newPost = {...post}

    // String processing to create link name for each post
    const process_image_string_1 = newPost.image.replace("../images/feed/","")
    const process_image_string_2 = process_image_string_1.replace(".jpg","")

    // Format .image and .date properties for each post
    newPost.image = feed_images[index]
    newPost.date = moment(newPost.date, "MM-DD-YYYY").format('ll')
    
    // Create new .link property
    newPost.link = process_image_string_2

    return newPost
})

const updatedFeedData = mappedFeedData.reverse()

export function FeedContainer() {
    return (
        <Feed>
            <Feed.InnerContainer>
                {updatedFeedData.map((post) => (
                        <Feed.PostWrapper key={post.id}>
                            <Feed.PostLinkWrapper href={`/blog/${post.link}`}>
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