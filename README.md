# **500 Pixels REACT Photo Viewer**

## Versions/Commits

## V. 0.1
*Aug 30 2020*
 - Skeleton REACT Project - ZERO functionality.

## V. 0.5

 Aug 31 2020
 - Successful GET from 500px API utilizing proxy server (https://cors-anywhere.herokuapp.com/)
 - Using Axion 3rd party for HTTP requests.  Not sure if it's necessary yet.  Will keep for now.
 
## V. 0.76

Sept 2 2020
- Added Modal for main photo display
- Tried Bootstrap for React (buggy as hell, drove me mental)
- Tried Material Design for React, WAY too fat for this purpose.
- Settled on react-responsive-modal, nice and small and simple.  Styling could be better...

## V. 0.98

Sept 4 2020
- Styled the pic list aiming for a Masonry display.  Tried a couple things, settled on react-masonry-css, seems to be a pretty decent plugin.
- NO pagination yet...

## V. 2.0

Sept 8 2020
- polished up styling, hovers, color, etc...
- added env file containing consumer key
- final build, test, build and re-test.


## Final Plugin List
- react-responsive-modal
- react-spinners
- react-masonry-css


## Task Brief

Your solution will be assessed before an on-site interview. If you are invited for an interview, we’ll have some follow-up questions about why you designed and implemented your app the way you did, and ask questions about how your app might evolve in different situations.  
  
Task 1 - Photo Showcase  
Create a simple web app to showcase Popular photos from 500px. Specifically, it should show photos in our “Popular” feature dynamically obtained from the 500px API. The list should support pagination, allowing users to browse through multiple pages of content. Feel free to choose exactly how you’d like to present the photos based on your own intuition.  
  
Task 2 - Photo Details  
When user clicks on a photo on the grid, a full screen version of the photo should be displayed along with more detailed information about the photo, such as its title, description, and any other data you think might be useful to display.  
  
Task 3 - Cosmetics and Testing  
This task is fairly open - further polish your web application and show off some of your strengths. Some ideas include:  
Use your CSS talent to beautify your UI; improve the style, add animations, etc. Increase the reliability of your application by adding extensive test coverage  
Feel free to choose the direction you want take (or even do both if you have extra cycles). Use this opportunity to show us what you’re good at in addition to coding.  
  
Use this API consumer key in your app: P7LLhKkPAnPUpbfAXk3Jq2iDjYmCx87zgfEDxQVS Please do NOT commit this key into public repo. Try to think of a way to import this key dynamically in local dev only.