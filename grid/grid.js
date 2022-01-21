
import Grid from "../script/JSONwriter-grid";

const config = {
    widht: 640,
    height: 480,
    rednerTo: "div[grid]", //HtmlElement{object}, Selector{string}
    columns: [
        {
            fieldName: "id",
            title: "شناسه",
            width: 150
        },
        {
            fieldName: "name",
            title: "نام",
            width: "100%"
        }
    ],
    dataSource: [
        {
            id: 1,
            name: "amir1",
        },
        {
            id: 2,
            name: "amir2",
        },
        {
            id: 3,
            name: "amir3",
        }
    ]
};
const grid = new Grid(config);