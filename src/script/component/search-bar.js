class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <input type="text" name="searchBar" id="searchBar" placeholder="Search for an animal...">
        <input type="submit" name="submit" value="Search">
        `;
    }
}
  
customElements.define("search-bar", SearchBar);