import { useState } from "react"

function commentsPage() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data);
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data);
    }
 
    return (
    <>
    <input type='text' value={comment} onChange={(e)=> setComment(e.target.value)}  ></input>
    <button onClick={submitComment}>Submit Comment</button>
    <button onClick={fetchComments}>Load Data</button>
    {
        comments.map(comment => {
            return (
                <div key={comment.id}>
                {comment.id} {comment.text}</div>
            )
        })
    }
    </>
    )

}

export default commentsPage;