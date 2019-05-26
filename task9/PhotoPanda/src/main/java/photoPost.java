import org.json.simple.JSONObject;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

public class photoPost {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> likes;
    private List<String> hashTags;
    public photoPost( String description, Date createdAt, String author, String photoLink, ArrayList<String> likes,ArrayList<String> hashTags){
        this.id=String.valueOf(createdAt.getTime());
        this.description=description;
        this.createdAt=createdAt;
        this.author=author;
        this.photoLink=photoLink;
        this.likes=new ArrayList<String>(likes);
        this.hashTags=new ArrayList<String>(hashTags);
    }
    public photoPost(){
        this("",new Date(),"","",new ArrayList<String>(),new ArrayList<String>());
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public List<String> getLikes() {
        return likes;
    }

    public void setLikes(List<String> likes) {
        this.likes = likes;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }
    @Override
    public String toString() {
        JSONObject elem = new JSONObject();
        elem.put("id",id);
        elem.put("author",author);
        elem.put("createdAt", createdAt.toString());
        elem.put("photolink",photoLink);
        elem.put("description",description);
        elem.put("hashtags",hashTags.toString());
        return elem.toString();
    }
}
