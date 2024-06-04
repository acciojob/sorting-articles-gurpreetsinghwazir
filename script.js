const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let list = document.createElement("div");
list.id = "band";
let getList = document.getElementById("band")

let orderlist = document.createElement("ul");


for (let index = 0; index < bands.length; index++) {

	let uorderlist = document.createElement("li");
	let sorted = uorderlist.textContent = bands[index];
	orderlist.append(uorderlist);
    list.append(orderlist);    

	console.log(sorted)
}
document.body.append(list);