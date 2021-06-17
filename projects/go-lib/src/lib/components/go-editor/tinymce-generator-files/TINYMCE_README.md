# TinyMCE Integration

We extend the TinyMCE framework in Goponents. We also configure styles around the "light" and "dark" themes. To allow for multiple editors on a page with varying themes, we have to compile the TinyMCE themes in a local clone of the TinyMCE repo.

In the event we need to make changes to either theme, you'll need:

1. Clone the TinyMCE repo
2. Copy the files in this directory over to their corresponding directories in the TinyMCE repo
3. Recompile the theme files
4. Copy over the files from the TinyMCE `build` directory into `projects/go-lib/styles/tinymce/skins` in this repo
5. Finally copy over any changes you've made in the files in the TinyMCE repo into this directory

To compile the TinyMCE project/files, [follow this guide](https://www.tiny.cloud/docs/advanced/creating-a-skin/)
