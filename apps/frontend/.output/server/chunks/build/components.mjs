import { ssrElement, mergeProps as mergeProps$1 } from 'solid-js/web';
import { mergeProps, splitProps, createMemo } from 'solid-js';
import { U as Ue, k as ke, O as Oe, E } from '../runtime.mjs';

function A(t){t=mergeProps({inactiveClass:"inactive",activeClass:"active"},t);const[,r]=splitProps(t,["href","state","class","activeClass","inactiveClass","end"]),i=Ue(()=>t.href),o=ke(i),l=Oe(),a=createMemo(()=>{const n=i();if(n===void 0)return [!1,!1];const e=E(n.split(/[?#]/,1)[0]).toLowerCase(),s=E(l.pathname).toLowerCase();return [t.end?e===s:s.startsWith(e+"/")||s===e,e===s]});return ssrElement("a",mergeProps$1(r,{get href(){return o()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return {...t.class&&{[t.class]:!0},[t.inactiveClass]:!a()[0],[t.activeClass]:a()[0],...r.classList}},link:!0,get"aria-current"(){return a()[1]?"page":void 0}}),void 0,!0)}

export { A };
//# sourceMappingURL=components.mjs.map
