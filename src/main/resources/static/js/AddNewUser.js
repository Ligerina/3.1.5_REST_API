
async function addNewUser() {

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
        "username": document.getElementById("addUsername").value,
        "surname": document.getElementById("addSurname").value,
        "password": document.getElementById("addPassword").value,
        "roles": rolesList
    }

    console.log(rawJson)

    //TODO Отправить данные на рест сервис
    const url = 'http://localhost:8080/api/users'

    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
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

    document.getElementById("returnToHomePage").click()
    createUsersTable()
}
