function tellFortune() {
    window.alert("Read your fortune, try it!");
    let childrenNumber = Math.floor(Math.random() * 6);   
    let partnerName = Math.floor(Math.random() * 7);
    let name = ["Stephen", "David", "Josh", "Tom", "Nick", "John", "Brit"];
    let yourPartner = name[partnerName];
    let placeName = Math.floor(Math.random() *7);
    let place = ["San Diego", "Hawaii", "San Francisco", "New York", "Miami", "Texas", "Chicago"];
    let yourPlace = place[placeName];
    let yourJob = Math.floor(Math.random() *6);
    let job = ["Doctor", "Lawyer", "Pilot", "Teacher", "CEO", "Astronaut"];
    let title = job[yourJob];
    let result = tellFortune;
    window.alert("You will be a " + title + " in " + yourPlace + " , and married to " + yourPartner + " with " + childrenNumber + " kids" + ".");
}
    tellFortune();