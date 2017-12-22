## My Party!
  My Party! is a tracking and discovery application to help revelers and
  party-goers record their favorite drinks.  My Party! allows the user to enter
  their own favorite beverages, assign a rating, and an occasion.  Users can
  modify the recipes later if they want to improve upon what they already posted.

  My Party! is also a social site where beverages are crowd sourced.  As
  beverages are added by users signed up to the site, these beverages become
  available for viewing by all other members. The more members who join the
  better selection to choose from.  

  Currently there are two points of integration.  First is the random drink that
  appears on the My Party front page.  The second is a drink name search that is
  available to the user when they go to add a beverage to the My Party! site.
  The external search is intended to enhance the experience of My Party! by
  allowing the user to more quickly enter a list of beverages that they can then
  modify at a later day.

## On Github & Heroku
Front End Code Repo on Github:
  https://github.com/MBKeeler/My-Party-Front

Frond End Code Hosted on Github:
  https://mbkeeler.github.io/My-Party-Front/

Back End Code Repo on Github:
  https://github.com/MBKeeler/My-Party-Back

Heroku:
  https://enigmatic-wildwood-15287.herokuapp.com/

## Wire Frames & ERDs
  https://imgur.com/a/bPHkz

## Front-end Technologies
Javascript
Ajax
Bootstrap
Jquery
Handlebars.js
HTML
CSS
Github Pages (hosting front-end)

## 3rd Party Integration - theCocktaildb.com

  The Cocktail DB is a crowd sourced db of various beverages.  The site provides
  an API where developers can test integration.  This version of the My Party!
  makes use of the open development API which uses a publicly available key.

  A private production key is available and has been requested but was not
  received as of this submission.  In a next version of this app a private
  production key will be used and code refactored so that the rest API calls
  will be made from the backend.   

## User Stories & Inspirations

MVP
Epic: As a user I want a website where I can record my favorite beverages
  - Story: As a user I want to be able to join as a user so that my data
  persists
  - Story: As a user I want to be able to change my password
  - Story: As a user I want to be able to logout and have my password cleared
  - Story: As a user I want to be able to enter a beverage into a website using
  a simple and easy to use interface
  - Story: As a user I want to be able to modify the beverage after I put it up on
  the website
  - Story: As a user I want to be able to view the details of a beverage I
  entered
  - Story: As a user I want to be able to delete a beverage I don’t like
  - Story: As a user I want to be able to see a list of beverages that I entered
  - Story: As a user I want to be abel to see a list of beverages that were
  entered by others

Version Next
Epic: As a user I want better display and filtering features
 - Story: As a user I want to be able to filter just on the beverage occasion or
  rating.
 - Story: As a user I want to limit the number of  beverages viewable in a list
 - Story As a user I want to be able to print or email a beverage easily

Integration User Stories
  Partially realized
  Epic: As a user I want integration with theCocktaildb.com
    - Story: As a user I want to be able to search theCocktaildb.com for a
      beverage by name
    - Story: As a user I think it would be fun to get a random beverage from
      theCocktaildb.com when I visit the site

  Version Next:
  Epic: As a user I want integration with theCocktaildb.com
   - As a developer I need to get a production key from theCocktaildb.com and
   refactor code so that calls are made from the backend to keep the production
   key secret.
   - Story: As a user I want to be able to more easily copy a beverage’s recipe
      from an external source db (greater schema compatibility with
      theCocktaildb.com)
   - Story: As a user I want to see the beverage thumbnails provided by
      theCocktaildb.com
   - Story: As a user I want to be able to search theCocktaildb.com for a
      beverage by ingredient
