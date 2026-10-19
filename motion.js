(()=>{
  const background=document.querySelector('.ambient');
  const layers=Array.from(background.querySelectorAll('video'));
  const control=document.querySelector('#ambient-motion');
  const scenes=['hike','football','heroes','interview','enduro-forest','enduro-sunset','jaecoo','mercedes','porsche','tank'];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let running=!reduced.matches,language=document.documentElement.lang;
  let target=0,position=0,frame=0;
  function updateControl(){control.textContent=running?'Ⅱ':'▶';control.setAttribute('aria-pressed',String(!running));control.setAttribute('aria-label',language==='ru'?(running?'Приостановить видеофон':'Включить видеофон'):(running?'Pause background films':'Play background films'))}
  function assign(layer,index){
    if(layer.dataset.scene===scenes[index])return;
    layer.dataset.scene=scenes[index];layer.poster='assets/ambient-'+scenes[index]+'.jpg';
    layer.src='assets/ambient-'+scenes[index]+'.mp4';
    layer.load();if(running&&!document.hidden)layer.play().catch(()=>{});
  }
  function paint(){
    const first=Math.min(scenes.length-1,Math.floor(position));
    const second=Math.min(scenes.length-1,first+1);
    const a=layers.find(v=>v.dataset.scene===scenes[first])??layers[0];
    const b=layers.find(v=>v!==a);
    assign(a,first);if(second!==first)assign(b,second);
    // Matching silhouettes stay in the same visual area while the mix follows scroll.
    const fraction=Math.max(0,Math.min(1,(position-first-.12)/.76));
    const blend=fraction*fraction*(3-2*fraction);
    a.style.opacity=String(second===first?1:1-blend);b.style.opacity=String(second===first?0:blend);
    background.dataset.scene=scenes[blend>.5?second:first];background.dataset.mix=blend.toFixed(3);
  }
  function animate(){frame=0;if(!running||document.hidden)return;position+=(target-position)*.13;if(Math.abs(target-position)<.002)position=target;paint();if(position!==target)frame=requestAnimationFrame(animate)}
  function onScroll(){const range=Math.max(1,document.documentElement.scrollHeight-innerHeight);target=Math.min(1,Math.max(0,scrollY/range))*(scenes.length-1);if(running&&!frame)frame=requestAnimationFrame(animate)}
  function setRunning(next){running=next;updateControl();if(!next){cancelAnimationFrame(frame);frame=0;layers.forEach(v=>v.pause())}else{paint();layers.forEach(v=>{if(v.src)v.play().catch(()=>{})});onScroll()}}
  control.addEventListener('click',()=>setRunning(!running));
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)layers.forEach(v=>v.pause());else if(running){layers.forEach(v=>{if(v.src)v.play().catch(()=>{})});onScroll()}});
  document.addEventListener('artik-language',event=>{language=event.detail;updateControl()});
  reduced.addEventListener('change',()=>setRunning(!reduced.matches));
  updateControl();if(running){paint();onScroll()}
  const cursor=document.querySelector('.cursor-ring');
  const fine=matchMedia('(hover: hover) and (pointer: fine)');
  document.addEventListener('pointermove',event=>{if(!fine.matches||event.pointerType==='touch')return;cursor.style.transform=`translate3d(${event.clientX-18}px,${event.clientY-18}px,0)`;cursor.classList.add('visible');cursor.classList.toggle('over-control',!!event.target.closest('a,button,video[controls]'))},{passive:true});
  document.addEventListener('pointerleave',()=>cursor.classList.remove('visible'));
  document.addEventListener('keydown',()=>cursor.classList.remove('visible'));
})();
