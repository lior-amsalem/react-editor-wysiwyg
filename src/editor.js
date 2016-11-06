import editor from './wysiwyg';
import './editor.scss';

class Editor extends React.Component {

    render() {

        const {
            defaultVal
        } = this.props;

        return (
            <div className="react-editor-wysiwyg-wrapper">
                <div className="controllers">
                    <a href="#" onClick={() => {editor.cmd('bold')}}><i className="fa fa-bold" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('italic')}}><i className="fa fa-italic" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('strikeThrough')}}><i className="fa fa-strikethrough" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('underline')}}><i className="fa fa-underline" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmdCrossBrowser('hilitecolor', 'yellow')}} className="highlight"><i className="fa fa-font" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.addLink()}}><i className="fa fa-link" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('unlink')}}><i className="fa fa-chain-broken" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('foreColor', 'red')}}>change font to red</a>
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'h1')}} className="H1">H1</a>
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'h2')}} className="H1">H2</a>
                    <a href="#" onClick={() => {editor.cmd('formatBlock', 'p')}}>p</a>
                    <a href="#" onClick={() => {editor.cmd('indent')}}><i className="fa fa-quote-right" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('insertHorizontalRule')}} className="horizontal-rule"></a>
                    <a href="#" onClick={() => {editor.addImg()}}><i className="fa fa-picture-o" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('insertOrderedList')}}><i className="fa fa-list-ol" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('insertUnorderedList')}}><i className="fa fa-list" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('justifyLeft')}}><i className="fa fa-align-left" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('justifyCenter')}}><i className="fa fa-align-center" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('justifyRight')}}><i className="fa fa-align-right" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('justifyFull')}}><i className="fa fa-align-justify" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('undo')}}><i className="fa fa-undo" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => {editor.cmd('redo')}}><i className="fa fa-repeat" aria-hidden="true"></i></a>
                </div>
                <div className="react-editor-wysiwyg" ref="editor" contentEditable="true">{defaultVal}</div>
            </div>
        )
    }
}

Editor.defaultProps = {
    defaultVal: '' // default value
}

export default Editor;