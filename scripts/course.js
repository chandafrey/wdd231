//COURSES--------------------------------------------

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

    // // This line Calls the function to createCourseCard
    // createCourseCard();

    // // Write the function for createCourseCard
    // function createCourseCard() {
    // // use a 'forEach' loop to loop thru each course
    // // in the 'courses' array above
    // courses.forEach(course => {
    //     // Define the element for the entire 'card' package
    //     // and for each item that goes in it
    //     let card = document.createElement("section");
    //     let subject = document.createElement("h3");
    //     let number = document.createElement("p");

    //     // Get the content and assign it to the item variable
    //     subject.textContent = course.subject;
    //     number.textContent = course.number;

    //     // Append or add the item variable's content 
    //     // to the entire 'card' package variable
    //     card.appendChild(subject);
    //     card.appendChild(number);

    //     // Select from the HTML document where the 
    //     // 'card' package should go ("".coursesContainer")
    //     // and Append or add the card...(because we did a 
    //     // 'forEach' loop, it will add all the cards)
    //     document.querySelector(".coursesContainer").appendChild(card);
    // });
// }


    // This line Calls the function to createCourseCard
    createCourseCard(courses);

    // ------------All Classes Filter-------------
    // Create a Link to a button in HTML that will
    // populate a filtered course list for WDD Classes
    const allCoursesLink = document.querySelector("#all-courses");

    // Add an addEventListener so when the button is Clicked
    // it will only display WDD classes
    allCoursesLink.addEventListener("click", () => {
        // when the button is clicked, show the filtered classes
        createCourseCard(courses.filter(course => course.subject));
    })

    // ------------WDD Classes Filter-------------
    // Create a Link to a button in HTML that will
    // populate a filtered course list for WDD Classes
    const wddCoursesLink = document.querySelector("#wdd-courses");

    // Add an addEventListener so when the button is Clicked
    // it will only display WDD classes
    wddCoursesLink.addEventListener("click", () => {
        // when the button is clicked, show the filtered classes
        // on the ones that are actually filtered down, add .includes("WDD")
        createCourseCard(courses.filter(course => course.subject.includes("WDD")));
    })

    // ------------CSE Classes Filter-------------
    // Create a Link to a button in HTML that will
    // populate a filtered course list for WDD Classes
    const cseCoursesLink = document.querySelector("#cse-courses");

    // Add an addEventListener so when the button is Clicked
    // it will only display WDD classes
    cseCoursesLink.addEventListener("click", () => {
        // when the button is clicked, show the filtered classes
        createCourseCard(courses.filter(course => course.subject.includes("CSE")));
    })



    // Write the function that creates the courses cards
    function createCourseCard(filteredCourses) {
        document.querySelector(".coursesContainer").innerHTML = "";
        // use a 'forEach' loop to loop thru each course
        // in the 'courses' array above
        filteredCourses.forEach(course => {
            // Define the element for the entire 'card' package
            // and for each item that goes in it
            let card = document.createElement("section");
            let subject = document.createElement("p");
            let number = document.createElement("p");

            // Get the content and assign it to the item variable
            subject.textContent = course.subject;
            number.textContent = course.number;

            // Append or add the item variable's content 
            // to the entire 'card' package variable
            card.appendChild(subject);
            card.appendChild(number);

            // Check if completed and apply a class="" depending on completion
            // style
            // if (course.completed) {
            //     card.classList.add("completed");
            // } else {
            //     card.classList.add("not-completed");
            // }
            const isCompleted = course.completed === true || course.completed === 'true';
            card.classList.toggle("completed", isCompleted);
            card.classList.toggle("not-completed", !isCompleted);

            // Select from the HTML document where the 
            // 'card' package should go ("".coursesContainer")
            // and Append or add the card...(because we did a 
            // 'forEach' loop, it will add all the cards)
            document.querySelector(".coursesContainer").appendChild(card);

        // Update credits after displaying the filtered cards
        // MAKE SURE this line is at same tab line as FilteredCourses
        // so that is is NOT actually in the function 'forEach' loop
        updateCredits(filteredCourses);

        })
        
    }

    // Write a function to calculate credits displayed
    function calculateCredits(displayedCourses) {
        return displayedCourses.reduce((sum, course) => sum + course.credits, 0);
    }

    function updateCredits(displayedCourses) {
        const totalCredits = calculateCredits(displayedCourses);
        document.getElementById('total-credits').textContent = `The total number of course credits displayed is ${totalCredits}.`;
    }




//   FUNCTION TO CREATE COURSE CARDS--------------------------------------
//Start with the word function, then name of the function, then the parameters
// function createCourseCard(filteredCourses) {
//     //this is the container for the temple cards
//     const container = document.getElementById('coursesContainer');
// }

     // Clear the container
     //this clears the container so it doesn't duplicate the cards
    // container.innerHTML = ''; 

    // Loop through the courses array using a forEach method
    //Remember the format is name of the object(origional array)
    //and then .forEach(singular name of the object) => {
    // filteredCourses.forEach((course) => {

    // create a card to put into a div for each course card
    // start with creating a brand-new <section> HTML element,
    // but don't put it on the page yet and store the new section element in a variable named 'card'
    // const card = document.createElement('section');
    // now 'card' is a reference to that new <section>

    // Every DOM element has a 'classList' property, which is like a built in list of all the CSS
    // classes on that element (class="red" or class="temples")
    // Add the class "course-card" to the section
    // card.classList.add('course-card');
    // now my <section> looks like this:
    // <section class="course-card"></section>

    
    // create the elements to go into the course card
    // for example, we are saying: create a variable called
    // 'subject' and make it a new element('h4') to go inside
    // the courseCard div in the HTML
    // const subject = document.createElement('h4');
    // const number = document.createElement('p');
    // const title = document.createElement('p');
    // const credits = document.createElement('p');
    // const certificate = document.createElement('p');
    // const description = document.createElement('p');
    // const technology = document.createElement('p');
    // const completed = document.createElement('p');
    // At this point These elements exist in memory only.
    // You’ve got empty <h4> and <p> tags ready to be filled with text or other elements.


    // Set the inner HTML for the temple card
    // Set the text content for each element
    // Currently the name, location, dedicated, etc elements 
    // above are empty...
    // To fill them, we start with the name of the element
    // (in this case name - from const name) and then we
    // say if it is a .textContent or .innerHTML and then = 
    // the value we want to put in there
    // subject.textContent = course.subject;
    // number.textContent = course.number;
    // title.textContent = course.title;
    // credits.textContent = course.credits;
    // certificate.textContent = course.certificate;
    // description.textContent = course.description;
    // technology.textContent = course.technology.join(', ');
    // completed.textContent = course.completed;

//     // Append the elements to the card
//     card.appendChild(subject);
//     card.appendChild(number);
//     card.appendChild(title);
//     card.appendChild(credits);
//     card.appendChild(certificate);
//     card.appendChild(description);
//     card.appendChild(technology);
//     card.appendChild(completed);

//     // Append the card to the coursesContainer
//     container.appendChild(card);
//     // document.addEventListener("DOMContentLoaded", createCourseCard)


// });