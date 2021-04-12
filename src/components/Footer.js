import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p> Telefones: 2146-9420 / 99325-3783</p>
        <p className="copyright">&copy;2021 Invicta Serviços 24h - Eletrcista, Bombeiro Hidráluco, Gasista – todos os direitos reservados</p>
        
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
