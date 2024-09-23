const peopleArray = [
  { id: 1, name: "Cassaundra Heel", birthday: new Date(1973, 11, 23), children: 3, country:"French Polynesia", canProgram: true },
  { id: 2, name: "Hollis Munkley", birthday: new Date(1985, 6, 2), children: 1, country: "Portugal", canProgram: false },
  { id: 3, name: "Ignaz Dibbs", birthday: new Date(1975, 7, 23), children: 4, country: "Poland", canProgram: true },
  { id: 4, name: "Lydia Mortoon", birthday: new Date(2004, 6, 14 ), children: 3, country: "Philippines", canProgram: true },
  { id: 5, name: "Elva Hanrahan", birthday: new Date(1976, 5, 11), children: 2, country: "Kazakhstan", canProgram: true },
  { id: 6, name: "Danielle Moresby", birthday: new Date(1989, 9, 26), children: 2, country: "China", canProgram: true },
  { id: 7, name: "Christabella Pakes", birthday: new Date(1979, 5, 13), children: 5, country: "Poland", canProgram: false },
  { id: 8, name: "Dominga Gariff", birthday: new Date(1954, 6, 29), children: 2, country: "Armenia", canProgram: true },
  { id: 9, name: "Lonny Mathet", birthday: new Date(1963, 10, 20), children: 0, country: "Belarus", canProgram: false },
  { id: 9, name: "Farlie Fadden", birthday: new Date(1954, 3, 27), children: 4, country: "Poland", canProgram: false },
];


// How many children are in total in the peopleArray list?

let totalChildren = 0;

for (let i = 0; i < peopleArray.length; i++) {
    totalChildren += peopleArray[i].children;
}
console.log("Total number of children:", totalChildren);


/* Outputs one string per person formatted as such:
name: Age*/
for (let i = 0; i < peopleArray.length; i++) {
  console.log(`Name:${peopleArray[i].name} Birthday: ${peopleArray[i].birthday}`)
}

