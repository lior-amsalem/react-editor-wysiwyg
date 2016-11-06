import Editor from '../src/editor';

const stubText = `My title

This text can be bold

How about adding links?

and images?`;

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>WYSIWYG text editor</h1>
                <Editor defaultVal={stubText}/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp/>,
    document.querySelector('.MyApp')
);
