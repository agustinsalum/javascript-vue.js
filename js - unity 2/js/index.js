var cadHeader = `
<nav class="nav-menu">
<ul>
    <li><a href="index.html">Main</a></li>
    <li><a href="about.html">About</a></li>
</ul>
</nav>
`

document.getElementById("idHeader").innerHTML = cadHeader

var cadFooter = `
<p> Agustin - 2023 </p>
`

document.getElementById("idFooter").innerHTML = cadFooter

if (document.getElementById("idTable")) {
    cadTable = `
    <table>
        <tr>
            <th>Color</th>
            <th>Type</th>
            <th>Registration</th>
            <th>Capacity</th>
        </tr>
        `
    for (var i = 0; i < data.length; i++) {
        cadTable += `
                <tr>
                    <td>${data[i].color}</td>
                    <td>${data[i].type}</td>
                    <td>${data[i].registration}</td>
                    <td>${data[i].capacity}</td>
                </tr>
            `
    }
    cadTable += `
            </table>
        `
    document.getElementById("idTable").innerHTML = cadTable;
}
