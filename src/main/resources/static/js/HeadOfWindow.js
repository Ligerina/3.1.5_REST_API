fetch("http://localhost:8080/api/currentUser")
    .then(res => {
            res.json()
                .then(data => {

                        let roleName = ""
                        data.roles.forEach((rol) => {
                            roleName += " " + rol.roleName ;
                        })

                        let temp= `

                        <div class="col">
                            <a class="navbar-brand">${data.username}</a>
                            <a class="navbar-brand">with roles:</a>
                            <a class="navbar-brand">${roleName}</a>
                        </div>
                        `

                        document.getElementById("navbar").innerHTML = temp;
                    }
                )
        }
    )