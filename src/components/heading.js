import styled from 'styled-components';
import { theme, media } from "@styles";
const { colors } = theme

const Heading = styled.h3`
position: relative;
display: flex;
align-items: center;
margin: 10px 0 40px;
width: 100%;
white-space: nowrap;
font-size: 2.69em;
${media.tablet`font-size: 1.5em;`};
&:after {
	content: "";
	display: block;
	height: 1px;
	width: 475px;
	background-color: ${colors.mediumGrey};
	position: relative;
	top: -5px;
	margin-left: 20px;
	${media.tablet`width: 100%;`};
	${media.thone`margin-left: 10px;`};
}
`;

export default Heading;
