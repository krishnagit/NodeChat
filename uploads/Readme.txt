---------------------------------------------------------
My Book - Exercise for JavaScript, HTML and basic CSS
---------------------------------------------------------

Good luck with your exercise. 

Requirement
-----------

1. This UI design is just an outline to give you the feelers for what is needed. The idea is to workout and implement all the concepts you have learned in JavaScript.
You can be innovative on colors, design and any additional thoughts on the design/code will be a nice touch.

2. No Server is required. Use only HTML, Javascript and CSS. I should be able to open the file directly using a browser.
3. Modular directory structure must be there for feed, profile etc.
4. Separate CSS files should be used such as feed.css, profile.css and mybook.css
5. You do not have to use the background colors defined in wireframe instead use your creativity.
6. Proper source code comment on each method is required.
7. Use 'strict' in all JavaScript files.

Notes: 
------

All the notes below are only as a guidance, you have to do at least this. Doing more will be appreciated. The idea behind the following notes is to help 
you understand the requirements with more details. But the wireframes are more than good enough. If you think there are any flaws in it, feel free to improve.

Sign in page
------------

1. Design the page using HTML, with CSS
2. Define a <form> that will allow the user to sign in. For now you can hard code the user credentials.  
3. Username field will allow maximum of 8 characters. Please do a client side validation and notify accordingly.
4. Password field will allow minimum of 6 characters. Please mask the password by "*".
5. Use a place-holder text to display the label for username and password.
6. Please show the appropriate error message when the user enters invalid username/password.
7. Successful login will lead to Feeds page.


Feeds Page
----------

This  is similar to the main page of Facebook. These are just general guidelines, you can be creative as you want. 

1. Text feed - What ever text user typed. 
2. URL feed is a post with a HTTP link. When clicking on link it should open in new browser tab. 
3. When user enters the text or URL in the top text box and click on post, it must be added to the existing feed and page be refreshed.
4. When click on X button on the feed should delete the feed.
5. Save the date time of the feed creation and show it.

Profile
--------

1. Design a page with <form> for profile.
2. Use required validation provided by HTML form for name (allow max 50 char), age (validation to provide 0 to 100), phone (allow number only) and email. 
3. Address is multi line textbox.
4. Save button should be enabled, only if all the mandatory fields are filled.
5. Use * to denote mandatory fields.
6. Profile picture should be selected using <input type="file"> showed on the profile picture canvas.
7. When clicking save, it should take all the data and if profile picture is selected it should get the image data from canvas.
8. Use ProfileService.save(userId, Profile)


Services
---------

1. The data captured in UI should be stored in memory. No database required.
Define a Feed array to store array of feed objects.

2. FeedService should be introduced with 
    1. createFeed(Feed)
    2. deleteFeed(feedId)
   NOTE : Use Javascript Closure to define this service class. 
   NOTE : All these above method should store and retrieve data with the Feed store.


Define ProfileStore to store based on userId.
3. Profile Service,
    1. saveProfile(Profile) 
    2. Define profile objects based on UI fields.
    
Objects
--------

NOTE : Use inheritance to define feedobjects.
NOTE : Define Feed object using javascript function.
1. Feed {
    _id,
    _type
   }
   
   NOTE : define getId(), getType() using javascript prototype.
   
   
2. URLFeed extends Feed {
    url;
   }
   NOTE : define getFeed() using javascript prototype and it should return url.
3. TextFeed extends Feed {
   }
   NOTE : define getFeed() using javascript prototype and it should return the text.

Use instanceof, try/catch in appropriate service calling section


