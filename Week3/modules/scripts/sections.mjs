


// export function populateSections(sections) { 
//     function setSectionSelection() {
//         const sectionSelect = document.querySelector("#sectionNumber");
//         byuiCourse.sections.forEach((section) => {
//             const option = document.createElement("option");
//             option.value = section.sectionNumber;
//             option.textContent = `${section.sectionNumber}`;
//             sectionSelect.appendChild(option);
//         });
//     }
// }
    
export function populateSections(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  sectionSelect.innerHTML = ""; // clear options first to avoid duplicates

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}
