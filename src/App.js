import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";





class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        users : [
            {
              id: 1,
              firstame: "Simkav",
              lastname: "Vavzanovich",
              bio: "Hi! I`m Simlav from BlastTM 1111111111111111111111111111111111111111111111111111111111111111111111",
              age: 47,
              isHappy: false,
            },
            {
              id: 2,
              firstame: "Mecheniy",
              lastname: "Abobovich",
              bio: "Ya eblan",
              age: 99,
              isHappy: true,
            },
          ]
    }
    this.addUser = this.addUser.bind(this)
}

  render() {
    return (
        <div>
              <h1><Header title="Список пользователей"/></h1>
              <main>
                <Users users={this.state.users}/>
              </main>
              <aside>
                <AddUser onAdd={this.addUser}/>
              </aside>
        </div>
      );
  }
  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}]})
  }


}

export default App