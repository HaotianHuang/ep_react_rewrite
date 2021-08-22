import React from 'react';
import { Blog } from '../components';
import postData from '../data/postData.json';
const reversePostData = postData.reverse()

const ulStyle = {
    paddingLeft: "0",
    listStylePosition: "inside"
};

export function BlogContainer() {
    return (
        <Blog>
            <Blog.PostContainer>
                <Blog.TextBlock>
                    <Blog.Subtitle>Posts</Blog.Subtitle>
                    <ul style={ulStyle}>
                        {reversePostData.map((post) => (
                            <li key={post.id}><Blog.ReturnLink href={`/blog/${post.pagename}`}>{post.name}</Blog.ReturnLink></li>
                        ))}
                    </ul>
                </Blog.TextBlock>
            </Blog.PostContainer>
        </Blog>
    )
}

/*

*/
