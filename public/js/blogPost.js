const submitBlog = async (event) => {
    event.preventDefault();

    const title = document.getElementById("blog-title").value;
    const content = document.getElementById("blog-content").value;
    
    if (title && content) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({title, content}),
            headers: {"Content-Type": "application/json"},
        });

        if (response.ok) {
            alert("Submission Completed");
            document.location.replace("/dashboard");
        } else {
            alert("Submission Failed");
        }
    }
};

document.getElementById("submit-post").addEventListener("click", submitBlog);
