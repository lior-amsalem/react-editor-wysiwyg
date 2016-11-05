import editor from './wysiwyg';
import './editor.scss';

class MyComponentName extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: this.props.msg
        };
    }

    render() {

        const {
            msg
        } = this.props;

        return (
            <div>
                <h1>Hello, {msg}</h1>
                <div className="controller">
                    <a href="#" onClick={() => {editor.cmd('bold')}}><i className="fa fa-bold" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('italic')}}><i className="fa fa-italic" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('strikeThrough')}}><i className="fa fa-strikethrough" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('underline')}}><i className="fa fa-underline" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmdCrossBrowser('hilitecolor', 'yellow')}}>Highlight</a> - 
                    <a href="#" onClick={() => {editor.addLink()}}><i className="fa fa-link" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('unlink')}}><i className="fa fa-chain-broken" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('foreColor', 'red')}}>change font to red</a> - 
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'h1')}}>H1</a> - 
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'h2')}}>H2</a> - 
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'p')}}>p</a> - 
                    <a href="#" onClick={() => {editor.cmd('indent')}}><i className="fa fa-quote-right" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('insertHorizontalRule')}}>insertHorizontalRule</a> - 
                    <a href="#" onClick={() => {editor.addImg()}}><i className="fa fa-picture-o" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('insertOrderedList')}}><i className="fa fa-list-ol" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('insertUnorderedList')}}><i className="fa fa-list" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyCenter')}}><i className="fa fa-align-center" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyFull')}}><i className="fa fa-align-justify" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyLeft')}}><i className="fa fa-align-left" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyRight')}}><i className="fa fa-align-right" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('undo')}}><i className="fa fa-undo" aria-hidden="true"></i></a> - 
                    <a href="#" onClick={() => {editor.cmd('redo')}}><i className="fa fa-repeat" aria-hidden="true"></i></a> - 
                </div>
                <div className="react-editor-wysiwyg" ref="editor" contentEditable="true">
                    My title<br /><br />

                    This text can be bold<br /><br />

                    How about adding links?<br /><br />

                    and images?<br />
                </div>
            </div>
        )
    }
}

MyComponentName.defaultProps = {
    msg: '-' // msg
}

export default MyComponentName;