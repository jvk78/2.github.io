//console.log(123)

const leftProd = document.getElementById('left_slider')
const rightProd = document.getElementById('right_slider')

function createSlider(base, slider) {
  let SlideHTML = '';
  base.forEach(function(elem) {
    SlideHTML += `<div class="products__group">
                    <div class="products__img">
                      <img class="products__discripts-img" src="${elem.url}" alt="${elem.alt}">
                    </div>
                    <div class="products__text text__white" id="${elem.id}">${elem.name}</div>
                  </div>`
  })
  slider.innerHTML = SlideHTML;
}
createSlider(prodLeft, leftProd)
createSlider(prodRight, rightProd)
