class editor {
    static cmd(cmdName, value = null) {
        document.execCommand(cmdName, false, value);
    }

    static cmdCrossBrowser (cmd, value) {

        if(navigator.appName === 'Microsoft Internet Explorer') {
            if (cmd === 'hilitecolor') {
                cmd = 'BackColor';
            }
        }

        this.cmd(cmd, value);
    }

    static addLink() {
        const link = prompt('URL:', 'http://');

        this.cmd('CreateLink', link);
    }

    static addImg() {
        const url = prompt('Img URL:', 'http://');

        this.cmd('insertImage', url);
    }
}

export default editor;