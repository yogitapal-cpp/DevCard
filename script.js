const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const aboutInput = document.getElementById("aboutInput");
const skillsInput = document.getElementById("skillsInput");

const namePreview = document.getElementById("namePreview");
const rolePreview = document.getElementById("rolePreview");
const aboutPreview = document.getElementById("aboutPreview");
const skillsPreview = document.getElementById("skillsPreview");


nameInput.addEventListener("input", function () {

    if (nameInput.value === "") {
        namePreview.textContent = "Your Name";
    } else {
        namePreview.textContent = nameInput.value;
    }

});


roleInput.addEventListener("input", function () {

    if (roleInput.value === "") {
        rolePreview.textContent = "Your Role";
    } else {
        rolePreview.textContent = roleInput.value;
    }

});


aboutInput.addEventListener("input", function () {

    if (aboutInput.value === "") {
        aboutPreview.textContent = "Your introduction will appear here.";
    } else {
        aboutPreview.textContent = aboutInput.value;
    }

});


skillsInput.addEventListener("input", function () {

    const skills = skillsInput.value.split(",");

    skillsPreview.innerHTML = "";

    skills.forEach(function (skill) {

        if (skill.trim() !== "") {

            const span = document.createElement("span");

            span.textContent = skill.trim();

            skillsPreview.appendChild(span);
        }

    });

});
const downloadBtn = document.getElementById("downloadBtn");
const devCard = document.querySelector(".dev-card");

downloadBtn.addEventListener("click", function () {

    html2canvas(devCard).then(function (canvas) {

        const link = document.createElement("a");

        link.download = "my-devcard.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function () {

    const profile = {
        name: nameInput.value,
        role: roleInput.value,
        about: aboutInput.value,
        skills: skillsInput.value
    };

    localStorage.setItem("devCardProfile", JSON.stringify(profile));

    alert("Profile saved successfully!");
});
const darkTheme = document.getElementById("darkTheme");
const gradientTheme = document.getElementById("gradientTheme");
const minimalTheme = document.getElementById("minimalTheme");

darkTheme.addEventListener("click", function () {

    devCard.classList.remove("gradient-theme");
    devCard.classList.remove("minimal-theme");

});

gradientTheme.addEventListener("click", function () {

    devCard.classList.remove("minimal-theme");
    devCard.classList.add("gradient-theme");

});

minimalTheme.addEventListener("click", function () {

    devCard.classList.remove("gradient-theme");
    devCard.classList.add("minimal-theme");

});