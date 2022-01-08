import { LitElement, css, html } from "lit";

export class FeatureCard extends LitElement {
  static properties = {
    title: "Title",
    subtitle: "Subtitle",
    content: "Content",
    image: "",
    alignment: "left",
    shadow: "true",
    buttonText: "",
    buttonLink: "",
    buttonIcon: ""
  };

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  // Render the UI as a function of component state
  render() {
    let shadow = this.shadow == "true" ? "shadow-lg" : "";

    let buttonIcon = this.buttonIcon ? html`<i class="${this.buttonIcon} mr-10"></i>`: html``;
    let button = this.buttonText ? html`<br><a href="${this.buttonLink}" class="btn btn-primary text-left mt-10">${buttonIcon}${this.buttonText}</a>`: html``;

    let content = html`
      <div class="col-md-6 px-10">
        <h3 class="mb-0 text-white-dm text-dark-lm">${this.title}</h3>
        <p class="mt-0 font-size-20 text-muted">${this.subtitle}</p>
        <p>${this.content}${button}</p>
      </div>
    `;
    let image = html`
      <div class="col-md-6 px-10">
        <img src="${this.image}" class="w-full ${shadow}" />
      </div>
    `;

    if (this.alignment === "left") {
      return html`
        <div class="mt-20 pt-20 text-left w-md-three-quarter card d-inline-block shadow-lg animate__animated animate__fadeInUp">
          <div class="row">${image} ${content}</div>
        </div>
      `;
    } else {
      return html`
        <div class="mt-20 pt-20 text-left w-md-three-quarter card d-inline-block shadow-lg animate__animated animate__fadeInUp">
          <div class="row">${content} ${image}</div>
        </div>
      `;
    }
  }
}

customElements.define("feature-card", FeatureCard);
