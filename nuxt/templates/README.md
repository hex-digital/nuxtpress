# Templates

This directory contains components that are loaded when a particular dynamic page has a template selected in WordPress.

The dynamic pages (those with _slug.vue or _.vue) will attempt to identify the selected template when loading page
data from WordPress, and then include the corresponding template from this directory.

If no matching template exists, NuxtPress will use the default template, and log a warning when in development mode.

You cannot yet customise what happens when NuxtPress cannot find a template, but it is on the roadmap.
