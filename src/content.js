require('arrive');

document.arrive('.DFnrK', () => {
    const buttonArea = document.querySelector('.DFnrK');
    const button = document.createElement('div');
    const inner = document.createElement('button');
    button.className = '_2Peo5';
    inner.className = '_3qc77 _3cTMR _1wpPZ';
    inner.innerText = 'Shuffle';
    button.appendChild(inner);
    buttonArea.insertBefore(button, buttonArea.children[1]);

    button.onclick = () => {
        let container = document.getElementsByClassName('_3pMVB')[2];
        let children = Array.from(container.children).sort(() => 0.5 - Math.random());
        container.innerHTML = '';
        container.append(...children);
    }
});
