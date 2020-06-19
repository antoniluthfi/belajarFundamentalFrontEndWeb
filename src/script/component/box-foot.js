class BoxFoot extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
        div.box {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            height: 160px;
            margin-top: 10px;
            padding: 10px 0;
            background: linear-gradient(#91e675, #80bd9e);
        }
        </style>
        <div class="box">
            <img id="macacaFuscata" alt="" width="100%" height="140px">
            <img id="lasiorhinusLatifrons" alt="" width="100%" height="140px">
            <img id="lamprotornisNitens" alt="" width="100%" height="140px">
            <img id="neophronPercnopterus" alt="" width="100%" height="140px">
            <img id="sauromalusObesus" alt="" width="100%" height="140px">
            <img id="taurotagusOryx" alt="" width="100%" height="140px">
        </div>
        `;
    }
}
  
customElements.define("box-foot", BoxFoot);