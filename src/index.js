// index.js


// Callbacks
const handleClick = () => {
  
  // Add code
    //tales the ramen menu, adds an event listener for when an item is clicked
    document.querySelector("#ramen-menu").addEventListener("click", event => {
      console.log(event)
      //when clicked, we create a variable that takes the ID of the targetted picture
      const idNo =event.target.id;
      // fetches the specific object that was selected based on id number(object within array)
      fetch(`http://localhost:3000/ramens/${idNo}`)
      //converts json to JS
      .then(response => response.json())
      // for the specific object selected
      .then(obj => {
        //set each filler to the respective info pulled from the JSON file
        document.querySelector('.detail-image').src = obj.image
        document.querySelector('.name').textContent = obj.name
        document.querySelector('.restaurant').textContent = obj.restaurant
        document.querySelector('#rating-display').textContent = obj.rating
        document.querySelector('#comment-display').textContent = obj.comment
        

        })
  })

};

const addSubmitListener = () => {f
  // Add code
  //queryselect form
  document.querySelector('#new-ramen').addEventListener("submit", event => {
    event.preventDefault()
    const newImage = event.target.name.value
    const newImg = document.createElement('img')
    newImg.src = newImage
    document.querySelector('#ramen-menu').append(newImg)
  //create a new image element
    //queryselect #new-image
    //const imageContent = take the text from #new-image
    // new image element.src = imageContent
    //queryselect ramen menu.append new image element

  })
  //addeventlistener submit, event
  //event. preventdefault
  // create element
  //
  //
}

const displayRamens = () => {
  // Add code
  //fetch the ramen images using the url
fetch("http://localhost:3000/ramens")
// convert the json to JS
.then(response => response.json())
// first ramen parameter is the whole array 
.then(ramen => {
  // for each grabs each object within
  ramen.forEach(item => {
    //creates an image tag
    const img = document.createElement('img'); 
    //sets the image to equal the image value (key-value pair) from the DB object
    img.src = item.image;
    // sets the id value to equal the id value (key-value pair) from the DB object
    img.id = item.id;
    //appends the image to the id #ramen-menu
    document.querySelector('#ramen-menu').append(img);
  });
  
  handleClick();
})

}


const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()
}

main()


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};


//create an image tag
//for each image, add it to a tag .src
//append each image to the div 
//
