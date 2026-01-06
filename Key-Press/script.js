const result = document.querySelector('.result')

window.addEventListener('keydown', function(e) {
    result.innerHTML = `
    <table>
        <tr>
            <th>Key</th>
            <th>Code</th>
            <th>KeyCode</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? "Space" : e.key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
        </tr>
    </table>
    `
})