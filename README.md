techPathWays.org
======

Initial design for techPathWays.org

# The App

* The code repo is in https://github.com/UrbanStrategies/techpathways/ - in case you are reading this elsewhere than Github.
* The app is in the `app_ui` branch
* It is an "SPA" (single page application) using Angular 1.5.2.
* It is deployed to Heroku at techpathways.herokuapp.com

# Data

* Organizational data is stored in a Google spreadsheet.
* This spreadsheet is downloaded as a TSV file, and converted into JSON format via `data/produce_json.rb`. The input TSV is the first CLI argument.
* The output should be saved as `js/extracted_data.js`
* Open `app_main_page.html` in a browser to see the app

# Architecture

* The Angular app is tied to the `body` tag of `app_main_page.html`
* All the data is in `js/extracted_data.js` or in `js/data.js` - the latter has data like dropdown text etc. This is to keep the code easier to read.

# Tests

There are tests!
