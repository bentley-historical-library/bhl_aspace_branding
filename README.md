# BHL ASpace Branding
This plugin adds custom Bentley Historical Library branding to ArchivesSpace. It modifies the application's header image from the ArchivesSpace logo to the BHL logo and adds a link to the Bentley's processing guidelines to the application's footer.

## Directory Structure
    frontend\
        assets\
            bhl-fa-smlogo.gif
            theme.css
        views\
            site\
                _branding.html.erb
                _footer.html.erb
            layout_head.html.erb

## How it Works
This plugin overrides the default ArchivesSpace branding and footer templates, found at `archivesspace/frontend/app/views/site/_branding.html.erb` and `archivesspace/frontend/app/views/site/_footer.html.erb`, respectively. The new `_branding.html.erb` template replaces the default ArchivesSpace logo with the Bentley logo found at `frontend/assets/bhl-fa-smlogo.gif`. The new `_footer.html.erb` template replaces the default ArchivesSpace footer, adding a link to the [BHL Processing Manual](https://sites.google.com/a/umich.edu/bhl-archival-curation/processing-archival-collections). 

Additionally, the CSS file at `frontend/assets/theme.css` modifies the header's background color and padding to accommodate the Bentley's logo image. The CSS file is loaded by `frontend/views/layout_head.html.erb`

## Preview
![screenshot](docs\screenshot.PNG "BHL ASpace Branding")