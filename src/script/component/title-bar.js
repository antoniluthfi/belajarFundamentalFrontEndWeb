class TitleBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        h1 {
            position: relative;
            text-align: center;
            margin-bottom: 10px;
        }
        @media screen and (min-width: 410px) and (max-width: 915px) {
            h1 {
                font-size: 20pt;
            }        
        }
        </style>
        <h1>&#x2728;Know More About Scientific Animals&#x2728;</h1>
        `;
    }
}
  
customElements.define("title-bar", TitleBar);