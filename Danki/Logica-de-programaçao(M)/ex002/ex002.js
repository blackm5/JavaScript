var data = [window.prompt("Year of birth:"), current = new Date(), year = current.getFullYear()];
document.write(`
<main>
    <div>
        <p>Your age's ${data[2]-data[0]} year</p>
    </div>
</main>
`);