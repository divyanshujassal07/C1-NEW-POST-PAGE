import { useState } from "react";

function NewPost() {
  const [postType, setPostType] = useState("Question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }

    if (postType === "Question" && !description.trim()) {
      alert("Please describe your problem.");
      return;
    }

    if (
      postType === "Article" &&
      (!abstract.trim() || !articleText.trim())
    ) {
      alert("Please complete the abstract and article text.");
      return;
    }

    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (tagList.length > 3) {
      alert("You can enter a maximum of three tags.");
      return;
    }

    setTitle("");
    setDescription("");
    setAbstract("");
    setArticleText("");
    setTags("");
    setPostType("Question");

    alert("Your post has been submitted!");
  }

  return (
    <div className="new-post-container">
      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>
        <h3>Select Post Type</h3>

        <label>
          <input
            type="radio"
            value="Question"
            checked={postType === "Question"}
            onChange={() => setPostType("Question")}
          />
          Question
        </label>

        <label>
          <input
            type="radio"
            value="Article"
            checked={postType === "Article"}
            onChange={() => setPostType("Article")}
          />
          Article
        </label>

        <h3>What do you want to ask or share?</h3>

        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter your title"
          required
        />

        {postType === "Question" ? (
          <>
            <label>Describe your problem</label>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe your problem..."
              required
            />
          </>
        ) : (
          <>
            <label>Abstract</label>
            <textarea
              value={abstract}
              onChange={(event) => setAbstract(event.target.value)}
              placeholder="Write a short abstract..."
              required
            />

            <label>Article Text</label>
            <textarea
              value={articleText}
              onChange={(event) => setArticleText(event.target.value)}
              placeholder="Write your article..."
              required
            />
          </>
        )}

        <label>Tags (maximum 3, separated by commas)</label>
        <input
          type="text"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
          placeholder="React, JavaScript, Programming"
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default NewPost;