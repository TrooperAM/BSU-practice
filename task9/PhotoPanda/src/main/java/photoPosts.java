import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class photoPosts {
    final int MAX_LEN = 200;
    private List<photoPost> list;

    public photoPosts(List<photoPost> list) {
        this.list = new ArrayList<photoPost>(list);
    }

    public photoPosts() {
        this.list = new ArrayList<photoPost>();
    }

    public photoPost get(String id) {
        for (photoPost it : this.list) {
            if (it.getId().equals(id)) {
                return it;
            }
        }
        return null;
    }

    public void clear() {
        list.clear();
    }

    public void addAll(ArrayList<photoPost> list) {
        for (photoPost it : list) {
            if (!this.list.contains(it)) {
                this.list.add(it);
            }
        }
    }

    public void delete(String id) {
        photoPost pp;
        if ((pp = get(id)) != null) {
            this.list.remove(pp);
        }
    }

    public boolean validate(photoPost post) {
        if (!(post.getDescription() instanceof String) || post.getDescription().length() > MAX_LEN) {
            return false;
        }
        if(!(post.getPhotoLink() instanceof String|| post.getPhotoLink()==null)){
            return false;
        }
        if(!(post.getAuthor() instanceof String) || post.getAuthor()==null){
            return false;
        }
        return true;
    }
    public boolean add(photoPost post){
        if(validate(post)){
            photoPost res=new photoPost();
            res.setId(String.valueOf(res.getCreatedAt().getTime()));
            res.setAuthor(post.getAuthor());
            res.setDescription(post.getDescription());
            res.setPhotoLink(post.getPhotoLink());
            this.list.add(res);
            return true;
        }
        return false;
    }
    public boolean edit(String id,photoPost post){
        photoPost tmp=get(id);
        if(tmp!=null && validate(post)){
            delete(id);
            tmp.setCreatedAt(new Date());
            tmp.setId(String.valueOf(tmp.getCreatedAt().getTime()));
            tmp.setPhotoLink(post.getPhotoLink());
            tmp.setDescription(post.getDescription());
            tmp.setAuthor(post.getAuthor());
            tmp.setHashTags(new ArrayList<String>());
            tmp.setLikes(new ArrayList<String>());
            return true;
        }
        return false;
    }
    public List<photoPost> getPage(int top, int skip, Map<String,String> filterConfig){
        List<photoPost> res=new ArrayList<photoPost>();
        if(filterConfig!=null){
            try {
                res = filterHelper(filterConfig);
            } catch(ParseException e){
                System.out.println(e.getMessage());
            }
        }
        else{
            res=this.list;
        }
        int from,to;
        if(skip+top>res.size()){
            return res;
        }
        else{
            return res.subList(skip,skip+top);
        }
    }
    public List<photoPost> filterHelper(Map<String,String> filterConfig) throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        List<photoPost> res=new ArrayList<photoPost>(this.list);
        for(Map.Entry<String,String> it: filterConfig.entrySet()){
            if(it.getKey().equals("from")){
               for(photoPost pp: res){
                   if(pp.getCreatedAt().getTime()<dateFormat.parse(it.getValue()).getTime()){
                       res.remove(pp);
                   }
               }
            }
            if(it.getKey().equals("to")){
                 for(photoPost pp: res){
                     if(pp.getCreatedAt().getTime()>dateFormat.parse(it.getValue()).getTime()){
                         res.remove(pp);
                     }
                 }
            }
            if(it.getKey().equals("author")){
                for(photoPost pp: res){
                    if(!pp.getAuthor().equals(it.getValue())){
                        res.remove(pp);
                    }
                }
            }
            if(it.getKey().equals("hashTags")){
                for(photoPost pp: res){
                    boolean flag=false;
                    for(String item: it.getValue().split("[ ,.;]+")){
                        if(pp.getHashTags().contains(item)){
                            flag=true;
                        }
                    }
                    if(!flag){
                        res.remove(pp);
                    }
                }
            }
        }
       return res;
    }
    public int getSize(){
        return this.list.size();
    }
}
