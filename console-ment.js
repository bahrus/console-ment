import { CE } from 'trans-render/lib/CE.js';
/**
 * @tagName console-ment
 * @element console-ment
 */
export class ConsoleMent extends HTMLElement {
    onLog({ log }) {
        console.log(log);
    }
    onWarn({ warn }) {
        console.log(warn);
    }
    onError({ error }) {
        console.log(error);
    }
}
const ce = new CE({
    config: {
        tagName: 'console-ment',
        propDefaults: {
            log: '',
            warn: '',
            error: ''
        },
        actions: {
            onLog: {
                ifAllOf: ['log'],
            },
            onWarn: {
                ifAllOf: ['warn']
            },
            onError: {
                ifAllOf: ['error']
            }
        },
        style: {
            display: 'none',
        }
    },
    superclass: ConsoleMent
});
