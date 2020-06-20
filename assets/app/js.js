

const anchors = document.querySelectorAll('a[href^="#"]');
	let timer;

let scrolled;
let scrollSec;
let scrollPos;
let posTop;
//let count = 0;
  anchors.forEach(function(item){
  item.addEventListener('click', function (e) {
    e.preventDefault();
 scrolled = window.pageYOffset;
    
//    scrolled = window.pageYOffset;
    const blockID = item.getAttribute('href').substr(1)
    scrollSec = document.getElementById(blockID)
    scrollPos = scrollSec.getBoundingClientRect().top
    
    
    
    posTop = Math.round(scrollPos+scrolled)
   console.log(scrollSec.id, 'scrollPos: '+scrollPos, 'scrolled: '+scrolled)
   console.log(scrollSec.id, 'posTop: ' + posTop)
    
    scrolled < posTop ? scrollUp() : scrollDown()
  })
    
  })

function scrollUp(){
  console.log('scrollUp')
  if ( scrolled < posTop){ 
    scrolled = scrolled + 50 
      console.log(posTop, scrolled)
      	window.scrollTo(0, scrolled)
//      timer = setTimeout(scrollUp, 5)
       requestAnimationFrame(scrollUp)
    }
    else {
      if(scrolled > posTop){
			window.scrollTo(0, posTop);
//			clearTimeout(timer);
//       requestAnimationFrame(scrollUp)
   console.log(scrollSec.id, 'scrollPos: '+scrollPos, 'scrolled: '+scrolled, 'posTop: ' + posTop)
        
      
      }
		}
  
  
  
}
function scrollDown(){
  console.log('scrollDown')
  
  if ( scrolled > posTop){ 
    scrolled = scrolled - 50 
      console.log(posTop, scrolled)
      	window.scrollTo(0, scrolled)
//      timer = setTimeout(scrollDown, 5)
       requestAnimationFrame(scrollDown)
    }else {
      if(scrolled < posTop){
			window.scrollTo(0,posTop);
//			clearTimeout(timer);
//       requestAnimationFrame(scrollDown)
   console.log(scrollSec.id, 'scrollPos: '+scrollPos, 'scrolled: '+scrolled)
        
      
      }
		}
}



//  function scrollUp() {
//    if ( scrolled < posTop){ 
//    scrolled = scrolled + 20 
//      console.log(posTop, scrolled)
//      	window.scrollTo(0, scrolled)
//      timer = setTimeout(scrollToTop, 5)
////       requestAnimationFrame(scrollToTop)
//    }
//    else {
//      if(scrolled > posTop){
//			window.scrollTo(0, posTop);
//			clearTimeout(timer);
////       requestAnimationFrame(scrollToTop)
//   console.log(scrollSec.id, 'scrollPos: '+scrollPos, 'scrolled: '+scrolled, 'posTop: ' + posTop)
//        
//      
//      }
//		}
//    
////    
//    if ( scrolled > posTop){ 
//    scrolled = scrolled - 20 
//      console.log(posTop, scrolled)
//      	window.scrollTo(0, scrolled)
//      timer = setTimeout(scrollToTop, 5)
////       requestAnimationFrame(scrollToTop)
//    }else {
//      if(scrolled < posTop){
//			window.scrollTo(0,posTop);
//			clearTimeout(timer);
////       requestAnimationFrame(scrollToTop)
//   console.log(scrollSec.id, 'scrollPos: '+scrollPos, 'scrolled: '+scrolled)
//        
//      
//      }
//		}
//
//  
//  }
// 