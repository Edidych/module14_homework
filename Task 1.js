const parser = new DOMParser();

const xmlStr = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlStr, "text/xml");

const listNode = xmlDom.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");

let massivObj = [];

for (let node of studentNodes){

    const nameNode = node.querySelector("name");
    const firstNameNode = nameNode.querySelector("first");
    const secondNameNode = nameNode.querySelector("second");
    const ageNode = node.querySelector("age");
    const profNode = node.querySelector("prof");
    const langAtt = nameNode.getAttribute("lang")

    let studentOne = {};
    studentOne.name = `${firstNameNode.textContent} ${secondNameNode.textContent} `;
    studentOne.age = ageNode.textContent;
    studentOne.prof = profNode.textContent;
    studentOne.lang = langAtt;

    massivObj.push(studentOne)

}

console.log("list:", massivObj);