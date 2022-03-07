# Software Requirements

## Vision

- What is the vision of this product?
  - Make an easy to use application that allows pinball fans to plan fun "pinball dates" at nearby establishments and restaurants. 
- What pain point does this project solve?
  - Helps provide inspiration to the user for planning an entertaining experience.
  - Presents multiple data sets without having to reference multiple websites.
  - Removes the friction of sifting through vague Google or Yelp search results for pinball machines availability.
  - Provide a quick and easy way to plan a unique fun event.
- Why should we care about your product?
  - It is unique, it is fun and it will be useful to those looking to get out of their homes and explore during post-quarantine times.

## Scope (In/Out)

In - What will your product do?

- Describe the individual features that your prodjct will have.
  1. Users can enter a location which will return a list of available establishments.
  2. The app will allow the user to see the pinball data.
  3. The app will show nearby restaurants.
  4. Results can be filtered based on criteria.
  5. By using auth0 the user will be able to save preferences and favorites.
  
Out = What will your prodcut _not_ do

  1. Will not be a social media app.
  2. Will not be a dating site like tinder.

## Minimum Viable Product (MVP)

- What will your MVP functionality be?
  - The app will be able to provide accurate, nice looking results to the user's search.
  - To satisfy the requirements of the assignment we will be using auth0, MongoDB and an API call.

- What stretch goals are you going to aim for?
  - Being able to provide walking and/or driving directions to the selected location.
  - Expand on the styling to include photos of the machines and possibly the locations.
  - Render more data based on the results from the API call.
  - Geolocation functionality option.
  - Filter through pinball data based on machines available.

## Functional Requirements

- The user will be able to make and update account.
- The user account will save search preferences.
- The user can search results from both the pinballmap and the yelp APIs.
- Returned data has to be returned in an efficient and presentable way.
- User will be able to add a machine and/or location to their "favorites" list.

## Data Flow

![Domain Model](./domain-model.png)

## Database Schema Example

`{
    
    "pinballLocations" : [ 

        {
        "pinballLocationName" : "Wizard's Arcade",
        "pinballLocationAddress" : "241 Elm St., Seattle, WA",
        "pinballMachines" : 
        [
            {
            "machineName" : "Addams Family"
            }
        ],
    "restaurantLocations" : [
        {
            "restaurantName" : "Taco Bell",
            "restaurantAddress" : "505 Elm St., Seattle, WA",
            "restaurantCuisine" : "Fast Food",
            "restaurantRating" : "2.3"
        }
        ]
    }
    ]
}`

![Database Info](./database-info.png)