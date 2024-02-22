var data = [window.prompt("What's the name?"),window.prompt("How old?"),window.prompt("Which city")];
document.write(`
<main>
    <div>
        <p>The name is ${data[0]}</p>
        <p>Age's ${data[1]}</p>
        <p>The city is ${data[2]}</p>
    </div>
</main>
`);