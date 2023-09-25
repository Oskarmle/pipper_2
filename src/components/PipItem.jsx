import React from "react";

export default function PipItem({pipItem}) {
    return (
        <article className="pip">
            <label htmlFor="pipItem.content">{pipItem.content}</label>
            <label htmlFor="pipItem.username">{pipItem.username}</label>
            {/* <label htmlFor="pipItem.created">{pipItem.created}</label> */}
        </article>
    )
}