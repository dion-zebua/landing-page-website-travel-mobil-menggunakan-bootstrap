let elementYear = document.querySelectorAll('.year');
elementYear.forEach( (e) => {
    let newYear = new Date();
    e.innerHTML = newYear.getFullYear();
});