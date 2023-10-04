import React from "react";

export default function PipItem({pipItem}) {


    
    return (
        <article className="pip">
            <label className="username" htmlFo="pipItem.username">{pipItem.username}</label>
            <label className="content" htmlFor="pipItem.content">{pipItem.content}</label>
            <label className="image" htmlFor="pipItem.image">{pipItem.image}</label>
        </article>
    )
}