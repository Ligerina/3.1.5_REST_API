function createUsersTable() {
    fetch("http://localhost:8080/api/users")
        .then(res => {
                res.json()
                    .then(data => {
                            console.log(data)
                            let temp = ''

                            let roleName = ""

                            data.forEach((us) => {

                                us.roles.forEach((rol) => {
                                    roleName += rol.roleName + " ";
                                })

                                // НАЧАЛО ЗАПОЛНЕНИЯ ТАБЛИЧКИ
                                temp += `

                            <tr>
                            <td>${us.username}</td>
                            <td>${us.surname}</td>
                            <td>${us.password}</td>
                            <td>${roleName}</td>
                            <td>
                               <button class="btn btn-primary" data-bs-toggle="modal" 
                                    data-bs-target="#editModal"
                                    onclick="getEditModel(${us.id})">
                                        Edit
                               </button>
                            </td>
                            <td>
                                <button class="btn btn-danger" data-bs-toggle="modal" 
                                   data-bs-target="#deleteModal"
                                   onclick="deleteModalData(${us.id})">
                                    Delete
                                </button>
                            </td>
                            </tr>
                            
                            ` //КОНЕЦ ЗАПОЛНЕНИЯ ТАБЛИЧКИ

                                roleName = "";
                            })

                            document.getElementById("myTable").innerHTML = temp;
                        }
                    )
            }
        )
}

