INITIAL SEARCH

1) User types in a location in the search bar

2) The submit button grabs the values from the search field and toggle switches (our query parameters), creates a URL and sends a GET request.

3) The backend receives the request, pulls the location out of the request parameters and creates a request to send to the Pinball API with location parameter.

4) The backend then receives the response from the pinball API, formats a second request to Yelp based on the first pinball location[0].

5) Shape the response and send it back to the frontend. The frontend places the response in state.

6) Map through the pinballLocation array and render pinball components. Map through restaurant array and render restaurant components. Send restaurant and pinball location data to Google Maps API. Receive response from Googgle API and render the map with combined data (different colored pins for pinball location and restaurants).

----------
SELECT ANOTHER RESTAURANT

1) The user selects another pinballLocation, the frontend then formats a new request to the backend server (/restaurants) based on the location of the pinballLocation selected, then sends it.

2) The backend receives the request, pulls the selected pinballLocation from the response, formats a new request and sends it to the YELP! API.

3) The backend server receives the YELP response, pulls the relevant restaurant data from the response, shapes the data, and then sends it back to the frontend.

4) The frontend receives the shaped response, then re-renders the restaurants component using the new restaurant data.

-----------
FAVORITE OR UNFAVORITE PINBALL LOCATION
(Only available after login)

1) The frontend renders a heart button beside each pinballLocation. When a user clicks the heart button, the frontend  instantiates a new `favorites` objects, then the frontend sends a POST request to the backend server (/favorites) complete with the new object.

2) The backend receives the response, then sends the object to the MongoDB database. 

3) When the user clicks the FAVORITES page, the frontend sends a GET request to the backend with the user's Auth0 email.

4) The backend pulls sends a Mongoose request to the MongoDB.

5) The backend receives the response from the database and sends it back to the frontend.

6) The frontend renders the response on the FAVORITES page using the `pinballLocation` component.

