import Editor from '../src/editor';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Basic WYSIWYG text editor</h1>
                <Editor/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp/>,
    document.querySelector('.MyApp')
);
