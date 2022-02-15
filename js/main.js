for (let i = 0; i < document.querySelector('.primary-nav').children.length; i++) {
    document.querySelector('.primary-nav').children[i].addEventListener('click', (e) => {
        if (e.target.innerText !== 'Home') {
            document.getElementById('port-frame').src = `${e.target.innerText}.html`
        }
    })
};

