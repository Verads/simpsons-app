import React from 'react'
import GitHub from '../../assets/github-logo.svg'
import LinkedIn from '../../assets/linkedin.svg'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_social">
                <a href="https://github.com/Verads"><img src={GitHub} alt="Logo do Github" /></a>
                <a href="https://www.linkedin.com/in/vera-santana-577b99164/"><img src={LinkedIn} alt="Logo do Linkedin" /></a>
            </div>
            <div className="footer_bio">
                <h4>Desenvolvido por <strong>Vera Santana</strong></h4>
                <p className="footer_paragraph">Desenvolvedora frontend, mãe, eterna estudante.</p>
            </div>
        </div>
    )
}

export default Footer
