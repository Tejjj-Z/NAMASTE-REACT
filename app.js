/**<div id="parent">
    <div id="child1">
        <h1>
              I'am h1 tag
        </h1>
                
        <h2>
              I'm h2 tag  
        </h2>

    </div>

       <div id="child2">
        <h1>
              I'am h1 tag
        </h1>
                
        <h2>
              I'm h2 tag  
        </h2>

    </div>
</div>
**/
//this is the nested html structure written in react; parent is  an object which is actually an react element ; react .cfreate element does not create any html tag but it just creates an object while it rendering into dom itconfronts into html and put it over dom...
// ReactElement(object)=> HTML(browser understands)
// It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object,    ReactElement(Object) => HTML(Browser Understands)

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")
]),
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")
]),
]);
//  THIS IS THE CORE REACT JS ...SEEMS VERY CLUMGY .. SEEMS DOESNOT MAKE LIFE EASIER ????? THEN JSX COMES INTO  PICTURE SO CREATE ELEMENT NO NEED TO USE LATER//
// ORDER OF FILES MATTER?? YES -- JS FILE CAN BE FIX AFTER CDN LINKS ONLY ...IF NOT REACT IS NOT DEFINED ERROR OCCURS
root.render(parent);

//in above child is again an object


const heading = React.createElement("h1",
{id:"heading",xyz"abc"},
"Hello world from React!");
//need to render this into div root create ele creates h1tag, creating a element is a core thing of react which come sfrom first link  and where creating a root and rendering something inside it is a job of 2nd file (react dom)
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);  //it replaces(but not append here) div id=root content with heading content
 // REACT  IS ONLY WORKING INSIDE DIV ROOT BUT NOT INSIDE AND OUTSIDE IT..IF ANY HTML TAG CONTENT ABOVE AND BELOW ROOT ID ...THEY SEEMS IN THE OUTPUT WITH REACT CONTENT AS WELL
 // In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
 // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.