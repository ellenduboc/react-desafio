import React from "react";
import "../App.css";

class Questions extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Ellen Duboc",
          avatar: require("../assets/user1.png")
        },
        date: "16/03/2020",
        content: "Alguém pode me explicar o que é React?",
        comments: [
          {
            id: 1,
            author: {
              name: "Kaian Cotias",
              avatar: require("../assets/user2.png")
            },
            content: "React é uma biblioteca JavaScript open-source criada pelo Facebook para a construção de UIs complexas e interativas tanto na Web quanto em aplicações mobile. Como o core do React é a construção de componentes de UI, ele se refere apenas ao “V” (View) na arquitetura “MVC”."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "José Felipe",
          avatar: require("../assets/user3.png")
        },
        date: "17/03/2020",
        content: "Pessoal, quais as vantagens de utilizar React?",
        comments: [
          {
            id: 1,
            author: {
              name: "Mario Santos",
              avatar: require("../assets/user4.png")
            },
            content: "Aumento de performance da aplicação com o uso do virtual DOM."
          },
          {
            id: 1,
            author: {
              name: "Kauê Souza",
              avatar: require("../assets/user5.png")
            },
            content: "JSX torna o código fácil de ler e escrever."
          },
          {
            id: 1,
            author: {
              name: "Ellen Duboc",
              avatar: require("../assets/user1.png")
            },
            content: "Pode ser renderizado no lado do cliente ou do servidor."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Mario Santos",
          avatar: require("../assets/user4.png")
        },
        date: "18/03/2020",
        content: "Como eventos são tratados no React?",
        comments: [
          {
            id: 1,
            author: {
              name: "Kaian Cotias",
              avatar: require("../assets/user2.png")
            },
            content: "Com o propósito de resolver problemas de compatibilidade entre browsers, o manipuladores de eventos do React são passados como instâncias do SyntheticEvent, que é o meio do React contornar os eventos nativos dos browsers. O SyntheticEvent possui a mesma interface que os eventos nativos do browser, com a vantagem de ter funcionamento idêntico em todos os browsers. O interessante é que o React não anexa eventos aos nós filhos propriamente dito. Ele escuta por todos eventos a um nível mais alto usando um único listener. Isso é bom pra performance e significa que o React não precisa se preocupar em acompanhar os listeners dos eventos quando atualiza o DOM."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Kauê Souza",
          avatar: require("../assets/user5.png")
        },
        date: "19/03/2020",
        content: "Qual a diferença entre Element e Component?",
        comments: [
          {
            id: 1,
            author: {
              name: "José Felipe",
              avatar: require("../assets/user3.png")
            },
            content: "Explicando de uma maneira simples, um element descreve o que será representado na tela, é a representação da UI. O Component é uma função ou classe onde pode opcionalmente aceitar inputs e retornar um element."
          },
        ]
      },
    ]
  };

  render() {

    return this.state.posts.map(post => {
      return (
        <div className="center" className="container">
          <div>
            <div>
              <img className="areaimg" src={post.author.avatar} />
              <div>
                <span className="user1">{post.author.name}</span>
                <br />
                <p className="date">{post.date}</p>
              </div>
            </div>
            <p className="quest">
              {post.content}
            </p>
            {post.comments.map(comment => {
              return (
                <div className="comments-section">
                  <img className="areaimg" src={comment.author.avatar} />
                  <div className="wrapper">
                    <span className="user2 ">{comment.author.name}</span>
                    <span className="comment2">
                      {comment.content}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    });

  }
}

export default Questions;
