const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to create a new project folder
function createNewProjectFolder() {
  let folderName = 'new_project';
  let count = 1;
  while (fs.existsSync(folderName)) {
    folderName = `new_project_${count}`;
    count++;
  }
  fs.mkdirSync(folderName);
  return folderName;
}

// Function to create a new build folder
function createBuildFolder(projectFolder) {
  let buildFolder = 'build';
  let count = 1;
  while (fs.existsSync(path.join(projectFolder, buildFolder))) {
    buildFolder = `build_${count}`;
    count++;
  }
  buildFolder = path.join(projectFolder, buildFolder);
  fs.mkdirSync(buildFolder);
  return buildFolder;
}

// Function to save content to a file
function saveToFile(folder, fileName, content) {
  fs.writeFileSync(path.join(folder, fileName), content, 'utf-8');
}

// Function to download and save resources (CSS, JS)
async function downloadAndSaveResource(folder, url, fileName) {
  try {
    const response = await axios.get(url);
    saveToFile(folder, fileName, response.data);
  } catch (error) {
    console.error(`Error downloading ${fileName}: ${error.message}`);
  }
}

// Function to clone a website
async function cloneWebsite(url) {
  try {
    const response = await axios.get(url);
    const htmlContent = response.data;

    // Create a new project folder
    const projectFolder = createNewProjectFolder();

    // Create a new build folder within the project folder
    const buildFolder = createBuildFolder(projectFolder);

    // Save HTML content in the build folder
    saveToFile(buildFolder, 'index.html', htmlContent);

    // Extract CSS and JS file URLs from the HTML content
    const cssUrls = htmlContent.match(/<link.*?href=["'](.*?)["']/gi);
    const jsUrls = htmlContent.match(/<script.*?src=["'](.*?)["']/gi);

    // Download and save CSS files in the build folder
    if (cssUrls) {
      cssUrls.forEach((cssUrl) => {
        const href = cssUrl.match(/href=["'](.*?)["']/)[1];
        downloadAndSaveResource(buildFolder, href, path.basename(href));
      });
    }

    // Download and save JS files in the build folder
    if (jsUrls) {
      jsUrls.forEach((jsUrl) => {
        const src = jsUrl.match(/src=["'](.*?)["']/)[1];
        downloadAndSaveResource(buildFolder, src, path.basename(src));
      });
    }

    console.log('Website cloned successfully!');
  } catch (error) {
    console.error(`Error cloning website: ${error.message}`);
  }
}

// Example usage with the provided link
// const websiteUrl = 'https://techresearchs.com/';
const websiteUrl = 'https://thecioworld.com/';

cloneWebsite(websiteUrl);
