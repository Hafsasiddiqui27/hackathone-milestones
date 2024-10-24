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
// const shareLinkButton= document.getElementById('shareLinkButton') as HTMLButtonElement;
const editButton = document.getElementById('editButton');
// const downloadPDFbutton= document.getElementById('downloadPDF') as HTMLButtonElement;
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
    function fileToBase64(file) {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result);
            reader.onerror = rej;
            reader.readAsDataURL(file);
        });
    }
}));
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
editButton.addEventListener('click', () => {
    var _a;
    updateFormFromResume();
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    dynamicResume.classList.add("hidden");
});
function updateFormFromResume() {
    var _a, _b;
    document.getElementById('name').value = resumeName.textContent || '';
    document.getElementById('email').value = ((_a = resumeEmail.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email Address: ', '')) || '';
    document.getElementById('phone').value = ((_b = resumePhone.textContent) === null || _b === void 0 ? void 0 : _b.replace('Phone Number: ', '')) || '';
    document.getElementById('education').value = resumeEducation.textContent || '';
    document.getElementById('experience').value = resumeExperience.textContent || '';
    document.getElementById('skills').value = resumeSkills.textContent || '';
}
// / *****************Back button****************************
backButton.addEventListener('click', () => {
    var _a;
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    dynamicResume.classList.add("hidden");
    window.history.replaceState(null, '', '/');
});
