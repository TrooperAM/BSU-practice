let pc=new PostCollection(photoPosts);
let view=new View(/*'Сидоров Иван'*/);
let I=(function(){
    return{
        add : function(post) {
      if(pc.addPost(post)){
        view.removePosts();
        view.showAll(pc.getPage(0,10));
        return true;
      } else {
          return false;
      }
        },
        remove : function(id){
            if(pc.removePost(id)){
                view.removePosts();
                view.showAll(pc.getPage(0,10));
                return true;
            } else{
                return false;
            }
        },
        edit : function(id,post){
            if(pc.editPost(id,post)){
                view.removePosts();
                view.showAll(pc.getPage(0,10));
                return true;
            } else{
                return false;
            }
        }
      }
}());
let arr=pc.getPage(0,10);
view.showAll(arr);
