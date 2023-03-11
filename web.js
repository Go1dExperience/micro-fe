class MyComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<h1>Custom web component - Micro frontend</h1>`
	}
}
customElements.define('test-component', MyComponent)