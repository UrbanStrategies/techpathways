techPathWays.org
======

Initial design for techPathWays.org

# The App

* The code repo is in https://github.com/UrbanStrategies/techpathways/ - in case you are reading this elsewhere than Github.
* `app_ui` is the main and dev codebase for deploying to the Heroku app (resolving from techpathways.herokuapp.com) (that uses a PHP build pack.)
* It is an "SPA" (single page application) using Angular 1.5.2.
* It is deployed to Heroku at techpathways.herokuapp.com with the PHP build pack. The `index.php` file simply serves `app_main_page.html`

# Deployment to www

There are two branches to target for a deploy:

* `gh-pages` that will deploy www.techpathways.org via Github Pages
* `app_ui` which is the main and dev codebase for deploying to the Heroku app (that uses a PHP build pack.)

I have locally used `brochure_dev` as the branch to make changes destined for `gh-pages` [**Sameer**]

# Data

* Organizational data is stored in a Google spreadsheet.
  * This spreadsheet is downloaded as a TSV file, and converted into JSON format via `data/produce_json.rb`. The input TSV is the first CLI argument.
  * The output should be saved as `js/extracted_data.js`
* The app's own data - the menu items, dropdown selections, etc - are `js/data.js`. There are keys in this file that refer to data coming from the Google spreadsheet ETL'ed above.
* Run `gulp` in the root directory to compile SCSS into CSS. To use Watchman to do this, you can run the following command if you have Watchman installed, in the root folder: `cat gulp.watchman | watchman -j`
* Open `app_main_page.html` in a browser to see the app; open `app_job_profiles.html` to see the job profiles page.

# Architecture

* The Angular app is tied to the `body` tag of `app_main_page.html`
* The Angular app code is in `js/models.js` (main page) and `js/job_profiles_models.js` (job profiles page)
* All the data is in `js/extracted_data.js` or in `js/data.js` - the latter has data like dropdown text etc. This is to keep the code easier to read.

# Tests

There are tests! You run them using Karma:

`karma start`
