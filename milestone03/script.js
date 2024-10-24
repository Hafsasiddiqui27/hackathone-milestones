"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cvForm = document.getElementById('cvForm');
const dynamicResume = document.getElementById('dynamicResume');
const resumePhoto = document.getElementById('resumePhoto');
const resumeName = document.getElementById('resumeName');
const resumeEmail = document.getElementById('resumeEmail');
const resumePhone = document.getElementById('resumePhone');
const resumeEducation = document.getElementById('resumeEducation');
const resumeExperience = document.getElementById('resumeExperience');
const resumeSkills = document.getElementById('resumeSkills');
const shareLinkButton = document.getElementById('shareLinkButton');
const editButton = document.getElementById('editButton');
const downloadPDFbutton = document.getElementById('downloadPDF');
const backButton = document.getElementById('backButton');
const resumeContent = document.getElementById('resumeContent');
cvForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    event.preventDefault();
    const name01 = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    // const institute =(document.getElementById('institute') as HTMLInputElement).value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const photo = document.getElementById('photo');
    const photoFile = photo.files ? photo.files[0] : null;
    let photoBase64 = '';
    if (photoFile) {
        //save in base64// ..... filetobase64-- collect photo file
        photoBase64 = yield fileToBase64(photoFile);
        // store photo in local storage
        localStorage.setItem('resumePhoto', photoBase64);
        resumePhoto.src = photoBase64;
    }
    resumeName.textContent = name01;
    resumeEmail.textContent = `Email Address: ${email}`;
    resumePhone.textContent = `Phone Number: ${phone}`;
    resumeEducation.textContent = education;
    resumeExperience.textContent = experience;
    resumeSkills.textContent = skills;
    // hide form and show resume page
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    dynamicResume.classList.remove('hidden');
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
    function fileToBase64(file) {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result);
            reader.onerror = rej;
            reader.readAsDataURL(file);
        });
    }
}));
// editButton.addEventListener('click', ()=>{
//     updateFormFromResume();
//     document.querySelector(".container")?.classList.remove('hidden');
//     dynamicResume.classList.add("hidden");
// })
// function updateFormFromResume(){
//     (document.getElementById('name') as HTMLInputElement).value=resumeName.textContent || '';
// (document.getElementById('email') as HTMLInputElement).value=resumeEmail.textContent || '';
// (document.getElementById('phone') as HTMLInputElement).value=resumePhone.textContent=`Email Address: ${email}`;
// (document.getElementById('education') as HTMLTextAreaElement).value=resumeEducation.textContent=`Phone Number: ${phone}`;
// (document.getElementById('experience') as HTMLTextAreaElement).value=resumeExperience.textContent=`Education: ${education}`;
// (document.getElementById('skills') as HTMLTextAreaElement).value=resumeSkills.textContent=`Work Experience: ${experience}`;
// (document.getElementById('photo') as HTMLInputElement)=resumePhoto.textContent
// }
