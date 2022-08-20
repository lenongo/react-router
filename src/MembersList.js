import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const members = [
    { id: 1, name: 'Hisashi', info: 'リードギター' },
    { id: 2, name: 'TERU', info: 'ボーカル' },
    { id: 3, name: 'TAKURO', info: 'ギター' },
    { id: 4, name: 'JIRO', info: 'ベース' },
]

const MemberListApp = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/user/:id' component={MemberInfo} />
            <Route component={MemberList} />
        </Routes>
    </BrowserRouter>
)

const Header = () => (
    <h1>メンバーリスト</h1>
)

class MemberList extends React.Component {
    render() {
        const memberList = members.map(e => (
            <li key={e.id}>
                <Link to={'/user/' + e.id}>{e.name}</Link>
            </li>
        ))
        return (
            <div>
                <Header />
                <ul>{memberList}</ul>
            </div>
        )
    }
}

class MemberInfo extends React.Component {
    render() {
        const { params } = this.props.match
        const id = parseInt(params.id, 10)
        const member = members.filter(e => e.id === id)[0]
        return (
            <div>
                <div>{id}: {member.name} - {member.info}</div>
                <hr />
                <div><MemberList /></div>
                <div><Link to='/'>TOP</Link></div>
            </div>
        )
    }
}

export default MemberListApp
