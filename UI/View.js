class View{
  constructor(username="Guest"){
    this._user=username;
  }
  getName(){
    return this._user;
  }
 show(post){
   var elem=document.getElementById('container');
   let el=document.createElement('li');
   el.id=post.id;
   el.className="post";
        el.innerHTML=`<img id="leftpick" src="img/profile(1).jpg">
       <div class="username">${post.author}<br>
       ${post.createdAt.getDate()}.${post.createdAt.getMonth()+1}.${post.createdAt.getFullYear()}
       </div>`;
       el.innerHTML+=` <div class="comments">other comments
      </div><img src=${post.photoLink} height=190 id="post">
      <div id="tags"> ${post.hashTags} </div>
      <div class="desc">${post.descriprion}</div>`;
      if(post.author===this._user){
       el.innerHTML+=`<div class="controll-buttons">
       <likeP><button name="like" type="button"  id=${post.id} class="like">Like</button></likeP>
       <editP><button name="ed" type="button" id=${post.id} class="ed">Edit</button></editP>
       <delP><button name="del" type="button"  id=${post.id} class="del">Delete</button></delP></div>`
      } else{
       el.innerHTML+=`<div class="controll-buttons">
       <likeP><button type="button" name="like" id=${post.id} class="like">Like</button></likeP>
       </div>`;
       }
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
       <i><strong id="pageHead">Feed</strong></i>
     </h1>
     <form action="" method="post" class="search" id="search">
         <input type="search" name="" placeholder="Username" class="input" />
         <input type="search" name="" placeholder="#tags" class="input" />
         From:<input type="date" id="date" name="from"/>
         To:<input type="date" id="date" name="to"/>
         <button type="button" class="srchbtn" id="srchbtn">Search</button>
       </form>`
} else{
 header.innerHTML=` <img src="img/logo.png" width="100" id="logo">
 <div id="menuha">
   <img src="img/profile.png" width="25" class="profile">
    ${this._user} <br>
    <button type="button" style="font-family: Amatic SC" id="newPost">Add new post</button>
   <button type="button" style="font-family: Amatic SC" id="out" >Log out</button>
</div>  
     <h1>
       <i><strong id="pageHead">Feed</strong></i>
     </h1>
     <form action="" method="post" class="search" id="search">
         <input type="search" name="author" placeholder="Username" class="input" />
         <input type="search" name="tags" placeholder="#tags" class="input" />
         From:<input type="date" id="date" name="from"/>
         To:<input type="date" id="date" name="to"/>
         <button type="button" class="srchbtn" id="srchbtn">Search</button>
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
