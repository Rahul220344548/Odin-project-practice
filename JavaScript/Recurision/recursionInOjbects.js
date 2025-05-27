

function printChildrenRecursion(t) {

    if (t.children.length === 0) {
        return
    }
    t.children.forEach(element => {
        console.log(element.name)
        printChildrenRecursion(element)
    });
}

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

console.log(printChildrenRecursion(tree))





