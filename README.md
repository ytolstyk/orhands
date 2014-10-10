OR Hands
========

The goal of this application is to

* connect patients who have had surgery or may have surgery in the future through private messages
* provide reviews and feedback for hospitals
* provide reviews and feedback for surgeons
* provide first-person feedback about specific surgeries, expected recovery times, possible side-effects, and medication requirements

# Implementation Overview
The project is broken up into the following categories:

* Admin access for editing/moderating
* Utility scripts
* User authentication
* User profiles
* Hospital, doctor, surgery search
* Map with hospitals
* Hospital show page
* Surgery show page
* Surgeon show page
* Reviews
* Ratings
* Private Messages

Choose a feature you'd like to implement and go for it.

# Admin Access

* Admin should be able to edit posts to moderate, but also to censor protected health information (PHI)
* Admin should have a page to review hospitals, surgeons, and surgeries that people added themselves
* Admin should be able to add and modify hospitals, surgeons, and surgeries

# Utility Scripts

* A script should parse the hospital information data, figure out if it already exists in the database, and add it to the seed file if it's new.
* A script should scrape major hospital organizations websites for surgeons and surgeries
  * Another script would parse the surgeon/surgery information and add them appropriately to the database (with proper hospital associations)

# User authentication

* Everyone should be able to access the main site functionality without logging in or signing up
* If a user wants to rate, comment, or send a message, the modal pop-up authentication should require them to sign in or sign up without leaving the page.
* Use AJAX for authentication and signup

# User Profiles

* User profile should have a privacy setting
  * If the user wants to display all his or her reviews, display the reviews
  * If the user wants to display all his or her ratings, display the ratings
* There should be a "send private message" button that opens up a form to send a message
* That's it - no more information should be provided about the user

# Hospital, Doctor, Surgery search

* Users should be able to type the approximate hospital name or part of the name.
* Users should be able to type the surgeon's first or last name or both in any order
* The search should do fuzzy matching for surgeries because users are expected to misspell the medical terms
* The search should have a selector for All, Hospitals, Doctors, Surgeries to limit the search

# Map

* The user should be able to type in their zip code, address, or city and state to view all the hospitals in his or her neighborhood
* Each hospital should be represented with a dot on the map - think AirBnB
* As the person scrolls through the map, the search should refine itself and provide new search results
* (Extra) The user should be able to plot a course to the hospital from their desired location
* (Extra) The user should be able to plot a course by adding waypoints on the map (if he or she wants to drive to check out multiple hospitals in one day)

# Hospital Show Page

* The hospital should have an address and phone number displayed at the top
* If we can get a picture, get a picture for the hospital
* The hospital should list their surgeons
* The hospital should list surgery categories
* The hospital should display its rating
* The hospital should display reviews with pagination
* Each hospital review should provide a link to the show page of that specific review, so people can share it
* Logged in users should be able to add a new review by filling out a simple form, and their review should go at the top of the list

# Surgery Show Page

* Surgery should have a list of reviews sorted by the most recent
* Logged in users should have a from at the bottom to review the surgery
* Should provide a link to a list of hospitals that offer this surgery
* Should provide a link to a list of doctors who perform this surgery

# Doctor Show Page

* Must have a rating at the top
* Should have reviews at the bottom just like the hospital/surgery
* Should provide a link to a list of surgeries he or she performs
* Should provide a link to the hospitals in which he or she works

# Reviews

* Should ask for specific information about the hospital, doctor, or surgery
* Reviews should provide links to the user profile
* Reviews should have drop-down to send the author a private message

# Ratings

* Each hospital and doctor should have a rating based on their rating records
* Each user has a rating record for each rating he or she provides (for a hospital or a doctor)
* The rating record is updated each time a review is submitted with a number from 0 to 10
* The rating value is stored as a true float
* The display shows the rating up to one decimal point
* The rating is based on 

# Private Messages

* User should be able to send each other private messages
* Private messages shouldn't be modified
* Private messages can be deleted
* User should be able to reply to private messages
* User should be notified when they have unread private messages in the main toolbar