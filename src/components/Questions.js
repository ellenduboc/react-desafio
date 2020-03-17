import React from "react";
import "../App.css";

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
            content: "bla bla bla"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="center" className="container">
        <div>
          <div>
            <img className="areaimg" src={require("../assets/user1.png")} />
            <div>
              <span className="user1">Ellen Duboc</span>
              <br />
              <p className="date">16/03/2020</p>
            </div>
          </div>
          <p className="quest">
            Porque o Coronavírus é um problema tão grande?
          </p>
          <div className="comments-section">
            <img className="areaimg" src={require("../assets/user1.png")} />
            <div className="wrapper">
              <span className="user2 ">Nara Neres</span>
              <span className="comment2">
                O principal problema do coronavírus não é, de fato, a sua taxa
                de mortalidade, mas sim a sua alta taxa de transmissão, o que
                vai superlotar o sistema de saúde. A taxa de hospitalização do
                coronavírus é cerca de 20% e o número de pessoas que precisam de
                UTI é cerca de 5%. Por exemplo, se a Itália, mantiver o mesmo
                nível de transmissão da doença, no dia 24/03 terão 288000 casos
                de coronavírus no país. Se 5% dessas 288 mil pessoas precisarem
                de UTI, então serão 14400 pessoas necessitando de UTI.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
