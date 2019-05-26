let pc;
let loadedPosts = 10;
let view;
let I = (function () {
    return {
        add: function (post) {
            if (pc.addPost(post)) {
                return true;
            } else {
                return false;
            }
        },
        remove: function (id) {
            if (pc.removePost(id)) {
                view.removePosts();
                view.showAll(pc.getPage(0, 10));
                return true;
            } else {
                return false;
            }
        },
        edit: function (id, post) {
            if (pc.editPost(id, post)) {
                view.removePosts();
                view.showAll(pc.getPage(0, 10));
                console.log(pc._photoPosts);
                return true;
            } else {
                return false;
            }
        }
    }
}());

function feed() {
    view.setHeader();
    document.getElementById('head').className = "show";
    let arr = pc.getPage(0, 10);
    view.showAll(arr);
    document.getElementById("loadMore").className = "show";
    let out = document.getElementById('out');
    out.addEventListener('click', logout);
    document.getElementById('newPost').addEventListener("click", newPost);
    document.getElementById("srchbtn").addEventListener("click", search);
    let loadMor = document.getElementById("loadMore");
    loadMor.addEventListener("click", loadMore);
    document.getElementById("container").addEventListener("click", btnControll);
}

function auth() {
    let tmp = document.getElementById('sign');
    var form = document.getElementById('login');
    let u = form.name.value;
    if (isValid(form)) {
        document.getElementById('sign').className = "noone";
        pc = new PostCollection(photoPosts);
        if (localStorage.getItem(u + "posts") !== null) {
            let posts = pc.restore(u);
            pc._photoPosts = posts;
        }
        view = new View(u);
        feed();
        form.name.value = "";
        form.password.value = "";
    }
}

function isValid(form) {
    var fail = false;
    var name = form.name.value;
    var password = form.password.value;
    if (name === "") {
        fail = "INPUT NAME";
    } else if (password === "") {
        fail = "INPUT PASSWORD";
    }
    if (fail) {
        alert(fail);
        return false;
    }
    return true;
}

let sign = document.getElementById('submit');
sign.addEventListener('click', auth);

function logout() {
    document.getElementById("loadMore").className = "noone";
    document.getElementById('head').className = "noone";
    document.getElementById('sign').className = "show";
    view.removePosts();
    delete view;
}

function newPost() {
    document.getElementById("loadMore").className = "noone";
    document.getElementById('head').className = "noone";
    view.removePosts();
    document.getElementById('addPost').className = "show";
    document.getElementById('photoLink').addEventListener('change', function () {
        document.getElementById('preview').src = window.URL.createObjectURL(this.files[0])
    }, false);
    document.getElementById("added").removeEventListener("click", editPost);
    document.getElementById("added").addEventListener("click", adding);
}

function adding() {
    let addForm = document.getElementById("addPostss");
    if (I.add({
        descriprion: addForm.descr.value,
        photoLink: document.getElementById('preview').src,
        author: view.getName(),
        hashTags: addForm.tags.value.split(",")
    })) {
        document.getElementById("head").className = "show";
        document.getElementById('addPost').className = "noone";
        addForm.descr.value = "";
        addForm.photoLink.value = "";
        addForm.tags.value = "";
        document.getElementById('preview').src = "img/photo.jpg";
        view.showAll(pc.getPage(0, 10));
        document.getElementById("loadMore").className = "show";
        pc.save(view.getName());
    }
}

function search() {
    let srchf = document.getElementById("search");
    let filterConfig = new Object();
    if (!!srchf.author.value) {
        filterConfig.author = srchf.author.value;
    }
    if (!!srchf.tags.value) {
        filterConfig.hashTags = srchf.tags.value.split(',');
    }
    if (!!srchf.from.value) {
        filterConfig.from = new Date(srchf.from.value);
    }
    if (!!srchf.to.value) {
        filterConfig.to = new Date(srchf.to.value);
    }
    view.removePosts();
    console.log(filterConfig);
    let posts = pc.getPage(0, 10, filterConfig);
    console.log(posts.length);
    view.showAll(posts);
}

function loadMore() {
    loadedPosts += 10;
    view.removePosts();
    let posts;
    if (loadedPosts <= pc._photoPosts.length) {
        posts = pc.getPage(0, loadedPosts);
        view.showAll(posts);
    }
    if ((loadedPosts) > pc._photoPosts.length) {
        posts = pc.getPage(0, pc._photoPosts.length);
        view.showAll(posts);
        document.getElementById("loadMore").className = "noone";
    }
}

function btnControll(event) {
    let btn = event.target;
    if (btn.name === 'like') {
        likePost(btn.id);
        pc.save(view.getName());
    }
    if (btn.name === 'del') {
        I.remove(btn.id);
        pc.save(view.getName());
    }
    if (btn.name === "ed") {
        editPost(btn.id);
        pc.save(view.getName());
    }
}

function likePost(id) {
    let post = new Object(pc.getPost(id));
    let name = view.getName();
    if (post.likes.includes(name)) {
        post.likes.splice(post.likes.indexOf(name), 1);
    } else {
        post.likes.push(name);
    }
}

function editPost(id) {
    document.getElementById("loadMore").className = "noone";
    document.getElementById('head').className = "noone";
    view.removePosts();
    document.getElementById('addPost').className = "show";
    document.getElementById('photoLink').addEventListener('change', function () {
        document.getElementById('preview').src = window.URL.createObjectURL(this.files[0])
    }, false);
    document.getElementById("added").removeEventListener("click", adding);
    document.getElementById("added").addEventListener("click", function () {
        let addForm = document.getElementById("addPostss");
        if (I.edit(id, {
            descriprion: addForm.descr.value,
            photoLink: document.getElementById('preview').src,
            hashTags: addForm.tags.value.split(",")
        })) {
            document.getElementById("head").className = "show";
            document.getElementById('addPost').className = "noone";
            addForm.descr.value = "";
            addForm.photoLink.value = "";
            addForm.tags.value = "";
            document.getElementById('preview').src = "img/photo.jpg";
            view.showAll(pc.getPage(0, 10));
            document.getElementById("loadMore").className = "show";
        }
        ;
    });
}