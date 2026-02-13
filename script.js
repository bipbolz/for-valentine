const correctPassword = "20092025";

/* FOTO JATUH */
const photos = ["images/jtoh 1.jpg","images/jtoh 2.jpg","images/jtoh 3.jpg","images/jtoh 4.jpg","images/jtoh 5.jpg","images/jtoh 6.jpg","images/jtoh 7.jpg",
  "images/jtoh 8.jpg","images/jtoh 9.jpg","images/jtoh 10.jpg","images/jtoh 11.jpg","images/jtoh 12.jpg","images/jtoh 13.jpg","images/jtoh 14.jpg","images/jtoh 15.jpg",
  "images/jtoh 16.jpg","images/jtoh 17.jpg","images/jtoh 18.jpg"];
const rain = document.getElementById("photo-rain");

setInterval(()=>{
  const img=document.createElement("img");
  img.src=photos[Math.floor(Math.random()*photos.length)];
  img.className="photo";
  img.style.left=Math.random()*100+"vw";
  img.style.width=80+Math.random()*60+"px";
  img.style.animationDuration=8+Math.random()*10+"s";
  rain.appendChild(img);
  setTimeout(()=>img.remove(),20000);
},900);


/* LOVE JATUH */
const hearts = document.getElementById("hearts");

setInterval(()=>{
  const love = document.createElement("span");
  love.innerHTML = "❤️";
  love.className = "love-drop";

  love.style.left = Math.random() * 100 + "vw";
  love.style.fontSize = 14 + Math.random() * 20 + "px";
  love.style.animationDuration = 6 + Math.random() * 6 + "s";

  hearts.appendChild(love);

  setTimeout(()=>{
    love.remove();
  },12000);

},600);


/* MUSIK */
const music=document.getElementById("bg-music");
document.addEventListener("click",()=>{
  music.volume=0;
  music.play();
  let v=0;
  const fade=setInterval(()=>{
    if(v<0.6){ v+=0.02; music.volume=v }
    else clearInterval(fade);
  },200);
},{once:true});

/* LOGIN */
function checkPassword(){
  if(document.getElementById("password").value===correctPassword){
    document.querySelector(".login-container").remove();
    showMenu();
  }
}

/* MAIN */
function showMenu(){
  const main=document.createElement("div");
  main.id="main-page";
  main.innerHTML=menuScreen();
  document.body.appendChild(main);
}

function setScreen(html){
  document.getElementById("main-page").innerHTML=html;
}

function menuScreen(){
  return `
  <div class="screen">
    <h1>🤍 Mau ke mana dulu? 🤍</h1>

    <div class="menu-box">
      <div class="choice" onclick="showStory()">💌 Kata-Kata</div>
      <div class="choice" onclick="showGallery()">📸 Galeri</div>
    </div>

    <!-- Tombol Lanjut -->
    <div class="menu-bottom">
      <button class="lanjut-btn" onclick="lanjutRomantis()">
        Lanjut 🤍
      </button>
    </div>

  </div>`;
}


/* STORY */
function showStory(){
  setScreen(`
    <div class="screen">
      <div class="back" onclick="backMenu()">⬅ Kembali</div>
      <div class="story" id="story"></div>
    </div>`);
  typeStory();
}

function typeStory(){
  const text = [
  "Hai kamu 🤍.",
  "Setiap hari aku bersyukur karena kamu ada dalam hidupku.",
  "Setiap senyum dan tawa kita selalu membuat hatiku hangat, dan aku ingin terus merasakan semua itu bersamamu.",
  "Aku ingat setiap momen yang kita lalui, dari hal kecil sampai hal besar, semuanya terasa begitu berharga.",
  "Dan aku berjanji, aku ingin menjalaninya lagi, melewati setiap hari, setiap suka dan duka, selalu bersamamu ❤️"
];
  const el=document.getElementById("story");
  let i=0;
  function next(){
    if(i>=text.length) return;
    const p=document.createElement("p");
    el.appendChild(p);
    let j=0;
    const t=setInterval(()=>{
      p.textContent+=text[i][j++];
      if(j===text[i].length){
        clearInterval(t);
        i++; setTimeout(next,700);
      }
    },40);
  }
  next();
}

/* GALERI */
const galleryData=[
  {img:"images/1.jpg",text:"Niii inget ga eppoy pertama kali bernampak di permukaan keluargaa akuu secara offlinee"},
  {img:"images/2.jpg",text:"ini pertama kalii kita foto di bioskop rajawalii setelahh pergii jauhh yaa gaa"},
  {img:"images/3.jpg",text:"inii pertama kalii eppoyy nemeninn nduyy skripsiann hehehe"},
  {img:"images/4.jpg",text:"inii yang habis darimanaa hayoo?? abis makan pempekk bm nyaa nduyy yang habis itu nganterin nduy ke kampus buat fieldtripp"},
  {img:"images/5.jpg",text:"hahaha akhirnyaa bm nya terpenuhi di fotoin sama mba pdd pas kita boncengann, tapii bm nya pas di kkn nyaa"},
  {img:"images/6.jpg",text:"makann somayy di gorrr yeyy bm aku lagii hehehe, makasii yaa eppoy nurutin bm aku yangg banyakk inii"},
  {img:"images/7.jpg",text:"asikk bangett deh pas pdkt, eppoyyy excitedd banget keliatan ahahah, senengg yaa udah ada yang bisa dikabarin lagi??"},
  {img:"images/8.jpg",text:"datingg pertamaa kalii pas pdkt yuhuuu, soalnya kalo foto berdua masih malu maluu hahaha"},
  {img:"images/9.jpg",text:"inii pertamaa kalii dijemputt eppoyy di stasiun pwt, setelah sekian purnamaa kalo balik ke pwt sendiriann teruss ke kosnyaa, akhirnya ada mas mas jawa kuu alhamdulillah"},
  {img:"images/10.jpg",text:"aahhh seneng banget sebelahann hehehe, soalnyaa jadi kenangan memori yaa"},
  {img:"images/11.jpg",text:"hehehe sampingan lagii yaallah senangnyaa, kenangann lagii yey, tapi sejujurnya inii ga direncanakan yaa semua foto deketann ygyy poyy?"},
  {img:"images/12.jpg",text:"kaloo inii kayanyaa disengajain deh sama anak anak kkn biar sekelompok prokeran gaksiee sayangg?? hahaha kamu malah acc"},
  {img:"images/13.jpg",text:"simplee sajaa yaa inii foto tukang satee yangg eppoy bela belain buat nemenin nduyy ke kebumen kotaa buat makan malem bareng bubend dan bu pdd"},
  {img:"images/14.jpg",text:"inii juga simplee saja yaa kesaltingann nduyy pada saat dibukain saos sambell ditambahh diingetin ada rambut yang keluar dari jidat alias jiponn"},
  {img:"images/15.jpg",text:"inii yaallah salting dua duanyaa aslii, karenaa karenaa di tandain sama subjek prokeran kita kaloo kita dikit lagii nikah? atau pacaran? hahaha pada ketawa semua disituu"},
  {img:"images/16.jpg",text:"inii foto akuu aja sihh tapii ada yang berhargaa eheheh, akuu diingetinn muluu disuruh pake topii eppoyy, soalnya eppoy kasian sama akuu karena gapake topii kapanasan nantii"},
  {img:"images/17.jpg",text:"dimanaa inii adalahh momen pdkt kamuu jugaa buat dapetin akoo, curang bangett masak nyogok pake nawarin nebeng mobil kamuu buat pindah pindahan kkn"},
  {img:"images/18.jpg",text:"inii lebih kee kenangan kkn sihh tapii taugasii kamu nyadar gaa?? kita tu selalu ke apit satu orang doang tau kalo foto rame rame ginii, kamu sengajaa ya ngambil nya angel kanan kaya aku jugaa??? hayoo"},
  {img:"images/19.jpg",text:"tuhkann yakann keapit satu orangg terus kann??"},
  {img:"images/mory.jpg",text:"inii aku ss dari video recap kita hahaha, soalnyaa bm difoto pas boncengan sbnrnyaa"},
  {img:"images/vid1.mp4",text:"inii pertamaa kalii ngobroll langsungg sama ayahh, langsung panas gaa otaknyaa poyy?? tapii seruu kan ayah aedonn??"},
  {img:"images/vid2.mp4",text:"inii pertamaa kalii jalan pulang pagii yaallah abistuu dimarahin ibumuu hahhaha, maaff yaa eppoyy kamu jadi kena marahh"},
  {img:"images/20.jpg",text:"alhamdulillah akuu tahun baru di pwt nyaa udah ditemeninn orangg, soalnya biasanya gaperah keluar dari kos kalo tahun baruu :(("},
  {img:"images/21.jpg",text:"inii keduaa kalinyaa eppoy nemenin aku ke RS, kamuu haruss sabarr sabar yaa sama nduyy kalo masalah aslam dan aslam :))"},
  {img:"images/22.jpg",text:"ahhh aku senengg bangett, taugaa kenapaa?? pertamaa kalii aku dikasih bungaa sama pacarr akuu, orangg yang aku sayangg, dan dikasihh kuee coklatt, dan tentunyaa kehadirann eppoy dan effort eppoy yang akuu sukaaa"},
  {img:"images/23.jpg",text:"inii i wishh bangett parahh, akuu dari duluu pengen banget nonton konserr sama pacarr akuu, dan alhamdulillah eppoy first experiencee akuu"},
  {img:"images/24.jpg",text:"pertamaa kalinyaa ke daerah tegall barengg eppoyy, dan kedua kalinyaa pergii jauhh"},
  {img:"images/25.jpg",text:"kaloo inii pertamaa kalii aku nyobain es brazill, soalnyaa dikenalinn sama akamsi nyaa langsungg siehh yaituu pacarr akoo eppoyy"},
  {img:"images/26.jpg",text:"hmmm inii pertamaa kalinyaa juga kita ke pantaii yang ada cafenyaa"},
  {img:"images/27.jpg",text:"kaloo inii mahh first experience nyaa eppoyy, soalnyaa eppoy baru pertama kali cobain lawsonn karena nduyy ehheehe"},
  {img:"images/28.jpg",text:"eyyy inii parahh bangett yaa, masaa peyekk buat akuu dari mbahtii dah dihabisin setengahh, jadinyaa pap deh laporan ke mamah kalo eppoy sukakk peyekk mbahtii, ehh next nya dibawain buat eppoy dari mbahtii"},
  {img:"images/29.jpg",text:"i love this love sign sooo muchhh, yangg bikin orangg orangg pada happy juga liatnya di sg second acc akuu"},
  {img:"images/30.jpg",text:"udahh dehh ini penutupp eheheh, lucuu bangett pokonyaa kenangann yangg hampir setengah tahunn inii dikit lagii, SEMOGAA EPPOYY DAN NDUYY BISAA TERUS TERUSS BARENGG YAA KEDEPANN KEDEPANNYAA AAMIIN"},
  {img:"images/14.jpg",text:"Dan aku ingin selamanya ❤️"}
];
let currentSlide=0;

function showGallery(){
  currentSlide = 0;
  setScreen(`
  <div class="screen">
    <div class="back" onclick="backMenu()">⬅ Kembali</div>
    <div class="slider">
      <button class="nav-btn prev" onclick="prevSlide()">❮</button>
      <div class="slide-box" id="slide-box"></div>
      <p id="slide-text"></p>
      <button class="nav-btn next" onclick="nextSlide()">❯</button>
    </div>
  </div>`);
  updateSlide(); // tampilkan slide pertama
}

function nextSlide(){
  currentSlide++;
  if(currentSlide>=galleryData.length){
    showFinalScene(); return;
  }
  updateSlide();
}

function prevSlide(){
  currentSlide--;
  if(currentSlide<0) currentSlide=galleryData.length-1;
  updateSlide();
}

function updateSlide(){
  const box = document.getElementById("slide-box");
  const text = document.getElementById("slide-text");
  const data = galleryData[currentSlide];

  box.innerHTML = ""; // kosongkan konten sebelumnya

  if(data.img.endsWith(".mp4")){
    // buat elemen video
    const video = document.createElement("video");
    video.src = data.img;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.style.width = "100%";
    box.appendChild(video);
  } else {
    // buat elemen gambar
    const img = document.createElement("img");
    img.src = data.img;
    img.style.width = "100%";
    box.appendChild(img);
  }

  text.textContent = data.text;
}


/* FINAL */
const finalMessage=[
  "Semua foto ini cuma bukti kecil…",
  "tapi rasa sayangku ke kamu nggak ada habisnya.",
  "Terima kasih sudah bertahan sejauh ini 🤍"
];

function showFinalScene(){
  setScreen(`
    <div class="screen">
      <div class="final-scene">
        <div id="final-text" class="final-text"></div>
        <button class="hug-btn" onclick="finalHug()">Peluk aku 🤍</button>
      </div>
    </div>`);
  typeFinalText();
}

function typeFinalText(){
  const el=document.getElementById("final-text");
  let i=0;
  function next(){
    if(i>=finalMessage.length) return;
    const p=document.createElement("p");
    el.appendChild(p);
    let j=0;
    const t=setInterval(()=>{
      p.textContent+=finalMessage[i][j++]||"";
      if(j>finalMessage[i].length){
        clearInterval(t); i++; setTimeout(next,900);
      }
    },45);
  }
  next();
}

function finalHug(){
  setScreen(`
    <div class="hug-scene">
      <div class="hug-content">
        <h1>🤍 Untuk Kamu 🤍</h1>
        <div id="hug-text" class="hug-text"></div>
        <button class="forever-btn" onclick="backMenu()">Selamanya 🤍</button>
      </div>
    </div>`);
  typeHugText();
}

function typeHugText(){
  const lines=[
    "Kalau dunia terasa berat,",
    "datanglah ke aku.",
    "",
    "Aku mungkin tidak bisa menyelesaikan semuanya,",
    "tapi aku bisa memelukmu sampai kamu tenang.",
    "",
    "Karena bagiku,",
    "kamu adalah rumah 🤍"
  ];
  const el=document.getElementById("hug-text");
  let i=0;
  function next(){
    if(i>=lines.length) return;
    const p=document.createElement("p");
    el.appendChild(p);
    let j=0;
    const t=setInterval(()=>{
      p.textContent+=lines[i][j++]||"";
      if(j>lines[i].length){
        clearInterval(t); i++; setTimeout(next,900);
      }
    },50);
  }
  next();
}

function backMenu(){
  setScreen(menuScreen());
}

function lanjutRomantis(){

  setScreen(`
    <div class="screen">
      
      <div class="popup-overlay"></div>

      <div class="popup-box">
        <div class="popup-close" onclick="backMenu()">✕</div>

        <h2>Untuk Kamu 🤍</h2>
        <p id="popup-text"></p>
      </div>

    </div>
  `);

  const text = 
  "Selamat Valentine yaa sayanggg,maaf kalau selamaa inii akuu masihh belum jadii yang terbaikk buat kamuu yaa sayangg\n\n" +
  "Mungkiin sekarangg momenttnyaa yang tepattt buatt akuu kasih kamuu inii " +
  "Kadang aku tidak butuh alasan apa pun untuk mencintaimu.\n\n" +
  "Cukup melihat kamu tersenyum,\n" +
  "itu sudah lebih dari cukup bagiku 🤍\n\n" +
  "LOVEE YOUU SAYANGGGG\n\n🤍🤍🤍🤍"  ;

  const el = document.getElementById("popup-text");
  let i = 0;

  const typing = setInterval(()=>{
    el.textContent += text[i++] || "";
    if(i >= text.length) clearInterval(typing);
  },45);
}


// LOVE KLIK DETAIL
document.addEventListener("DOMContentLoaded", ()=>{
  const loveBtn = document.getElementById("love-btn");

  loveBtn.addEventListener("click", ()=>{
    
    // cek apakah popup sudah ada
    if(document.getElementById("love-popup")) return;

    // buat popup
    const popup = document.createElement("div");
    popup.id = "love-popup";

    popup.innerHTML = `
      <div class="popup-content">
        <div class="popup-close" onclick="document.getElementById('love-popup').remove()">✕</div>
        <p id="love-popup-text"></p>
      </div>
    `;

    document.body.appendChild(popup);

    // tulis kata-kata satu per satu (typewriter effect)
    const text = 
      "Kadang aku hanya ingin memandangmu.\n" +
      "Merasa bahagia hanya dengan melihatmu tersenyum.\n\n" +
      "Kamu adalah rumahku, pelabuhan hatiku, dan setiap detik bersamamu adalah harta terindahku.\n\n" +
      "Love youuu ndutt 😘";

    const el = document.getElementById("love-popup-text");
    let i = 0;

    const typing = setInterval(()=>{
      if(i >= text.length){
        clearInterval(typing);
        return;
      }
      el.textContent += text[i] === "\n" ? "\n" : text[i];
      i++;
    }, 40);

  });
});

