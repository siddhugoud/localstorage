function call(event){
    event.preventDefault();
    const u=event.target.us.value
    const p=event.target.ps.value
    const e=event.target.em.value
    const obj={
        name:u,
        passwd:p,
        email:e
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    print(obj)
    

}
window.addEventListener("DOMContentLoaded",()=>{
    const local=localStorage;
    const localkeys=Object.keys(local)
    for(var i=0;i<localkeys.length;i++){
        const key=localkeys[i]
        const userdetails=local[key]
        const userobj=JSON.parse(userdetails)
        print(userobj)
    }

})
function print(user){
    parentnode=document.getElementById("list")
    childHTML=`<li id=${user.email}>${user.name}-${user.passwd}-${user.email}
    <button onclick="del('${user.email}')">DEl</button>
    <button onclick=edit('${user.email}')>EDIT</button>
    </li>`
    parentnode.innerHTML=parentnode.innerHTML+childHTML
}
function del(el){
    localStorage.removeItem(el)
    removeuser(el)


}
function removeuser(ee){
    parentnode=document.getElementById("list")
    childnodeto=document.getElementById(ee)
    parentnode.removeChild(childnodeto)

}