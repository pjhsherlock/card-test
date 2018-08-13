function randomDate(start, end) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
  var date = new Date(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
  var date = new Date(date);
  return date.getDate() + '-' + monthNames[(date.getMonth() + 1)] + '-' +  date.getFullYear();
}

$(".c-instance__datetime").each(function(index) {
	$(this).html(randomDate(new Date(2004, 0, 9), new Date()));
});

// function randomLocation(start, end) {
//   var locationNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
//   "July", "Aug", "Sept", "Oct", "Nov", "Dec"
//     ];
// var randomItem = locationNames[Math.floor(Math.random()*locationNames.length)];
// }
// 		console.log(randomLocation());
// $(".c-instance__venue").each(function() {
// 	$(this).html(randomLocation());
// });

function randomLocation(start, end) {
	var locationNames = ["London", "Paris"
	];
	var Location = Math.floor(Math.random()*(locationNames.length));
}

$(".c-instance__venue").each(function(index) {
    $(this).html(randomLocation());
});
