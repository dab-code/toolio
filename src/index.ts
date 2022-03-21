import './toolio.css'
class Toolio {
    constructor() {
        this.init();
    }

    init(){
        let _tooltips = document.querySelectorAll('[toolio]');
        console.log(_tooltips);

        for (let i = 0; i < _tooltips.length; i++) {
            let _tooltip = _tooltips[i] as HTMLElement;
            let value = _tooltip.getAttribute('toolio');

            if (!value) return; // Guard

            const placement = _tooltip.getAttribute('toolio-placement');
            const maxWidth = _tooltip.getAttribute('toolio-max-width') || 250;

            this.createItem(_tooltip, value, placement, Number(maxWidth));
        }
    }

    public createItem(elm: HTMLElement, value: string, placement?: string, maxWidth: number = 250) {
        let uniqueId = '_t-' + this._uniqueId();

        elm.setAttribute('role', 'tooltip');
        elm.setAttribute('aria-describedby', uniqueId);
        elm.tabIndex = 0; // Tab-able at elements relative position in document

        let template = document.createElement('span') as HTMLElement;
        template.id = uniqueId;
        template.classList.add('toolio-tip');
        template.classList.add(`toolio-tip--${placement ?? 'top'}`);
        template.setAttribute('aria-hidden', 'true');

        template.style.maxWidth = `${maxWidth}px`;

        template.innerHTML = value;

        elm.appendChild(template);

        const textWidth = this._getTextWidth(value);
        console.log(textWidth);
        template.style.width = `calc(${textWidth > maxWidth ? Math.round(maxWidth) : Math.round(textWidth)}px + 1.5rem)`;

        this._assignEvents(elm, template, ['mouseenter', 'focus'], ['mouseleave', 'blur']);
    }

    private _assignEvents(elm: HTMLElement, template: HTMLElement, initialEvents: string[], endEvents: string[]) {
        initialEvents.forEach((evt, index) => {
            elm.addEventListener(evt, (() => { this.showTip(template) }));
            elm.addEventListener(endEvents[index], (() => { this.hideTip(template) }));
        });
    }

    private showTip(elm: HTMLElement) {
        elm.classList.add('toolio-tip--show');
    }

    public hideTip(elm: HTMLElement) {
        elm.classList.remove('toolio-tip--show');
    }

    private _uniqueId = () => Math.random().toString(36).substring(2, 9);

    private _getTextWidth = (text: string, font?: string) => {
        const tipElement = document.querySelector('.toolio-tip');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        context.font = font || window.getComputedStyle(tipElement).font;

        return context.measureText(text).width;
    }
}

module.exports = Toolio;