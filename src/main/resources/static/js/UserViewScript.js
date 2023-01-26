fetch("http://localhost:8080/api/currentUser")
    .then(res => {
            res.json()
                .then(data => {

                        // ЗАПОЛНЕНИЕ ШАПКИ

                        let temp = "<div class=\"col\">"
                        let roleName = ""
                        temp += "<a class=\"navbar-brand\">" + data.username + "</a>";
                        temp += "<a class=\"navbar-brand\"> with roles:</a>";
                        temp += "<a class=\"navbar-brand\">";
                        data.roles.forEach((rol) => {
                            roleName += rol.roleName + " ";
                        })
                        temp += roleName + "</a>";
                        roleName = "";
                        temp += "</div>"

                        document.getElementById("navbar").innerHTML = temp;

                        // ЗАПОЛНЕНИЕ ТАБЛИЦЫ
                        temp = ""

                        temp += "<tr>";
                        temp += "<td>" + data.username + "</td>";
                        temp += "<td>" + data.surname + "</td>";
                        temp += "<td>" + data.password + "</td>";
                        temp += "<td>";
                        data.roles.forEach((rol) => {
                            roleName += rol.roleName + " ";
                        })
                        temp += roleName + "</td><tr>";
                        roleName = "";

                        document.getElementById("myTable").innerHTML = temp;

                    }
                )
        }
    )
