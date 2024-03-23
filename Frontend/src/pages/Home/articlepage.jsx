import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { blogId } = location.state || {};
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/native/see_specific_blog?id=${blogId}`
        );
        setBlogData(response.data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };

    if (blogId) fetchBlogData();
  }, [blogId]);

  // Function to handle navigation to the next page
  const handleNavigation = (userId) => {
  navigate("/user/NativeProfile", { state: { userId: userId } });
  };

  const [firstPart, secondPart] = blogData
    ? blogData.Blogdata[0].Blog_Content.split(/\r\n\r\n/).reduce(
        (acc, curr, index) => {
          if (index < 2) acc[0] += curr + "\n\n"; // First two paragraphs
          else acc[1] += curr + "\n\n"; // Rest of the content
          return acc;
        },
        ["", ""]
      )
    : ["", ""];

  console.log("user id sending to next page-----------", blogData?.BlogUserData[0]?.UserID);

  return (
    <div>
      {blogData ? (
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-10 col-xl-10">
                <a href="#!">
                  <img
                    className="img-fluid"
                    src={`http://localhost:5000/${blogData.Blogdata[0].Blog_Title_Image}`}
                    alt="Blog Title"
                  />
                </a>
                <h1 className="my-5" style={{ fontSize: "36px" }}>
                  {blogData.Blogdata[0].Blog_Title}
                </h1>
                <p style={{ fontSize: "24px" }}>{firstPart}</p>
                <a href="#!">
                  <img
                    className="img-fluid"
                    src={`http://localhost:5000/${blogData.Blogdata[0].Blog_Content_Image}`}
                    alt="Blog Content"
                  />
                </a>
                <br />
                <p style={{ fontSize: "24px" }}>{secondPart}</p>

                {/* Link to navigate to the next page with userId */}
                <p
                  style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}
                  onClick={() => handleNavigation(blogData?.BlogUserData[0]?.UserID)}
                >
                  This blog is written by: {blogData?.BlogUserData[0]?.Name}
                </p>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
