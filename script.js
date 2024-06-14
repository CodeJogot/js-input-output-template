document.getElementById('process-btn').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const output = mainFunction(input);
    document.getElementById('output').textContent = output;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('input').value = ''; // Clear input
    document.getElementById('output').textContent = ''; // Clear output
});

function mainFunction(input) {
    let p = input.split('\n');
    return ;
}
