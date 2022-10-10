const categoriesRef = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesRef.children.length}`);

for (const element of categoriesRef.children) {
    const h2Ref = element.firstElementChild;
    console.log(`Category: ${h2Ref.textContent}`);

    const ulRef = h2Ref.nextElementSibling;
    console.log(ulRef.children.length);
};