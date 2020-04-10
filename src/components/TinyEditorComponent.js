import React, { Component } from 'react';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/skins/ui/oxide/content.min.css'

class TinyEditorComponent extends Component {

    constructor() {
        super();
        this.state = { editor: null };
    }

    componentDidMount() {
        
        tinymce.init({
        selector: `#${this.props.id}`,
        plugins: 'table lists',
        width:this.props.width,
        height:this.props.height,
        menubar: '',
        forced_root_block : "div",
        content_style: 'body { font-family: Microsoft YaHei;} .mce-content-body {font-size:14px;font-family:Arial,sans-serif;}',        
        toolbar:' undo redo | fontsizeselect | ' + 'forecolor backcolor | ' +
                ' bold italic  underline strikethrough |  alignment | table' +
                ' bullist numlist outdent indent | removeformat',
        fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",  
        setup: editor => {
                this.setState({ editor });
                editor.on('keyup', () => {
                    const orig_element = editor.getElement();
                    const id = orig_element.getAttribute('data-note-id');
                    const content = editor.getContent();
                    this.props.onEditorChange(id,content);                    
                    // console.log("editor")
                    // console.log(editor)
                });
                editor.on('init', () => {
                    //editor.execCommand("fontSize", false, "10px");
                });// editor.on('init', () => {
                editor.ui.registry.addGroupToolbarButton('alignment', {
                    icon: 'align-left',
                    tooltip: 'Alignment',
                    items: 'alignleft aligncenter alignright | alignjustify'
                });
                editor.ui.registry.addGroupToolbarButton('table', {
                    icon: 'table',
                    tooltip: 'table',
                    items: "table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"
                });
            } //editor => {
        });

    }

    componentWillUnmount() {
        tinymce.remove(this.state.editor);
    }

    render() {
        return (
            <textarea 
            id={this.props.id}
            data-note-id={this.props.noteid}
            value={this.props.content}
            onChange={e => console.log(e)}
            />            
        );
    }

}


export default TinyEditorComponent;
