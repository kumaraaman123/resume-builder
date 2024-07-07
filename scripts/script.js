'use strict';
const usernameEl = document.getElementById('username');
const userTitleEl = document.getElementById('userTitle');
const userExperienceEl = document.getElementById('userExperience');
const userAcademicDetailsEl = document.getElementById('userAcademicDetails');
const userObjectiveEl = document.getElementById('userObjective');
const userSkillsEl = document.getElementById('userSkills');
const userProjectsEl = document.getElementById('userProjects');
const userAchievementsEl = document.getElementById('userAchievements');
const userContactEl = document.getElementById('userContact');

const formButtonEl = document.querySelector('.form-btn');
let formData;

const init = () => {
  let data = JSON.parse(localStorage.getItem('formData'));
  if (data !== null) {
    setData(data);
    return;
  }
};

formButtonEl.addEventListener('click', () => {
  formData = {
    name: usernameEl.value,
    title: userTitleEl.value,
    experience: userExperienceEl.value,
    academicDetails: userAcademicDetailsEl.value,
    objective: userObjectiveEl.value,
    skills: userSkillsEl.value,
    projects: userProjectsEl.value,
    achievements: userAchievementsEl.value,
    contact: userContactEl.value,
  };
  localStorage.setItem('formData', formData);
  localStorage.setItem('formData', JSON.stringify(formData));
});

const setData = (data) => {
  const {
    name,
    title,
    experience,
    academicDetails,
    objective,
    skills,
    projects,
    achievements,
    contact,
  } = { ...data };

  usernameEl.value = name;
  userTitleEl.value = title;
  userExperienceEl.value = experience;
  userAcademicDetailsEl.value = academicDetails;
  userObjectiveEl.value = objective;
  userSkillsEl.value = skills;
  userProjectsEl.value = projects;
  userAchievementsEl.value = achievements;
  userContactEl.value = contact;
};

const Delete = () => {
  localStorage.clear();
  location.reload();
};

init();
