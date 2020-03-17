import React from 'react';
import '../App.css';

class Questions extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Ellen Duboc",
          avatar: ""
        },
        date: "16/03/2020",
        content: "Porque o Coronavírus é um problema tão grande?",
        comments: [
          {
            id: 1,
            author: {
              name: "Nara Neres",
              avatar: ""
            },
            content: "bla bla bla",
          }
        ]
      }
    ]
  };


  render() {
    return (
      <div>
        <div>
          <div>
            <img src={require("../assets/profile.png")} />
            <p>Ellen Duboc</p>
            <p>16/03/2020</p>
          </div>
          <h3>Porque o Coronavírus é um problema tão grande?</h3>
          <div>
            <img src={require("../assets/profile.png")} />
            <div>
              <h1>Nara Neres</h1>
              <h2>Blá bla bla</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions;