import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;

public class photoPostServlet extends HttpServlet {
    private static photoPosts posts = new photoPosts();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id").trim();
        photoPost post;
        if( posts.get(id)!= null)
        {
           post = posts.get(id);
            resp.getOutputStream().println(post.toString());
        }
        else{
            resp.getOutputStream().println(posts.getSize());
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String author = req.getParameter("author").trim();
        String description = req.getParameter("description").trim();
        String photoLink = req.getParameter("photoLink").trim();
        String[] tags = req.getParameter("tags").trim().split(",");
        ArrayList<String> tagsForPost = new ArrayList<>();
        Collections.addAll(tagsForPost,tags);
        photoPost post = new photoPost(description,new Date(),author,photoLink,new ArrayList<String>(),tagsForPost);
        posts.add(post);
        resp.getOutputStream().println(post.toString());
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id =  req.getParameter("id").trim();
        if(posts.get(id)!= null)
        {
            posts.delete(id);
        }
        resp.getOutputStream().println(id);
    }
    public static photoPosts getPosts() {
        return posts;
    }
}
