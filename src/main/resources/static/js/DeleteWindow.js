function deleteModalData(id) {
    let roles = ""
    fetch("http://localhost:8080/api/users/" + id)
        .then(res => {
                res.json()
                    .then(data => {

                        console.log(data)

                        document.getElementById("idDelete").value = data.id;
                        document.getElementById("usernameDelete").value = data.username;
                        document.getElementById("surnameDelete").value = data.surname;
                        document.getElementById("passwordDelete").value = data.password;

                        let selectedRoles = '';
                        for (let i = 0; i < data.roles.length; i++) {
                            selectedRoles += data.roles[i].roleName + " "
                        }

                        roles += `

                            <div>
                                <label>Roles:</label>
                                <label>${selectedRoles}</label>
                            </div>

                        `

                        document.getElementById("rolesDelete").innerHTML = roles;
                        }
                    )
            }
        )
}

async function deleteUser() {

    let url = "http://localhost:8080/api/users/" + document.getElementById("idDelete").value;

    try {
        const response = await fetch(url, {
            method: 'DELETE', // или 'PUT'
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Успех:', await response);
    } catch (error) {
        console.error('Ошибка:', error);
    }

    document.getElementById("closeModalDeleteButton").click();
    createUsersTable();

}