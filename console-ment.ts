import {CE} from 'trans-render/lib/CE.js';
import {ConsoleMentProps, ConsoleMentActions} from './types';

/**
 * @tagName console-ment
 * @element console-ment
 */
export class ConsoleMent extends HTMLElement implements ConsoleMentActions{
    onLog({log}: this){
        console.log(log);
    }
    onWarn({warn}: this){
        console.log(warn);
    }
    onError({error}: this){
        console.log(error);
    }
}

export interface ConsoleMent extends ConsoleMentProps{}

const ce = new CE<ConsoleMentProps, ConsoleMentActions>({
    config:{
        tagName: 'console-ment',
        propDefaults:{
            log:'',
            warn:'',
            error:''
        },
        actions:{
            onLog:{
                ifAllOf:['log'],
            },
            onWarn:{
                ifAllOf:['warn']
            },
            onError:{
                ifAllOf:['error']
            }
        },
        style:{
            display: 'none',
        }
    },
    superclass: ConsoleMent
});