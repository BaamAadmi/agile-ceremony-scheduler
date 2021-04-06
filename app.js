const readline = require("readline");
let team = ['Leno', 'Tierney', 'Gabriel', 'Holding', 'Bellerin', 'Xhaka','Partey', 'Ødegaard', 'Aubameyang','Lacazette','Saka']; // default

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Please enter all your team members names separated by space: `, (input) => {
	if(input.trim(' ') != '') {
		team = input.split(' ');
	} else {
		console.log("Using default resource names");
	}
	rl.close();
});

rl.on("close", () => {
    generateCalendar(team);
});


const generateCalendar = (resources) => {
	var d = new Date(),
	    year = d.getYear(),
	    mondays = [];

	d.setDate(1);

	// Get the first Monday in the month
	while (d.getDay() !== 1) {
	    d.setDate(d.getDate() + 1);
	}

	// Get all the other Mondays in the Year
	let count = 0;
	maxResources = resources.length -1 ;
	while (d.getYear() === year) {

	    var pushDate = new Date(d.getTime());
	    mondays.push({ 'date':  pushDate.getDate() + '-' + (pushDate.getMonth()+1) + '-' + pushDate.getFullYear(), 'person': resources[count] });
	    count = count++ == maxResources ? 0 : count++; 
	    d.setDate(d.getDate() + 7);
	}
	
	console.log(`Results generated for upcoming ${mondays.length} weeks this year`);
	console.table(mondays);

};