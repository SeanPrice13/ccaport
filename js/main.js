// The goal is to change the source of the iframe to the page associated with the item 
// clicked in the navbar and this is a breakdown of the steps taken to acheive that.

// For each list-item in the navbar 
for (let i = 0; i < document.getElementById('primary-nav').children.length; i++) {
    // Add an event listener that waits for a click then runs the function 
    document.getElementById('primary-nav').children[i].addEventListener('click', (e) => {
        // If the clicked-list-item-name is not 'Home' then
        if (e.target.innerText !== 'Home') {
            // Remove the 'current' id attribute from the currently highlighted element
            document.getElementById('current').removeAttribute('id');
            // Change iframe src to clicked-list-item-name.html'
            document.getElementById('port-frame').src = `${e.target.innerText}.html`;
            // Add 'current' id attribute to the clicked-list-item
            e.target.parentElement.id = 'current';
        } else {
            // If the clicked-list-item-name is 'Home', reload the page
            location.reload();
        }
    })
};