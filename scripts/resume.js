let nameEL = document.getElementById('name');
let subtitleEl = document.getElementById('subtitle');
let objectiveDataEl = document.getElementById('objectiveData');
let skillsDataEl = document.getElementById('skillsData');
let academicDetailsDataEl = document.getElementById('academicDetailsData');
let contactDataEl = document.getElementById('contactData');
let workDataEl = document.getElementById('workData');
let achievementsDataEl = document.getElementById('achievementsData');
let projectsDataEl = document.getElementById('projectsData');
let data = JSON.parse(localStorage.getItem('formData'));

const setData = () => {
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
  nameEL.innerText = name;
  subtitleEl.innerText = title;
  objectiveDataEl.innerText = objective;
  skillsDataEl.innerText = skills;
  academicDetailsDataEl.innerText = academicDetails;
  contactDataEl.innerText = contact;
  workDataEl.innerText = experience;
  achievementsDataEl.innerText = achievements;
  projectsDataEl.innerText = projects;
};

setData();
