// 3d scroll

let zSpacing = -1000;
let lastPos = zSpacing / 7;
let $frames = document.getElementsByClassName('frame');
let frames = Array.from($frames);
let zVals = [];

window.onscroll = function(){
        let top = document.documentElement.scrollTop;
        let delta = lastPos - top;
        lastPos = top;
        frames.forEach((n,i)=>{
                if(!zVals.find((v)=>{return v == i*zSpacing + zSpacing}))
                        zVals.push((i*zSpacing)+zSpacing);

                zVals[i] += delta *-2;
                let frame = frames[i]; 
                let transform = `translateZ(${zVals[i]}px)`;
                let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

                // if (opacity == 0) {

		// 	setTimeout(() => {

		// 		frame.style.visibility = 'collapse'

		// 	}, 300)

		// } else if(opacity == 1) {

		// 	setTimeout(() => {

		// 		frame.style.visibility = 'visible'

		// 	}, 300)

		// }

                frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
        })
}

window.scrollTo(0,1)


window.onload = ()=>{
        console.log('load page')
}