
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
        document.getElementById('total-credits').textContent = "Courses in blue are completed.";
    }




