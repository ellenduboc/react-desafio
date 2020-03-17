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
          <div className="alinhar">
            <img src={require("../assets/profile.png")} />
            <div>
              <span>Ellen Duboc</span>
              <br />
              <span>16/03/2020</span>
            </div>
          </div>
          <h3>Porque o Coronavírus é um problema tão grande?</h3>
          <div className="alinhar">
            <img src={require("../assets/profile.png")} />
            <div className="wrapper" >
              <span className="user2 ">Nara Neres</span>
              <span className="comment2">Blá bla bla</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions;