import{S as $,i as M,s as P,e as b,t as k,c as g,a as _,g as q,d as c,f as T,H as f,h as N,b as E,k as S,n as w,J as R,K as A,L as U,I as L,M as z,j as Q,N as W,m as K,o as J,x as X,u as Y,v as x}from"../chunks/vendor-1678266b.js";var C,D,F;const Z={googleSheet:(F=(D=(C=globalThis==null?void 0:globalThis.process)==null?void 0:C.env)==null?void 0:D.VITE_GOOGLE_SHEET)!=null?F:"https://script.google.com/macros/s/AKfycbyuFWaPt21DdGtUGzxBfXyQ3Bken8ASgV1G_E7C2O3TGfUk-NVgOQnBTgmVytsyxRb5ag/exec"};function j(d){let t,o;return{c(){t=b("p"),o=k(d[1])},l(n){t=g(n,"P",{});var e=_(t);o=q(e,d[1]),e.forEach(c)},m(n,e){T(n,t,e),f(t,o)},p(n,e){e&2&&N(o,n[1])},d(n){n&&c(t)}}}function B(d){let t,o;return{c(){t=b("button"),o=k("Tell me more!"),this.h()},l(n){t=g(n,"BUTTON",{type:!0});var e=_(t);o=q(e,"Tell me more!"),e.forEach(c),this.h()},h(){E(t,"type","submit")},m(n,e){T(n,t,e),f(t,o)},d(n){n&&c(t)}}}function tt(d){let t,o,n,e,r,p,s,a,u,y,O,G,H,l=d[1]&&j(d),i=!d[1]&&B();return{c(){t=b("div"),o=b("h2"),n=k("Frog & Wolf PR"),e=S(),r=b("h1"),p=k("Coming Soon..."),s=S(),a=b("form"),u=b("input"),y=S(),l&&l.c(),O=S(),i&&i.c(),this.h()},l(m){t=g(m,"DIV",{class:!0});var h=_(t);o=g(h,"H2",{});var V=_(o);n=q(V,"Frog & Wolf PR"),V.forEach(c),e=w(h),r=g(h,"H1",{});var I=_(r);p=q(I,"Coming Soon..."),I.forEach(c),s=w(h),a=g(h,"FORM",{});var v=_(a);u=g(v,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0}),y=w(v),l&&l.l(v),O=w(v),i&&i.l(v),v.forEach(c),h.forEach(c),this.h()},h(){E(u,"type","email"),E(u,"name","email"),E(u,"id","email-input"),E(u,"placeholder","Enter your email address"),E(t,"class","container svelte-1713h2z")},m(m,h){T(m,t,h),f(t,o),f(o,n),f(t,e),f(t,r),f(r,p),f(t,s),f(t,a),f(a,u),R(u,d[0]),f(a,y),l&&l.m(a,null),f(a,O),i&&i.m(a,null),G||(H=[A(u,"input",d[3]),A(a,"submit",U(d[2]))],G=!0)},p(m,[h]){h&1&&u.value!==m[0]&&R(u,m[0]),m[1]?l?l.p(m,h):(l=j(m),l.c(),l.m(a,O)):l&&(l.d(1),l=null),m[1]?i&&(i.d(1),i=null):i||(i=B(),i.c(),i.m(a,null))},i:L,o:L,d(m){m&&c(t),l&&l.d(),i&&i.d(),G=!1,z(H)}}}function nt(d,t,o){let n,e;const r=async()=>{try{const a=await(await fetch(`${Z.googleSheet}?email=${n}`,{method:"GET"})).json();(!a.result||a.result==="error")&&o(1,e="Something went wrong, please refresh the page and try again"),a.result==="success"&&o(1,e="Thanks, we'll be in touch!")}catch(s){o(1,e="Something went wrong, please refresh the page and try again"),console.error(s)}};function p(){n=this.value,o(0,n)}return[n,e,r,p]}class et extends ${constructor(t){super();M(this,t,nt,tt,P,{})}}function ot(d){let t,o,n,e,r,p;return r=new et({}),{c(){t=b("style"),o=k(`/* http://meyerweb.com/eric/tools/css/reset/ 
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
		}`),n=S(),e=b("main"),Q(r.$$.fragment),this.h()},l(s){const a=W('[data-svelte="svelte-19hvvei"]',document.head);t=g(a,"STYLE",{});var u=_(t);o=q(u,`/* http://meyerweb.com/eric/tools/css/reset/ 
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
		}`),u.forEach(c),a.forEach(c),n=w(s),e=g(s,"MAIN",{});var y=_(e);K(r.$$.fragment,y),y.forEach(c),this.h()},h(){document.title="Frog & Wolf PR"},m(s,a){f(document.head,t),f(t,o),T(s,n,a),T(s,e,a),J(r,e,null),p=!0},p:L,i(s){p||(X(r.$$.fragment,s),p=!0)},o(s){Y(r.$$.fragment,s),p=!1},d(s){c(t),s&&c(n),s&&c(e),x(r)}}}class st extends ${constructor(t){super();M(this,t,null,ot,P,{})}}export{st as default};
