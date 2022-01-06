// Accessibility


// Links
  // - Don’t use ‘Click Here’ - that can be annoying and not helpful to someone who hears that all over a webpage
  // - links should also not just be a url like https://en.wikipedia.org/wiki/Little_penguin 
  // - Instead, it should briefly describe what’s on the other side of the link
    // - example: "The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world."


// Aria - Accessible Rich Internet Applications
  // - Describes a link when the format of a page doesn’t allow you to
      // - example: <a href="#" aria-label="Widget description">description</a>
  // - Used to describe roles of elements in HTML
      // - example: 
          <h2 id="tree-label">File Viewer</h2>
          <div role="tree" aria-labelledby="tree-label">
              <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
          </div>

// Alt text
  // - All meaningful images need to have alt text descriptions
  // - If it’s not an important image and purely decoration, then just use alt=“”


// HTML Semantics
  // - Use <button> instead of divs
  // - Use <a> for links and <button> for buttons
  // - Use :focus
  // - DO NOT skip headings example: <h1> , <h2>, <h3> - screen readers rely on this to find information and browse through a page


// CSS
  // removing types of cues like outlines, underlines for hyperlinks can make it more challenging for someone who depends on them to recognize the type of control.
