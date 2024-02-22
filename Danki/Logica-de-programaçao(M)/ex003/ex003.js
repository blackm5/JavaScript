
var data = [window.prompt("1° Number:"), window.prompt("operation signal")];
while (data[1] != '-' && data[1] != '+' && data[1] != '/' && data[1] != '*' && data[1] != '**'){
    window.alert('Enter a valid signal!');
    data[1] = window.prompt("operation signal");
}
data.push(window.prompt("2° Number:"));
var result = 0
if (data[1] == '+'){
    result = data[0] + data[2];
}else if (data[1] == '-'){
    result = data[0] - data[2];
}else if (data[1] == '/'){
    result = data[0] / data[2];
}else if (data[1] == '*'){
    result = data[0] * data[2];
}else if (data[1] == '**'){
    result = data[0] ** data[2];
}

document.write(`
<main>
    <div>
        <p>${data[0]} ${data[1]} ${data[2]} = ${result}</p>
    </div>
</main>
`);