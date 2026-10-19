(()=>{
  let language='ru';
  const translations={ru:{skip:'Перейти к работам',navWork:'Работы',navAbout:'Обо мне',navApproach:'Подход',navContact:'Контакт',heroKicker:'Артем Дорофеев / Видеограф. Продюсер.',location:'Снимаю по всему миру',filmLabel:'Люди. Движение. Истории.',heroStatement:'В самом центре<br>событий.',watchReel:'Смотреть шоурил',heroFoot:'Снимаю сам. Собираю команду. Веду проект до результата.',discuss:'Обсудить съёмку',workKicker:'01 / Избранные проекты',workTitle:'В кадре — жизнь.'},en:{skip:'Skip to selected work',navWork:'Work',navAbout:'About',navApproach:'Approach',navContact:'Contact',heroKicker:'Artem Dorofeev / Videographer. Producer.',location:'I film worldwide',filmLabel:'People. Motion. Stories.',heroStatement:'Right where<br>it happens.',watchReel:'Watch showreel',heroFoot:'I film. Build the team. See the project through.',discuss:'Discuss a shoot',workKicker:'01 / Selected projects',workTitle:'Life in the frame.'}};
  Object.assign(translations.ru,{photoCaption:'За кадром / Артем Дорофеев',aboutKicker:'02 / Автор',aboutTitle:'Я Артем.<br>Можно ARTIK.',aboutLead:'Мне интересен мир, люди и места, до которых трудно добраться.',aboutBody:'Снимаю путешествия, спорт, автомобили, события и интервью. Сам работаю с камерой, собираю команду под задачу и организую съёмку. Довожу проект до результата. Ценю открытость и простоту в людях.',aboutValues:'Люблю лёгкость в общении, живую атмосферу на площадке и возможность делать своё дело среди людей.',aboutRole:'Видеограф. Продюсер.',aboutGeography:'РФ / Зарубежные проекты',locationCaption:'На съёмке',photoQuote:'Больше движения.<br>Больше настоящего.',photoNote:'В жизни и в кадре.',portraitCaption:'На связи лично',approachKicker:'03 / Работа вместе',approachTitle:'От идеи<br>до готового видео.',service1Title:'Команда и площадка',service1Body:'Подбираю людей под проект, нахожу локации и организую съёмку. Согласуем объём работы, сроки и подготовку.',service2Title:'С камерой в руках',service2Body:'Снимаю лично и координирую команду на площадке. Работаю с людьми, деталями и движением — на событии и за его пределами.',service3Title:'До финального кадра',service3Body:'Организую монтаж, работу со звуком и цветом. Веду общение, собираю обратную связь и контролирую проект до сдачи.',expeditionTitle:'Куда летим? Чемодан уже собран!',expeditionBody:'Открыт к путешествиям, экспедициям и творческим съёмкам в России и за рубежом.',tellIdea:'Рассказать об идее',contactKicker:'04 / Следующий проект',contactTitle:'Обсудим<br>твою съёмку.',contactBody:'Расскажи о задаче, месте и сроках.<br>Стоимость обсудим в переписке.',telegram:'Написать в Telegram',footerName:'Артем Дорофеев / Видеограф. Продюсер.',footerLocation:'Снимаю по всему миру'});
  Object.assign(translations.en,{photoCaption:'Behind the camera / Artem Dorofeev',aboutKicker:'02 / The filmmaker',aboutTitle:'I’m Artem.<br>Call me ARTIK.',aboutLead:'I’m drawn to the world, its people and places that are hard to reach.',aboutBody:'I film travel, sport, cars, events and interviews. I work behind the camera myself, build the right team and organize the shoot. I see each project through to the result. I value openness and simplicity in people.',aboutValues:'I enjoy easy communication, a lively atmosphere on set and the chance to do my work among people.',aboutRole:'Videographer. Producer.',aboutGeography:'Russia / International projects',locationCaption:'On location',photoQuote:'More motion.<br>More real moments.',photoNote:'In life and in the frame.',portraitCaption:'A direct conversation',approachKicker:'03 / Working together',approachTitle:'From the idea<br>to the finished film.',service1Title:'The team & location',service1Body:'I bring the right people together, find locations and organize the shoot. We agree on the scope, timeline and preparation.',service2Title:'Behind the camera',service2Body:'I film personally and coordinate the team on set. People, details and motion — at the event and beyond.',service3Title:'Through to the final frame',service3Body:'I organize editing, sound and color grading. I manage communication, collect feedback and see the project through to delivery.',expeditionTitle:'Where are we flying? My suitcase is packed!',expeditionBody:'Available for travel, expeditions and creative shoots in Russia and abroad.',tellIdea:'Share your idea',contactKicker:'04 / The next project',contactTitle:'Let’s talk<br>about your shoot.',contactBody:'Tell me the brief, location and timeline.<br>We’ll discuss the budget directly.',telegram:'Message me on Telegram',footerName:'Artem Dorofeev / Videographer. Producer.',footerLocation:'I film worldwide'});
  Object.assign(translations.ru,{brandName:'Дорофеев Артем',heroName:'Дорофеев<br>Артем',heroKicker:'Видеограф. Продюсер.',filmLabel:'Кадры из моих работ',heroStatement:'Люди.<br>Движение.<br>Истории.',aboutTitle:'За камерой<br>и рядом с командой.'});
  Object.assign(translations.en,{brandName:'Dorofeev Artem',heroName:'Dorofeev<br>Artem',heroKicker:'Videographer. Producer.',filmLabel:'Scenes from my films',heroStatement:'People.<br>Motion.<br>Stories.',aboutTitle:'Behind the camera.<br>Alongside the team.'});
  Object.assign(translations.ru,{clientsTitle:'С кем я работал',clientsNote:'Бренды, команды и люди',pyaterochka:'X5 Group · Пятёрочка',mirLabel:'Платёжная система МИР',mariLabel:'Мари Краймбрери',oskarLabel:'Оскар<br>Хартман',clientsMore:'И другие проекты — от камерных съёмок до больших событий.'});
  Object.assign(translations.en,{clientsTitle:'Who I’ve worked with',clientsNote:'Brands, teams & people',pyaterochka:'X5 Group · Pyaterochka',mirLabel:'MIR payment system',mariLabel:'Mari Kraimbrery',oskarLabel:'Oskar<br>Hartmann',clientsMore:'And other projects — from intimate shoots to major events.'});
  const dialog=document.querySelector('#player-dialog'),player=document.querySelector('#player');
  let activeProject=null,activeBrand=null,lastFocus=null;
  const brandProjects=document.querySelector('#brand-projects');
  function renderBrandProjects(){
    brandProjects.replaceChildren();
    const projects=activeBrand?window.ARTIK_PROJECTS.filter(p=>p.brands?.includes(activeBrand)):[];
    brandProjects.hidden=projects.length<2;
    projects.forEach(project=>{const button=document.createElement('button');button.type='button';button.textContent=project.title[language];button.setAttribute('aria-pressed',String(project.id===activeProject?.id));button.addEventListener('click',()=>openVideo(project,activeBrand));brandProjects.append(button)});
  }
  function openVideo(project,brand=null){
    activeProject=project;activeBrand=brand;if(!dialog.open)lastFocus=document.activeElement;
    document.querySelector('#player-title').textContent=project.title[language];
    document.querySelector('#player-description').textContent=project.description[language];
    player.src='assets/'+project.file;player.poster='assets/'+project.poster;
    player.hidden=false;renderBrandProjects();
    if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';player.play().catch(()=>{});
  }
  function openBrand(brand){
    const project=window.ARTIK_PROJECTS.find(p=>p.brands?.includes(brand));
    if(project){openVideo(project,brand);return}
    activeProject=null;activeBrand=brand;lastFocus=document.activeElement;
    player.hidden=true;brandProjects.hidden=true;
    document.querySelector('#player-title').textContent=window.ARTIK_BRANDS[brand][language];
    document.querySelector('#player-description').textContent=language==='ru'?'Работы этого бренда пока не добавлены в портфолио.':'Work for this brand has not been added to the portfolio yet.';
    dialog.showModal();document.body.style.overflow='hidden';
  }
  document.querySelectorAll('[data-brand]').forEach(button=>button.addEventListener('click',()=>openBrand(button.dataset.brand)));
  function closeVideo(){dialog.close()}
  dialog.addEventListener('close',()=>{player.pause();player.removeAttribute('src');player.load();document.body.style.overflow='';lastFocus?.focus()});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeVideo()}});
  document.querySelector('#close-player').addEventListener('click',closeVideo);
  document.querySelectorAll('[data-open-reel]').forEach(button=>button.addEventListener('click',()=>openVideo({file:'showreel.mp4',poster:'hero-poster.jpg',title:{ru:'Дорофеев Артем / Шоурил',en:'Dorofeev Artem / Showreel'},description:{ru:'Видеограф. Продюсер. / 00:38',en:'Videographer. Producer. / 00:38'}})));
  function renderProjects(){const grid=document.querySelector('#projects');grid.replaceChildren();window.ARTIK_PROJECTS.forEach((p,index)=>{
    const article=document.createElement('article');article.className='project'+(p.wide?' project-wide':'');
    const button=document.createElement('button');button.type='button';button.className='project-button';button.setAttribute('aria-label',(language==='ru'?'Смотреть: ':'Watch: ')+p.title[language]);
    const img=document.createElement('img');img.src='assets/'+p.poster;img.alt=p.title[language];img.loading='lazy';img.width=1280;img.height=720;
    const play=document.createElement('span');play.className='project-play';play.textContent='▶';play.setAttribute('aria-hidden','true');button.append(img,play);button.addEventListener('click',()=>openVideo(p));
    const meta=document.createElement('div');meta.className='project-meta';const h=document.createElement('h3');h.textContent=p.title[language];const number=document.createElement('span');number.className='project-index';number.textContent=String(index+1).padStart(2,'0');meta.append(h,number);
    const category=document.createElement('p');category.className='project-category';category.textContent=p.category[language];article.append(button,meta,category);grid.append(article)
  })}
  const hero=document.querySelector('#hero-video'),motion=document.querySelector('#motion');
  motion.addEventListener('click',()=>{if(hero.paused)hero.play().catch(()=>{});else hero.pause()});
  function updateMotion(){motion.textContent=hero.paused?'▶':'Ⅱ';motion.setAttribute('aria-label',language==='ru'?(hero.paused?'Включить фоновое видео':'Приостановить фоновое видео'):(hero.paused?'Play background video':'Pause background video'))}
  hero.addEventListener('pause',updateMotion);hero.addEventListener('play',updateMotion);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){hero.removeAttribute('autoplay');hero.pause()}
  const menu=document.querySelector('#menu'),nav=document.querySelector('#navigation');
  function setMenu(open){nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',language==='ru'?(open?'Закрыть меню':'Открыть меню'):(open?'Close menu':'Open menu'))}
  menu.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('pointerdown',e=>{if(nav.classList.contains('open')&&!e.target.closest('.header'))setMenu(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);menu.focus()}});
  matchMedia('(max-width:800px)').addEventListener('change',()=>setMenu(false));
  function setLanguage(next){language=next;document.documentElement.lang=next;document.title=next==='ru'?'Дорофеев Артем · Видеограф. Продюсер.':'Dorofeev Artem · Videographer. Producer.';
    document.dispatchEvent(new CustomEvent('artik-language',{detail:next}));
    document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[next][el.dataset.i18n];if(value)el.innerHTML=value});
    document.querySelector('#language').innerHTML=next==='ru'?'<span class="lang-active">RU</span><span class="lang-divider">/</span><span>EN</span>':'<span>RU</span><span class="lang-divider">/</span><span class="lang-active">EN</span>';
    document.querySelector('#language').setAttribute('aria-label',next==='ru'?'Switch to English':'Переключить на русский');
    setMenu(nav.classList.contains('open'));nav.setAttribute('aria-label',next==='ru'?'Основная навигация':'Main navigation');document.querySelector('#close-player').setAttribute('aria-label',next==='ru'?'Закрыть видео':'Close video');
    document.querySelectorAll('[data-alt-ru]').forEach(el=>el.alt=el.dataset[next==='ru'?'altRu':'altEn']);
    document.querySelector('meta[name="description"]').content=next==='ru'?'Артем Дорофеев — видеограф и продюсер. Съёмки путешествий, спорта, автомобилей и событий в России и за рубежом.':'Artem Dorofeev — videographer and producer. Travel, sport, automotive, event and interview films in Russia and worldwide.';
    document.querySelectorAll('[data-brand]').forEach(button=>button.setAttribute('aria-label',(next==='ru'?'Работы для ':'Work for ')+window.ARTIK_BRANDS[button.dataset.brand][next]));
    renderProjects();updateMotion();if(dialog.open&&activeProject){document.querySelector('#player-title').textContent=activeProject.title[next];document.querySelector('#player-description').textContent=activeProject.description[next];renderBrandProjects()}else if(dialog.open&&activeBrand){document.querySelector('#player-title').textContent=window.ARTIK_BRANDS[activeBrand][next];document.querySelector('#player-description').textContent=next==='ru'?'Работы этого бренда пока не добавлены в портфолио.':'Work for this brand has not been added to the portfolio yet.'}
  }
  document.querySelector('#language').addEventListener('click',()=>setLanguage(language==='ru'?'en':'ru'));
  window.ARTIK_TRANSLATIONS=translations;window.ARTIK_REFRESH=()=>setLanguage(language);setLanguage('ru');
})();
