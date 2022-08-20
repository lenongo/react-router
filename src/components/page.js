import React from 'react'
import { useParams } from "react-router-dom"

function Page(props) {
    const params = useParams();
    return (
        <div>
            <p>
                パスパラメータ:{params.id}
            </p>

            <p>
                "EventID": {props.member[params.id - 1].id}
            </p>
            <p>
                "イベント内容": {props.member[params.id - 1].info}
            </p>
            <p>
                "イベント名": {props.member[params.id - 1].name}
            </p>
        </div>
    )
}

export default Page