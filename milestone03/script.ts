const cvForm = document.getElementById('cvForm') as HTMLFormElement;
const dynamicResume = document.getElementById('dynamicResume') as HTMLDivElement;
const resumePhoto= document.getElementById('resumePhoto') as HTMLImageElement;
const resumeName= document.getElementById('resumeName') as HTMLHeadingElement;
const resumeEmail= document.getElementById('resumeEmail') as HTMLParagraphElement;
const resumePhone= document.getElementById('resumePhone') as HTMLParagraphElement;
const resumeEducation= document.getElementById('resumeEducation') as HTMLParagraphElement;
const resumeExperience= document.getElementById('resumeExperience') as HTMLParagraphElement;
const resumeSkills=document.getElementById('resumeSkills') as HTMLParagraphElement;



cvForm.addEventListener('submit', async (event:Event)=>{
event.preventDefault();


const name01 =(document.getElementById('name') as HTMLInputElement).value;
const email =(document.getElementById('email') as HTMLInputElement).value;
const phone =(document.getElementById('phone') as HTMLInputElement).value;
const education =(document.getElementById('education') as HTMLTextAreaElement).value;
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
