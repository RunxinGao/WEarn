var stuff = new Array(10);
stuff[0] = new Array('"image/Event/marathon.png"', "Parkinson's Half Marathon", "Tuesday, Apr 13th, 3:00pm", "UW Gymnastic Center", '"event/event0.html"');
stuff[1] = new Array('"image/Event/blanket.jpg"', "Make a Blanket Sew-In", "Tuesday, Apr 13th, 3:00pm", "Madison Children Museum", '"event/event1.html"');
stuff[2] = new Array('"image/Event/earthDay.jpg"', "Earth Day at Spring Harbor", "Tuesday, Apr 13th, 3:00pm", "Spring Harbor Civic Center", '"event/event2.html"');
stuff[3] = new Array('"image/Event/endHunger.jpg"', "End hunger in our community!", "Tuesday, Apr 13th, 3:00pm", "Dane County Community Center", '"event/event3.html"');
stuff[4] = new Array('"image/Event/crazyLegs.jpg"', "Crazylegs Classic Volunteer", "Tuesday, Apr 13th, 3:00pm", "Capital Square", '"event/event4.html"');
stuff[5] = new Array('"image/Event/miniMarathon.png"', "Madison Mini-Marathon", "Tuesday, Apr 13th, 3:00pm", "Madison Gym Center", '"event/event5.html"');
stuff[6] = new Array('"image/Event/masterGardener.png"', "Master Gardender Volunteer Training", "Tuesday, Apr 13th, 3:00pm", "Madison Greenbush Garden", '"event/event6.html"');
stuff[7] = new Array('"image/Event/volAward.png"', "Community Volunteer Awards", "Tuesday, Apr 13th, 3:00pm", "Madison Civic Center", '"event/event7.html"');
stuff[8] = new Array('"image/Event/businessVol.png"', "Business Volunteer Network", "Tuesday, Apr 13th, 3:00pm", "Madison Business Center", '"event/event8.html"');
stuff[9] = new Array('"image/Event/presHouse.png"', "Pre House Volunteer and Donation Appreciation", "Tuesday, Apr 13th, 3:00pm", "Madison Pres House", '"event/event9.html"');
stuff[10] = new Array('"image/EventBg.png"', "Volunteer Pre Event", "Tuesday, Apr 13th, 3:00pm", "Madison Public Center", '"event/event10.html"');
stuff[11] = new Array('"image/Event/historyVol.jpg"', "History Matters", "Tuesday, Apr 13th, 3:00pm", "Madison History Museum", '"event/event11.html"');
stuff[12] = new Array('"image/Event/monetflower1.jpg"', "Impressionist Art Event", "Tuesday, Apr 13th, 3:00pm", "Madison Art Museum", '"event/event12.html"');
stuff[13] = new Array('"image/Event/shelter.jpg"', "Volunteer in Animal Shelter", "Tuesday, Apr 13th, 3:00pm", "Madison Human Society", '"event/event13.html"');
stuff[14] = new Array('"image/Event/zooTrip.JPG"', "Your Help is Needed in ZOO", "Tuesday, Apr 13th, 3:00pm", "Madison Public Zoo", '"event/event14.html"');
stuff[15] = new Array('"image/Event/digitalArt.jpg"', "Technology and Art", "Tuesday, Apr 13th, 3:00pm", "Madison Modern Art Gallery", '"event/event15.html"');
stuff[16] = new Array('"image/AgencyLogo.png"', "Children's Book Reading", "Tuesday, Apr 13th, 3:00pm", "Madison Public Library", '"event/event16.html"');

let gridCont = document.createElement('div');
gridCont.className = "grid-container";
gridCont.id = "gridForm";
document.getElementById('EventArray').appendChild(gridCont);

var basicLength = 9;

function createEventCard(i) {
    let div = document.createElement('div');
    div.className = "grid-item form-gradient mb-5";
    div.id = "event" + i;
    document.getElementById('gridForm').appendChild(div);

    let divEventForm = document.createElement('div');
    divEventForm.class = "card-body mx-4";
    divEventForm.id = "eventForm" + i;
    document.getElementById('event' + i).appendChild(divEventForm);

    let divPic = document.createElement('div');
    divPic.className = "eventPic";
    divPic.innerHTML = '<img src=' + stuff[i][0] + ' width="100%" height="220px" alt=""></img>';
    document.getElementById('eventForm' + i).appendChild(divPic); 

    let divContent = document.createElement('h3');
    divContent.class = "white-text mb-0 py-5 font-weight-bold";
    divContent.innerHTML = stuff[i][1] + "<br/>";
    document.getElementById("eventForm" + i).appendChild(divContent);

    let divEventLine = document.createElement('div');
    divEventLine.class = "md-form";
    divEventLine.id = "date" + i;
    document.getElementById('eventForm' + i).appendChild(divEventLine);

    let divDate = document.createElement('label');
    divDate.for = "form104";
    divDate.innerHTML = "Time: " + stuff[i][2] + "<br/>";
    document.getElementById("date" + i).appendChild(divDate);

    let divEventLineTwo = document.createElement('div');
    divEventLineTwo.class = "md-form";
    divEventLineTwo.id = "location" + i;
    document.getElementById('eventForm' + i).appendChild(divEventLineTwo);

    let divLoc = document.createElement('label');
    divLoc.for = "form104";
    divLoc.innerHTML = "Location: " + stuff[i][3] + "<br/>";
    document.getElementById("location" + i).appendChild(divLoc);

    let divEventLineThree = document.createElement('div');
    divEventLineThree.class = "md-form";
    divEventLineThree.id = "link" + i;
    document.getElementById('eventForm' + i).appendChild(divEventLineThree);

    let divMore = document.createElement('a');
    divMore.class = "eventLink";
    divMore.href = stuff[i][4];
    divMore.innerHTML = "Learn more...";
    document.getElementById('link' + i).appendChild(divMore);
}

for(i = 0; i < basicLength; i++){
    createEventCard(i);
}

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        var endLength = basicLength + 3;
        if(endLength >= stuff.length){
            endLength = stuff.length;
        }
        for(var i = basicLength; i < endLength; i++){
            createEventCard(i);    
        }
        basicLength = endLength;
    }
});

function clicked(){
    var input_value = document.getElementById('searchEvent').value;

    var rand = Math.floor((Math.random() * 36));

    var pElement = document.getElementById('searchDisplay');
    if(pElement.childNodes.length != 0){
        pElement.removeChild(pElement.childNodes[0]);
    }

    if(input_value.length == 0){
        //clear
    }
    else if(rand > 16){
        let searchResult = document.createElement('div');
        searchResult.className = "search-display";
        searchResult.innerHTML = input_value + " Not Found </br>";
        document.getElementById('searchDisplay').appendChild(searchResult);
    } else{
        let div = document.createElement('div');
        div.className = "grid-item form-gradient mb-5 random-display";
        div.id = "eventR";
        document.getElementById('searchDisplay').appendChild(div);

        let divEventForm = document.createElement('div');
        divEventForm.class = "card-body mx-4";
        divEventForm.id = "eventFormR";
        document.getElementById('eventR').appendChild(divEventForm);

        let divPic = document.createElement('div');
        divPic.className = "eventPic";
        divPic.innerHTML = '<img src=' + stuff[rand][0] + ' width="100%" height="220px" alt=""></img>';
        document.getElementById('eventFormR').appendChild(divPic); 

        let divContent = document.createElement('h3');
        divContent.class = "white-text mb-0 py-5 font-weight-bold";
        divContent.innerHTML = stuff[rand][1] + "<br/>";
        document.getElementById("eventFormR").appendChild(divContent);

        let divEventLine = document.createElement('div');
        divEventLine.class = "md-form";
        divEventLine.id = "dateR";
        document.getElementById('eventFormR').appendChild(divEventLine);

        let divDate = document.createElement('label');
        divDate.for = "form104";
        divDate.innerHTML = "Time: " + stuff[rand][2] + "<br/>";
        document.getElementById("dateR").appendChild(divDate);

        let divEventLineTwo = document.createElement('div');
        divEventLineTwo.class = "md-form";
        divEventLineTwo.id = "locationR";
        document.getElementById('eventFormR').appendChild(divEventLineTwo);

        let divLoc = document.createElement('label');
        divLoc.for = "form104";
        divLoc.innerHTML = "Location: " + stuff[rand][3] + "<br/>";
        document.getElementById("locationR").appendChild(divLoc);

        let divEventLineThree = document.createElement('div');
        divEventLineThree.class = "md-form";
        divEventLineThree.id = "linkR";
        document.getElementById('eventFormR').appendChild(divEventLineThree);

        let divMore = document.createElement('a');
        divMore.class = "eventLink";
        divMore.href = stuff[rand][4];
        divMore.innerHTML = "Learn more...";
        document.getElementById('linkR').appendChild(divMore);
    }

}

document.getElementById('searchbar').addEventListener('click', clicked);