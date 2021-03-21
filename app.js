/*
 *
......................................................(-- Modified By Ahmed Allam --)..............................
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables
  

           const unOrderedList = document.querySelector('#navbar__list'); // the UL which will contain the whole Bar

                const listFragment = document.createDocumentFragment();  // the fragment which will contains the li elements to append it to the (UL)

                let pageSections = document.querySelectorAll('section'); // Selecting all the section to help looping around them 

                
 // End Global Variables


 // Start building the navigator list :- 
                                                // Scroll to section on link click


                for(let i = 0; i < pageSections.length; i++)  // for loop ( around sections)
                {
                    let newListElement = document.createElement('li'); // creating single (li) represents for every single section

                 let dataNavigat =pageSections[i].getAttribute('data-nav');  // getting the attribute of the data* 
                
                    let anchor = document.createElement('a');          // creating links for all the sections 

                   anchor.textContent= dataNavigat;   // putting the attribute for every section in the link of each one 

                   anchor.href = `#{dataNavigat}`;  // putting the tags of the link element 

                   anchor.addEventListener('click' , (e) => {    // event for clicking on the link and sending to the related section

                       pageSections[i].scrollIntoView({behavior:"smooth"});   // Scroll to anchor ID using scrollTO event
                   })

                   newListElement.appendChild(anchor);   // append the links to the (li)

                    listFragment.appendChild(newListElement);  // append the (li) to the fragment
                }
                unOrderedList.appendChild(listFragment);     // append the fragment to the (ul)

//////////////////////////////////////////////////////////////////////////////////////

                                    // Set sections as active

                

window.addEventListener('scroll',() => {          // event for changing the style of the active section and the active link while scrolling

    pageSections.forEach( (secn)=> {                  // forEach loop around the sections

        let bound = secn.getBoundingClientRect();       // getting the boundary of every section (variable)

        a= bound.top;
        z= bound.bottom; 

        if (a>-300 && a<226) {                         // if statement for determining which one is the active section and changing the backgroud color with it

            pageSections.forEach( (del)=> {
                del.style.backgroundColor="green";            // forEach loop around the sections to style the inactive sections 
            })

            secn.style.backgroundColor="purple";

            let listLinks = document.querySelectorAll('a');        // getting all the links in a variable to loop around it later

            listLinks.forEach( (liLink) => {                    // forEach loop around the links

                if(secn.getAttribute('data-nav') == liLink.textContent ) {  //if statement for determining which one is the active link and changing the backgroud color with it

                    listLinks.forEach( (rmv) =>{
                        rmv.style.backgroundColor=("yellow");        /// forEach loop around the links to style the inactive sections
                    })
                    liLink.style.backgroundColor="orange";
                }

            })
        }
    })
});

                

                
                

                  