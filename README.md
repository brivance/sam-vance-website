Instructions for editing Sam Vance Website

To edit project content:

1. Each project content, go to the page.tsx file inside the project folder. (Ex. Projects/humanoid-legs/page.tsx)
2. Edit the content within heroProps and galleryTemplateProps


To add a project:

1. Add a new folder within the projects folder (named after your project) (ex. Projects/new-project)
2. Add a new page.tsx within this project folder (ex. Projects/new-project/page.tsx)
3. Copy a template from another project (you can use projects/humanoid-legs/page.tsx) and paste it into your new project’s page.tsx.
4. Change the content (heroProps and galleryTemplateProps) to match your project. Also make sure to change the title from the project file you copied to your new project.


To upload a new photo:

1. In the terminal in the project
2. Make sure you are in the sam-vance-website project folder
3. Run this command:
	- node upload.ts ./path/to/your/image.mp4 sam-vance-website/new-image-title.mp4
4. You will get an image url to use anywhere in the project.
