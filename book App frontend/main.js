let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let phoneInput = document.querySelector("#phoneNo-input");
let submitBtn = document.querySelector("#submit");
let data = document.querySelector("#details-container");

submitBtn.addEventListener("click", onsubmit);

window.addEventListener("DOMContentLoaded", creatingList());

async function onsubmit(e) {
	try {
		let myobj = {
			name: nameInput.value,
			email: emailInput.value,
			phoneno: phoneInput.value,
		};
		await axios.post("http://localhost:4000/api/v1/formsubmit", myobj);
		nameInput.value = "";
		emailInput.value = "";
		phoneInput.value = "";
		creatingList();
		
	} catch (error) {
		console.log(error);
	}
	e.preventDefault();
}

async function creatingList() {
	try {
		let newUL = document.createElement("ul");
		let res = await axios.get("http://localhost:4000/api/v1/formsubmit");
		let existingData = res.data.result;
		// console.log(existingData)

		if (data.firstElementChild) {
			data.firstElementChild.remove();
		}
		for (let i = 0; i < existingData.length; i++) {
			let newli = document.createElement("li");
			
			newli.setAttribute("nameSpan", existingData[i].name);
			newli.setAttribute("emailSpan", existingData[i].email);
			newli.setAttribute("phoneSpan", existingData[i].phoneno);
			newli.setAttribute("idSpan", existingData[i].id);
			newli.appendChild(
				document.createTextNode(
					`name: ${existingData[i].name}, email: ${existingData[i].email}, phone: ${existingData[i].phone}`
				)
			);
			let delbtn = document.createElement("button");
			let editbtn = document.createElement("button");
			editbtn.textContent = "edit";
			delbtn.textContent = "delete";
			newli.appendChild(delbtn);
			newli.appendChild(editbtn);
			newUL.appendChild(newli);
			delbtn.addEventListener("click", delitem);
			editbtn.addEventListener("click", edititem);
		}
		data.appendChild(newUL);
	} catch (error) {
		console.log(error);
	}
}

function edititem(e) {
	e.preventDefault();
	let listItem = e.target.parentElement;
	let id = listItem.getAttribute("idSpan");
	let nameElement = listItem.getAttribute("nameSpan");
	let emailElement = listItem.getAttribute("emailSpan");
	let phoneelement = listItem.getAttribute("phoneSpan");
	nameInput.value = nameElement;
	emailInput.value = emailElement;
	phoneInput.value = phoneelement;
	listItem.remove();
	axios
		.delete(`http://localhost:4000/api/v1/formsubmit/${id}`)
		.then((res) => console.log("deleted"))
		.catch((err) => console.log(err));
}

function delitem(e) {
	e.preventDefault();
	let listItem = e.target.parentElement;
	let id = listItem.getAttribute("idspan");
	listItem.remove();
	axios
		.delete(`http://localhost:4000/api/v1/formsubmit/${id}`)
		.then((res) => console.log("deleted"))
		.catch((err) => console.log(err));
}
