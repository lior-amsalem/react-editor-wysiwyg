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
                    <a href="#" onClick={() => {editor.cmd('bold')}}>Bold</a> - 
                    <a href="#" onClick={() => {editor.cmd('italic')}}>italic</a> - 
                    <a href="#" onClick={() => {editor.cmd('strikeThrough')}}>strikeThrough</a> - 
                    <a href="#" onClick={() => {editor.cmd('underline')}}>underline</a> - 
                    <a href="#" onClick={() => {editor.cmdCrossBrowser('hilitecolor', 'yellow')}}>Highlight</a> - 
                    <a href="#" onClick={() => {editor.addLink()}}>Add Link</a> - 
                    <a href="#" onClick={() => {editor.cmd('unlink')}}>unlink</a> - 
                    <a href="#" onClick={() => {editor.cmd('foreColor', 'red')}}>change font to red</a> - 
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'h1')}}>H1</a> - 
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'h2')}}>H2</a> - 
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'p')}}>p</a> - 
                    <a href="#" onClick={() => {editor.cmd('indent')}}>quote</a> - 
                    <a href="#" onClick={() => {editor.cmd('insertHorizontalRule')}}>insertHorizontalRule</a> - 
                    <a href="#" onClick={() => {editor.addImg()}}>add Img</a> - 
                    <a href="#" onClick={() => {editor.cmd('insertOrderedList')}}>insertOrderedList</a> - 
                    <a href="#" onClick={() => {editor.cmd('insertUnorderedList')}}>insertUnorderedList</a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyCenter')}}>justifyCenter</a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyFull')}}>justifyFull</a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyLeft')}}>justifyLeft</a> - 
                    <a href="#" onClick={() => {editor.cmd('justifyRight')}}>justifyRight</a> - 
                    <a href="#" onClick={() => {editor.cmd('redo')}}>redo</a> - 
                    <a href="#" onClick={() => {editor.cmd('removeFormat')}}>removeFormat</a> - 
                    <a href="#" onClick={() => {editor.cmd('undo')}}>undo</a> - 
                    <a href="#" onClick={() => {editor.cmd('redo')}}>redo</a> - 
                    <a href="#" onClick={() => {editor.cmd('styleWithCSS')}}>styleWithCSS</a> - 
                </div>
                <div className="react-editor-wysiwyg" ref="editor" contentEditable="true">
                    My title<br /><br />

                    This text can be bold<br /><br />

                    How about adding links?<br /><br />

                    and images?<br />
                </div>
                <i className="fa fa-twitter"></i><i className="fa fa-twitter"></i><i className="fa fa-twitter"></i>


            </div>
        )
    }
}

MyComponentName.defaultProps = {
    msg: '-' // msg
}

export default MyComponentName;