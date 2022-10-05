const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];


let accordian_body = document.querySelector(".accordian_body");

function showFaq() {
const para = document.querySelectorAll("p");
para.forEach((para)=>{
  if(para.style.display != "block"){
    para.style.display = "block";
    document.querySelectorAll(btnDiv).innerText = "-";
  }else{
    para.style.display = "none";
  }
})}

function createFaq() {

  for(let i = 0; i< faqData.length; i++){
    let faq = document.createElement("div");
    faq.className = "faq";
    accordian_body.appendChild(faq);
    faq.style.display = 'flex';
    faq.style.justifyContent = 'space-between';
    
    let faq_header = document.createElement("div");
    let h3 = document.createElement("h3");
    let h3text = document.createTextNode(faqData[i].question);
    h3.appendChild(h3text);
    faq_header.appendChild(h3);
    faq.appendChild(faq_header);
    
    let btnDiv = document.createElement("div");
    btnDiv.innerText= "+";
    btnDiv.className = "show_btn";
    let btnText = document.createElement("span");
    btnDiv.appendChild(btnText);
    faq.appendChild(btnDiv);
    btnDiv.style.textAlign = 'center';
    btnDiv.style.cursor = "pointer";
    btnDiv.style.padding = '1px';
  
    let para = document.createElement("p");
    let paraText = document.createTextNode(faqData[i].answer);
    para.appendChild(paraText);
    accordian_body.appendChild(para);

    para.style.display = "none";
    }
}
createFaq();


function btnStatusUpdate() {
  let btnDiv = document.querySelectorAll(".show_btn") 
  // btnDiv[i].forEach((e) => {
  //   e.addEventListener("click", showFaq);
  //   });
  for(let i = 0; i<btnDiv.length; i++){
    btnDiv[i].addEventListener("click", showFaq);
  }
};


btnStatusUpdate();