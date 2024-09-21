// const toggleButton = document.getElementById('toggle-cer')as HTMLButtonElement
// const resume = document.getElementById('resume')as HTMLElement
// toggleButton.addEventListener('click',()=> {
//     if(resume.style.display === "none"){
//         resume.style.display ='block'   
//     }
//     else{
//         resume.style.display = "none"  
//     }
// })
var toggleButton = document.getElementById('toggle-skills');
var resume = document.getElementById('resume');
toggleButton.addEventListener('click', function () {
    if (resume.style.display === "none") {
        resume.style.display = 'block';
    }
    else {
        resume.style.display = "none";
    }
});
