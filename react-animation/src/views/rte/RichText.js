//@flow
import React from 'react';
import RichTextEditor from 'react-rte';
import styled from 'styled-components';

type Props = {
    text?:string;
};

const Container = styled.div`
    width: 600px;
    height: 400px;
`;

const createEmptyValue = () => {
    return RichTextEditor.createEmptyValue();
}

const createValueFromHtml = (htmlStr:string) => {
    try
    {
        return RichTextEditor.createValueFromString(htmlStr, 'html');
    }
    catch (exc)
    {
        console.warn('Fallback to old html parser document.implementation.createHTMLDocument');
        return RichTextEditor.createValueFromString(htmlStr, 'html', { parser: parser });
    }
}

const createHtmlFromValue = (value:Value) => {
    return value.toString('html');
}

const parser = (html) => {
    //console.log('Called my parser, html: ' + html);
    let doc = document.implementation.createHTMLDocument('');
    if (doc.documentElement) {
        doc.documentElement.innerHTML = html;
    }

    return doc.body || doc.createElement('body');
};

class RichText extends React.Component<Props>
{
    constructor(props:Props)
    {
        super(props);
        this.state = this.initState(this.props);
    }

    initState = (props:Props) => {
        const v = (props.text) ? createValueFromHtml(props.text) : createEmptyValue();
        //console.log(v);
        
        return {
            value: v
        };
    }

    onValueChange = (value:{}) => {
        this.setState({value});
    }

    render()
    {
        const toolbarConfig = {
            display: ['HISTORY_BUTTONS', 'LINK_BUTTONS', 'INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
            INLINE_STYLE_BUTTONS: [
              {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
              {label: 'Italic', style: 'ITALIC'},
              {label: 'Underline', style: 'UNDERLINE'}
            ],
            BLOCK_TYPE_DROPDOWN: [
              {label: 'Normal', style: 'unstyled'},
              {label: 'Heading Large', style: 'header-one'},
              {label: 'Heading Medium', style: 'header-two'},
              {label: 'Heading Small', style: 'header-three'}
            ],
            BLOCK_TYPE_BUTTONS: [
              {label: 'UL', style: 'unordered-list-item'},
              {label: 'OL', style: 'ordered-list-item'}
            ]
        };

        return(
            <Container>
                <RichTextEditor toolbarConfig={toolbarConfig} 
                    placeholder={'Write text ...'} value={this.state.value} onChange={this.onValueChange} />
            </Container>
        );
    }
}

export default RichText;