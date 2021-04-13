import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Serviços oferecidos</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <h2>Alguns de nossos serviços</h2>
          </p>
          <p>
            <h3>Elétrica:</h3>
            <ul>
              <li>Instalação e manutenção elétrica</li>
              <li>Curto circuito</li>
              <li>Troca de fiação</li>
              <li>Ventilador de teto</li>
              <li>Quadro de luz</li>
              <li>Elétrica em geral</li>
            </ul>

            <h3>Hidráulica:</h3>
            <ul>
              <li>Instalação e manutenção hidráulica</li>
              <li>Vazamentos</li>
              <li>Conserto de canos e tubulações</li>
              <li>Descarga</li>
              <li>Bomba d'agua e quadro de comando</li>
              <li>Pequenos e grandes reparos</li>
            </ul>

            <h3>Gasista:</h3>
            <ul>
              <li>Conserto de aquecedores</li>
              <li>Boilers</li>
              <li>Tubulação</li>
              <li>Aumento de pressão da água do aquecedor</li>
            </ul>

            <h3>Desentupimento:</h3>
            <ul>
              <li>Tubulação de água fria e quente</li>
              <li>Ralos, pias e tanques</li>
              <li>Vaso Sanitário</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sobre nós</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Desde 2002 atuando no ramo de reformas, trazendo qualidade e segurança para seu imóvel.
          </p>
          <p>
            <h4>Garantias</h4>
            Todos os nossos serviços oferecem garantias, para melhor assegura-lo
          </p>
          <p>
            <h4>Área de atuação</h4>
            Atendimento 24h em todo Rio de Janeiro
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contato</h2>
          <h3>Para maior agilidade, entre em contato através dos nossos telefones</h3>
          <h3>📞2146-9420</h3><h3> 📞99325-3783</h3>

          <h3>Atendimento em todo Rio de Janeiro 24 horas!</h3>
          
          
          {/* <form method="post" action="#">
          <p>Se preferir envie uma mensgaem por email:</p>
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar mensagem" className="special" />
              </li>
              <li>
                <input type="reset" value="Limpar" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
