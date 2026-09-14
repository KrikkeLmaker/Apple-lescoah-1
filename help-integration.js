(function(){
  const GPT_NAME='CVO LBC Apple Classes iPhone 1';

  function cleanLooseAiEntryPoints(){
    document.querySelectorAll('.ai-header,.ai-banner').forEach(el=>el.remove());
    document.querySelectorAll('.card.action').forEach(card=>{
      const title=card.querySelector('h3');
      if(title && title.textContent.includes('AI-lescoach')) card.remove();
    });
  }

  window.renderHelp=function(){
    const b=document.getElementById('coachBody');
    const theme=themes.find(x=>x.id===currentTheme);
    b.innerHTML=`
      <div class="bubble">
        <strong>Waar loop je vast?</strong><br>
        Kies eerst hieronder de situatie die het dichtst bij je probleem komt. De Lescoach geeft je gerichte hulp voor <strong>${theme.title}</strong>.
      </div>
      <div class="choices" id="helpChoices"></div>
      <div id="helpAnswer" style="margin-top:18px"></div>
      <div class="ai-help-box" style="margin-top:28px;padding:20px;border-radius:20px;background:#f3f7ff;border:1px solid rgba(0,113,227,.16)">
        <strong>🤖 Nog niet opgelost?</strong>
        <p style="margin:8px 0 14px;line-height:1.5">Open dan jouw cursus-GPT <strong>${GPT_NAME}</strong>. Vermeld best welk thema je volgt en wat je precies op je scherm ziet.</p>
        <button class="primary" onclick="openChatGPT()">Vraag de AI-lescoach ↗</button>
      </div>`;

    const c=document.getElementById('helpChoices');
    currentData().help.forEach((h)=>{
      const btn=document.createElement('button');
      btn.className='secondary';
      btn.textContent=h.q;
      btn.onclick=()=>{
        document.getElementById('helpAnswer').innerHTML=`
          <div class="bubble"><strong>${h.q}</strong><br>${h.a}</div>
          <div class="choices">
            <button class="secondary" onclick="renderHelp()">Andere hulpvraag</button>
            <button class="primary" onclick="openChatGPT()">Ik zit nog vast · vraag AI ↗</button>
          </div>`;
      };
      c.appendChild(btn);
    });
  };

  cleanLooseAiEntryPoints();
  document.addEventListener('DOMContentLoaded',cleanLooseAiEntryPoints);
})();
