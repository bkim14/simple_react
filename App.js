import createElement from "./myReact/createElement";

const App = ({props, children})=>{

    return createElement('div', {children:createElement('img', {attrs:{src:'https://cdn.pixabay.com/photo/2023/11/23/20/40/ocean-8408693_1280.jpg'}})});

}

export default App;