import React from 'react';
import { Blog } from '../components';
import postData from '../data/postData.json';

const postStyle = {
    paddingLeft: "40px"
};

const ulStyle = {
    paddingLeft: "0px",
    listStylePosition: "inside"
};

export function BlogContainer() {
    return (
        <Blog>
            <Blog.PostContainer style={postStyle}>
                <Blog.TextBlock>
                    <Blog.Subtitle>Posts</Blog.Subtitle>
                    <ul style={ulStyle}>
                        {postData.slice(0).reverse().map((post) => (
                            <li key={post.id}><Blog.ReturnLink to={`/blog/${post.pagename}`}>{post.name}</Blog.ReturnLink></li>
                        ))}
                    </ul>
                </Blog.TextBlock>
            </Blog.PostContainer>
        </Blog>
    )
}

/*

*/
