class Mensagem extends HTMLElement {
  constructor(){
        super()
  const shadow = this.attachShadow({mode:'closed'})
  const mensagem = document.createElement('p')
  mensagem.classList.add('mensagem')
  mensagem.textContent = this.textContent
    
  const style = document.createElement('style')
  style.textContent = `
.mensagem{
  background:#212122;
  color:white;
  padding:1rem;
  font-size:24px;
}
`
  shadow.appendChild(style)
  shadow.appendChild(mensagem)
  }
}
customElements.define('app-mensagem',Mensagem)