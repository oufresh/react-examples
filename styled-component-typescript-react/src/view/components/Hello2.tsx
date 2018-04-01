import * as React from 'react';
import styled from '../theme/styled-components';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  /*className?: string;*/
}

const HelloStyled = styled.div`
  color: ${props => props.theme.primaryColor};
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: 1.8rem;
`;

class Hello2 extends React.Component<Props, object> {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
      }

    render() {
      const { name, enthusiasmLevel = 1 } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      /* <HelloStyled className={`myclass ${this.props.className}`}>*/ 
      /* <HelloStyled className="myclass"> */
      /* <HelloStyled className={this.props.className}> */
      return (
        <HelloStyled>
          <div>
            Hello {name + this.getExclamationMarks(enthusiasmLevel)}
          </div>
        </HelloStyled>
      );
    }
}

export default Hello2;