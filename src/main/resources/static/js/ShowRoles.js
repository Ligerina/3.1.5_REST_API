function ShowRoles(){

    let roles = ""
    roles += `
    <div>
        <input type="checkbox" id="idAdmin" value="1">
        <label for="idAdmin">ADMIN</label>
    </div>
    <div>
        <input type="checkbox" id="idUser" value="2">
        <label for="idUser">USER</label>
    </div>
`
    console.log(roles)

    document.getElementById("addRoles").innerHTML = roles;

}
