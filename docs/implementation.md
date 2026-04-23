# Implementation

## Introduction
Medical Facilities Bristol (Version 1.0) is a web-based system that helps users find healthcare services in Bristol using an interactive map, search tools, and a table of locations.

The system uses a dataset containing facility names, locations, and service types such as GP surgeries, hospitals, pharmacies, and urgent care centres. This data is used to display map markers and populate the table.

Some known issues include slower performance with many markers, limited filtering options, and occasional display inconsistencies. Users may also need to zoom in to clearly view locations.

The system runs in a web browser and uses a mapping library with a predefined dataset to display the information.
TODO: Describe the current version of the system (with version number. Describe the dataset. Are there any known issues? Describe any configuration data.
The vers

## Project Structure

``
└── 📁Health-Establishments-Web-main
    └── 📁.github
        └── 📁workflows
            ├── node.js.yml
    └── 📁.nyc_output
        └── 📁processinfo
            ├── index.json
    └── 📁docs
        └── 📁images
            ├── component.png
            ├── context.png
            ├── deployment.png
            ├── design-healthestablishments.png
            ├── screenshot.png
            ├── sequence.png
            ├── use-case.png
            ├── wireframe.png
        ├── deployment.md
        ├── design.md
        ├── Finisheddesignhe.png
        ├── implementation.md
        ├── planning.md
        ├── requirements.md
        ├── testing.md
        ├── uml.asta
        ├── uml.asta.lock
    └── 📁e2e
        ├── test-menu.js
        ├── testUC1.js
        ├── testUC2.js
        ├── testUC3.js
    └── 📁Images
        ├── logo.png
    └── 📁map_files
        ├── leaflet.css
        ├── leaflet.js.download
        ├── logo.png
        ├── script2.js.download
        ├── style.css
    └── 📁static
        ├── bike.png
        ├── script.js
        ├── style.css
    └── 📁test
        ├── integration.js
        ├── testUC1.js
        ├── testUC2.js
    └── 📁views
        └── 📁templates
            ├── head.ejs
            ├── header.ejs
            ├── nav.ejs
        ├── index.ejs
        ├── map.ejs
        ├── search.ejs
    ├── .eslintrc.js
    ├── .eslintrc.json
    ├── .gitignore
    ├── contact.html
    ├── home.html
    ├── main.js
    ├── map.html
    ├── package-lock.json
    ├── package.json
    ├── ping.js
    ├── readme.md
    ├── script.js
    ├── script2.js
    ├── style.css
    ├── Table-of-Locations.html
    └── tablescript.js
```




## Software Architecture


The system is built as a multi-page web application with clearly separated components:

User Interface (HTML pages)
The application consists of multiple HTML pages (home.html, map.html, contact.html, table-of-locations.html) that represent different sections of the website. Each page provides a specific view for the user.
Client-side Logic (main.js)
The main.js file handles the interactive functionality of the website, such as responding to user actions, updating the DOM, and managing dynamic features like maps or tables.
Data/Resource Layer
Folders like map_files/ and statistic/ store supporting data used by the application, such as map information or statistical datasets.
Static Assets
The images/ folder contains visual resources used across the website.
Supporting Infrastructure
docs/ contains documentation
.github/ supports version control and automated workflows
nyc_output/ stores testing coverage reports

(images/component-diagram.png)
![Insert your component Diagram here](images/component.png)
