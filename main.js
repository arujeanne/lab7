const h1 = document.querySelector('h1')
h1.remove()

let lab7 = document.createElement('h1')
lab7.innerText = "Lab7 Assignment"
lab7.style.color = "blue"

const line = document.createElement('hr')

let task = document.createElement('h2')
task.innerText = "Task"
task.style.color = "red"

const paragraph = document.createElement('p')
paragraph.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"

const list = document.createElement('ul')

let item1 = document.createElement('li')
item1.classList.add("odd")
item1.innerHTML = "find elements in the DOM (<b>5 points</b>);"

let item2 = document.createElement('li')
item2.classList.add("even")
item2.innerHTML = "create/add/remove elements (<b>5 points</b>);"

let item3 = document.createElement('li')
item3.classList.add("odd")
item3.innerHTML = "change content of the elements (<b>5 points</b>);"

let item4 = document.createElement('li')
item4.classList.add("even")
item4.innerHTML = "change styles of the elements (<b>5 points</b>);"

let item5 = document.createElement('li')
item5.classList.add("odd")
item5.innerHTML = "change attributes of the elements (<b>5 points</b>);"

let item6 = document.createElement('li')
item6.classList.add("even")
item6.innerHTML = "change classes of the elements (<b>5 points</b>)."

list.appendChild(item1)
list.appendChild(item2)
list.appendChild(item3)
list.appendChild(item4)
list.appendChild(item5)
list.appendChild(item6)


const line2 = document.createElement('hr')
const line3 = document.createElement('hr')

let sub = document.createElement('h2')
sub.innerText = "Submission"
sub.style.color = "red"

const paragraph2 = document.createElement('p')
paragraph2.innerHTML = "To submit your work, follow these instructions:"

const list2 = document.createElement('ul')

let it1 = document.createElement('li')
it1.classList.add("odd")
it1.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>)."

let it2 = document.createElement('li')
it2.classList.add("even")
it2.innerHTML = "Clone this repository to your local machine and work inside it."

let it3 = document.createElement('li')
it3.classList.add("odd")
it3.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one h1 tag with 'Hello, World!' message (<b>1 point</b>)."

let it4 = document.createElement('li')
it4.classList.add("even")
it4.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)"

let it5 = document.createElement('li')
it5.classList.add("odd")
it5.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."

let it6 = document.createElement('li')
it6.classList.add("even")
it6.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."

let it7 = document.createElement('li')
it7.classList.add("odd")
it7.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."

list2.appendChild(it1)
list2.appendChild(it2)
list2.appendChild(it3)
list2.appendChild(it4)
list2.appendChild(it5)
list2.appendChild(it6)
list2.appendChild(it7)

document.body.appendChild(lab7)
document.body.appendChild(line)
document.body.appendChild(task)
document.body.appendChild(paragraph)
document.body.appendChild(list)
document.body.appendChild(line2)
document.body.appendChild(sub)
document.body.appendChild(paragraph2)
document.body.appendChild(list2)
document.body.appendChild(line3)

let evenListItems = document.querySelectorAll('.even');
for (let i = 0; i < evenListItems.length; i++) {
    evenListItems[i].style.color = 'purple';
}

let oddListItems = document.querySelectorAll('.odd');
for (let i = 0; i < oddListItems.length; i++) {
    oddListItems[i].style.color = 'green';
}