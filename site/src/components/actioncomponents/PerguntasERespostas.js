import React from 'react'
import IconePergunta from '../../images/iconepergunta.png'

    class PerguntasERespostas extends React.Component {

        constructor() {

            super()

            this.state = {
                    perguntas: [
                      {                      
                        "titulo": "Como funciona a busca de patrocinadores?",
                        "resposta": "A busca de patrocinadores é um sistema consolidado de dados apurados dos últimos 3 anos de empresas que aportam",
                      },
                      {                      
                        "titulo": "Eu preciso ter um projeto aprovado em lei de incentivo para utilizar a plataforma?",
                        "resposta": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                      },
                      {                      
                        "titulo": "A plataforma vai me colocar em contato com os potenciais patrocinadores?",
                        "resposta": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                      },        
                      {                      
                        "titulo": "Como funciona o plano teste da plataforma?",
                        "resposta": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                      },        
                      {                      
                        "titulo": "Estou com dificuldades no pagamento.",
                        "resposta": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                      },              
                      {                      
                        "titulo": "Estou com dúvidas. Com quem posso falar?",
                        "resposta": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                      },                
                    ]
                      ,
                perguntaAtiva: null,
            }

        }

        expandePergunta = (pergunta) => {

            this.state.perguntaAtiva === pergunta ? 

                this.setState({
                    perguntaAtiva: null
                })

            :

                this.setState({
                    perguntaAtiva: pergunta
                })

        }

        render() {

            return (

                <div>

                    <div className="paginaPropoentesPerguntasERespostas">

                        <div className="paginaPropoentesPerguntasERespostasConteudo">

                            <div className="paginaPropoentesPerguntasERespostasTexto">

                                Perguntas e respostas

                            </div>

                            <div className="paginaPropoentesPerguntasERespostasPerguntasContainer">

                                {

                                    this.state.perguntas.map((pergunta, index) => {

                                        return (

                                            <div onClick={() => this.expandePergunta(index)}>

                                                 <div key={index} className="paginaPropoentesPerguntasERespostasPergunta">

                                                    <img className="iconePerguntaTag" alt="iconePergunta" src={IconePergunta} style={{
                                                        transform: this.state.perguntaAtiva === index ? 'rotate(45deg)' : ''
                                                    }} />

                                                        {pergunta.titulo}

                                                </div>


                                                {

                                                    this.state.perguntaAtiva === index ? 
                                                    
                                                        <div className="paginaPropoentesPerguntasERespostasResposta">

                                                            {pergunta.resposta}

                                                        </div>

                                                    : '' 

                                                }

                                                <div className="barraDividePerguntas" />

                                            </div>

                                        )

                                    })

                                }

                            </div>

                        </div>

                    </div>

                </div>
                
            )

        }

    }

export default PerguntasERespostas;