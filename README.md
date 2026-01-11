<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Instructions for editing Sam Vance Website</title>
  </head>
  <body>
    <p>To edit project content:</p>
    <ol>
      <li>Each project content, go to the page.tsx file inside the project folder. (Ex. Projects/humanoid-legs/page.tsx)</li>
      <li>Edit the content within heroProps and galleryTemplateProps</li>
    </ol>

    <p>To add a project:</p>
    <ol>
      <li>Add a new folder within the projects folder (named after your project) (ex. Projects/new-project)</li>
      <li>Add a new page.tsx within this project folder (ex. Projects/new-project/page.tsx)</li>
      <li>Copy a template from another project (you can use projects/humanoid-legs/page.tsx) and paste it into your new project’s page.tsx.</li>
      <li>Change the content (heroProps and galleryTemplateProps) to match your project. Also make sure to change the title from the project file you copied to your new project.</li>
    </ol>

    <p>To upload a new photo:</p>
    <ol>
      <li>In the terminal in the project</li>
      <li>Make sure you are in the sam-vance-website project folder</li>
      <li>
        Run this command:
        <ul>
          <li><code>node upload.ts ./path/to/your/image.mp4 sam-vance-website/new-image-title.mp4</code></li>
        </ul>
      </li>
      <li>You will get an image url to use anywhere in the project.</li>
    </ol>
  </body>
</html>
