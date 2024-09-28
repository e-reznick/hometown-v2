var images;

function randomInt(n) {
    // Return a random number from in [0, n[
    return Math.floor(Math.random()*n);
}

function randomMember(arr) {
    // Return a random member of the array
    return arr[randomInt(arr.length)]
}


images = ['https://res.cloudinary.com/essential-living/image/upload/c_fill,g_auto,w_1500/f_auto/q_auto/v1/Blog/Most%20expensive%20places%20to%20live%20in%20UK/london-skyline?_a=ATO2BAA0', 'https://media.cntraveler.com/photos/66b63b6472d03760ad5fd825/16:9/w_2560%2Cc_limit/london-GettyImages-1869881584.jpg', 'https://www.bigissue.com/wp-content/uploads/2024/01/Untitled-design-40.jpg'];
let element_carouselImage = document.getElementById('carouselImage');
let new_img = document.createElement('img');
new_img.setAttribute("src", randomMember(images));

element_carouselImage.appendChild(new_img);


document.getElementById('prevButton').addEventListener('click', (event) => {
    let element_carouselImage2 = document.getElementById('carouselImage');
    element_carouselImage2.replaceChildren();
    images.unshift(images.pop());
    let new_img2 = document.createElement('img');
    new_img2.setAttribute("src", images.slice(-1)[0]);

    element_carouselImage2.appendChild(new_img2);

});

document.getElementById('nextButton').addEventListener('click', (event) => {
    let element_carouselImage3 = document.getElementById('carouselImage');
    element_carouselImage3.replaceChildren();
    images.push(images.shift());
    let new_img3 = document.createElement('img');
    new_img3.setAttribute("src", images[0]);

    element_carouselImage3.appendChild(new_img3);

});
