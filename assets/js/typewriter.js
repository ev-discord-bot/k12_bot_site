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


 new TypeIt("#about-bot-info-text", {
   strings: "My Discord bot is a dynamic and user-friendly tool that adds a variety of exciting features to your server experience. The K12 bot keeps users up to date with important information by effortlessly displaying recent announcements via slash and prefix commands. Aside from that, the AI chat functionality is constantly evolving, with regular updates and fixes to ensure a smooth and engaging interaction. Furthermore, a slew of new commands and features are on the way, promising to make the bot even more versatile and feature-rich. The Discord bot is designed to cater to a variety of preferences, making it a valuable addition to any server, whether you're looking for informative updates or interactive conversations.",
   speed: 10,
   lifeLike: true,
   waitUntilVisible: true,
}).go();


new TypeIt("#shows-announcments-text", {
   strings: "The K12 bot could display all recent announcements via slash and prefix commands, among other things. Like a calculator, it displays the weather, random memes from Wretched_Snow, and a simple currency system that is still in development.",
   speed: 10,
   lifeLike: true,
   waitUntilVisible: true,
}).go();


 new TypeIt("#ai-chat-text", {
   strings: "The AI chat in the Discord bot is continuously evolving, receiving regular updates, fixes, and exciting new features to enhance its functionality and user experience.",
   speed: 10,
   lifeLike: true,
   waitUntilVisible: true,
}).go();


new TypeIt("#more-coming-soon-text", {
   strings: "Stay tuned for an array of additional commands and features set to be introduced soon, enriching the Discord bot with even more capabilities for an enhanced user experience.",
   speed: 10,
   lifeLike: true,
   waitUntilVisible: true,
}).go();