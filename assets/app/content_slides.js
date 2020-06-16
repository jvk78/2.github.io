//console.log(123)

const leftProd = document.getElementById('left_slider')
const rightProd = document.getElementById('right_slider')


function createSlider(base, slider) {
let SlideHTML = '';
  
  base.forEach(function({id, url, name, alt}) {
    console.log(id)
    
    SlideHTML += `<div class="products__group">
            <div class="products__img">
              <img class="products__discripts-img" src="${url}" alt="${alt}">
            </div>
            <div class="products__text text__white" id="${id}">${name}</div>
          </div>`
    
  })
slider.innerHTML = SlideHTML;
//console.log(SlideHTML)
}
createSlider(prodLeft, leftProd)
createSlider(prodRight, rightProd)

