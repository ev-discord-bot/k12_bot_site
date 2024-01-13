new TypeIt("#k12-text", {
    strings: "K12 Bot.",
    speed: 350,
    lifeLike: true,
    waitUntilVisible: true,
 }).go();
 
 new TypeIt("#companionMethods", {
       speed: 50,
       lifeLike: true,
       waitUntilVisible: true,
       loop: true,
    })
    .type("Display's Schools Announcments.", {
       delay: 300
    })
    .pause(300)
    .delete(1)
    .pause(300)
    .delete(1)
    .pause(300)
    .delete(null, {
       delay: 90
    })
    .type("The Calendar.", {
       delay: 300
    })
    .pause(300)
    .delete(1)
    .pause(300)
    .delete(1)
    .pause(300)
    .delete(null, {
       delay: 90
    })
    .type("And so much more!", {
       delay: 1000
    })
    .go();
 
 new TypeIt("#headertext", {
       speed: 100,
       waitUntilVisible: true,
       lifeLike: true,
       loop: false,
       afterComplete: function (instance) {
          setTimeout(function () {
             document.querySelector("#headertext .ti-cursor").style.display = "none";
          }, 1300);
       }
    })
    .type("The K12 Bot", {
       delay: 1000
    })
    .move(-8, {
       delay: 200
    })
    .type(" Unofficial <br>", {
       delay: 1000
    })
    .move(8, {
       delay: 200
    })
    .go();
 
 
 new TypeIt("#about-text", {
    strings: "About Bot",
    speed: 250,
    lifeLike: true,
    waitUntilVisible: true,
 }).go();
 
 
 new TypeIt("#features-text", {
    strings: "Features",
    speed: 250,
    lifeLike: true,
    waitUntilVisible: true,
 }).go();
 
 
 new TypeIt("#staff-text", {
    strings: "Staff",
    speed: 250,
    lifeLike: true,
    waitUntilVisible: true,
 }).go();