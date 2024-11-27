import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";



export default function PostPage() {
    const navigate = useNavigate()
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const url = `http://localhost:3001/posts/${slug}`
    console.log(url);

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const keys = Object.keys(data);
                    if (keys.includes('error')) {
                        navigate('/404');
                    } else {
                        setPost(data);
                    }
                })
                .catch(() => {
                    navigate('/404');
                });
        }, [slug]);


    return (
        <div>
            <img src={`http://localhost:3001/imgs/posts/${post.image}`} />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <ul>
                {post.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </div>
    )
}