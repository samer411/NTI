let counter =0;
setInterval(() => {
    counter++;
    document.write(`<p style="border: 5px double red; padding:5px; width:fit-content;">${counter}</p>`)
    document.title=counter;
}, 1000);