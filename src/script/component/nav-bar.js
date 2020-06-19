class NavBar extends HTMLElement {
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
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 0 1%;
        }
        label.logo {
            display: block;
            color: white;
            text-align: center;
            font-size: 60px;
            line-height: 80px;
            font-weight: bold;
            font-family: 'Bangers', cursive;
        } 
        @media screen and (min-width: 320px) and (max-width: 409px) {
            .container {
                width: 90%;
            }
            label.logo {
                font-size: 30px;
                padding: 0 0 0 30px;
            }
        }    
        @media screen and (min-width: 410px) and (max-width: 915px) {
            .container {
                margin: 0 auto;
            }
        }   
        </style>
        <div class="container">
            <label for="" class="logo"><marquee behavior="sliding" scrollamount="30" direction="left">Tugas Submission Dicoding</marquee></label>                    
        </div>
        `;
    }
}
  
customElements.define("nav-bar", NavBar);