const api_url = "http://demo1842428.mockable.io";

// Defining async function
async function getapi(api_url) {
    // Storing response
    const data = await fetch(api_url);
    // Storing data in form of JSON
    var data_json = await data.json();
    console.log(data_json);
    display(data_json);
}
// Calling that async function
getapi(api_url);


// Function to define innerHTML for HTML table
function display(data) {
    let html_table_data = `<tr>
                                <th>Name</th>
                                <th>Institute</th>
                                <th>Grade</th>
                        </tr>`;

    // Loop to access all rows 

    for (let i = 0; i < data.length; i++) {
        html_table_data += `<tr>
                                <td>${data[i].Name} </td>
                                <td>${data[i].Institute}</td>
                                <td>${data[i].Grade}</td> 
                            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("student").innerHTML = html_table_data;
}