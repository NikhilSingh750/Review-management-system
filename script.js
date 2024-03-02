// add delete button in cards
let stars = document.querySelectorAll('.star');
let submit_button = document.getElementById('submit-button');
let bollean = true;
submit_button.disabled = true
let num  =0
let array = Array.from(stars)
array.forEach((element, index) => {
    //this elenelistner make star gold and grey on click
    element.addEventListener('click', () => {
        bollean = false
        num = index
        let bx2 = document.querySelectorAll('.bx')
        let array2 = Array.from(bx2)
        for (let i = 0; i <= num; i++) {
            array2[i].style.color = 'gold'
            array2[i].style.scale = '1.5'
        }
        for(j = 4 ;j>num;j--){
            array2[j].style.color = 'grey'
            array2[j].style.scale = '1'
        }
        submit_button.disabled = false
    })

    element.addEventListener('mouseenter', () => {
        num = index
        let bx2 = document.querySelectorAll('.bx')
        let array2 = Array.from(bx2)
        for (let i = 0; i <= num; i++) {
            array2[i].style.color = 'gold'
        }
        for(j = 4 ;j>num;j--){
            array2[j].style.color = 'grey'
        }
    })
  

        if(bollean == true){
            element.addEventListener('mouseleave', () => {
                num = index
                let bx2 = document.querySelectorAll('.bx')
                let array2 = Array.from(bx2)
                for (let i = 0; i <= num; i++) {
                    if(bollean == false){
                        break;
                    }
                    array2[i].style.color = 'grey'
                }
            })
        }
 
})
let str = ``
submit_button.addEventListener('click', () => {
    let inputname = document.getElementById('inputname').value;
    let inputemail = document.getElementById('inputemail').value;
    let review = document.getElementById('review').value;
    let str2 = ``

    if((inputname != '')&& (inputemail != '') && (review != '')){

    
        for( let i=0;i<=num;i++){
            str2 += `<i class='bx bxs-star '></i>`
        }
    str += `
                <div class="box">
                <div class="list-credential-reviews"> <span id="name-span">${inputname}</span><span id="reviewed-star">${str2}</span> <span id="email-span">${inputemail}</span></div>
                <div class="list-credential-reviews"> <span id="review-span">${review}</span></div>
                </div>
              `
    document.querySelector('.list-of-review').innerHTML = str
     document.getElementById('inputname').value ='';
     document.getElementById('inputemail').value ='';
     document.getElementById('review').value ='';
     let greystars = document.querySelectorAll('.convert-star-to-grey');
     Array.from(greystars).forEach((element)=>{
        element.style.color = 'grey'
        element.style.scale = '1'
     })
     submit_button.disabled = true
    }
})