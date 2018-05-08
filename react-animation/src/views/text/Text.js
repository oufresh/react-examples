
import * as React from 'react';
import { connect } from 'react-redux'
import { textChange } from '../../modules/text/actionCreators';
import { getText } from '../../modules/text/selectors';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const Container = styled.div`
    width: 500px;
`;

class Text extends React.Component<props, object> {
    render() {
        return (
            <Container>
                <Input placeholder='Write...' style={{width: '100%'}} className={'text-input'} onChange={this.props.onTextChange} value={this.props.text} />
            </Container>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        text: getText(state)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (e) => dispatch(textChange(e.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);