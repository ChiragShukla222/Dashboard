function formvalidato(){
    let n = document.getElementById('name').value
let m = document.getElementById('age').value
let l = document.getElementById('email').value
let o = document.getElementById('phone').value
let p = document.getElementById('house').value
if(n==""){
    alert("name is required")
    document.getElementById('name').focus()
    return false
}
    else if(!isNaN(n)){
        alert("only char allowed")
        document.getElementById('name').focus()
        return false
    }
else if(m==""){
    alert("age number is required")
    document.getElementById("age").focus()
    return false
}
    else if(isNaN(m)){
        alert('age in number ')
        document.getElementById('age').focus()
        return false 

    }
    else if(l==""){
        alert("email is required")
        document.getElementById("email").focus()
        return false
    }
    else if(!(l.includes("@"))){
        alert("invalid format ")
        document.getElementById("email")
        return false
    }
    else if(o==""){
        alert("phone is required")
        document.getElementById('phone').focus()
        return false
    }
    else if(o>0&&o<=10){
        alert("enter a vlaid format ")
        document.getElementById("phone").focus()
        return false 
    }
    else if(o==""){
        alert("house number is required")
        document.getElementById('house').focus()
        return false 
    }
    else if(isNaN(o)){
        alert("house in number format")
        document.getElementById('house').focus()
        return false
    }
}