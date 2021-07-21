class profile extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="mobile-profile">
        <img class="profile" src="./asset/img/profile-pic.png" alt="Profile Pic">
        <h1><span id="greetings"></span>, My name is Yelly Putri</h1>
        <p>Connect with me on Github or reach me out on the other links!</p>
        <img class="icon" src="asset/img/love.svg" alt="Icon Love">
        <ul>
          <li>
            <a href="https://github.com/yellyputriw">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yellyputri" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="./web/index.html">Website</a>
          </li>
          <li>
            <a href="https://www.instagram.com/yell.uix" target="_blank" rel="noreferrer">UI/UX Portofolio</a>
          </li>
          <li>
            <a href="mailto:yellyputriw@gmail.com">E-mail</a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('mobile-profile', profile);
