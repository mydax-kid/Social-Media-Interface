
// menuItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         if( item !== e.target){
//             item.classList.remove('active');
//         }
//         else{
//             item.classList.add('active');
//         }
//     })
// })


/*VARIABLES................................................................*/

const menuItems= document.querySelectorAll('.menu-item');
const message= document.querySelector('.message');
const searchBar= document.querySelector('.search input[type=text]');
const theme = document.querySelector('.theme');
const themeModal = document.querySelector('.customize-theme');
const spans = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const shades = document.querySelectorAll('.choose-bg div');



//change color shades
shades.forEach( (item) => {
  item.addEventListener('click', () => {

    if(item.classList.contains('bg-2')){
      root.style.setProperty('--light', '#283149');
      root.style.setProperty('--gray', '#1F1D36');
      root.style.setProperty('--font-color', '#fff');
      //item.querySelector('h5').style.color= 'white';
    }
    else if( item.classList.contains('bg-3') ){
      root.style.setProperty('--light', '#1A1A2E');
      root.style.setProperty('--gray', '#000000');
      root.style.setProperty('--font-color', '#fff');
     // item.querySelector('h5').style.color= 'white';
    }
    else{
      root.style.setProperty('--light', 'white');
      root.style.setProperty('--gray', 'lightgray');
      root.style.setProperty('--font-color', 'black');
    }
  })
})



//remove active class from an array of elements
const removeActive= (prop, cls = 'active') => {
    prop.forEach(item => {
         item.classList.remove(cls);
        })
}

//add active class on menu-item click, handle pop-up display and notification icon
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        removeActive(menuItems);
        item.classList.add('active');

        if(item.id !== 'notification'){
            document.querySelector('.pop-up').style.display= 'none';
        }
        else{
            document.querySelector('.pop-up').style.display= 'block';
            document.querySelector('.pop').style.display= 'none';
        }

    })
})

//create a boxshadow on messagebox
message.addEventListener('click', () => {
   document.querySelector('.msg').style.display= 'none';
   document.querySelector('.right-top').style.boxShadow= '0 0 16px var(--color-primary)';

   setTimeout(() => {
    document.querySelector('.right-top').style.boxShadow= 'none';
   },2000)
})

//filter users on messagebox by name
searchBar.addEventListener('keyup', () => {
  let userNames = document.querySelectorAll('.msg h4');
  let searchValue = searchBar.value.toLowerCase();

  userNames.forEach(user => {
    let name = user.innerText.toLowerCase();
    
    if(name.indexOf(searchValue) !== -1){
      user.parentElement.parentElement.style.display= 'flex';
    } else {
      user.parentElement.parentElement.style.display= 'none';
    }
  })
});


//open theme modal
theme.addEventListener('click', () => {
  themeModal.style.display= 'grid';
})


//close theme modal
themeModal.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains("customize-theme")){
    themeModal.style.display= 'none';
    theme.classList.remove('active');
  }
})


//change the fontsize
spans.forEach(span => {
  span.addEventListener('click', () => {
    
    removeActive(spans);
    span.classList.add('active');
    let fontSize;
    
    if( span.classList.contains('font-size1') ){
      fontSize = '12px';
      //root.style.setProperty('--top-left', '2.5rem');
      
    } else if( span.classList.contains('font-size2') ){
      fontSize = '14px';
      
    } else if( span.classList.contains('font-size3') ){
      fontSize = '16px';
      
    } else if( span.classList.contains('font-size4') ){
      fontSize = '18px';
      
    } else if( span.classList.contains('font-size5') ){
      fontSize = '20px';
    }
      //change fontsize of the root html element
    document.querySelector('html').style.fontSize = fontSize;
  })
}) 


  //change the theme color
colorPalette.forEach(span => {
  span.addEventListener('click', () => {
    removeActive(colorPalette, 'color-active');
    span.classList.add('color-active');

    let primaryHue;
    
    if( span.classList.contains('color-1') ){
      primaryHue = 210;
    } else if( span.classList.contains('color-2') ) {
      primaryHue = 52;
    }  else if( span.classList.contains('color-3') ) {
      primaryHue = 352;
    }  else if( span.classList.contains('color-4') ) {
      primaryHue = 152;
    }  else if( span.classList.contains('color-5') ) {
      primaryHue = 282;
    } 

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

// dim.addEventListener('click', () => {
//   root.style.setProperty('--light', 'rgb(25, 25, 112)');
//   root.style.setProperty('--gray', 'rgba(25, 25, 112, 0.5)');
//   root.style.setProperty('--font-color', '#fff');
// })