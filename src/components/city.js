import { LitElement, css, html } from "lit";

export class CityItem extends LitElement {
  static properties = {
    name: "Title",
    state: "Subtitle",
    image: "",
  };

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  // Render the UI as a function of component state
  render() {
    return html` <div class="card border-0 bg-fill text-white shadow" style="linear-gradient(270deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0) 100%), url('${this.image}');">
      <h2 class="mb-5">${this.name}</h2>
      <p class="font-size-18 mt-5">${this.state}</p>
    </div>`;
  }
}

customElements.define("city-item", CityItem);
