class View{
  constructor(username="Guest"){
    this._user=username;
    this.setHeader();
  }
 show(post){
   var elem=document.getElementById('container');
   let el=document.createElement('li');
   el.id=post.id;
   el.className="post";
        el.innerHTML=`<img width="47" height="47" id="leftpick" src="img/profile(1).jpg">
       <div class="username">${post.author}<br>
       ${post.createdAt.getDate()}.${post.createdAt.getMonth()+1}.${post.createdAt.getFullYear()}
       </div>
       <button type="button" class="like" i></button>`;
     if(post.author===this._user){
       console.log("dadada");
       el.innerHTML+=`<img src="img/edit.png" width="80" class="edit">
       <img src="img/delete.jpg" width="47" class="delete">`
     }
     el.innerHTML+=` <div class="comments">other comments
     </div><img src=${post.photoLink} height=190 id="post">
    <div id="tags"> ${post.hashTags} </div>
    <div class="desc">${post.descriprion}</div>
   </div>`;  
       elem.appendChild(el);
}
showAll(posts){
 posts.forEach(item => this.show(item));
}
setHeader(){
  let header=document.getElementById('head');
if(this._user.localeCompare("Guest")==0){
 header.innerHTML=` <img src="img/logo.png" width="100" id="logo">
 <div id="menuha">
   <img src="img/profile.png" width="25" class="profile">
    Guest <br>
   <button type="button" style="font-family: Amatic SC" >Log in</button>
</div>  
     <h1>
       <i><strong>Feed</strong></i>
     </h1>
     <form action="" method="post" class="search">
         <input type="search" name="" placeholder="Username" class="input" />
         <input type="search" name="" placeholder="#tags" class="input" />
         From:<input type="date" id="date" name="from"/>
         To:<input type="date" id="date" name="to"/>
         <button type="button" class="srchbtn" >Search</button>
       </form>`
} else{
 header.innerHTML=` <img src="img/logo.png" width="100" id="logo">
 <div id="menuha">
   <img src="img/profile.png" width="25" class="profile">
    ${this._user} <br>
    <button type="button" style="font-family: Amatic SC" >Add new post</button>
   <button type="button" style="font-family: Amatic SC" >Log out</button>
</div>  
     <h1>
       <i><strong>Feed</strong></i>
     </h1>
     <form action="" method="post" class="search">
         <input type="search" name="" placeholder="Username" class="input" />
         <input type="search" name="" placeholder="#tags" class="input" />
         From:<input type="date" id="date" name="from"/>
         To:<input type="date" id="date" name="to"/>
         <button type="button" class="srchbtn" >Search</button>
       </form>`
}
}
removePosts(){
  let myNode=document.getElementById('container');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
return true;
}
}

