function changeToRUS() {
  let engElements = document.querySelectorAll(".eng");
  let ruElements = document.querySelectorAll(".ru");
  let ruBtn = document.querySelector(".language-picker__ru");
  let engBtn = document.querySelector(".language-picker__eng");

  for (let i = 0; i < engElements.length; i++) {
    engElements[i].style.display = "none";
  }
  for (let i = 0; i < ruElements.length; i++) {
    ruElements[i].style.display = "block";
    ruBtn.style.color = 'black';
    engBtn.style.color = '#828282' 
  }
}

function changeToENG() {
  let engElements = document.querySelectorAll(".eng");
  let ruElements = document.querySelectorAll(".ru");
  let ruBtn = document.querySelector(".language-picker__ru");
  let engBtn = document.querySelector(".language-picker__eng");
  for (let i = 0; i < ruElements.length; i++) {
    ruElements[i].style.display = "none";
  }
  for (let i = 0; i < engElements.length; i++) {
    engElements[i].style.display = "block";
    ruBtn.style.color = '#828282';
    engBtn.style.color = 'black' 
  }
}



function openMenu(){
    document.querySelector('.nav').classList.toggle('mobile-nav');
    console.log('burger work!');

}
