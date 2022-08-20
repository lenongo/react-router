import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useMatch } from "react-router-dom";
import HomePage from "./components/homepage";
import SamplePage from "./components/sample";
import Page from "./components/page"

const members = [
  { id: 1, name: "チケミーイベント１", info: "100人規模のイベントを開催します" },
  { id: 2, name: "チケミーイベント２", info: "ジビエ会です" },
  { id: 3, name: "チケミーイベント３", info: "BBQをやります" },
  { id: 4, name: "チケミーイベント４", info: "Web3.0のイベント" },
];

const Header = () => <h1>メンバーリスト</h1>;

class MemberList extends React.Component {
  render() {
    const memberList = members.map((e) => (
      <li key={e.id}>
        <Link to={"/user/" + e.id}>{e.name}</Link>
      </li>
    ));
    return (
      <div>
        <Header />
        <ul>{memberList}</ul>
      </div>
    );
  }
}

class MemberPage extends React.Component {
  render() {
    const memberList = members.map((e) => (
      <li key={e.id}>
        <>{e.info}</>
      </li>
    ));
    return (
      <div>
        <Header />
        <ul>{memberList}</ul>
      </div>
    );
  }
}

function MemberInfo() {
  const { path, url } = useMatch();
  console.log("aa", path);
  const { params } = this.props.match;
  console.log("bb", params);
  const id = parseInt(path, 10);
  const member = members.filter((e) => e.id === id)[0];
  return (
    <div>
      <div>
        {id}: {member.name} - {member.info}
      </div>
      <hr />
      <div>
        <MemberList />
      </div>
      <div>
        <Link to="/">TOP</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <Header />
                  <MemberList />
                </>
              }
            />
            <Route
              path="/sample"
              element={
                <>
                  <SamplePage />
                </>
              }
            />
            <Route
              path="/user/:id"
              element={
                <>
                  <Page member={members}/>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
