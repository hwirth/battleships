function newElement(params) {
    const element = document.createElement(params.tagName);
    if (params.innerText) element.innerHTML = params.innerText;
    if (params.innerHTML) element.innerHTML = params.innerHTML;
    if (params.className) element.className = params.className;
    if (params.children) {
        params.children.forEach( (child)=>{
            element.appendChild(child);
        });
    }
    return element;
}    

export default class Application {
    property = 123;

    constructor(selectors) {
        this.elements = Object.entries( selectors ).reduce( (prev, [key, value])=>{
            if (value.slice(0, 3) === 'ALL') {
                return {...prev, [key]: document.querySelectorAll(value.slice(4))};
            } else {
                return {...prev, [key]: document.querySelector(value)};
            }
        }, {});

        console.log('Elements:', this.elements);

        console.log('Hello, world!'); 
        document.body.appendChild(
            newElement({
                tagName: 'h1',
                innerText: 'Hello, World!',
                children: [
                    newElement({
                        tagName: 'br',
                    }),
                    newElement({
                        tagName: 'small',
                        innerText: 'Subtitle'
                    })
                ],
            }),
        );
    }
}