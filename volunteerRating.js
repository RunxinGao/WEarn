// initial ratings
const agencyRating = 4.5;

// total starts
const starsTotal = 5;

// Run getRatings when DOM loads
if (document.readyState !== "loading") {
    getRatings(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
    document.addEventListener("DOMContentLoaded", getRatings);
}

// get ratings
function getRatings(){

        // Get percentage
        const agencyPercentage = (agencyRating / starsTotal) * 100;

        // Round to nearest 10
        const agencyPercentageRounded = `${Math.round(agencyPercentage / 10) * 10}%`;

        // console.log(agencyPercentageRounded);

        // set width of starts-inner to percentage
        document.querySelector(`.agencyRating .ratingStars-inner`).style.width = agencyPercentageRounded;

        // Add number rating
        document.querySelector(`.agencyRating .number-rating`).innerHTML = agencyRating;
}


