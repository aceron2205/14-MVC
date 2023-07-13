const submitBlog = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blog-title").value;
  const content = document.getElementById("blog-content").value;

  if (title && content) {
    const response = await fetch("/post-blog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.body.innerHTML = "<h1>Submission Completed</h1>";
    } else {
      document.body.innerHTML = "<h1>Something went wrong, try again!</h1>";
    }
  }
};

document.querySelector(".submit").addEventListener("click", submitBlog);
