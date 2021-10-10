import{S as I,i as M,s as P,e as g,t as E,c as _,a as v,g as q,d as u,b as p,f as T,H as f,h as C,k as S,n as w,J as R,K as A,L as D,I as G,M as F,j as N,N as U,m as Q,o as W,x as z,u as K,v as J}from"../chunks/vendor-1678266b.js";const X={googleSheet:"https://script.google.com/macros/s/AKfycbyuFWaPt21DdGtUGzxBfXyQ3Bken8ASgV1G_E7C2O3TGfUk-NVgOQnBTgmVytsyxRb5ag/exec"};function j(d){let t,o;return{c(){t=g("p"),o=E(d[1]),this.h()},l(n){t=_(n,"P",{class:!0});var e=v(t);o=q(e,d[1]),e.forEach(u),this.h()},h(){p(t,"class","svelte-ei3ul4")},m(n,e){T(n,t,e),f(t,o)},p(n,e){e&2&&C(o,n[1])},d(n){n&&u(t)}}}function B(d){let t,o;return{c(){t=g("button"),o=E("Tell me more!"),this.h()},l(n){t=_(n,"BUTTON",{type:!0,class:!0});var e=v(t);o=q(e,"Tell me more!"),e.forEach(u),this.h()},h(){p(t,"type","submit"),p(t,"class","svelte-ei3ul4")},m(n,e){T(n,t,e),f(t,o)},d(n){n&&u(t)}}}function Y(d){let t,o,n,e,l,b,a,s,i,y,L,O,H,r=d[1]&&j(d),c=!d[1]&&B();return{c(){t=g("div"),o=g("h2"),n=E("Frog & Wolf PR"),e=S(),l=g("h1"),b=E("Coming Soon..."),a=S(),s=g("form"),i=g("input"),y=S(),r&&r.c(),L=S(),c&&c.c(),this.h()},l(m){t=_(m,"DIV",{class:!0});var h=v(t);o=_(h,"H2",{class:!0});var V=v(o);n=q(V,"Frog & Wolf PR"),V.forEach(u),e=w(h),l=_(h,"H1",{class:!0});var $=v(l);b=q($,"Coming Soon..."),$.forEach(u),a=w(h),s=_(h,"FORM",{});var k=v(s);i=_(k,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),y=w(k),r&&r.l(k),L=w(k),c&&c.l(k),k.forEach(u),h.forEach(u),this.h()},h(){p(o,"class","svelte-ei3ul4"),p(l,"class","svelte-ei3ul4"),p(i,"type","email"),p(i,"name","email"),p(i,"id","email-input"),p(i,"placeholder","Enter your email address"),p(i,"class","svelte-ei3ul4"),p(t,"class","container svelte-ei3ul4")},m(m,h){T(m,t,h),f(t,o),f(o,n),f(t,e),f(t,l),f(l,b),f(t,a),f(t,s),f(s,i),R(i,d[0]),f(s,y),r&&r.m(s,null),f(s,L),c&&c.m(s,null),O||(H=[A(i,"input",d[3]),A(s,"submit",D(d[2]))],O=!0)},p(m,[h]){h&1&&i.value!==m[0]&&R(i,m[0]),m[1]?r?r.p(m,h):(r=j(m),r.c(),r.m(s,L)):r&&(r.d(1),r=null),m[1]?c&&(c.d(1),c=null):c||(c=B(),c.c(),c.m(s,null))},i:G,o:G,d(m){m&&u(t),r&&r.d(),c&&c.d(),O=!1,F(H)}}}function x(d,t,o){let n,e;const l=async()=>{try{const s=await(await fetch(`${X.googleSheet}?email=${n}`,{method:"GET"})).json();(!s.result||s.result==="error")&&o(1,e="Something went wrong, please refresh the page and try again"),s.result==="success"&&o(1,e="Thanks, we'll be in touch!")}catch(a){o(1,e="Something went wrong, please refresh the page and try again"),console.error(a)}};function b(){n=this.value,o(0,n)}return[n,e,l,b]}class Z extends I{constructor(t){super();M(this,t,x,Y,P,{})}}function tt(d){let t,o,n,e,l,b;return l=new Z({}),{c(){t=g("style"),o=E(`/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
		}
		/* HTML5 display-role reset for older browsers */
		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		menu,
		nav,
		section {
			display: block;
		}
		body {
			line-height: 1;
		}
		ol,
		ul {
			list-style: none;
		}
		blockquote,
		q {
			quotes: none;
		}
		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: '';
			content: none;
		}
		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		* {
			font-family: 'Quicksand', Helvetica, Arial, sans-serif;
		}`),n=S(),e=g("main"),N(l.$$.fragment),this.h()},l(a){const s=U('[data-svelte="svelte-19hvvei"]',document.head);t=_(s,"STYLE",{});var i=v(t);o=q(i,`/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
		}
		/* HTML5 display-role reset for older browsers */
		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		menu,
		nav,
		section {
			display: block;
		}
		body {
			line-height: 1;
		}
		ol,
		ul {
			list-style: none;
		}
		blockquote,
		q {
			quotes: none;
		}
		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: '';
			content: none;
		}
		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		* {
			font-family: 'Quicksand', Helvetica, Arial, sans-serif;
		}`),i.forEach(u),s.forEach(u),n=w(a),e=_(a,"MAIN",{});var y=v(e);Q(l.$$.fragment,y),y.forEach(u),this.h()},h(){document.title="Frog & Wolf PR"},m(a,s){f(document.head,t),f(t,o),T(a,n,s),T(a,e,s),W(l,e,null),b=!0},p:G,i(a){b||(z(l.$$.fragment,a),b=!0)},o(a){K(l.$$.fragment,a),b=!1},d(a){u(t),a&&u(n),a&&u(e),J(l)}}}class et extends I{constructor(t){super();M(this,t,null,tt,P,{})}}export{et as default};
