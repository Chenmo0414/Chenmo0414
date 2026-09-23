const trip = {
  dates: '2026/09/29 晚 — 2026/10/07',
  travelers: '2+ 名司机轮驾',
  vehicle: '极氪 001 WE100',
  route: ['厦门','成都','四姑娘山','丹巴','八美','塔公','新都桥','雅江','理塘','香格里拉镇','康定','贵阳','厦门'],
  points: [
    {name:'厦门', lat:24.4798, lng:118.0894, altitude:20},
    {name:'成都', lat:30.5728, lng:104.0668, altitude:500},
    {name:'四姑娘山', lat:31.099, lng:102.842, altitude:3100},
    {name:'丹巴', lat:30.878, lng:101.890, altitude:1800},
    {name:'八美', lat:30.690, lng:101.530, altitude:3500},
    {name:'塔公', lat:30.320, lng:101.540, altitude:3730},
    {name:'新都桥', lat:30.040, lng:101.490, altitude:3460},
    {name:'雅江', lat:30.031, lng:101.014, altitude:2600},
    {name:'理塘', lat:29.997, lng:100.269, altitude:4014},
    {name:'香格里拉镇', lat:28.445, lng:100.333, altitude:2900},
    {name:'康定', lat:30.050, lng:101.963, altitude:2560},
    {name:'贵阳', lat:26.647, lng:106.630, altitude:1100},
    {name:'厦门', lat:24.4798, lng:118.0894, altitude:20},
  ],
  segments: [
    {day:'D0-1', date:'9/29–9/30', from:'厦门', to:'成都', km:2024, hours:'25–28h', road:'G76 / G60 等高速', altitude:'20m → 500m', charge:'高速服务区 10–20% → 75–85%', risk:'high', note:'超长距离；按至少 2 名司机轮换。参考公开路线里程约 2024km，国庆前夜应额外预留充电、吃饭和短睡。'},
    {day:'D2', date:'10/1', from:'成都', to:'四姑娘山', km:175, hours:'约 3h', road:'蓉昌高速 → G350', altitude:'500m → 3100m', charge:'成都 ≥90% 出发', risk:'medium', note:'四姑娘山官方给出的中国熊猫大道路线约 175km/3h；国庆可能明显增加。'},
    {day:'D2', date:'10/1', from:'四姑娘山', to:'丹巴', km:110, hours:'约 2.5h', road:'G350 / G248', altitude:'3100m → 1800m', charge:'丹巴到店补能', risk:'medium', note:'景区 15:30 后仍未离场则不要夜赶丹巴。'},
    {day:'D3', date:'10/2', from:'丹巴', to:'八美', km:85, hours:'2–2.5h', road:'G248', altitude:'1800m → 3500m', charge:'丹巴高电量出发', risk:'medium', note:'海拔快速抬升；当前公开路况资料约 84–85km、2h+。'},
    {day:'D3', date:'10/2', from:'八美', to:'塔公', km:30, hours:'约 0.5h', road:'G248', altitude:'3500m → 3730m', charge:'—', risk:'low', note:'风大、体感温度低，停车注意路侧安全。'},
    {day:'D3', date:'10/2', from:'塔公', to:'新都桥', km:35, hours:'40–50min', road:'G248 / S434', altitude:'3730m → 3460m', charge:'新都桥补至 90–95%', risk:'low', note:'天气通透才追日落，不摸黑去野机位。'},
    {day:'D4', date:'10/3', from:'新都桥', to:'雅江', km:70, hours:'约 2h', road:'G318', altitude:'3460m → 2600m', charge:'高电量出发', risk:'medium', note:'弯多坡陡，节假日车流量大。'},
    {day:'D4', date:'10/3', from:'雅江', to:'理塘', km:140, hours:'约 3.5h', road:'G318', altitude:'2600m → 4014m', charge:'理塘强制检查电量', risk:'high', note:'卡子拉山等高海拔路段；雨雪、结冰时直接降级。'},
    {day:'D4', date:'10/3', from:'理塘', to:'香格里拉镇', km:230, hours:'约 4h', road:'G227', altitude:'4014m → 2900m', charge:'理塘补能后再进海子山', risk:'high', note:'经兔儿山、海子山、稻城；不要低电量进入无人路段。'},
    {day:'D6', date:'10/5', from:'香格里拉镇', to:'理塘', km:230, hours:'约 4h', road:'G227', altitude:'2900m → 4014m', charge:'出发 ≥90%', risk:'high', note:'清晨低温，先检查结冰与临时交通管制。'},
    {day:'D6', date:'10/5', from:'理塘', to:'雅江', km:140, hours:'约 3.5h', road:'G318', altitude:'4014m → 2600m', charge:'理塘机动补能', risk:'medium', note:'返程同样不要因为下坡放松速度控制。'},
    {day:'D6', date:'10/5', from:'雅江', to:'新都桥', km:70, hours:'约 2h', road:'G318', altitude:'2600m → 3460m', charge:'新都桥机动补能', risk:'medium', note:'国庆拥堵时优先保证天黑前进入康定方向。'},
    {day:'D6', date:'10/5', from:'新都桥', to:'康定', km:80, hours:'1.5–2h', road:'G318', altitude:'3460m → 2560m', charge:'到康定后恢复', risk:'high', note:'折多山段最受天气与拥堵影响；公开资料约 78–80km。'},
    {day:'D7', date:'10/6', from:'康定', to:'贵阳', km:827, hours:'约 10.2h', road:'G4218 → G93 → G76', altitude:'2560m → 1100m', charge:'恢复高速服务区策略', risk:'medium', note:'公开路线数据约 827km/10.2h；加充电、吃饭建议按 12h+。'},
    {day:'D8', date:'10/7', from:'贵阳', to:'厦门', km:1350, hours:'约 15–17h', road:'G60 → G76', altitude:'1100m → 20m', charge:'高速分段快充', risk:'high', note:'近期公开攻略给出约 1350km；返程日车流大，建议尽早出发并预留高速拥堵。'}
  ],
  days: [
    {id:'D0-1', date:'9/29–9/30', title:'厦门 → 成都', meta:'跨省长途 · 约 2024km', legs:[
      {time:'18:00–19:00', title:'装车 / 晚饭 / 车辆检查', desc:'胎压、玻璃水、补胎、充气泵、离线地图；SOC 90–100%。', drive:'准备', sub:'厦门'},
      {time:'19:00–次日', title:'厦门 → 成都', desc:'按 2–2.5 小时一次休息节奏轮换驾驶；凌晨安排 60–90 分钟真实睡眠。', drive:'25–28h', sub:'约 2024km'},
      {time:'21:30–23:30', title:'预计抵达成都', desc:'到店后不安排夜游；停车、洗澡、睡觉。', drive:'结束', sub:'D1'}
    ]},
    {id:'D2', date:'10/1', title:'成都 → 四姑娘山 → 丹巴', meta:'约 285km + 景区', legs:[
      {time:'06:20–10:00', title:'成都 → 四姑娘山', desc:'官方推荐中国熊猫大道；国庆可能明显超过 3h。', drive:'约 3h+', sub:'175km'},
      {time:'10:30–15:30', title:'双桥沟', desc:'核心站点优先；15:30 作为强制决策点。', drive:'景区', sub:'观光车'},
      {time:'15:40–18:30', title:'四姑娘山 → 丹巴', desc:'超过 15:30 还在景区就取消夜赶，直接住四姑娘山镇。', drive:'约 2.5h+', sub:'约 110km'}
    ]},
    {id:'D3', date:'10/2', title:'丹巴 → 八美 → 塔公 → 新都桥', meta:'约 150km', legs:[
      {time:'08:00–10:10', title:'甲居藏寨', desc:'只选 1–2 个核心观景点，避免深走拖慢全天节奏。', drive:'游览', sub:'约 2h'},
      {time:'10:10–12:30', title:'丹巴 → 八美', desc:'海拔从 1800m 快速升到 3500m。', drive:'2–2.5h', sub:'85km'},
      {time:'13:10–16:00', title:'八美 / 墨石 → 塔公', desc:'天气一般时跳过墨石，把时间留给塔公和新都桥。', drive:'约 1h', sub:'30km + 停留'},
      {time:'16:00–18:20', title:'塔公 → 新都桥 / 日落', desc:'天气通透才追日落；到店立刻补能。', drive:'40–50min', sub:'35km'}
    ]},
    {id:'D4', date:'10/3', title:'新都桥 → 雅江 → 理塘 → 香格里拉镇', meta:'约 440km · 高海拔长途', legs:[
      {time:'07:00–08:50', title:'新都桥 → 雅江', desc:'G318 经典段，弯多坡陡。', drive:'约 2h', sub:'70km'},
      {time:'09:05–11:40', title:'雅江 → 理塘', desc:'卡子拉山一带海拔很高，雨雪时主动降级。', drive:'约 3.5h', sub:'140km'},
      {time:'11:40–14:10', title:'理塘午餐 / 打卡 / 补能', desc:'不住理塘；补能后再进入海子山路段。', drive:'停留', sub:'约 2.5h'},
      {time:'14:10–17:50', title:'理塘 → 香格里拉镇', desc:'兔儿山、海子山、稻城；低电量不要进入无人区。', drive:'约 4h', sub:'230km'}
    ]},
    {id:'D5', date:'10/4', title:'稻城亚丁全天', meta:'车辆短途 · 徒步为主', legs:[
      {time:'06:35–08:30', title:'酒店 → 游客中心 → 扎灌崩', desc:'尽量第一波入园。', drive:'短途', sub:'景区交通'},
      {time:'08:30–12:00', title:'冲古寺 → 洛绒牛场', desc:'逐步适应海拔，不跟人群猛走。', drive:'徒步', sub:'高海拔'},
      {time:'12:30–15:30', title:'长线 / 短线二选一', desc:'天气或身体不适就走短线。', drive:'徒步', sub:'看状态'},
      {time:'15:30–18:30', title:'回香格里拉镇', desc:'晚上补电至 90%+，为次日返程做准备。', drive:'恢复', sub:'早睡'}
    ]},
    {id:'D6', date:'10/5', title:'香格里拉镇 → 理塘 → 新都桥 → 康定', meta:'约 520km', legs:[
      {time:'06:50–09:40', title:'香格里拉镇 → 理塘', desc:'清晨先确认结冰与交通管制。', drive:'约 4h', sub:'230km'},
      {time:'10:00–12:40', title:'理塘 → 雅江', desc:'返程不因下坡放松速度。', drive:'约 3.5h', sub:'140km'},
      {time:'13:20–15:20', title:'雅江 → 新都桥', desc:'新都桥做一次机动补能。', drive:'约 2h', sub:'70km'},
      {time:'15:50–18:30', title:'新都桥 → 康定', desc:'折多山受天气和拥堵影响最大。', drive:'1.5–2h+', sub:'80km'}
    ]},
    {id:'D7', date:'10/6', title:'康定 → 贵阳', meta:'约 827km', legs:[
      {time:'07:00–12:00', title:'康定 → 川南方向', desc:'出山段注意湿滑，服务区休息与补能合并。', drive:'约 5h', sub:'高速'},
      {time:'12:00–18:30', title:'川南 → 贵阳', desc:'公开路线约 827km/10.2h 纯驾驶；含补能按 12h+。', drive:'约 5–7h', sub:'高速'},
      {time:'18:30–19:30', title:'预计贵阳入住', desc:'不再安排夜市，第二天仍是超长返程。', drive:'结束', sub:'D7'}
    ]},
    {id:'D8', date:'10/7', title:'贵阳 → 厦门', meta:'约 1350km', legs:[
      {time:'06:30–12:30', title:'贵阳 → 湘赣方向', desc:'清晨关注团雾；2–2.5h 一次休息。', drive:'约 6h', sub:'高速'},
      {time:'12:30–18:20', title:'继续东行 / 午餐 / 补能', desc:'不把电量压到极低再找桩。', drive:'约 6h', sub:'高速'},
      {time:'18:20–22:30', title:'赣州 / 龙岩 → 厦门', desc:'返程日可能堵车，预计到达时间需留弹性。', drive:'约 4h+', sub:'收官'}
    ]}
  ],
  hotels: [
    {date:'9/30', city:'成都', name:'汉庭成都春熙路太古里中心酒店', version:'汉庭 3.5', note:'华住官方明确 3.5；若抵达很晚，优先搜成都西侧同版本门店。'},
    {date:'10/1', city:'丹巴', name:'汉庭甘孜丹巴县店', version:'稳定兜底', note:'丹巴华住选择有限，停车 / 充电 / 可取消优先于版本号。'},
    {date:'10/2', city:'新都桥', name:'全季新都桥新项目', version:'新品候选', note:'若 9 月底开放优先新品；否则成熟全季/汉庭新都桥兜底。'},
    {date:'10/3–10/4', city:'香格里拉镇', name:'全季稻城亚丁店', version:'连住 2 晚', note:'避免景区日再搬行李；停车和充电更重要。'},
    {date:'10/5', city:'康定', name:'全季甘孜康定店', version:'稳定优先', note:'若华住 App 当天出现全季/你好新品且停车更好，可直接替换。'},
    {date:'10/6', city:'贵阳', name:'汉庭贵阳喷水池瑞金北路酒店', version:'汉庭 3.51', note:'华住官方明确 3.51 版本。'}
  ],
  charging: [
    {section:'厦门 → 成都', title:'高速策略', note:'10–20% 进站，75–85% 离站；每 2–2.5h 休息一次，充电和休息合并。'},
    {section:'成都 → 丹巴', title:'高原前置电量', note:'成都出发 ≥90%；山区到站余量目标 ≥25%。'},
    {section:'丹巴 → 新都桥', title:'新都桥必须补', note:'到店后补至 90–95%，为 G318 长途做准备。'},
    {section:'新都桥 → 亚丁', title:'理塘强制检查', note:'理塘作为补能检查点；不要低电量进海子山。'},
    {section:'亚丁 → 康定', title:'双节点机动', note:'理塘 / 新都桥均可机动补能，不执着单一充电站。'},
    {section:'康定 → 厦门', title:'恢复高速策略', note:'服务区快充为主，返程高峰优先排队少的站。'}
  ],
  weatherPlaces:['四姑娘山','丹巴','新都桥','理塘','稻城亚丁','康定','贵阳','厦门']
};

const totalKm = trip.segments.reduce((sum,s)=>sum+s.km,0);
const driveHours = trip.segments.reduce((sum,s)=>{
  const nums = s.hours.match(/\d+(?:\.\d+)?/g)?.map(Number) || [0];
  return sum + (nums.length>1 ? (nums[0]+nums[1])/2 : nums[0]);
},0);

document.getElementById('heroStats').innerHTML = [
  [`${totalKm.toLocaleString()} km`,'规划总里程'],
  [`约 ${Math.round(driveHours)} h`,'纯驾驶累计'],
  ['9 天 8 夜','9/29 晚 — 10/7'],
  [trip.vehicle,'用车']
].map(([a,b])=>`<div class="stat-chip"><b>${a}</b><span>${b}</span></div>`).join('');

document.getElementById('summaryCards').innerHTML = [
  [`${trip.days.length} 个日程单元`,'逐日展开'],
  [`${trip.segments.length} 个路段`,'地区间距拆分'],
  ['4,014 m','最高住宿/途经海拔量级'],
  ['华住优先','3.5/3.51/新品优先']
].map(([a,b])=>`<div class="summary-card"><b>${a}</b><span>${b}</span></div>`).join('');

document.getElementById('routeStrip').innerHTML = trip.route.map((x,i)=>`${i?'<span class="route-arrow">→</span>':''}<span class="route-node">${x}</span>`).join('');

const filters = ['全部','去程','川西核心','返程'];
document.getElementById('segmentFilters').innerHTML = filters.map((x,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${x}">${x}</button>`).join('');

function segmentGroup(s){
  if(s.day==='D0-1') return '去程';
  if(['D2','D3','D4'].includes(s.day)) return '川西核心';
  return '返程';
}
function riskLabel(r){ return r==='high'?'高风险':r==='medium'?'注意':'常规'; }
function renderSegments(filter='全部'){
  const items = trip.segments.filter(s=>filter==='全部'||segmentGroup(s)===filter);
  document.getElementById('segmentTable').innerHTML = `<table class="segment-table">
    <thead><tr><th>日期</th><th>路段</th><th>里程</th><th>纯驾驶</th><th>道路</th><th>海拔</th><th>补能</th><th>风险 / 说明</th></tr></thead>
    <tbody>${items.map(s=>`<tr>
      <td><b>${s.date}</b><div class="segment-sub">${s.day}</div></td>
      <td><div class="segment-route">${s.from} → ${s.to}</div></td>
      <td><b>${s.km} km</b></td>
      <td><span class="duration">${s.hours}</span></td>
      <td>${s.road}</td>
      <td>${s.altitude}</td>
      <td>${s.charge}</td>
      <td><span class="risk ${s.risk}">${riskLabel(s.risk)}</span><div class="segment-sub">${s.note}</div></td>
    </tr>`).join('')}</tbody>
  </table>`;
}
renderSegments();
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active'); renderSegments(btn.dataset.filter);
}));

document.getElementById('dayTimeline').innerHTML = trip.days.map((d,i)=>`<details class="day-card" ${i===0?'open':''}>
  <summary class="day-head">
    <div class="day-number">${d.id}</div>
    <div class="day-title-wrap"><div class="day-title">${d.date} · ${d.title}</div><div class="day-meta">${d.meta}</div></div>
    <div class="day-chevron">⌄</div>
  </summary>
  <div class="day-body"><div class="leg-list">${d.legs.map(l=>`<div class="leg">
    <div class="leg-time">${l.time}</div>
    <div class="leg-main"><b>${l.title}</b><p>${l.desc}</p></div>
    <div class="leg-drive"><b>${l.drive}</b><span>${l.sub}</span></div>
  </div>`).join('')}</div></div>
</details>`).join('');

document.getElementById('hotelList').innerHTML = trip.hotels.map(h=>`<div class="hotel">
  <div class="hotel-top"><div><b>${h.date} · ${h.city}</b><div>${h.name}</div></div><span class="tag good">${h.version}</span></div>
  <p>${h.note}</p>
</div>`).join('');

document.getElementById('chargingList').innerHTML = trip.charging.map(c=>`<div class="charging">
  <div class="charging-top"><b>${c.section}</b><span class="tag">${c.title}</span></div>
  <p>${c.note}</p>
</div>`).join('');

const weatherState = JSON.parse(localStorage.getItem('roadbookWeather')||'{}');
document.getElementById('weatherChecklist').innerHTML = trip.weatherPlaces.map(p=>`<div class="weather-item">
  <label>${p}</label>
  <input data-weather="${p}" value="${weatherState[p]||''}" placeholder="例：多云 4–15℃ / 无雪" />
</div>`).join('');
document.querySelectorAll('[data-weather]').forEach(el=>el.addEventListener('change',()=>{
  weatherState[el.dataset.weather]=el.value;
  localStorage.setItem('roadbookWeather', JSON.stringify(weatherState));
}));

const map = L.map('map', {scrollWheelZoom:false}).setView([29.95,103.8],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:18, attribution:'© OpenStreetMap' }).addTo(map);
const latlngs = trip.points.map(p=>[p.lat,p.lng]);
L.polyline(latlngs,{color:'#b85f2a',weight:4,opacity:.86,dashArray:'10 8'}).addTo(map);
trip.points.forEach((p,i)=>{
  if(i===trip.points.length-1) return;
  const marker=L.marker([p.lat,p.lng]).addTo(map);
  marker.bindPopup(`<b>${p.name}</b><br/>参考海拔：${p.altitude}m`);
});
map.fitBounds(L.latLngBounds(latlngs).pad(.08));

const dialog=document.getElementById('offlineDialog');
document.getElementById('offlineBtn').addEventListener('click',()=>dialog.showModal());
document.getElementById('dialogClose').addEventListener('click',()=>dialog.close());

if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js')); }
