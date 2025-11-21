// 🟥 Politeknik Negeri Lampung
const polinelaArea = [
  [-5.359325, 105.234310],
  [-5.358268, 105.234645],
  [-5.358769, 105.236033],
  [-5.358276, 105.236209],
  [-5.356833, 105.233706],
  [-5.354484, 105.230794],
  [-5.352552, 105.230135],
  [-5.351507, 105.231222],
  [-5.350333, 105.230079],
  [-5.350675, 105.229350],
  [-5.350014, 105.229076],
  [-5.351036, 105.226704],
  [-5.351350, 105.226509],
  [-5.351835, 105.227349],
  [-5.352589, 105.227957],
  [-5.353606, 105.227716],
  [-5.355862, 105.228436],
  [-5.357563, 105.229350],
  [-5.359213, 105.231649],
  [-5.359237, 105.233552]
];

// 🟥 Polygon Polinela
var polinelaPolygon = L.polygon(polinelaArea, {
  color: "red",
  fillColor: "tomato",
  fillOpacity: 0.35,
  weight: 1,
  interactive: true
}).addTo(map);

// 📍 Popup Polinela dengan ikon cantik
var popupPolinela = `
  <div style="max-width:280px; font-family:Arial, sans-serif; line-height:1.4;">
    <h4 style="margin:5px 0; color:#b30000;">📚 Politeknik Negeri Lampung</h4>
    <p style="margin:4px 0; font-size:13px;">
      Politeknik Negeri Lampung adalah Perguruan Tinggi Negeri yang menyelenggarakan pendidikan vokasi di Provinsi Lampung
      untuk menciptakan lulusan ahli madya dan sarjana terapan berjiwa disiplin, mandiri, dan profesional di Indonesia.
    </p>
    <p style="margin:4px 0; font-size:13px;">🎓 Didirikan: <b>7 April 1984</b><br>
    👨‍🏫 Direktur: <b>Prof. Dr. Ir. Sarono, M.Si</b><br>
    🏛️ Provinsi: <b>Lampung</b></p>
    <p style="margin:4px 0; font-size:13px;">📍 <b>Alamat:</b><br>
    Jl. Soekarno Hatta No.10, Rajabasa Raya,<br>
    Kec. Rajabasa, Kota Bandar Lampung, Lampung 35141</p>
    <p style="margin:4px 0; font-size:13px;">📞 <b>Telepon:</b> (0721) 703995<br>
    🌐 <b>Website:</b> <a href="https://polinela.ac.id" target="_blank">polinela.ac.id</a></p>
    <p style="margin:4px 0; font-size:13px;">⏰ <b>Jam Operasional:</b><br>
    Buka ⋅ Tutup pukul <b>22.00</b></p>
    <hr style="border-top:1px solid #ccc;">
    <small style="color:gray;">📍 Boundary Polinela berdasarkan koordinat GPS.</small>
  </div>
`;

// 🟦 Lahan Samping KHD
const lahanSampingKHD = [
  [-5.358094, 105.234433],
  [-5.358070, 105.234467],
  [-5.358248, 105.234638],
  [-5.358340, 105.234560],
  [-5.358264, 105.234483],
  [-5.358216, 105.234536]
];

// 🟦 Lahan Bunga Kol
const lahanBungaKol = [
  [-5.358094, 105.234433],
  [-5.358070, 105.234467],
  [-5.358248, 105.234638],
  [-5.358340, 105.234560],
  [-5.358264, 105.234483],
  [-5.358216, 105.234536]
];

var lahanPolygonBungaKol = L.polygon(lahanBungaKol, {
  color: 'cadetblue',
  fillColor: 'lightcyan',
  fillOpacity: 0.6,
  weight: 2,
  interactive: true
}).addTo(map);

var popupBungaKol = `
  <div style="max-width:240px; font-family:Arial, sans-serif; line-height:1.3;">
    <h5 style="margin:4px 0; color:#0a5a75; font-size:14px;">🥦 Lahan Bunga Kol</h5>
    <p style="margin:3px 0; font-size:12px;">
      Area ini digunakan sebagai <b>lahan budidaya tanaman Bunga Kol</b> (Cauliflower) oleh mahasiswa Politeknik Negeri Lampung.
      Lahan ini dimanfaatkan untuk <b>praktikum hortikultura, penelitian produktivitas tanaman sayuran,</b> dan pengamatan fase pertumbuhan.
    </p>

    <p style="margin:3px 0; font-size:12px;"><b>🌿 Kegiatan:</b><br>
    - Penanaman dan perawatan Bunga Kol<br>
    - Pengamatan hama dan penyakit tanaman<br>
    - Analisis pertumbuhan daun dan bunga<br>
    - Uji sistem pemupukan dan irigasi tetes</p>

    <p style="margin:3px 0; font-size:12px;"><b>🧑‍🔬 Tujuan:</b><br>
    Mengembangkan pemahaman mahasiswa tentang teknik budidaya sayuran dataran rendah dan efisiensi lahan produksi.</p>

    <p style="margin:3px 0; font-size:12px;"><b>🌤️ Kondisi:</b><br>
    Lahan datar dengan tanah lempung berpasir, pencahayaan penuh, dan drainase cukup baik. Cocok untuk tanaman semusim seperti Bunga Kol dan Sawi.</p>

    <hr style="border-top:1px solid #ccc; margin:5px 0;">
    <p style="margin:3px 0; font-size:12px;">📍 <b>Lokasi:</b> Area samping KHD, Politeknik Negeri Lampung</p>

    <div style="display:flex; overflow-x:auto; gap:4px; scroll-snap-type:x mandatory; padding-bottom:4px;">
      <img src="/images/lahanbungakol1.jpg" alt="Lahan Bunga Kol 1"
           style="height:90px; border-radius:8px; scroll-snap-align:center;">
      <img src="/images/lahanbungakol2.jpg" alt="Lahan Bunga Kol 2"
           style="height:90px; border-radius:8px; scroll-snap-align:center;">
      <img src="/images/lahanbungakol3.jpg" alt="Lahan Bunga Kol 3"
           style="height:90px; border-radius:8px; scroll-snap-align:center;">
      <img src="/images/lahanbungakol4.jpg" alt="Lahan Bunga Kol 4"
           style="height:90px; border-radius:8px; scroll-snap-align:center;">
      <img src="/images/lahanbungakol5.jpg" alt="Lahan Bunga Kol 5"
           style="height:90px; border-radius:8px; scroll-snap-align:center;">
    </div>
    <small style="color:gray; font-size:11px;">📷 Geser untuk melihat dokumentasi →</small>

    <div style="text-align:center; margin-top:6px;">
      <a href="/lahan-bunga-kol" class="btn btn-sm btn-outline-success" style="font-size:12px; border-radius:6px;">
        🔍 Lihat lebih detail
      </a>
    </div>
  </div>
`;

// ✅ Pastikan terhubung ke polygon yang benar
lahanPolygonBungaKol.bindPopup(popupBungaKol, { maxWidth: 300 });


// 🟦 Lahan Belakang KHD
const lahanBelakangKHD = [
  [-5.358228, 105.234436],
  [-5.358180, 105.234444],
  [-5.358138626939375, 105.23413550803977],
  [-5.358182690005178, 105.23412477920425]
];

var lahanPolygonBelakangKHD = L.polygon(lahanBelakangKHD, {
  color: 'dodgerblue',
  fillColor: 'lightblue',
  fillOpacity: 0.6,
  weight: 2,
  interactive: true
}).addTo(map);

var popupBelakangKHD = `
  <div style="max-width:230px; font-family:Arial, sans-serif; line-height:1.3;">
    <h4 style="margin:3px 0; color:#0077cc; font-size:14px;">🏡 Rumah Tanaman (Belakang KHD)</h4>
    <p style="margin:3px 0; font-size:11px;">
      <b>Rumah Tanaman</b> di belakang Gedung KHD digunakan untuk 
      <b>praktikum, penelitian, pembibitan, dan perawatan tanaman hortikultura</b> oleh mahasiswa Polinela.
    </p>

    <p style="margin:3px 0; font-size:11px;">🌿 <b>Fungsi Utama:</b><br>
    - Pembibitan & penyemaian tanaman<br>
    - Percobaan pertumbuhan<br>
    - Penelitian intensitas cahaya<br>
    - Uji coba fertigasi & hidroponik</p>

    <p style="margin:3px 0; font-size:11px;">🧑‍🔬 <b>Kegiatan Praktikum:</b><br>
    Mahasiswa Agribisnis, Produksi Tanaman, dan Teknologi Pertanian melakukan observasi & perawatan di area ini.</p>

    <p style="margin:3px 0; font-size:11px;">🌤️ <b>Kondisi:</b><br>
    Atap plastik UV, ventilasi alami, suhu & kelembapan terkontrol untuk pertumbuhan optimal.</p>

    <hr style="border-top:1px solid #ccc; margin:5px 0;">
    <p style="margin:3px 0; font-size:11px;">📍 <b>Lokasi:</b> Belakang Gedung KHD – Area Rumah Tanaman.</p>

    <div class="popup-gallery" id="galleryBelakangKHD" 
         style="display:flex; overflow-x:auto; gap:4px; scroll-snap-type:x mandatory; padding-bottom:3px;">
      <img src="/images/rumahtanaman1.jpg" alt="Rumah Tanaman 1"
           style="height:80px; border-radius:6px; scroll-snap-align:center;">
      <img src="/images/rumahtanaman2.jpg" alt="Rumah Tanaman 2"
           style="height:80px; border-radius:6px; scroll-snap-align:center;">
      <img src="/images/rumahtanaman3.jpg" alt="Rumah Tanaman 3"
           style="height:80px; border-radius:6px; scroll-snap-align:center;">
      <img src="/images/rumahtanaman4.jpg" alt="Rumah Tanaman 4"
           style="height:80px; border-radius:6px; scroll-snap-align:center;">
      <img src="/images/rumahtanaman5.jpg" alt="Rumah Tanaman 5"
           style="height:80px; border-radius:6px; scroll-snap-align:center;">
    </div>
    <small style="color:gray; font-size:10px;">📷 Geser untuk melihat foto →</small>

    <div style="text-align:center; margin-top:6px;">
      <a href="/lahan-belakang-khd" target="_blank"
         style="display:inline-block; background-color:#0077cc; color:white;
                padding:4px 10px; border-radius:5px; text-decoration:none;
                font-size:11px; font-weight:600;">
        🔍 Detail
      </a>
    </div>
  </div>
`;

lahanPolygonBelakangKHD.bindPopup(popupBelakangKHD, { maxWidth: 320 });


// 🟨 Lahan Melon
const lahanMelon = [
  [-5.358297, 105.234373],
  [-5.358383, 105.234548],
  [-5.358593651835604, 105.23446080896483],
  [-5.358471477045705, 105.23427439544766]
];

var lahanPolygonMelon = L.polygon(lahanMelon, {
  color: 'gold',
  fillColor: 'khaki',
  fillOpacity: 0.6,
  weight: 2,
  interactive: true
}).addTo(map);

var popupMelon = `
  <div style="max-width:250px; font-family:'Segoe UI', sans-serif; overflow:hidden;">
    <h4 style="margin-bottom:6px; color:#b8860b; font-size:15px;">🍈 Lahan Melon</h4>
    <p style="font-size:12px; text-align:justify; color:#333; margin-bottom:6px;">
      Area ini digunakan untuk <b>praktikum Program Studi Teknologi Produksi Tanaman Hortikultura</b> oleh mahasiswa 
      <b>Politeknik Negeri Lampung</b>. Tanaman melon termasuk dalam famili <i>Cucurbitaceae</i> dan dikenal dengan rasa manis serta kandungan air tinggi.
    </p>
    <p style="font-size:12px; text-align:justify; color:#333; margin-bottom:5px;">
      🌱 <b>Nama Ilmiah:</b> <i>Cucumis melo L.</i><br>
      🌾 <b>Famili:</b> Cucurbitaceae<br>
      🌍 <b>Asal:</b> Afrika & Asia Barat Daya
    </p>
    <p style="font-size:12px; text-align:justify; color:#333; margin-bottom:5px;">
      🌤️ <b>Kondisi Ideal:</b> Suhu 25–30°C, tanah gembur pH 6–7, cahaya penuh, dan drainase baik.
    </p>
    <p style="font-size:12px; text-align:justify; color:#333; margin-bottom:5px;">
      🍉 <b>Panen:</b> 70–90 hari setelah tanam, berat 1–2 kg per buah.
    </p>

    <div style="display:flex; overflow-x:auto; gap:6px; scroll-snap-type:x mandatory; padding:4px 0;">
      ${[1,2].map((i, idx) => `
        <img src="/images/T${i}.jpg" alt="Lahan Melon ${idx+1}"
             style="height:70px; width:auto; border-radius:8px; box-shadow:0 1px 4px rgba(0,0,0,0.2);
                    scroll-snap-align:center; transition:transform 0.2s; cursor:pointer;"
             onmouseover="this.style.transform='scale(1.05)'"
             onmouseout="this.style.transform='scale(1)'">
      `).join('')}
    </div>

    <small style="color:gray; font-size:11px;">Geser untuk melihat foto →</small>

    <div style="text-align:center; margin-top:8px;">
      <a href="/lahan-melon" target="_blank"
         style="display:inline-block; background-color:#b8860b; color:white; 
                padding:4px 10px; border-radius:6px; text-decoration:none; 
                font-size:12px; font-weight:600; transition:background-color 0.2s;">
        Lihat Lebih Detail
      </a>
    </div>

    <small style="color:gray; display:block; margin-top:5px; font-size:11px;">
      📍 Koordinat GPS Lahan Praktikum Polinela
    </small>
  </div>
`;

lahanPolygonMelon.bindPopup(popupMelon, { maxWidth: 260 });



// 🟩 Lahan Floriculture
const lahanFloriculture = [
  [-5.358366, 105.234088],
  [-5.358463, 105.234077],
  [-5.358492425609463, 105.23425086593421],
  [-5.358391614702301, 105.23426427697859]
];

var lahanPolygonFloriculture = L.polygon(lahanFloriculture, {
  color: 'mediumseagreen',
  fillColor: 'palegreen',
  fillOpacity: 0.6,
  weight: 2,
  interactive: true
}).addTo(map);

var popupFloriculture = `
  <div style="max-width:320px; font-family: 'Segoe UI', sans-serif;">
    <h4 style="margin-bottom:6px; color:#006400;">Lahan Floriculture</h4>
    <p style="font-size:13px; text-align:justify; color:#333; margin-bottom:8px;">
      Area budidaya tanaman hias (floriculture) yang digunakan untuk kegiatan praktikum, riset, dan produksi bunga potong.
    </p>
    <div style="display:flex; overflow-x:auto; gap:8px; scroll-snap-type:x mandatory; padding:6px 0;">
      ${[ '',1,2,3,4,5 ].map((i, idx) => `
        <img src="/images/floriculture${i}.jpg" alt="Floriculture ${idx}"
             style="height:120px; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.2);
                    scroll-snap-align:center; transition:transform 0.2s; cursor:pointer;"
             onmouseover="this.style.transform='scale(1.05)'"
             onmouseout="this.style.transform='scale(1)'">
      `).join('')}
    </div>
    <small style="color:gray;">Geser ke samping untuk melihat foto lainnya →</small>
  </div>
  <a href="/floriculture-detail" target="_blank"
   style="display:inline-block; background-color:#28a745; color:white; 
          padding:6px 14px; border-radius:6px; text-decoration:none; 
          font-size:13px; font-weight:600; transition:background-color 0.2s;">
  Lihat Lebih Detail
</a>

`;


lahanPolygonFloriculture.bindPopup(popupFloriculture, { maxWidth: 500 });
lahanPolygonBelakangKHD.bindPopup(popupBelakangKHD, { maxWidth: 500 });
lahanPolygonFloriculture.bindPopup(popupFloriculture, { maxWidth: 500 });

// 🟩 Lahan Prodi Hortikultura
const lahanProdiHortikultura = [
  [-5.357318, 105.230395],
  [-5.356941, 105.229853],
  [-5.356612, 105.230183],
  [-5.356848, 105.230487]
];

var lahanPolygonProdiHortikultura = L.polygon(lahanProdiHortikultura, {
  color: 'darkgreen',
  fillColor: 'lightgreen',
  fillOpacity: 0.6,
  weight: 2,
  interactive: true,
  bubblingMouseEvents: false   // ⬅️ SOLUSI 😎
}).addTo(map);


var popupProdiHortikultura = `
  <div style="max-width:300px; line-height:1.4;">
    <b style="font-size:16px;">Lahan Prodi Hortikultura</b><br>
    <p style="margin-top:6px;">
      Area khusus milik Program Studi Hortikultura yang digunakan untuk kegiatan:
      <ul style="margin-left:18px; margin-top:5px;">
        <li>Praktikum budidaya tanaman hortikultura</li>
        <li>Penelitian dan percobaan mahasiswa</li>
        <li>Produksi dan pemeliharaan tanaman tahunan & semusim</li>
      </ul>
    </p>

    <p style="color:gray; font-size:12px; margin-top:8px;">
      Koordinat berdasarkan GPS akurat lapangan.
    </p>

    <a href="/hortikultura" 
       style="
         display:inline-block;
         padding:6px 12px;
         background:#2d7a32;
         color:white;
         border-radius:6px;
         text-decoration:none;
         margin-top:6px;
       ">
      Lihat Detail →
    </a>
  </div>
`;

lahanPolygonProdiHortikultura.bindPopup(popupProdiHortikultura, { maxWidth: 500 });

