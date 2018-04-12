import React from 'react'

export default ({data}) => (
    <ul>
        {data.map(item => {
            return <li key={item.id}>{`operation: "${item.operation}" date:${item.date}`}</li>
        })}
    </ul>
)