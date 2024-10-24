const cvForm = document.getElementById('cvForm') as HTMLFormElement;
const dynamicResume = document.getElementById('dynamicResume') as HTMLDivElement;
const resumePhoto= document.getElementById('resumePhoto') as HTMLImageElement;
const resumeName= document.getElementById('resumeName') as HTMLHeadingElement;
const resumeEmail= document.getElementById('resumeEmail') as HTMLParagraphElement;
const resumePhone= document.getElementById('resumePhone') as HTMLParagraphElement;
const resumeEducation= document.getElementById('resumeEducation') as HTMLParagraphElement;
const resumeExperience= document.getElementById('resumeExperience') as HTMLParagraphElement;
const resumeSkills=document.getElementById('resumeSkills') as HTMLParagraphElement;
// const shareLinkButton= document.getElementById('shareLinkButton') as HTMLButtonElement;
const editButton=document.getElementById('editButton') as HTMLButtonElement;
// const downloadPDFbutton= document.getElementById('downloadPDF') as HTMLButtonElement;
const backButton= document.getElementById('backButton') as HTMLButtonElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;


cvForm.addEventListener('submit', async (event:Event)=>{
event.preventDefault();


const name01 =(document.getElementById('name') as HTMLInputElement).value;
const email =(document.getElementById('email') as HTMLInputElement).value;
const phone =(document.getElementById('phone') as HTMLInputElement).value;
const education =(document.getElementById('education') as HTMLTextAreaElement).value;
// const institute =(document.getElementById('institute') as HTMLInputElement).value;
const experience =(document.getElementById('experience') as HTMLTextAreaElement).value;
const skills =(document.getElementById('skills') as HTMLTextAreaElement).value;
const photo=(document.getElementById('photo') as HTMLInputElement);


const photoFile= photo.files? photo.files[0]: null;
let photoBase64= '';
if(photoFile){
    //save in base64// ..... filetobase64-- collect photo file
photoBase64= await fileToBase64(photoFile)

// store photo in local storage
localStorage.setItem('resumePhoto',photoBase64 )
resumePhoto.src= photoBase64
}

resumeName.textContent=name01;
resumeEmail.textContent=`Email Address: ${email}`;
resumePhone.textContent=`Phone Number: ${phone}`;
resumeEducation.textContent=education;
resumeExperience.textContent=experience;
resumeSkills.textContent=skills;

// hide form and show resume page
document.querySelector(".container")?.classList.add('hidden');
dynamicResume.classList.remove('hidden');


function fileToBase64(file:File):Promise<string>{
    return new Promise((res,rej)=>{
        const reader = new FileReader();
        reader.onloadend=()=>res(
            reader.result as string
        )
        reader.onerror = rej;
        reader.readAsDataURL(file);
    }) 
    }
    })

// const queryParams = new URLSearchParams({
//     name:name01,
//     email:email,
//     phone:phone,
//     education:education,
//     experience: experience,
//     skills:skills
// });
// const uniqueURL= `${window.location.origin}?${queryParams.toString()}`;
// shareLinkButton.addEventListener('click', ()=>{
//     // copy uniqueURL
//     navigator.clipboard.writeText(uniqueURL);
//     alert("Shareable link copied to clipboard!")
// })
// //prevent from page reload
// window.history.replaceState(null, '', `?${queryParams.toString()}`);
//;


// *****************Edit button****************************


editButton.addEventListener('click', ()=>{
    updateFormFromResume();
    document.querySelector(".container")?.classList.remove('hidden');
    dynamicResume.classList.add("hidden");
})
function updateFormFromResume(){
    (document.getElementById('name') as HTMLInputElement).value=resumeName.textContent || '';
(document.getElementById('email') as HTMLInputElement).value=resumeEmail.textContent ?.replace('Email Address: ', '') || '';
(document.getElementById('phone') as HTMLInputElement).value=resumePhone.textContent?.replace('Phone Number: ', '') || '';
(document.getElementById('education') as HTMLTextAreaElement).value=resumeEducation.textContent || '';
(document.getElementById('experience') as HTMLTextAreaElement).value=resumeExperience.textContent || '';
(document.getElementById('skills') as HTMLTextAreaElement).value=resumeSkills.textContent || '';
}


// / *****************Back button****************************


backButton.addEventListener('click', ()=>{
    document.querySelector(".container")?.classList.remove('hidden');
    dynamicResume.classList.add("hidden");

    window.history.replaceState(null,'', '/');
})