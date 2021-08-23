import React from 'react';
import {useParams} from "react-router-dom"
import { HeaderContainer, FooterContainer, BottomNoteContainer, EmptyHeadContainer} from '../containers';
import { Blog } from '../components';
import postData from '../data/postData.json';
import post_images from '../data/post_image_index'
import ReactAudioPlayer from 'react-audio-player';
import blogObject from './posts/index'

const processPostData = postData.map ((post, index) => {
    let newPost = {...post}
    newPost.image = post_images[index]
    return newPost
})

export default function BlogPage() {
    const {blogId} = useParams()
    const thisPost = processPostData.find(post => post.pagename === blogId)
    const Body = blogObject[thisPost.filename]

    // Conditional rendering of recording component
    let audio 
    thisPost.audio === "" ? 
    audio = null :
    audio = <Blog.AudioContainer>
                <ReactAudioPlayer
                src={thisPost.audio}
                autoPlay={false}
                controls
                />
            </Blog.AudioContainer>

    return (
            <div>
                <HeaderContainer  />
                <EmptyHeadContainer />

                <Blog>
                    <Blog.PostContainer>

                        <Blog.HeaderContainer>
                            <Blog.PostTitle>{thisPost.name}</Blog.PostTitle>
                            <Blog.PostSubtitle>{thisPost.title}</Blog.PostSubtitle>
                            <Blog.PostDate>{thisPost.date}</Blog.PostDate>
                            <Blog.PostImage src={thisPost.image}/>
                        </Blog.HeaderContainer>
                        <Body/>
                        {audio}
                        <br/>
                        <Blog.ReturnLink style={{lineHeight: "40px"}}href="/">← Home </Blog.ReturnLink>
                        <br/>
                        <Blog.ReturnLink href="/blog">← All Posts </Blog.ReturnLink>

                    </Blog.PostContainer>
                </Blog>

                <BottomNoteContainer />
                <FooterContainer />
            </div>

    )
}