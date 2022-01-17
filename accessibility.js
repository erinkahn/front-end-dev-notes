// Accessibility 


// ARIA landmarks identify regions of a page
   <body>
       <header>
          <nav role="navigation>
              <ul><li><a></a></li></ul>
          </nav>
       </header>

      <hero role="banner"></hero>

      <main id="maincontent">
        <div role="region" arial-label="Section Title"></div>
        <div role="region" arial-label="Section Title"></div>
        <div role="region" arial-label="Section Title"></div>
     </main>

     <footer role="contentinfo"></footer>
  </body>



// Headings
  <div role="heading">Global News items</div>
    // ... a list of global news with editorial comment....

  // H1s :
  <div role="heading" aria-level="1"> // (not required but helps)
  
  // must have an h1 at the top of the page

  
  
// Assessible forms
  // Each input and texture needs to have a label
  <label htmlFor="namedInput">Name:</label>
  <input id="namedInput" type="text" name="name"/>

  <p>Please select the <span id="mysldr-lbl">number of days for your trip</span></p>
  <div id="mysldr" role="slider" aria-labelledby="mysldr-lbl"></div>

  <label id="l1" for="f3">Notify me</label>
  <select name="amt" id="f3" aria-labelledby="l1 f3 l2">
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  <span id="l2" tabindex="-1">days in advance</span>



// FOCUS
  // Never remove the outlines unless you replace them with a different outline style



// SKIP NAVIGATION LINKS
  // Only are visible when keyboard users interact with the page
  <body>
      <div id="skip">
        <a href="#maincontent" class="sr-only">Skip to main content</a>
      </div>
  //....
  <main id="maincontent">

  
  
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



//HIDING CONTENT
// Display: none or visibility: hidden:
    // will hide content from all users
    // Content will be removed from the page
    // Content is ignored by screen readers
    // ** if you want the content to be read by screen readers, then DONT use this CSS

// Recommended:
    // absolutely position content off screen (visually hidden but read by screen reader)
    // **Navigable elements, such as links and form controls, should not be hidden off-screen

  .sr-only {
      position: absolute;
      padding: 0;
      height: 1px;
      width: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
  }
