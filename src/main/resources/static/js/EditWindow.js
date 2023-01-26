function getEditModel(id) {
    let roles = ""
    fetch("http://localhost:8080/api/users/" + id)
        .then(res => {
                res.json()
                    .then(data => {

                            document.getElementById("idEdit").value = data.id;
                            document.getElementById("usernameEdit").value = data.username;
                            document.getElementById("surnameEdit").value = data.surname;
                            document.getElementById("passwordEdit").value = data.password;

                            let selectedRolesIds = [];
                            for (let i = 0; i < data.roles.length; i++) {
                                selectedRolesIds.push(data.roles[i].id)
                            }

                            roles += `
                            <div>
                                <input type="checkbox" id="idAdmin" ${selectedRolesIds.includes(1) ? "checked" : ""} value="1">
                                <label for="idAdmin">ADMIN</label>
                            </div>
                            <div>
                                <input type="checkbox" id="idUser" ${selectedRolesIds.includes(2) ? "checked" : ""} value="2">
                                <label for="idUser">USER</label>
                            </div>
                        `
                            document.getElementById("rolesEdit").innerHTML = roles;

                            roles = ''
                        }
                    )
            }
        )
}


async function editModel() {

    // alert("В начале addEventListener")
    document.getElementById("closeModalEditButton").click();

    //TODO Взять роли которые утвердились за пользователем и добавить их в джсон
    let rolesList = [];

    if (document.getElementById("idAdmin").checked) {
        rolesList.push(
            {
                "id": 1,
                "roleName": "ROLE_ADMIN",
            }
        )
    }

    if (document.getElementById("idUser").checked) {
        rolesList.push(
            {
                "id": 2,
                "roleName": "ROLE_USER",
            }
        )
    }

    let rawJson = {
        "id": document.getElementById("idEdit").value,
        "username": document.getElementById("usernameEdit").value,
        "surname": document.getElementById("surnameEdit").value,
        "password": document.getElementById("passwordEdit").value,
        "roles": rolesList
    }

    //TODO Отправить данные на рест сервис
    const url = 'http://localhost:8080/api/users';

    try {
        const response = await fetch(url, {
            method: 'PUT', // или 'PUT'
            body: JSON.stringify(rawJson), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }
    createUsersTable()
}