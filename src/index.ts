const DEFAULT_BACKGROUND: string = '#6d6d6d';
const DEFAULT_COLOR: string = 'white';
const DEFAULT_PLACEMENT: TooltipPlacement = 'top';
const DEFAULT_PADDING: string = '.25rem .5rem';
const DEFUALT_BORDERRADIUS: string = '3px';
const DEFAULT_FONTSIZE: string = '1rem';
const DEFAULT_FONTWEIGHT: string = 'normal';
const DEFAULT_OPTIONS: object = { visibility: 'hidden', position: 'absolute', transition: '.3s ease', opacity: 0, zIndex: 999 };

type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; };
type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

interface ITooltipOptions {
    placement: TooltipPlacement;
    color: string;
    background: string;
    padding: string;
    borderRadius: string;
    fontSize: string;
    fontWeight: string;
}

class Toolio {
    options: DeepPartial<ITooltipOptions>;
    debounceTimer: ReturnType<typeof setTimeout>  | null;

    constructor(opts: DeepPartial<ITooltipOptions> | null) {
        this.options = { ...{ placement: DEFAULT_PLACEMENT, color: DEFAULT_COLOR, background: DEFAULT_BACKGROUND, padding: DEFAULT_PADDING, borderRadius: DEFUALT_BORDERRADIUS, fontSize: DEFAULT_FONTSIZE, fontWeight: DEFAULT_FONTWEIGHT }, ...opts };
        this.debounceTimer = null;

        this.init();
    }

    private init(){
        let _tooltips = document.querySelectorAll('[toolio]');

        for (let i = 0; i < _tooltips.length; i++) {
            let _tooltip = _tooltips[i] as HTMLElement;
            let value = _tooltip.getAttribute('toolio');

            if (!value) return; // Guard

            let options = _tooltip.getAttribute('toolio-options');
            let opts = options ? JSON.parse(options) : null;

            this.createItem(_tooltip, value, opts);
        }
    }

    public createItem(elm: HTMLElement, value: string, opts?: DeepPartial<ITooltipOptions>) {
        let uniqueId = '_t-' + this._uniqueId();

        elm.style.position = 'relative';
        elm.setAttribute('role', 'toolio');
        elm.setAttribute('aria-describedby', uniqueId);
        elm.tabIndex = 0; // Tab-able at elements relative position in document

        let template = document.createElement('span') as HTMLElement;
        template.id = uniqueId;
        template.setAttribute('aria-hidden', 'true');

        let styleObj = this._generateStyleObject(Object.assign({}, this.options, opts));
        this.applyElementStyling(template, styleObj);

        template.innerHTML = value;
        elm.appendChild(template);

        this._assignEvents(elm, template, opts?.placement ?? DEFAULT_PLACEMENT, ['mouseenter', 'focus'], ['mouseleave', 'blur']);
    }

    private applyElementStyling(element: HTMLElement, style: {[key: string]: string | number | DeepPartial<ITooltipOptions>}) {
        for (const property in style) {
            element.style[property] = style[property]
        }
    }

    private _generateStyleObject(opts: DeepPartial<ITooltipOptions>) {
        let placementObj = (({ transform, top, right, bottom, left }) => ({ transform, top, right, bottom, left }))(this._position(opts.placement, true));
        delete opts.placement;
        return Object.assign({}, placementObj, opts, DEFAULT_OPTIONS)
    }

    private _position(align: string, initialState: boolean = false) {
        if (initialState) {
            if (align === 'top' || !align) return { top: 0, left: '50%', transform: 'translate(-50%, -100%)' };
            if (align === 'right') return { right: 0, top: '50%', transform: 'translate(100%, -50%)' };
            if (align === 'bottom') return { bottom: 0, left: '50%', transform: 'translate(-50%, 100%)' };
            if (align === 'left') return { left: 0, top: '50%', transform: 'translate(-100%, -50%)' };
        } else {
            if (align === 'top' || !align) return { top: 0, left: '50%', transform: 'translate(-50%, calc(-100% - .5rem))' };
            if (align === 'right') return { right: 0, transform: 'translate(calc(100% + .5rem), -50%)' };
            if (align === 'bottom') return { bottom: 0, transform: 'translate(-50%, calc(100% + .5rem))' };
            if (align === 'left') return { left: 0, transform: 'translate(calc(-100% - .5rem), -50%)' };
        }
        return null;
    }

    private _assignEvents(elm: HTMLElement, template: HTMLElement, placement: TooltipPlacement, initialEvents: string[], endEvents: string[]) {
        initialEvents.forEach((evt, index) => {
            elm.addEventListener(evt, (() => { this.showTip(template, placement) }));
            elm.addEventListener(endEvents[index], (() => { this.hideTip(template, placement) }));
        });
    }

    private showTip(elm: HTMLElement, placement: TooltipPlacement) {
        if(this.debounceTimer){
            clearTimeout(this.debounceTimer)
        }
        let placementObj = this._position(placement);

        this.debounceTimer = setTimeout(() => {
            this.applyElementStyling(elm, { ... { visibility: 'visible', opacity: 1 }, ...placementObj });
        }, 333);
    }

    public hideTip(elm: HTMLElement, placement: TooltipPlacement) {
        if(this.debounceTimer){
            clearTimeout(this.debounceTimer)
        }
        let placementObj = this._position(placement, true);

        this.debounceTimer = setTimeout(() => {
            this.applyElementStyling(elm, { ... { visibility: 'hidden', opacity: 0 }, ...placementObj });
        }, 333);
    }

    private _uniqueId = () => Math.random().toString(36).substr(2, 9);
}

export { Toolio, TooltipPlacement, ITooltipOptions};