document.getElementById('process-btn').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const output = processInput(input);
    document.getElementById('output').textContent = output;
});

function processInput(input) {
    let p = input.split('\n');
    return p[0];
}
