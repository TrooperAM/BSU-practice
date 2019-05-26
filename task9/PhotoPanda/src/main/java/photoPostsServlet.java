import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class photoPostsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws  IOException {
        resp.getOutputStream().println(photoPostServlet.getPosts().getSize());
        Map<String, String> filterConfig = new HashMap<>();
        List<photoPost> list;
        int skip, top;
        try {
            skip = Integer.parseInt(req.getParameter("skip").trim());
        } catch (Exception e) {
            skip = 0;
        }
        try {
            top = Integer.parseInt(req.getParameter("top").trim());
        } catch (Exception e) {
            top = 10;
        }
        try {
            String author = req.getParameter("author").trim();
            if (author.length() > 0) {
                filterConfig.put("author", author);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());

        }
        try {
            String from = req.getParameter("from").trim();
            if (from.length() > 0) {
                filterConfig.put("from", from);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());

        }
        try {
            String to = req.getParameter("to").trim();
            if (to.length() > 0) {
                filterConfig.put("to", to);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());

        }
        try {
            String tag = req.getParameter("tag").trim();
            if (tag.length() > 0) {
                filterConfig.put("hashTags", tag);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        if (filterConfig.size() == 0) {
            list = photoPostServlet.getPosts().getPage(skip, top, null);
        } else {
            list = photoPostServlet.getPosts().getPage(skip, top, filterConfig);
        }
        for (photoPost elem : list) {
            resp.getOutputStream().println(elem.toString());
        }
    }
}

