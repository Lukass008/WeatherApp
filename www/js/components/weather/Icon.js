import React from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Icon';
    }

    giveSprite() {
    	const spriteBigMap = {
            0: '-800px 0px',
            1: '-400px 0px',
            2: '-800px 0px',
            3: '-400px 0px',
            4: '-400px 0px',
            5: '-600px -400px',
            6: '-600px -400px',
            7: '-400px -400px',
            8: '-400px -400px',
            9: '-400px -400px',
            10: '-600px -400px',
            11: '-600px -400px',
            12: '-600px -400px',
            13: '-200px -200px',
            14: '-200px -200px',
            15: '-200px -200px',
            16: '-200px -200px',
            17: '-600px -400px',
            18: '-200px -200px',
            19: '-800px -400px',
            20: '-800px -400px',
            21: '0px -200px',
            22: '0px 0px',
            23: '-800px -800px',
            24: '-800px -800px',
            25: '-600px 0px',
            26: '0px 0px',
            27: '0px -600px',
            28: '0px -200px',
            29: '0px -600px',
            30: '0px -200px',
            31: '-200px -800px',
            32: '-200px 0px',
            33: '-200px -800px',
            34: '-200px 0px',
            35: '-400px -400px',
            36: '-200px 0px',
            37: '-400px 0px',
            38: '-400px 0px',
            39: '-400px 0px',
            40: '-600px -400px',
            41: '-200px -200px',
            42: '-200px -200px',
            43: '-200px -200px',
            44: '0px 0px',
            45: '-400px 0px',
            46: '-200px -200px',
            47: '-400px 0px',
        }
        const spriteMinMap = {
    		0: '-400px 0px',
    		1: '-200px 0px',
    		2: '-400px 0px',
    		3: '-200px 0px',
    		4: '-200px 0px',
    		5: '-300px -200px',
    		6: '-300px -200px',
    		7: '-200px -200px',
    		8: '-200px -200px',
    		9: '-200px -200px',
    		10: '-300px -200px',
    		11: '-300px -200px',
    		12: '-300px -200px',
    		13: '-100px -100px',
    		14: '-100px -100px',
    		15: '-100px -100px',
    		16: '-100px -100px',
    		17: '-300px -200px',
    		18: '-100px -100px',
    		19: '-400px -200px',
    		20: '-400px -200px',
    		21: '0px -100px',
    		22: '0px 0px',
    		23: '-400px -400px',
    		24: '-400px -400px',
    		25: '-300px 0px',
    		26: '0px 0px',
    		27: '0px -300px',
    		28: '0px -100px',
    		29: '0px -300px',
    		30: '0px -100px',
    		31: '-100px -400px',
    		32: '-100px 0px',
    		33: '-100px -400px',
    		34: '-100px 0px',
    		35: '-200px -200px',
    		36: '-100px 0px',
    		37: '-200px 0px',
    		38: '-200px 0px',
    		39: '-200px 0px',
    		40: '-300px -200px',
    		41: '-100px -100px',
    		42: '-100px -100px',
    		43: '-100px -100px',
    		44: '0px 0px',
    		45: '-200px 0px',
    		46: '-100px -100px',
    		47: '-200px 0px',
    	}


        //set icon sprite for daily weather (bigger) or forecast (smaller)
    	if (this.props.size == 'smallIcon') {
            return {background: 'url(../../../img/weatherSpritesMin.jpg) '  + spriteMinMap[this.props.code]};
        } else {
            return {background: 'url(../../../img/weatherSprites.jpg) '  + spriteBigMap[this.props.code]};
        }
    }

    render() {
        const iconClass = this.props.size == 'smallIcon' ? 'symbolIcoSmall' : 'symbolIcoBig';
    	const divClasses = classNames(iconClass, this.props.size);
        return <div className={divClasses} style={this.giveSprite()} title={this.props.text}></div>;
    }
}

export default Icon;
