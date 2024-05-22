export function headerNavigation() {
      const textContent = `
      <header>
            <div id="header-text">
                  <h1>AGRO CALCULATOR APP</h1>
            </div>
            <div class="Navdropdown">
                  <button class="dropbtn" id="nav-as">Choose an operation</button>
                  <div class="Navdropdown-content">
                        <a href="#" class="nav-item" id="land-area-nav" value="land area">Land Area</a>
                        <a href="#" class="nav-item" id="soil-volume-nav" value="soil volume">Soil Volume</a>
                        <a href="#" class="nav-item" id="fertilizer-qty-nav" value="fertilizer qty">Fertilizer Quantity</a>
                  </div>
            </div>
      </header>`

    return textContent;
}

