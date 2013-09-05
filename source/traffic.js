/**
 * Traffic - for js13kGames 2013
 * by Krisztian Toth (http://krissz.hu/)
 *
 * Version: 1.0
 * last update: 05.09.2013.
 */

/* CONSTANTS */

var DATA = {
	// base64 encoded PNG images:
	sprites: {
		car1:		'A8AAAAZCAMAAADZh4T+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFAP8AAKoAsvD/////3wAAV1dT5NEIwQAAAEBJREFUeNpiYGVmZoABZmZWBiQuAyqHRoARGYC4TAgAFEDmAgUI81EBAyOqZZTz0c0n4F50/2EAFhYWJBZAgAEAx9ABIYywSaQAAAAASUVORK5CYII=',
		car2:		'A8AAAAZCAMAAADZh4T+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRFAP8AsLCwAKoAsvD/kpKSV1dT////3wAAzHbFeAAAAFVJREFUeNqUkEEOACEIA8G18v8fb9EDREyMc6AMxIMIIAEFMgj7Gb5sJOKd28PLvmVcv4CDrBxU16Tq3onqipPr1BVHT1SXnqnfwWY8uZmx9Qr8AgwAkkcCWSbKQF0AAAAASUVORK5CYII=',
		car3:		'A8AAAAZCAMAAADZh4T+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFAP8AsvD/AKoA3wAA////WIwLcwAAAD9JREFUeNpiYGFhYYABZDatABMqYGBiRAbE8JEMA/GZUAzHlCfEp0Q/SD0TkgvBfFT3onoYMzyYmZmR2QABBgCpxQD3WQSsMAAAAABJRU5ErkJggg==',
		building1:	'HIAAABgCAMAAAD2HdbfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFZ1IA////////XHm9tQAAAAN0Uk5T//8A18oNQQAAAKtJREFUeNrs2sEKgCAQhOHV93/oAkM000ONhe0/Rw990GAupMVObF4ckzY1Xsl9MYQAqSWTB6klc4uQQrJsEVJFZg9SSJZ7A1KYUiobhYRcgvxgk/yafO+zDgnJvlyB5PCCZCpgKoCEZCqA5PCCZCqA5PCCZCqAPJFtwc+THnvck/BHWv2/rX35t1eqCyjOyEkVXtzscUOqChtU6JCUV9jDHJLaxGF8kJsAAwDN0gzofA6ppgAAAABJRU5ErkJggg==',
		building2:	'TgAAABgCAMAAAC+C552AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFmWkt////////dICyygAAAAN0Uk5T//8A18oNQQAAARVJREFUeNrs3csOgkAQRUHa//9oVz4IDOiQhnasu5wQA7U4CRuZbo1NmYuIqdJ67gccuAJw2XcJDhy443CpDYrHwIEDdwQutUHxNnDgwHXDpTYo5gMHDlwfXGqDYjFw4MB1wKU2KNYGDhy4b+FSGxSNgQMHrlSDwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIED9/zZqDdw4MBtkLUuO+fk6JOCAzcW3FBdAwduULjRugYOXCW43Vf0fx44cEXgLgzQT5y8/g4eHLiL4HRtN22zLzeAA3cFnIptn6x8ZAUcuHPhpO3DroEDVwHOlru1BwfcuXB3AQYAElwi6jHPvvYAAAAASUVORK5CYII=',
		building3:	'GAAAACoCAMAAAAo/RvTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFZ1IA////////XHm9tQAAAAN0Uk5T//8A18oNQQAAAKdJREFUeNrs2zEOgCAQBEDw/4820caAUIHBY660YBqzS4yXjsakURMRSGMnFnA/ydcACqA4GlBPfgygfzqgA0x8TcMBg8MOAACIa4DCASh9QNxGA2g0aQoAKH2NBtgckEUAAGAFQFwD3Oy+BGQRAOCL1wqARtNoAKUP0GiA2IC4BgCUvkYD+DNkN0BcAwDDgWLbbcpG3f+BYi0Q0AJqBvAK2LCu5hRgADrADJcAfjNjAAAAAElFTkSuQmCC',
		building4:	'TgAAABgCAMAAAC+C552AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFZ1IA////////XHm9tQAAAAN0Uk5T//8A18oNQQAAARNJREFUeNrs3csKwjAQBdDq/3+0CyFoHtXi5EE8d5kmMD2BoemiPQ5p594OHHCz4G5S5IQPHLjxcGlStsDICR84cLPg0gyt7Zt+Bw7cRLgqn+6WjYADtwhcdYGUOODATYd7u/xzPu7KyJHIuwMHbiO4lQ8k4MCBa7WbrfodOHA7wi3+yg8cOHC9TyaBz0zgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDg/gfu+dEWcODArQ9XtYstCxw4cCFwpV14ZeDAgQuBy+x6FAcOHLgQuFe7TvWBAwcuBC7Z9SsRHDhwIXC9/9YFDhy4KLgBduDAgbuShwADALRHIurzr7oWAAAAAElFTkSuQmCC',
		building5:	'HIAAABgCAMAAAD2HdbfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFmWkt////////dICyygAAAAN0Uk5T//8A18oNQQAAAJ1JREFUeNrs2kEKgDAMRNHo/Q/tohBCCl1NpDA/iy5EeeDQpKARA/UeK5zIR1pn2IfMm+oDqivmZFO1uULmOhqqJzka6oKdyRaJvpzI+tIhIe8naQXT5D72ICFvJmkFTBJITgWQTBJISFoBkwQSklbAJIF0JtdXhF83iQ2ZKqScrCqklmy7BVJItkQhhWRNFFJLTv2dBzmtWpCfAAMAygIM6DzO98cAAAAASUVORK5CYII=',
		tree:		'DwAAAA6CAMAAADbe8pdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFaZ5IU4gy////b13U0AAAAAN0Uk5T//8A18oNQQAAAoRJREFUeNqUVwFywzAIk/z/R68JRgjibF1uy21NZLCQBcX67SJI4vMH7vu8Tp9dr34wBOIWq/wF3usjgZ87IjLvz34F3+vfGDJCZ2QQB/wEK1xhY63YAxt8gJGoSNzTx170DEYuv18DkjjGf/HJEbzTbCCse/c7+MQaWG8o2yvFXAuJXu+RdSVvyj837ZQ3sD2HAhEqwk6Mx7SlrCI3Es8UgjtKTQ++PIqYTsnE6lkxZJWYTzxDKxyZK1OsIwucMlICyZHzVfrTnlmiyFVod4gDtK1nZEC0mL5A/9gqHvFvsFJliRLKgCpeWz8jl7RanXZ295lkE5lOaoCrMIALeYddXj2ld4G1YClLLGVZ6dql+DaKuDxiJT9IyyoOYaW8uUqmlmpVIMUNmCoo/zKRVMDSUXPZKwuCcFWhn1E5mx8MsAfmCcfccx2MVNg6SGlYg/2g5F115fgdYEnG9291yYeHvXbwcEov/+lK6x5qGchdi1Hlsm+TLp3LegHn6N3+nVsuNuc4QL1ckqXq51ZxoFtuQyfMuyKfFur0lktc16qWwnKTJ+nGkB30ZUf9jbNZ/nwhG/PMrvkC3cdNWN6mGtak2NyXYi/AFMWcjY7P8lbfGeCYaJqdiiDrVjLA9G0ZCNsB8qrThbG29Q6fIw6O2hilGl1r3M08WsVpR8Ba7DxCTjKnMz9bLIb5VK/1xTAHKtRUwNFpDC53lB8XuI9QXqT8t9IjBtjnS5dyxd4TQB0cn4aq1nhyF31SU1SepzYN9fbbKruKgrfx8emg7RRwDr1tAnQ/8kHOK4C3Yb36DX26slp/8wVldccqu/sKvDmldU1+Hdm/NpgI1n/AdbpjIJrPfwQYAJXaCdTH9+3uAAAAAElFTkSuQmCC',
		water:		'HgAAAAQCAMAAADqHUvXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFSDqqapXdPj/2SAAAAGlJREFUeNpiYEADjIwIkjIAMoMa5hBpCAkOp4qrBjMg04PUi3sMAwkbSvVIIcVycoMWjx0wAfIcgBkVmOaQ5EHS4xZmMC49ZIfqsM9+A5V/iUtEA+IHamdDkp2B3QEUlHiU+wibboAAAwCdeQBtLJxFtgAAAABJRU5ErkJggg==',
		concrete:	'EgAAABICAMAAABiM0N1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFxMTE1NTUJM5ZHQAAAExJREFUeNrs0jEKACAMA8D4/08LiviAdhC5Ls0USrmMM6mlfF6UNbWUhmPu/rSo4c87kU022WSTTTbZZJNNNtlkk0022WST/ZCjKcAAL24QUZ2VpiwAAAAASUVORK5CYII='
	},
	// jsfxr sounds:
	sounds: {
		hover:		[ 2,,0.1782,,0.0017,0.54,,,,,,,,0.4487,,,,,1,,,0.1,,0.5 ],
		clickButton:[ 2,,0.0817,0.4013,0.1998,0.7972,,,,,,,,,,,,,1,,,,,0.49 ],
		switchLight:[ 1,,0.05,,0.1,0.29,,,,,,-0.02,,,,,,,1,,,0.1,,0.62 ],
		gameOver:	[ 0,,0.3744,,0.4312,0.3874,,0.3818,,,,,,0.4094,,0.7409,,,1,,,,,0.5 ]
	},
	// the game colors based on the Commodore 64 color palette:
	colors:			[ '000000', 'ffffff', '924a40', '84c5cc', 'D27DED', '72b14b', '483aaa', 'd5df7c', '99692d', '675200', 'ff7373', '606060', '8a8a8a', 'b3ec91', 'A397FF', 'b3b3b3' ],
	// for car painting:
	carColors: [
		[ 230,	230,	50	],
		[ 100,	150,	220	],
		[ 230,	100,	100	],
		[ 60,	210,	60	],
		[ 150,	150,	150	],
		[ 150,	130,	50	],
		[ 170,	60,		170	],
		[ 50,	180,	180	]
	],
	// to avoid crossroad collisions, precedence:
	crossroadMatrix: {
		straight:	{ 0: [6, 10],		90: [9, 10],		180: [5, 9],			270: [5, 6] },
		right:		{ 0: [10, 11],		90: [9, 13],		180: [4, 5],			270: [2, 6] },
		left:		{ 0: [5, 6, 10],	90: [6, 7, 9, 10],	180: [5, 9, 10, 14],	270: [5, 6, 9] }
	},
	// denied travelling directions in 3 way crossroads:
	deniedDirections: {
		straight:	{ 0: 0,		90: 1,	180: 2,		270: 3 },
		right:		{ 0: 1,		90: 2,	180: 3,		270: 0 },
		left:		{ 0: 3,		90: 0,	180: 1,		270: 2 }
	},
	cityButtons: {
		paris:		[ 0, 10, 90, 30 ],
		london:		[ 100, 10, 90, 30 ],
		newYork:	[ 200, 10, 90, 30 ],
		roma:		[ 0, 50, 90, 30 ],
		sydney:		[ 100, 50, 90, 30 ],
		budapest:	[ 200, 50, 90, 30 ]
	},
	// city definitions. map, decorations, menu position:
	cities: {
		paris: {
			name: 'Paris',
			map: [
				'44v33333333v66',
				'44v33333333v66',
				'44lhhhhhmhhkhh',
				'44v66666v22v33',
				'44v66666v22v33',
				'44v66666v22v33',
				'hhkhhhhhihhkhh',
				'22v33333333v11',
				'22v33333333v11'
			],
			buildings: [ [1, 252, 0], [2, 432, 0], [3, 912, 238], [4, 246, 552], [5, 640, 552] ],
			trees: [
				[ 300, 108 ], [ 380, 108 ], [ 460, 108 ], [ 540, 108 ],
				[ 270, 480 ], [ 350, 480 ], [ 430, 480 ], [ 590, 480 ], [ 670, 480 ],
				[ 844, 274 ], [ 844, 340 ]
			],
			menuOffset : [ 250, 265 ]
		},
		london: {
			name: 'London',
			map: [
				'22222v33333v66',
				'22222v33333v66',
				'hhmhhihhhhhkhh',
				'55v66666666v22',
				'55v66666666v22',
				'55v66666666v22',
				'hhkhhhhhmhhihh',
				'44v33333v44444',
				'44v33333v44444'
			],
			buildings: [ [1, 40, 0], [1, 200, 0], [2, 452, 0], [3, 912, 238], [4, 246, 552] ],
			trees: [
				[ 20, 108 ], [ 120, 108 ],
				[ 504, 108 ], [ 594, 108 ], [ 684, 108 ],
				[ 270, 484 ], [ 355, 484 ], [ 440, 484 ]
			],
			menuOffset: [ 360, 265 ]
		},
		newYork: {
			name: 'New York',
			map: [
				'11v33v33333v66',
				'11v33v33333v66',
				'hhj22lhhhhhkhh',
				'44v22v66666v33',
				'44v22v66666v33',
				'44v22v66666v33',
				'hhkhhihhmhhj22',
				'44v33333v33v22',
				'44v33333v33v22'
			],
			buildings: [ [1, 232, 0], [2, 452, 0], [3, 912, 238], [4, 246, 552], [5, 668, 552] ],
			trees: [
				[ 505, 104 ], [ 595, 104 ], [ 690, 104 ],
				[ 844, 274 ], [ 844, 340 ], [ 844, 406 ],
				[ 380, 484 ], [ 450, 484 ],
				[ 198, 272 ], [ 198, 340 ],
				[ 320, 160 ], [ 320, 235 ], [ 320, 310 ]
			],
			menuOffset: [ 470, 265 ]
		},
		roma: {
			name: 'Roma',
			map: [
				'44v33333v22266',
				'44v33333v22266',
				'44lhhhhhkhhmhh',
				'44v66666v44v33',
				'hhj66666v44v33',
				'11v66666v44v33',
				'11v66666v44lhh',
				'11lhhhhhj44v22',
				'11v55555v44v22'
			],
			buildings: [ [2, 240, 0], [1, 664, 0], [3, 912, 238], [5, 0, 408], [5, 0, 552] ],
			trees: [
				[ 300, 102 ], [ 380, 102 ], [ 460, 102 ], [ 710, 102 ], [ 790, 102 ],
				[ 260, 198 ], [ 350, 198 ], [ 440, 198 ],
				[ 264, 558 ], [ 354, 558 ], [ 444, 558 ]
			],
			menuOffset: [ 258, 310 ]
		},
		sydney: {
			name: 'Sydney',
			map: [
				'33333v22v33v66',
				'33333v22v33v66',
				'hhhhhkhhihhkhh',
				'44444v66666v22',
				'44444v66666v22',
				'44444v66666v22',
				'hhmhhihhhhhkhh',
				'55v11111111v44',
				'55v11111111v44'
			],
			buildings: [ [2, 0, 0], [ 1, 664, 0], [ 3, 912, 238], [4, 428, 552], [5, 260, 552] ],
			trees: [
				[ 20, 108 ], [ 100, 108 ], [ 180, 108 ], [ 260, 108 ],
				[ 380, 484 ], [ 475, 484 ], [ 570, 484 ], [ 665, 484 ],
				[ 844, 274 ], [ 844, 340 ]
			],
			menuOffset: [ 470, 275 ]
		},
		budapest: {
			name: 'Budapest',
			map: [
				'3333333v444v66',
				'3333333v444v66',
				'hmhhhhhkhhhkhh',
				'1v66666v444v33',
				'1v66666v444v33',
				'1v66666v444v33',
				'1lhhhhhkhhhj33',
				'1v22222v444v33',
				'1v22222v444v33',
			],
			buildings: [ [1, 0, 0], [2, 144, 0], [3, 912, 248], [3, 912, 448], [4, 174, 552] ] ,
			trees: [
				[ 30, 108 ], [ 220, 108 ], [ 305, 108 ], [ 390, 108 ],
				[ 200, 484 ], [ 285, 484 ], [ 370, 484 ],
				[ 844, 285 ], [ 844, 355 ], [ 844, 425 ], [ 844, 570 ],
				[ 30, 250 ], [ 30, 315 ], [ 30, 445 ], [ 30, 512 ], [ 30, 580 ]
			],
			menuOffset: [ 180, 265 ]
		}
	}
};

// jsfxr:
function SfxrParams(){this.setSettings=function(e){for(var f=0;24>f;f++)this[String.fromCharCode(97+f)]=e[f]||0;0.01>this.c&&(this.c=0.01);e=this.b+this.c+this.e;0.18>e&&(e=0.18/e,this.b*=e,this.c*=e,this.e*=e)}}
function SfxrSynth(){this._params=new SfxrParams;var e,f,d,g,l,z,J,K,L,A,m,M;this.reset=function(){var c=this._params;g=100/(c.f*c.f+0.001);l=100/(c.g*c.g+0.001);z=1-0.01*c.h*c.h*c.h;J=1E-6*-c.i*c.i*c.i;c.a||(m=0.5-c.n/2,M=5E-5*-c.o);K=0<c.l?1-0.9*c.l*c.l:1+10*c.l*c.l;L=0;A=1==c.m?0:2E4*(1-c.m)*(1-c.m)+32};this.totalReset=function(){this.reset();var c=this._params;e=1E5*c.b*c.b;f=1E5*c.c*c.c;d=1E5*c.e*c.e+10;return e+f+d|0};this.synthWave=function(c,N){var a=this._params,O=1!=a.s||a.v,r=0.1*a.v*a.v,
P=1+3E-4*a.w,n=0.1*a.s*a.s*a.s,V=1+1E-4*a.t,W=1!=a.s,X=a.x*a.x,Y=a.g,Q=a.q||a.r,Z=0.2*a.r*a.r*a.r,D=a.q*a.q*(0>a.q?-1020:1020),R=a.p?(2E4*(1-a.p)*(1-a.p)|0)+32:0,$=a.d,S=a.j/2,aa=0.01*a.k*a.k,E=a.a,F=e,ba=1/e,ca=1/f,da=1/d,a=5/(1+20*a.u*a.u)*(0.01+n);0.8<a&&(a=0.8);for(var a=1-a,G=!1,T=0,v=0,w=0,B=0,t=0,x,u=0,h,p=0,s,H=0,b,U=0,q,I=0,C=Array(1024),y=Array(32),k=C.length;k--;)C[k]=0;for(k=y.length;k--;)y[k]=2*Math.random()-1;for(k=0;k<N;k++){if(G)return k;R&&++U>=R&&(U=0,this.reset());A&&++L>=A&&(A=
0,g*=K);z+=J;g*=z;g>l&&(g=l,0<Y&&(G=!0));h=g;0<S&&(I+=aa,h*=1+Math.sin(I)*S);h|=0;8>h&&(h=8);E||(m+=M,0>m?m=0:0.5<m&&(m=0.5));if(++v>F)switch(v=0,++T){case 1:F=f;break;case 2:F=d}switch(T){case 0:w=v*ba;break;case 1:w=1+2*(1-v*ca)*$;break;case 2:w=1-v*da;break;case 3:w=0,G=!0}Q&&(D+=Z,s=D|0,0>s?s=-s:1023<s&&(s=1023));O&&P&&(r*=P,1E-5>r?r=1E-5:0.1<r&&(r=0.1));q=0;for(var ea=8;ea--;){p++;if(p>=h&&(p%=h,3==E))for(x=y.length;x--;)y[x]=2*Math.random()-1;switch(E){case 0:b=p/h<m?0.5:-0.5;break;case 1:b=
1-2*(p/h);break;case 2:b=p/h;b=0.5<b?6.28318531*(b-1):6.28318531*b;b=0>b?1.27323954*b+0.405284735*b*b:1.27323954*b-0.405284735*b*b;b=0>b?0.225*(b*-b-b)+b:0.225*(b*b-b)+b;break;case 3:b=y[Math.abs(32*p/h|0)]}O&&(x=u,n*=V,0>n?n=0:0.1<n&&(n=0.1),W?(t+=(b-u)*n,t*=a):(u=b,t=0),u+=t,B+=u-x,b=B*=1-r);Q&&(C[H%1024]=b,b+=C[(H-s+1024)%1024],H++);q+=b}q=0.125*q*w*X;c[k]=1<=q?32767:-1>=q?-32768:32767*q|0}return N}}var synth=new SfxrSynth;
window.jsfxr=function(e){synth._params.setSettings(e);var f=synth.totalReset();e=new Uint8Array(4*((f+1)/2|0)+44);var f=2*synth.synthWave(new Uint16Array(e.buffer,44),f),d=new Uint32Array(e.buffer,0,44);d[0]=1179011410;d[1]=f+36;d[2]=1163280727;d[3]=544501094;d[4]=16;d[5]=65537;d[6]=44100;d[7]=88200;d[8]=1048578;d[9]=1635017060;d[10]=f;for(var f=f+44,d=0,g="data:audio/wav;base64,";d<f;d+=3)var l=e[d]<<16|e[d+1]<<8|e[d+2],g=g+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>18]+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l&63]);d-=f;return g.slice(0,g.length-d)+"==".slice(0,d)};

/* COMMON FUNCTIONS */

var UTIL = {
	// get a random number between 1 and limit:
	rnd: function(limit) {
		return Math.floor(Math.random() * limit) + 1;
	},

	// draw a filled rectangle:
	rect: function(x, y, w, h, colorIndex) {
		engine.canvas.fillStyle = '#' + DATA.colors[colorIndex];
		engine.canvas.fillRect(x, y, w, h);
	},

	// draw a text:
	drawText: function(text, x, y, colorIndex, size, maxWidth) {
		if (!size) size = 14;
		if (!maxWidth) maxWidth = 1000;

		engine.canvas.fillStyle = '#' + DATA.colors[colorIndex];

		engine.canvas.font = 'bold ' + size + 'pt serif';
		engine.canvas.fillText(text, x, y, maxWidth);
	},

	// collision detection of two rectangular object:
	collision: function(x1, y1, w1, h1, x2, y2, w2, h2) {
		return x1 + w1 < x2 || x1 > x2 + w2 || y1 + h1 < y2 || y1 > y2 + h2 ? false : true;
	},

	getEntryPointPixels: function(entryPoint) {
		return {
			x: entryPoint.x * 72 + [0, 45, -20, 17, 82][entryPoint.d],
			y: entryPoint.y * 72 + [0, 82, 45, -20, 17][entryPoint.d]
		};
	},

	// create an image from base64 string:
	imageBySprite: function(name) {
		var img = new Image();
		img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA' + DATA.sprites[name];
		return img;
	},

	// flashing rectangle on hover /buttons and crossroads/:
	hoverArea: function(x, y, w, h, name) {
		if (!w) w = 90;
		if (!h) h = 30;

		engine.canvas.beginPath();
		engine.canvas.strokeStyle = '#' + DATA.colors[[0, 11, 12, 15, 1, 1, 15, 12, 11][engine.animationFrameCounter % 9]];
		engine.canvas.lineWidth = 2;
		engine.canvas.rect(x, y, w, h);
		engine.canvas.stroke();

		game.hover.newElement = name ? name : (x + ',' + y + ',' + w + ',' + h);
	},

	// play jsfxr sound:
	playSound: function(name) {
		if (!Audio) return;
		var soundURL = jsfxr(DATA.sounds[name]); 
		var player = new Audio();
		player.src = soundURL;
		player.play();
		game.lastSoundTime = Date.now();
	},

	// for avoid collision and tailgating:
	getCarFrontArea: function(r, x, y) {
		var i;

		if (r >= 330 || r < 30)			i = [x - 3,		y - 15,	14,	5];
		else if (r >= 30 && r < 70)		i = [x + 5,		y - 14,	15,	19];
		else if (r >= 70 && r < 110)	i = [x + 18,	y - 3,	5,	15];
		else if (r >= 110 && r < 150)	i = [x + 5,		y + 4,	15,	19];
		else if (r >= 150 && r < 210)	i = [x - 2,		y + 18,	14,	5];
		else if (r >= 210 && r < 250)	i = [x - 10,	y + 4,	15,	19];
		else if (r >= 250 && r < 290)	i = [x - 16,	y - 3,	5,	15];
		else if (r >= 290 && r < 330)	i = [x - 11,	y - 14,	15,	19];

		return i;
	}
};

function TrafficCar(entryPoint) {
	this.id = game.cars.length;			// unique ID
	this.out = false;					// this car leave the city?
	this.type = UTIL.rnd(3) - 1;		// generate car type randomly
	this.state = 'accelerate';			// enum: [accelerate, brake]
	this.turn = false;					// enum: [false, left, right]
	this.needRefreshImage = false;		// when turning we need rotate and refresh the car image
	this.speed = 2;						// car speed (pixel per frame)
	this.angerLevel = 0;				// based on waiting frames, 0 - 1000
	this.peakAngerLevel = 0;			// for scoring, when the car leave the city
	this.turnDelay = {					// straignt pixels before turning
		left: false,
		right: false
	};
	this.index = {						// which index is blinking?
		left: false,
		right: false
	};
	this.lastPath = {					// the generated direction in the last crossroad
		crossroad: false,				// crossroad key
		'in': false,
		direction: false
	};
	this.canvas = { };					// car, headlights, index
	this.context = { };

	// set the start position by entry point:
	var ep = UTIL.getEntryPointPixels(entryPoint);
	this.x = ep.x;
	this.y = ep.y;
	this.r = (entryPoint.d - 1) * 90;

	// generate own car image (painting), index canvas, headlights canvas:
	// car canvas:
	this.canvas.car = document.createElement('canvas');
	this.canvas.car.width = 40;
	this.canvas.car.height = 40;
	this.context.car = this.canvas.car.getContext('2d');

	// painting the car:
	this.canvas.painted = document.createElement('canvas');
	this.canvas.painted.width = 15;
	this.canvas.painted.height = 25;
	this.context.painted = this.canvas.painted.getContext('2d');

	var sd = game.carsSpriteData[this.type];
	var p = this.context.painted.createImageData(15, 25);

	var c = DATA.carColors[UTIL.rnd(8) - 1];
	for (var i = 0, n = sd.length; i < n; i += 4) {
		if (sd[i] == 0 && sd[i + 1] == 255) {
			p.data[i] = c[0];
			p.data[i + 1] = c[1];
			p.data[i + 2] = c[2];
		}
		else if (sd[i] == 0 && sd[i + 1] == 170) {
			p.data[i] = c[0] - 50;
			p.data[i + 1] = c[1] - 50;
			p.data[i + 2] = c[2] - 50;
		}
		else {
			p.data[i] = sd[i];
			p.data[i + 1] = sd[i + 1];
			p.data[i + 2] = sd[i + 2];
		}

		p.data[i + 3] = sd[i + 3];
	}

	this.context.painted.putImageData(p, 0, 0);

	// index canvas:
	this.canvas.index = document.createElement('canvas');
	this.canvas.index.width = 40;
	this.canvas.index.height = 40;
	this.context.index = this.canvas.index.getContext('2d');
	var g = this.context.index.createRadialGradient(0, 0, 6, 0, 0, 20);
	g.addColorStop(0, 'rgba(255, 255, 0, .8)');
	g.addColorStop(1, 'rgba(255, 255, 0, .0)');
	this.context.index.fillStyle = g;

	// headlight canvas:
	this.canvas.headlights = document.createElement('canvas');
	this.canvas.headlights.width = 40;
	this.canvas.headlights.height = 40;
	this.context.headlights = this.canvas.headlights.getContext('2d');

	this.refreshCarImage = function() {
		// car:
		this.context.car.save();
		this.context.car.clearRect(0, 0, 40, 40);
		this.context.car.translate(20, 20);
		this.context.car.rotate(this.r * Math.PI / 180);
		this.context.car.drawImage(this.canvas.painted, 0, 0, 15, 25, -8, -12, 15, 25);
		this.context.car.restore();

		// blinking index:
		this.context.index.save();
		this.context.index.clearRect(0, 0, 40, 40);
		this.context.index.translate(20, 20);
		this.context.index.rotate(this.r * Math.PI / 180);
		if (this.index.left) {
			this.context.index.beginPath();
			this.context.index.arc(-9, -10, 5, 0, Math.PI * 2);
			this.context.index.arc(-9, 11, 5, 0, Math.PI * 2);
			this.context.index.fill();
		}
		else if (this.index.right) {
			this.context.index.beginPath();
			this.context.index.arc(7, -10, 5, 0, Math.PI * 2);
			this.context.index.arc(7, 11, 5, 0, Math.PI * 2);
			this.context.index.fill();
		}
		this.context.index.restore();

		// headlights:
		this.context.headlights.save();
		this.context.headlights.clearRect(0, 0, 40, 40);
		this.context.headlights.translate(20, 20);
		this.context.headlights.rotate(this.r * Math.PI / 180);

		var g = this.context.headlights.createRadialGradient(0, 0, 6, 0, 0, 20);
		g.addColorStop(0, 'rgba(255, 255, 255, .8)');
		g.addColorStop(1, 'rgba(255, 255, 255, .0)');
		this.context.headlights.fillStyle = g;

		// left headlight:
		this.context.headlights.beginPath();
		this.context.headlights.arc(-6, -16, 8, 0, Math.PI * 2);
		// right headlight:
		this.context.headlights.arc(5, -16, 8, 0, Math.PI * 2);
		this.context.headlights.fill();

		this.context.headlights.fillStyle = '#f33';
		// left brake:
		this.context.headlights.beginPath();
		this.context.headlights.arc(-5, 12, 1, 0, Math.PI * 2);
		// right brake:
		this.context.headlights.arc(5, 12, 1, 0, Math.PI * 2);
		this.context.headlights.fill();

		this.context.headlights.restore();
	};

	this.refreshCarImage();

	// generate new path when the car arrive to crossroad
	this.generatePath = function(pos, r) {
		if (this.lastPath.crossroad == pos) return;
		
		var t = game.trafficLights[pos];
		var newDirection;
		var ok;
		do {
			newDirection = ['straight', 'left', 'right'][UTIL.rnd(3) - 1];
		} while (!t[DATA.deniedDirections[newDirection][r]]);

		this.lastPath = {
			crossroad: pos,
			'in': r,
			d: newDirection
		};

		if (newDirection == 'left') this.index.left = true;
		else if (newDirection == 'right') this.index.right = true;

		this.needRefreshImage = true;
	};

	this.animationRoutine = function() {
		engine.canvas.drawImage(this.canvas.car, this.x - 15, this.y - 15);
	};

	this.animateIndex = function() {
		if (engine.animationFrameCounter % 12 < 6) engine.canvas.drawImage(this.canvas.index, this.x - 15, this.y - 15);
	};

	this.animateHeadlights = function() {
		engine.canvas.drawImage(this.canvas.headlights, this.x - 15, this.y - 15);
	};

	this.scanRoutine = function() {
		// avoid crash:
		var needBrake = false;
		var pP = UTIL.getCarFrontArea(this.r, this.x, this.y);

		for (var i = 0; i < game.cars.length; i++) {
			var car = game.cars[i];
			if (car.out) continue;
			if (car.x == this.x && car.y == this.y) continue;

			var cW = (car.r >= 330 || car.r < 30) || (car.r >= 150 && car.r < 210) ? 8 : 16;
			var cH = (car.r >= 70 && car.r < 110) || (car.r >= 250 && car.r < 290) ? 8 : 16;

			if (cW == 16 && cH == 16) { cW = 11; cH = 11; }

			if (UTIL.collision(pP[0], pP[1], pP[2], pP[3], car.x + 4 - cW, car.y + 4 - cH, cW * 2, cH * 2)) {
				// the collision is bilateral? is there a jam?
				var pW = (this.r >= 330 || this.r < 30) || (this.r >= 150 && this.r < 210) ? 8 : 16;
				var pH = (this.r >= 70 && this.r < 110) || (this.r >= 250 && this.r < 290) ? 8 : 16;

				if (pW == 16 && pH == 16) { pW = 11; pH = 11; }

				var cP = UTIL.getCarFrontArea(car.r, car.x, car.y);
				var jam = UTIL.collision(cP[0], cP[1], cP[2], cP[3], this.x + 4 - pW, this.y + 4 - pH, pW * 2, pH * 2) ? true : false;

				needBrake = true;
				if (jam) {
					if (this.r % 90 === 0) needBrake = false;
					else if (this.id < car.id) needBrake = false;
				}
			}

			if (needBrake) break;
		}

		if (needBrake) this.state = 'brake';
		else if (this.state != 'crossroad') this.state = 'accelerate';

		// stop on the lights, generating new path:
		for (var pos in game.trafficLights) {
			var tmp = pos.split('x');
			var x = +tmp[0];
			var y = +tmp[1];

			if (
				(this.r == 0 && this.x == x * 72 + 45 && (this.y == y * 72 + 90 || this.y == y * 72 + 91)) || 
				(this.r == 180 && this.x == x * 72 + 17 && (this.y == y * 72 - 30 || this.y == y * 72 - 31)) ||
				(this.r == 90 && this.y == y * 72 + 45 && (this.x == x * 72 - 30 || this.x == x * 72 - 31)) ||
				(this.r == 270 && this.y == y * 72 + 17 && (this.x == x * 72 + 90 || this.x == x * 72 + 91))
			) {
				this.generatePath(pos, this.r);
				if (game.trafficLights[pos][[180, 270, 0, 90].indexOf(this.r)] == 'red') this.state = 'crossroad';
				else this.crossroadPrecedence(pos);
			}
		}

		if (this.state == 'accelerate') this.speed = 2;
		else if (this.state == 'brake' || this.state == 'crossroad') this.speed = 0;
		
		// turning:
		if (this.turn) {
			this.needRefreshImage = true;

			if (this.speed > 0) {
				if (this.turnDelay[this.turn] === false) this.turnDelay[this.turn] = 0;
				if (this.turnDelay[this.turn] !== false) this.turnDelay[this.turn]++;
				if (this.turnDelay[this.turn] > (this.turn == 'left' ? 22 : 9)) {
					if (this.turn == 'left') {
						this.r -= 4;
						if (this.r < 0) this.r = 360 + this.r;
					}
					else {
						this.r += 4;
						if (this.r > 360) this.r = this.r - 360;
					}

					if (Math.round((this.r % 90) * 100) / 100 < 4) this.endTurn();
				}
			}
		}

		if (this.needRefreshImage) {
			this.needRefreshImage = false;
			this.refreshCarImage();
		}

		// moving:
		var oX = Math.sin(this.r * Math.PI / 180);
		var oY = -Math.cos(this.r * Math.PI / 180);

		this.y += oY * this.speed;
		this.x += oX * this.speed;

		this.y = Math.round(this.y);
		this.x = Math.round(this.x);

		// leave the city?
		if (
			(this.r == 0 && this.y < -30) ||
			(this.r == 90 && this.x > 1010) ||
			(this.r == 180 && this.y > 650) ||
			(this.r == 270 && this.x < -30)
		) {
			this.out = true;
			game.carsOut++;

			if (this.peakAngerLevel < 300) game.score += 3;
			else if (this.peakAngerLevel < 500) game.score += 2;
			else if (this.peakAngerLevel < 700) game.score += 1;
		}

		// increase or decrease anger level:
		if (!this.out) {
			this.speed == 0 ? this.angerLevel++ : this.angerLevel--;
			if (this.angerLevel < 0) this.angerLevel = 0;
			else if (this.angerLevel > 1000) this.angerLevel = 1000;
			if (this.angerLevel > this.peakAngerLevel) this.peakAngerLevel = this.angerLevel;
		}
	};

	this.crossroadPrecedence = function(pos) {
		var tmp = pos.split('x');

		var matrix = [];
		for (var i = 0; i < 16; i++) matrix[i] = false;

		for (var m = 0; m < 16; m++) {
			if (m % 3 == 0) continue;

			var oX = (m % 4) * 36 - 36;
			var oY = Math.floor(m / 4) * 36 - 36;

			var carInMatrix = false;
			for (var i = 0; i < game.cars.length; i++) {
				var car = game.cars[i];

				// exceptions:
				if (
					(car.out) ||
					(car.id == this.id) ||
					(car.lastPath.crossroad == this.lastPath.crossroad && car.lastPath['in'] == this.lastPath['in'] && car.state == 'accelerate')
				) continue;

				// car dimensions:
				var cW = (car.r >= 330 || car.r < 30) || (car.r >= 150 && car.r < 210) ? 8 : 16;
				var cH = (car.r >= 70 && car.r < 110) || (car.r >= 250 && car.r < 290) ? 8 : 16;

				if (cW == 16 && cH == 16) { cW = 11; cH = 11; }

				// collision detection:
				if (UTIL.collision(car.x + 4 - cW, car.y + 4 - cH, cW * 2, cH * 2, +tmp[0] * 72 + oX, +tmp[1] * 72 + oY, 36, 36)) {
					carInMatrix = true;
					break;
				}
			}
			if (carInMatrix) matrix[m] = true;
		}

		var d = this.lastPath.d;
		var cm = DATA.crossroadMatrix[d][this.r];
		var needStop = false;
		for (var i = 0; i < cm.length; i++) if (matrix[cm[i]]) needStop = true;

		if (needStop) this.state = 'crossroad';
		else {
			this.state = 'accelerate';
			this.turn = d == 'straight' ? false : d;
		}
	};

	// end turn, go straight ahead
	this.endTurn = function() {
		this.turn = false;

		var x = Math.floor(this.x / 72);
		var y = Math.floor(this.y / 72);

		if (this.r > 350 || this.r < 10) {
			this.x = x * 72 + 45;
			this.r = 0;
		}
		else if (this.r > 80 && this.r < 100) {
			this.y = y * 72 + 45;
			this.r = 90;
		}
		else if (this.r > 170 && this.r < 190) {
			this.x = x * 72 + 17;
			this.r = 180;
		}
		else if (this.r > 260 && this.r < 280) {
			this.y = y * 72 + 17;
			this.r = 270;
		}

		this.index = {
			left: false,
			right: false
		};
		this.turnDelay = {
			left: false,
			right: false
		};
	};
}

function TrafficGame() {
	this.city = 'paris';			// actual city [london, paris, newYork, roma, sydney, budapest]
	this.scene = 'menu';			// In this game we have two scene only: menu or game
	this.time = 'day';				// part of the day: [day, night]
	this.frameCounters = {			// for timing
		level: 0,					// elapsed frames since game start
		timeSwitch: 0,				// for day/night switch animation
		touchstart: 0				// for mobile touches timing
	};

	this.init = function() {
		this.setImages();
		this.setCity('paris');
	};

	// reset game variables (when start new game or select a city)
	this.resetVariables = function() {
		this.trafficLights = { };		// traffic lights and its status
		this.cars = [ ];				// array of car object in actual city
		this.carsIn = 0;				// how many cars enter to the city?
		this.carsOut = 0;				// how many cars leave the city? (in-out is the actual car counter)
		this.carFrequency = 26;			// every minute, more frequently arriving the cars into the city
		this.score = 0;					// score
		this.weightedAngerLevel = 0;	// based on the cars anger level
		this.gameOver = false;			// if the weighted anger level is overflowed the game is over
		this.entryPoints = [ ];			// positions where cars can enter the city
		this.frameCounters.level = 0;
		this.frameCounters.timeSwitch = 0;
		this.lastSoundTime = 0;			// to minimal delay between two sounds
		this.hover = {
			element: false,
			newElement: false
		};
	};

	this.setImages = function() {
		// cars:
		this.carImages = [];
		this.carsSpriteData = [];

		function carSpriteOnload(img) {
			var num = img.getAttribute('num');
			var canvas = document.createElement('canvas');
			canvas.width = 15;
			canvas.height = 25;
			var canvasContext = canvas.getContext('2d');
			canvasContext.drawImage(game.carImages[num], 0, 0);
			game.carsSpriteData[num] = canvasContext.getImageData(0, 0, 15, 25).data;
		}

		for (var i = 0; i < 3; i++) {
			this.carImages[i] = UTIL.imageBySprite('car' + (i + 1));
			this.carImages[i].setAttribute('num', i);
			this.carImages[i].onload = function() { carSpriteOnload(this); }
		}

		// buildings:
		this.buildings = [];
		for (var i = 1; i <= 5; i++) this.buildings[i] = UTIL.imageBySprite('building' + i);

		// tree:
		this.treeImage = UTIL.imageBySprite('tree');

		// water:
		this.waterImage = UTIL.imageBySprite('water');

		// concrete:
		this.concreteImage = UTIL.imageBySprite('concrete');
	};

	// set city (when change city or start new game)
	this.setCity = function(city) {
		this.resetVariables();
		this.city = city;

		UTIL.playSound('clickButton');

		// find and set traffic lights and entry points by city map:
		for (var row = 0; row < 9; row++) {
			for (var col = 0; col < 14; col++) {
				var i = DATA.cities[city].map[row][col];

				// set traffic light:
				if (i in {i:1,j:1,k:1,l:1,m:1}) {
					var key = col + 'x' + row;

					var l1 = i == 'm' ? false : 'red';
					var l2 = i == 'j' ? false : 'green';
					var l3 = i == 'i' ? false : 'red';
					var l4 = i == 'l' ? false : 'green';

					this.trafficLights[key] = [l1, l2, l3, l4];
				}

				// set entry point:
				var d = 0;

				if (row == 0 && i == 'v') d = 3;
				if (row == 8 && i == 'v') d = 1;
				if (col == 0 && i == 'h') d = 2;
				if (col == 13 && i == 'h') d = 4;

				if (d) this.entryPoints.push({ x: col, y: row, d: d, cars: 0 });
			}
		}
	};

	// switch the traffic light on this crossroad
	this.switchLight = function(lightKey) {
		if (!(lightKey in this.trafficLights)) return;

		for (var i = 0; i < 4; i++) {
			var val = this.trafficLights[lightKey][i];
			if (val === false) continue;
			this.trafficLights[lightKey][i] = val == 'red' ? 'green' : 'red';
		}
	};

	// start day / night change animation
	this.switchTime = function(time) {
		this.time = time;
		document.body.setAttribute("class", time);
		this.frameCounters.timeSwitch = 60;
	};

	this.tweetScore = function() {
		var twitterMessage = 'I just reached ' + this.score + ' points in ' + DATA.cities[this.city].name + '! http://traffic.krissz.hu/';
		document.getElementById('twitter').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitterMessage));
		document.getElementById('twitter').click();
	};

	// drawing to the canvas (requestAnimationFrame iteration)
	this.animationRoutine = function() {
		engine.animationFrameCounter++;

		// draw terrain and roads:
		for (var row = 0; row < 9; row++) {
			for (var col = 0; col < 14; col++) {
				var i = DATA.cities[this.city].map[row][col];
				var t = +i;
				var x = col * 72;
				var y = row * 72;
				if (t > 0) {
					// draw terrain (grass, sand, water, concrete...)
					if (t == 1) UTIL.rect(x, y, 72, 72, 13);
					if (t == 2) UTIL.rect(x, y, 72, 72, 5);
					if (t == 3) engine.canvas.drawImage(this.concreteImage, x, y);
					if (t == 4) {
						UTIL.rect(x, y, 72, 72, 6);
						var wave = engine.animationFrameCounter % 18;
						if (wave < 6) {
							engine.canvas.drawImage(this.waterImage, 0, 0, 40, 16, x + 5, y + 10, 40, 16);
							engine.canvas.drawImage(this.waterImage, 40, 0, 40, 16, x + 30, y + 50, 40, 16);
						}
						else if (wave < 12) {
							engine.canvas.drawImage(this.waterImage, 80, 0, 40, 16, x + 5, y + 10, 40, 16);
							engine.canvas.drawImage(this.waterImage, 0, 0, 40, 16, x + 30, y + 50, 40, 16);
						}
						else {
							engine.canvas.drawImage(this.waterImage, 40, 0, 40, 16, x + 5, y + 10, 40, 16);
							engine.canvas.drawImage(this.waterImage, 80, 0, 40, 16, x + 30, y + 50, 40, 16);
						}
					}
					if (t == 5) UTIL.rect(x, y, 72, 72, 7);
					if (t == 6) UTIL.rect(x, y, 72, 72, 3);
				}
				// draw roads, road signs:
				else {
					UTIL.rect(x, y, 72, 72, 11);
					if (i == 'h' || i == 'm') UTIL.rect(x, y + 9, 72, 2, 7);
					if (i == 'h' || i == 'i') UTIL.rect(x, y + 61, 72, 2, 7);
					if (i == 'v' || i == 'l') UTIL.rect(x + 9, y, 2, 72, 7);
					if (i == 'v' || i == 'j') UTIL.rect(x + 61, y, 2, 72, 7);
					if (i == 'h') for (var i = 0; i < 4; i++) UTIL.rect(x - 5 + i * 24, y + 35, 10, 2, 7);
					if (i == 'v') for (var i = 0; i < 4; i++) UTIL.rect(x + 35, y - 5 + i * 24, 2, 10, 7);

					engine.canvas.strokeStyle = '#' + DATA.colors[7];
					engine.canvas.lineWidth = 2;
					if (i == 'i' || i == 'j' || i == 'k') {
						UTIL.rect(x - 5, y + 35, 10, 2, 7);
						UTIL.rect(x + 35, y - 5, 2, 10, 7);

						engine.canvas.beginPath();
						engine.canvas.arc(x, y, 10, 0, Math.PI / 2, false);
						engine.canvas.stroke();
					}
					if (i == 'j' || i == 'm' || i == 'k') {
						UTIL.rect(x - 5, y + 35, 10, 2, 7);

						engine.canvas.beginPath();
						engine.canvas.arc(x, y + 72, 10, 0, Math.PI * 1.5, true);
						engine.canvas.stroke();
					}
					if (i == 'm' || i == 'l' || i == 'k') {
						engine.canvas.beginPath();
						engine.canvas.arc(x + 72, y + 72, 10, Math.PI * 1.5, Math.PI, true);
						engine.canvas.stroke();
					}
					if (i == 'l' || i == 'i' || i == 'k') {
						UTIL.rect(x + 35, y - 5, 2, 10, 7);

						engine.canvas.beginPath();
						engine.canvas.arc(x + 72, y, 10, Math.PI, Math.PI / 2, true);
						engine.canvas.stroke();
					}
				}
			}
		}

		// call animation routine of all cars:
		for (var i = 0; i < this.cars.length; i++) {
			if (this.cars[i].out) continue;
			this.cars[i].animationRoutine();
		}

		// draw buildings:
		for (var i = 0; i < DATA.cities[this.city].buildings.length; i++) {
			var b = DATA.cities[this.city].buildings[i];
			engine.canvas.drawImage(this.buildings[b[0]], b[1], b[2]);
		}

		// draw trees:
		for (var i = 0; i < DATA.cities[this.city].trees.length; i++) {
			var x = DATA.cities[this.city].trees[i][0];
			var y = DATA.cities[this.city].trees[i][1];
			var f = i % 4;
			
			// rotate trees to look different
			if (f == 0) engine.canvas.drawImage(this.treeImage, x, y);
			if (f > 0) {
				engine.canvas.save();
				engine.canvas.translate(f == 2 ? 0 : 1008, f == 1 ? 0: 648);
				engine.canvas.scale(f == 2 ? 1 : -1, f == 1 ? 1 : -1);
				engine.canvas.drawImage(this.treeImage, f == 2 ? x : 1008 - 60 - x, f == 1 ? y : 648 - 58 - y);
				engine.canvas.restore();
			}
		}

		engine.canvas.textAlign = 'left';

		// draw city names:
		if (this.city == 'paris') UTIL.drawText('P A R I S', 670, 330, 7, 18);
		if (this.city == 'london') UTIL.drawText('L O N D O N', 3, 330, 8, 18);
		if (this.city == 'roma') UTIL.drawText('R O M A', 888, 590, 7, 18);
		if (this.city == 'sydney') UTIL.drawText('S Y D N E Y', 438, 80, 7, 18);
		if (this.city == 'budapest') UTIL.drawText('B U D A P E S T', 600, 324, 14, 18);
		if (this.city == 'newYork') {
			UTIL.drawText('N E W', 30, 55, 11, 18);
			UTIL.drawText('Y O R K', 18, 85, 11, 18);
		}

		var needLights = this.time == 'day' && this.frameCounters.timeSwitch == 0 ? false : true;

		// night layer:
		if (needLights) {
			if (this.time == 'night') var o = (60 - this.frameCounters.timeSwitch) / 100;
			else var o = this.frameCounters.timeSwitch / 100;

			engine.canvas.fillStyle = 'rgba(0, 0, 0, ' + o + ')';
			engine.canvas.fillRect(0, 0, 1008, 648);
		}

		// crossroad traffic lights:
		for (var key in this.trafficLights) {
			var tmp = key.split('x');
			var x = +tmp[0] * 72;
			var y = +tmp[1] * 72;

			// offset:
			var oX = [-24, 72, 72, -48];
			var oY = [-48, -24, 72, 72];

			for (var i = 0; i < 4; i++) {
				var l = this.trafficLights[key][i];
				if (l === false) continue;

				var d = i % 2 ? 'h' : 'v';
				UTIL.rect(x + oX[i], y + oY[i], d == 'h' ? 48 : 24, d == 'v' ? 48 : 24, 11);

				engine.canvas.fillStyle = '#' + DATA.colors[12];
				engine.canvas.beginPath();
				engine.canvas.arc(x + oX[i] + 12, y + oY[i] + 12, 8, 0, Math.PI * 2);
				engine.canvas.arc(x + oX[i] + (d == 'v' ? 12 : 36), y + oY[i] + (d == 'h' ? 12 : 36), 8, 0, Math.PI * 2);
				engine.canvas.fill();
				
				if (needLights) {
					engine.canvas.fillStyle = 'rgba(0, 0, 0, ' + o + ')';
					engine.canvas.fillRect(x + oX[i], y + oY[i], d == 'h' ? 48 : 24, d == 'v' ? 48 : 24);
				}

				// crossroad light gradients:
				if (((i == 0 || i == 3) && l == 'green') || ((i == 1 || i == 2) && l == 'red')) {
					var lx = x + oX[i] + 12;
					var ly = y + oY[i] + 12;
				}
				else if (((i == 0 || i == 3) && l == 'red') || ((i == 1 || i == 2) && l == 'green')) {
					var lx = x + oX[i] + (d == 'v' ? 12 : 36);
					var ly = y + oY[i] + (d == 'h' ? 12 : 36);
				}

				var g = engine.canvas.createRadialGradient(lx, ly, 6, lx, ly, 20);
				if (l == 'green') {
					g.addColorStop(0, 'rgba(100, 255, 100, 1)');
					g.addColorStop(.6, 'rgba(100, 255, 100, 0)');
				}
				else if (l == 'red') {
					g.addColorStop(0, 'rgba(255, 100, 100, 1)');
					g.addColorStop(.6, 'rgba(255, 100, 100, 0)');
				}

				engine.canvas.fillStyle = g;
				engine.canvas.beginPath();
				engine.canvas.arc(lx, ly, needLights ? 15 : 9, 0, Math.PI * 2);
				engine.canvas.fill();
			}
		}

		// car index, headlights (we draw here above the dark night layer):
		for (var i = 0; i < this.cars.length; i++) {
			if (this.cars[i].out) continue;
			if (this.cars[i].index.left || this.cars[i].index.right) this.cars[i].animateIndex();
			if (needLights) this.cars[i].animateHeadlights();
		}

		// number of waiting cars outside the city:
		for (var i = 0; i < this.entryPoints.length; i++) {
			var p = this.entryPoints[i];
			if (p.cars < 2) continue;

			var ep = UTIL.getEntryPointPixels(p);

			var x = engine.animationFrameCounter % 10;
			var bg = x < 5 ? 7 : 10;
			var tc = x < 5 ? 0 : 1;

			var oX = [0, 27, 20, -49, -42];
			var oY = [0, -34, 27, 20, -41]

			UTIL.rect(ep.x + oX[p.d], ep.y + oY[p.d], 32, 24, bg);
			UTIL.drawText('+' + p.cars, ep.x + oX[p.d] + 3, ep.y + oY[p.d] + 17, tc);
		}

		// draw menu buttons and texts:
		// set offsets:
		var oX = DATA.cities[this.city].menuOffset[0];
		var oY = DATA.cities[this.city].menuOffset[1];

		// start/end button:
		if (this.scene == 'menu') var bg = engine.animationFrameCounter % 10 < 5 ? 6 : 1;
		else var bg = 10;
		var c = engine.animationFrameCounter % 10 < 5 ? 1 : 0;

		UTIL.rect(oX + 80, oY + 100, 130, 40, bg);

		engine.canvas.textAlign = 'center';

		// draw options:
		// day/night switch button:
		UTIL.rect(868, 4, 136, 32, 6);
		UTIL.drawText('Day / Night', 936, 26, 1, 14, 90);

		// screenshot button:
		UTIL.rect(868, 44, 136, 32, 6);
		UTIL.drawText('Screenshot', 936, 65, 1, 14, 90);

		// fullscreen button:
		UTIL.rect(868, 84, 136, 32, 6);
		UTIL.drawText('Fullscreen', 936, 104, 1, 14, 90);

		if (this.scene == 'menu') {
			// city buttons:
			for (var i in DATA.cityButtons) {
				var b = DATA.cityButtons[i];
				UTIL.rect(oX + b[0], oY + b[1], b[2], b[3], this.city == i ? 2 : 10);
				UTIL.drawText(DATA.cities[i].name, oX + b[0] + b[2] / 2, oY + b[1] + 20, 1, 14, 80);
			}
			UTIL.drawText('T R A F F I C', oX + 145, oY - 10, 1, 18, 170);

			// start buton text:
			UTIL.drawText('S T A R T', oX + 145, oY + 127, c, 18, 100);
		}
		if (this.scene == 'game') {
			UTIL.drawText('E N D', oX + 145, oY + 127, 1, 18);

			if (this.gameOver) {
				UTIL.drawText('G A M E    O V E R', oX + 145, oY, 1, 18, 190);

				var bg = engine.animationFrameCounter % 10 < 5 ? 6 : 1;
				UTIL.rect(oX + 20, oY + 50, 250, 40, bg);
				UTIL.drawText('TWEET YOUR SCORE!', oX + 145, oY + 77, c, 18, 230);
			}

			engine.canvas.textAlign = 'left';

			if (!this.gameOver) {
				// anger level bar:
				UTIL.drawText('Anger level:', oX, oY, 1, 14, 85);

				for (var i = 0; i < 10; i++) {
					var color = 12;
					if (this.weightedAngerLevel > i) {
						color = 10;
						if (i <= 7) color = 7;
						if (i <= 4) color = 5;
					}
					UTIL.rect(oX + 95 + i * 21, oY - 15, 20, 20, color);
				}
			}			

			UTIL.rect(oX + 95, oY + 12, 100, 25, 6);
			UTIL.drawText('Score:', oX, oY + 30, 1);
			UTIL.drawText(this.score, oX + 105, oY + 30, 1);
		}

		// hovers:
		var hx = engine.hover.x;
		var hy = engine.hover.y;
		this.hover.newElement = false;
		if (this.scene == 'game') {
			if (!this.gameOver) {
				// hover on crossroads:
				if (hx !== false) {
					for (var pos in this.trafficLights) {
						var tmp = pos.split('x');
						var x = +tmp[0];
						var y = +tmp[1];

						// highlight crossroad with a white rectangle:
						if (hx >= x * 72 && hx <= x * 72 + 72 && hy >= y * 72 && hy <= y * 72 + 72) UTIL.hoverArea(x * 72, y * 72, 72, 72, 'crossroad');
					}
				}
			}
			else {
				if (hx >= oX + 20 && hx <= oX + 270 && hy >= oY + 50 && hy <= oY + 90) UTIL.hoverArea(oX + 20, oY + 50, 250, 40);
			}
		}
		else if (this.scene == 'menu') {
			for (var i in DATA.cityButtons) {
				var b = DATA.cityButtons[i];
				if (hx >= oX + b[0] && hx <= oX + b[0] + b[2] && hy >= oY + b[1] && hy <= oY + b[1] + b[3]) UTIL.hoverArea(oX + b[0], oY + b[1], b[2], b[3]);
			}
		}

		if (hx >= 868 && hx <= 1004 && hy >= 4 && hy <= 36) UTIL.hoverArea(868, 4, 136, 32);
		else if (hx >= 868 && hx <= 1004 && hy >= 44 && hy <= 76) UTIL.hoverArea(868, 44, 136, 32);
		else if (hx >= 868 && hx <= 1004 && hy >= 84 && hy <= 116) UTIL.hoverArea(868, 84, 136, 32);
		else if (hx >= oX + 80 && hx <= oX + 210 && hy >= oY + 100 && hy <= oY + 140) UTIL.hoverArea(oX + 80, oY + 100, 130, 40);

		if (this.hover.newElement != this.hover.element) {
			this.hover.element = this.hover.newElement;

			if (this.hover.element === false) engine.canvasElement.style.cursor = 'default';
			else {
				if (this.hover.element != 'crossroad' && this.lastSoundTime + 100 < Date.now()) UTIL.playSound('hover');
				engine.canvasElement.style.cursor = 'pointer';
			}
		}
	};

	// game logic:
	this.scanRoutine = function() {
		engine.scanFrameCounter++;

		if (engine.click.x !== false) {
			this.scanMouseEvents(engine.click.x, engine.click.y, engine.click.btn);
			engine.click = { x: false, y: false, btn: false };
		}

		if (this.frameCounters.timeSwitch > 0) this.frameCounters.timeSwitch -= 2;

		if (this.frameCounters.touchstart > 0) {
			this.frameCounters.touchstart--;
			if (this.frameCounters.touchstart == 0) {
				engine.hover = {
					x: false,
					y: false
				};
				game.hover.element = false;
				game.hover.newElement = false;
			}
		}

		if (this.gameOver) return;

		this.frameCounters.level++;
		if (this.frameCounters.level % engine.scanFPS === 0) this.score++;

		// increase car dosage:
		if (this.scene == 'game' && this.carFrequency > 10 && this.frameCounters.level % (30 * engine.scanFPS) === 0) this.carFrequency -= this.carFrequency > 18 ? 2 : 1;
		// add a car to entry point:
		if (this.frameCounters.level % this.carFrequency === 0) {
			var entryPoint = UTIL.rnd(this.entryPoints.length) - 1;
			if (this.scene == 'game' || this.entryPoints[entryPoint].cars == 0) {
				this.entryPoints[entryPoint].cars++;
				this.carsIn++;
			}
		}
		// add a car to city if the entry point is free:
		for (var i = 0; i < this.entryPoints.length; i++) {
			var p = this.entryPoints[i];
			if (p.cars == 0) continue;

			var ep = UTIL.getEntryPointPixels(p);
			var collision = false;

			for (var j = 0; j < this.cars.length; j++) {
				var car = this.cars[j];

				if (car.r != (p.d - 1) * 90) continue;

				if (
					(p.d == 1 && ep.x == car.x && car.y > 628) ||
					(p.d == 2 && ep.y == car.y && car.x < 20) ||
					(p.d == 3 && ep.x == car.x && car.y < 20) ||
					(p.d == 4 && ep.y == car.y && car.x > 988)
				) collision = true;

				if (collision) break;
			}

			if (!collision) {
				p.cars--;
				this.cars.push(new TrafficCar(game.entryPoints[i]));
			}
		}

		// during the menu scene we switch traffic lights automatically
		if (this.scene == 'menu' && this.frameCounters.level % 50 === 0) {
			var tl = UTIL.rnd(Object.keys(game.trafficLights).length);
			var i = 0;
			for (var pos in this.trafficLights) {
				i++;
				if (i == tl) this.switchLight(pos);
			}
		}

		// call scan routine of all cars:
		for (var i = 0; i < this.cars.length; i++) {
			if (this.cars[i].out) continue;
			this.cars[i].scanRoutine();
		}

		// calculate weighted anger level:
		if (this.frameCounters.level % 10 === 0 && this.scene == 'game' && !this.gameOver) {
			var t = 0;
			for (var i = 0; i < this.cars.length; i++) {
				if (this.cars[i].out) continue;

				var al = this.cars[i].angerLevel;
				if (al < 200) t += 0;
				else if (al < 400) t += 4;
				else if (al < 600) t += 8;
				else if (al < 800) t += 12;
				else t += 20;
			}

			var w = 0;
			for (var i = 0; i < this.entryPoints.length; i++) {
				w += this.entryPoints[i].cars;
				t += this.entryPoints[i].cars * 20;
			}

			this.weightedAngerLevel = Math.round(t / ((this.carsIn + w) - this.carsOut));

			// game over
			if (this.weightedAngerLevel >= 10) {
				this.gameOver = true;
				UTIL.playSound('gameOver');
			}
		}
	};

	this.scanMouseEvents = function(mx, my, btn) {
		var oX = DATA.cities[this.city].menuOffset[0];
		var oY = DATA.cities[this.city].menuOffset[1];

		if (this.scene == 'game') {
			// end game and go to the menu:
			if (mx >= oX + 80 && mx <= oX + 210 && my >= oY + 100 && my <= oY + 140) {
				this.setCity(this.city);
				this.scene = 'menu';
			}
			else if (!this.gameOver) {
				// click on crossroads:
				for (var pos in this.trafficLights) {
					var tmp = pos.split('x');
					var x = +tmp[0];
					var y = +tmp[1];

					if (mx >= x * 72 && mx <= x * 72 + 72 && my >= y * 72 && my <= y * 72 + 72) {
						this.switchLight(pos);
						UTIL.playSound('switchLight');
					}
				}
			}
		}
		
		else if (this.scene == 'menu') {
			for (var i in DATA.cityButtons) {
				var b = DATA.cityButtons[i];
				if (mx >= oX + b[0] && mx <= oX + b[0] + b[2] && my >= oY + b[1] && my <= oY + b[1] + b[3] && this.city != i) this.setCity(i);
			}

			// start a new game:
			if (mx >= oX + 80 && mx <= oX + 210 && my >= oY + 100 && my <= oY + 140) {
				this.setCity(this.city);
				this.scene = 'game';
			}
		}

		if (mx >= 868 && mx <= 1004 && my >= 4 && my <= 36 && this.frameCounters.timeSwitch == 0) {
			UTIL.playSound('clickButton');
			this.switchTime(this.time == 'night' ? 'day' : 'night');
		}
	};
}

function TrafficEngine() {
	this.canvasElement = document.getElementById('screen');	// the main canvas element
	this.canvas = this.canvasElement.getContext('2d');		// canvas context
	this.click = { x: false, y: false, btn: false };		// position of click on the canvas
	this.hover = { x: false, y: false };					// hovered position on the canvas
	this.scaleToFit = 1;									// canvas size multiplier to fit full screen
	this.platform = 'desktop';								// enum: [desktop, mobile]
	this.display = 'window';								// enum: [window, fullscreen]

	this.init = function() {
		// detect platform by user agent:
		var i = navigator.userAgent;
		this.platform = i.match(/Android/i) || i.match(/BlackBerry/i) || i.match(/iPhone|iPad|iPod/i) || i.match(/Opera Mini/i) || i.match(/IEMobile/i) ? 'mobile' : 'desktop';

		// init capturing mouse events:
		engine.initMouseEvents();

		// init new game:
		game = new TrafficGame();
		game.init();

		// init engine (canvas, animation and scan routine):
		engine.initEngine();
	};

	this.toggleFullscreen = function() {
		UTIL.playSound('clickButton');
		engine.display = engine.display == 'window' ? 'fullscreen' : 'window';

		if (engine.display == 'window') {
			if (document.cancelFullScreen) document.cancelFullScreen();
			else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
			else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
		}
		else {
			var e = document.getElementById("fs");
			if (e.requestFullScreen) e.requestFullScreen();
			else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
			else if (e.webkitRequestFullScreen) e.webkitRequestFullScreen();
		}
	};

	this.takeScreenshot = function() {
		UTIL.playSound('clickButton');
		window.open(engine.canvasElement.toDataURL());
	};

	this.specialEvents = function(x, y) {
		// change window/fullscreen mode:
		if (x >= 868 && x <= 1004 && y >= 84 && y <= 116) engine.toggleFullscreen();
		// screenshot:
		else if (x >= 868 && x <= 1004 && y >= 44 && y <= 76) engine.takeScreenshot();
		// tweet:
		else if (game.scene == 'game' && game.gameOver) {
			var oX = DATA.cities[game.city].menuOffset[0];
			var oY = DATA.cities[game.city].menuOffset[1];

			if (x >= oX + 20 && x <= oX + 270 && y >= oY + 50 && y <= oY + 90) game.tweetScore();
		}
	};

	this.initMouseEvents = function() {
		function captureClick(evt) {
			var x = evt.offsetX || evt.layerX;
			var y = evt.offsetY || evt.layerY;

			engine.click.x = x;
			engine.click.y = y;
			engine.click.btn = evt.which;

			engine.specialEvents(x, y);
		};

		// click events:
		this.canvasElement.onclick = function(evt) {
			evt.preventDefault();
			captureClick(evt);
			return false;
		};

		// hover events:
		if (this.platform == 'desktop') {
			this.canvasElement.onmousemove = function(evt) {
				engine.hover = {
					x: evt.offsetX || evt.layerX,
					y: evt.offsetY || evt.layerY
				};
			};
			this.canvasElement.onmouseout = function(evt) {
				engine.hover = {
					x: false,
					y: false
				};
			};
		}

		if (this.platform == 'mobile') {
			function touchEvent(evt) {
				evt.preventDefault();

				var x = Math.round((evt.targetTouches[0].pageX - engine.canvasElement.offsetLeft) / engine.scaleToFit);
				var y = Math.round((evt.targetTouches[0].pageY - engine.canvasElement.offsetTop) / engine.scaleToFit);

				engine.click.x = x;
				engine.click.y = y;
				engine.click.btn = 1;

				engine.hover = {
					x: x,
					y: y
				};
				game.frameCounters.touchstart = 14;

				engine.specialEvents(x, y);

				return false;
			}

			this.canvasElement.addEventListener('touchstart', touchEvent, false);
		}
	};

	this.initEngine = function() {
		// scaling:
		window.onresize = function() {
			engine.scaleToFit = Math.min(window.innerWidth / engine.canvasElement.width, window.innerHeight / engine.canvasElement.height);
			 
			engine.canvasElement.style.transformOrigin = "0 0";
			engine.canvasElement.style.webkitTransformOrigin = "0 0";
			engine.canvasElement.style.transform = "scale(" + engine.scaleToFit + ")";
			engine.canvasElement.style.webkitTransform = "scale(" + engine.scaleToFit + ")";

			var sideMargin = Math.round((window.innerWidth - 1008 * engine.scaleToFit) / 2);
			var topMargin = Math.round((window.innerHeight - 648 * engine.scaleToFit) / 2);

			engine.canvasElement.style.margin = topMargin + 'px ' + sideMargin + 'px 0px ' + sideMargin + 'px';
		};
		window.onresize();

		if (this.platform == 'mobile') {
			window.addEventListener("orientationchange", function() {
				setTimeout('window.onresize()', 500);
			}, false);
		}

		// start animation and scan routine:
		window.animFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

		this.scanFPS = 25;
		this.scanFrameTime = 1000 / this.scanFPS;
		this.animationFrameTime = 0;
		this.animationFrameCounter = 0;
		this.scanFrameCounter = 0;
		this.scanInterval = false;

		if (!window.animFrame) {
			window.setInterval(function() {
				game.animationRoutine();
			}, 50);
		}
		else this.startAnimation();

		this.scanInterval = setInterval(function() {
			game.scanRoutine();
		}, this.scanFrameTime);
	};

	this.startAnimation = function() {
		window.animFrame(function(actualTime) {
			if (actualTime - engine.animationFrameTime > 40) {
				engine.animationFrameTime = actualTime;
				game.animationRoutine();
			}
			engine.startAnimation();
		});
	};
}

/* MAIN VARIABLES */

var game;	// Traffic game object

// launch my game engine
var engine = new TrafficEngine();
engine.init();