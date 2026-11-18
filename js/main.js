/* Jung Ko Taekwondo Academy — site scripts
   Sections: mobile menu, instructors, nav highlight, hero age picker,
   class schedule, reviews, booking dialog, mobile action bar. */
(() => {
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const NAMES = {
    tigers: "Tiny Tiger Tots (ages 3–5)",
    kids: "Junior Program (ages 5½–12)",
    teens: "Teen & Adult (13+)",
  };

  // mobile menu
  const burger = $(".burger"),
    mnav = $("#mnav");
  burger.addEventListener("click", () => {
    const o = mnav.classList.toggle("open");
    burger.setAttribute("aria-expanded", o);
    burger.textContent = o ? "Close" : "Menu";
  });
  mnav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mnav.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
      burger.textContent = "Menu";
    }
  });

  // instructors: real credentials from jungko.com/our-instructors
  const IMG = "https://static.wixstatic.com/media/";
  const T = [
    {
      g: "lead",
      n: "Dominic DeJesus",
      r: "Head Master",
      d: "4th Dan Kukkiwon",
      img: "81d5eb_fb9fde1933674a7ba4932a563d3e39fd~mv2.jpg/v1/crop/x_496,y_505,w_2175,h_3250",
      keys: ["8 years teaching", "Demo team", "Summer camp coordinator"],
      x: "Coordinates the summer camp and coaches the Black Belt Boxing class. A member of the Jung Ko demo team.",
      c: [
        "Head coach of the Black Belt Boxing class",
        "Summer camp coordinator",
        "Certified in Balintawak, levels 1 to 5",
        "Jung Ko demo team member",
        "Multiple gold medals in taekwondo championships",
        "Graduate of Toronto Film School",
      ],
    },
    {
      g: "lead",
      n: "Jonnel DeJesus",
      r: "Head Instructor",
      d: "3rd Dan Kukkiwon",
      img: "81d5eb_1d5c497fc648440783650584d371426c~mv2.jpg",
      keys: ["6 years teaching", "P3 referee", "Early childhood education"],
      x: "Studying Early Childhood Education and certified as a Taekwondo Ontario referee. Assistant coordinator of the summer camp.",
      c: [
        "Summer camp assistant coordinator",
        "Provincial 3rd Class (P3) referee, Taekwondo Ontario",
        "Studying Early Childhood Education at Seneca College",
        "Jung Ko demo team member",
        "Certified in Balintawak, levels 1 to 5",
        "Multiple gold medals in taekwondo championships",
      ],
    },
    {
      g: "tkd",
      n: "Taeyun Kim",
      r: "Instructor",
      d: "4th Dan Kukkiwon",
      img: "81d5eb_31ae950c76fa4bad91a79c1547d7ac00~mv2.jpeg/v1/crop/x_511,y_1080,w_2224,h_2763",
      keys: ["World Taekwondo coach", "First aid & CPR"],
      c: [
        "World Taekwondo certified Kyorugi Coach, Level II",
        "World Taekwondo certified Poomsae Coach",
        "Taekwondo Canada certified Dojang Coach and Assistant Instructor",
        "Boxing Canada certified Beginners Coach",
        "Taekwondo Ontario provincial referee",
        "NCCP trained coach, Coaching Association of Canada",
        "Standard First Aid and CPR/AED Level C",
      ],
    },
    {
      g: "tkd",
      n: "Margo Castillo Jr.",
      r: "Instructor",
      d: "3rd Dan Kukkiwon",
      img: "81d5eb_8873e6c1905b406596bad241982c98d5~mv2.jpg/v1/crop/x_23,y_0,w_1563,h_2337",
      keys: ["16+ years training", "Nunchuck instructor"],
      c: [
        "Black Belt Nunchuck instructor",
        "6 years of teaching taekwondo",
        "Over 16 years of taekwondo training",
        "Studying Kinesiology and Health Science at York University",
        "Jung Ko demo team member",
        "Multiple gold medals in taekwondo championships",
      ],
    },
    {
      g: "tkd",
      n: "Taylor So",
      r: "Instructor",
      d: "2nd Dan Kukkiwon",
      img: "81d5eb_c41508217f7c4bba921bc7d99eb63983~mv2.jpg",
      keys: ["8+ years training", "Camp counsellor"],
      c: [
        "Camp counsellor with the City of Toronto",
        "3 years of teaching taekwondo",
        "Over 8 years of taekwondo training",
        "Former Jung Ko demo team member",
        "Studying Visual Arts (BFA Honours) at York University",
        "Multiple gold medals in taekwondo championships",
      ],
    },
    {
      g: "tkd",
      n: "Arnoosh Tafazoli",
      r: "Instructor",
      d: "2nd Dan Kukkiwon",
      img: "81d5eb_451ab564db214050bdc129c18f060627~mv2.jpg",
      keys: ["15+ years training", "P2 referee"],
      c: [
        "Provincial 2nd Class (P2) referee, Taekwondo Ontario",
        "Over 15 years of taekwondo training",
        "Standard First Aid with CPR-C",
        "Studying Human Resources Management at Seneca College",
        "Multiple gold medals in taekwondo championships",
      ],
    },
    {
      g: "tkd",
      n: "Vladimir Efest",
      r: "Instructor",
      d: "2nd Dan Kukkiwon",
      img: "81d5eb_846b047be39c4518ba944ce1db57735d~mv2.jpg",
      keys: ["8+ years training", "P3 referee"],
      c: [
        "Provincial 3rd Class (P3) referee, Taekwondo Ontario",
        "Over 8 years of taekwondo training",
        "Graduate of Aviation Safety at Seneca College",
        "Multiple gold medals in taekwondo championships",
      ],
    },
    {
      g: "kendo",
      n: "Jin Whan Lee",
      r: "Kendo Head Master",
      d: "7th Dan, Kyoshi",
      img: "81d5eb_a5d28335d5224bf289420190097455cc~mv2.jpg/v1/crop/x_67,y_66,w_581,h_868",
      keys: ["30 years teaching", "CKF instructor & judge"],
      x: "Kyoshi and Canadian Kendo Federation instructor and judge, with 30 years of teaching kendo and three tournament gold medals.",
      c: [
        "Kyoshi, Canadian Kendo Federation instructor and judge",
        "30 years of teaching kendo",
        "Gold, individual event, Seoul Cup Open Kendo Tournament",
        "Gold, individual event, Quebec Kendo Tournament",
        "Gold, individual event, Japanese Canadian Cultural Centre Kendo Tournament, 2016",
      ],
    },
    {
      g: "kendo",
      n: "Bora Choi",
      r: "Kendo Master",
      d: "6th Dan, Renshi",
      img: "81d5eb_0b816706c55d42dfbbd32ada99007881~mv2.jpg",
      keys: ["Former Team Canada", "CKF instructor & judge"],
      x: "Renshi and Canadian Kendo Federation instructor and judge. A former member of Team Canada\u2019s women\u2019s kendo team.",
      c: [
        "Former member of Team Canada women’s kendo team",
        "Renshi, Canadian Kendo Federation instructor and judge",
        "15 years of teaching experience",
      ],
    },
  ];
  const src = (t, w, h) =>
    IMG +
    t.img +
    (t.img.includes("/v1/") ? "" : "/v1") +
    `/fill/w_${w},h_${h},al_c,q_80,enc_auto/${t.n.split(" ")[0].toLowerCase()}.jpg`;
  const short = (d) => d.replace(" Kukkiwon", "");
  const card = (t, i) =>
    t.x
      ? `<button class="card-c lead" data-i="${i}" aria-haspopup="dialog"><figure><img loading="lazy" src="${src(t, 560, 700)}" alt="${t.n}"></figure><span class="cb"><span class="cr">${t.r} · ${short(t.d)}</span><span class="cn">${t.n}</span><span class="cx">${t.x}</span><span class="tags">${t.keys.map((k) => `<span>${k}</span>`).join("")}</span><span class="cv">View full profile</span></span></button>`
      : `<button class="card-c" data-i="${i}" aria-haspopup="dialog"><figure><img loading="lazy" src="${src(t, 480, 600)}" alt="${t.n}"></figure><span class="cb"><span class="cr">${t.r} · ${short(t.d)}</span><span class="cn">${t.n}</span><span class="ck">${t.keys.join(" · ")}</span><span class="cv">View profile</span></span></button>`;
  ["lead", "tkd", "kendo"].forEach((g) => {
    $("#g-" + g).innerHTML = T.map((t, i) => (t.g === g ? card(t, i) : "")).join("");
  });

  const drawer = $("#drawer"),
    dimg = $("#d-img");
  let di = 0,
    opener = null;
  function openD(i) {
    di = (i + T.length) % T.length;
    const t = T[di];
    dimg.src = src(t, 760, 700);
    dimg.alt = t.n;
    $("#d-role").textContent = `${t.r} · ${t.d}`;
    $("#d-name").textContent = t.n;
    $("#d-keys").innerHTML = t.keys.map((k) => `<span>${k}</span>`).join("");
    $("#d-list").innerHTML = t.c.map((c) => `<li>${c}</li>`).join("");
    $("#d-count").textContent = `${di + 1} of ${T.length}`;
    if (!drawer.open) drawer.showModal();
    drawer.scrollTop = 0;
  }
  $$(".card-c").forEach((b) =>
    b.addEventListener("click", () => {
      opener = b;
      openD(+b.dataset.i);
    }),
  );
  $("#d-prev").onclick = () => openD(di - 1);
  $("#d-next").onclick = () => openD(di + 1);
  $(".d-close").onclick = () => drawer.close();
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) drawer.close();
  });
  drawer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") openD(di + 1);
    if (e.key === "ArrowLeft") openD(di - 1);
  });
  drawer.addEventListener("close", () => {
    if (opener) opener.focus();
  });

  // nav: mark the section on screen
  const links = $$(".menu a");
  const secs = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting)
            links.forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secs.forEach((x) => spy.observe(x));
  }

  // hero age picker: name the chosen program on the booking button
  const heroBtn = $("#finder .btn-book");
  const SHORT = { tigers: "Book a Tots trial", kids: "Book a Junior trial", teens: "Book a Teen & Adult trial" };

  let heroAge = null;
  $$(".age").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".age").forEach((x) => x.setAttribute("aria-pressed", x === b));
      heroAge = b.dataset.age;
      heroBtn.textContent = SHORT[heroAge];
      $$(".prog").forEach((p) => p.classList.toggle("lit", p.id === "p-" + heroAge));
    }),
  );

  // ===== schedule data, transcribed from the academy's printed schedule =====
  const BELT = {
    white: ["#fff"],
    yellow: ["#F2C230"],
    greenSt: ["#F2C230", "#2E8B57"],
    green: ["#2E8B57"],
    blueSt: ["#2E8B57", "#1F5FBF"],
    blue: ["#1F5FBF"],
    redSt: ["#1F5FBF", "#CD2E3A"],
    red: ["#CD2E3A"],
    blackSt: ["#CD2E3A", "#111"],
    black: ["#111"],
  };
  const LV = {
    wy: { l: "White to Yellow", b: ["white", "yellow"] },
    gsbs: { l: "Green stripe to Blue stripe", b: ["greenSt", "blueSt"] },
    bbs: { l: "Blue to Black stripe", b: ["blue", "blackSt"] },
    gsb: { l: "Green stripe to Blue", b: ["greenSt", "blue"] },
    rsb: { l: "Red stripe to Black", b: ["redSt", "black"] },
    bk: { l: "Black belt", b: ["black"] },
    all: { l: "All belts", b: [] },
    g8: { l: "Green belt and up, ages 8+", b: ["green"] },
  };
  const C = (d, s, e, n, sub, lv, p) => ({ d, s, e, n, sub, lv, p });
  const WK = [1, 2, 3, 4, 5],
    MTF = [1, 2, 5],
    WT = [3, 4];
  const CLASSES = [
    C(WK, "09:00", "16:00", "Private lessons", "Call to book", "", "private"),
    C([6], "09:00", "12:00", "Private lessons", "Call to book", "", "private"),
    C([0], "09:00", "13:00", "Private lessons", "Call to book", "", "private"),
    C(WK, "15:40", "16:10", "Tiny Tiger Tots", "Ages 3–5", "all", "tots"),
    C([6], "12:00", "12:30", "Tiny Tiger Tots", "Ages 3–5", "all", "tots"),
    C(WK, "16:10", "16:50", "Junior", "Beginner", "wy", "junior"),
    C(MTF, "16:50", "17:30", "Junior", "Intermediate", "gsbs", "junior"),
    C(WT, "16:50", "17:30", "Junior", "Sparring and poomsae", "bbs", "junior"),
    C(MTF, "17:30", "18:10", "Junior", "Advanced", "bbs", "junior"),
    C(WT, "17:30", "18:10", "Junior", "Sparring and poomsae", "gsbs", "junior"),
    C(MTF, "18:10", "18:50", "Junior", "Beginner", "wy", "junior"),
    C(WT, "18:10", "18:50", "Junior", "Sparring and poomsae", "bk", "black"),
    C([1], "18:50", "19:30", "Black belt", "Nunchuck", "bk", "black"),
    C([2], "18:50", "19:30", "Black belt", "Self-defence", "bk", "black"),
    C([5], "18:50", "19:30", "Black belt", "Poomsae", "bk", "black"),
    C(WT, "18:50", "19:30", "Junior", "Beginner", "wy", "junior"),
    C(MTF, "19:30", "20:20", "Teen and adult", "Ages 13 and up", "all", "teen"),
    C(WT, "19:30", "20:20", "Teen and adult", "Sparring and poomsae, ages 13 and up", "all", "teen"),
    C([1, 3, 4], "20:20", "21:00", "Private lessons", "Call to book", "", "private"),
    C([2], "20:20", "21:20", "High-performance poomsae", "Training", "g8", "black"),
    C([6], "12:30", "13:10", "Junior", "Beginner", "wy", "junior"),
    C([6], "13:10", "13:55", "Junior", "Sparring and poomsae", "gsb", "junior"),
    C([6], "13:55", "14:40", "Junior", "Sparring and poomsae", "rsb", "junior"),
    C([6], "14:40", "15:20", "All ages", "All belts", "", "open"),
    C([6], "14:40", "15:20", "Black belt", "Boxing", "bk", "black"),
    C([6], "15:30", "17:30", "Competitive class", "By invitation only", "", "comp"),
    C([0], "13:00", "13:40", "Junior and adult", "Beginner", "wy", "junior"),
    C([0], "13:40", "14:20", "Junior and adult", "Sparring and poomsae", "gsb", "junior"),
    C([0], "14:20", "15:00", "Junior and adult", "Sparring and poomsae", "rsb", "junior"),
    C([0], "15:00", "20:00", "Private lessons", "Call to book", "", "private"),
  ];
  // which filter each class shows under (teen/adult classes on Sunday count for both)
  const inFilter = (c, f) =>
    f === "all" ||
    c.p === f ||
    (f === "teen" && c.n.startsWith("Junior and adult")) ||
    (f === "black" && c.lv === "bk" && c.p !== "black");
  const DAYN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const ORDER = [1, 2, 3, 4, 5, 6, 0];
  const fmt = (t) => {
    let [h, m] = t.split(":").map(Number);
    const ap = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, "0")} ${ap}`;
  };
  const range = (c) => {
    const a = fmt(c.s),
      b = fmt(c.e);
    return a.slice(-2) === b.slice(-2) ? `${a.slice(0, -3)}–${b}` : `${a}–${b}`;
  };
  const mins = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  const beltHTML = (k) => {
    const v = BELT[k];
    return v.length > 1
      ? `<i class="belt st" style="--b:${v[0]};--s:${v[1]}"></i>`
      : `<i class="belt" style="--b:${v[0]}"></i>`;
  };
  const lvHTML = (c) => {
    if (!c.lv) return "";
    const L = LV[c.lv];
    return `${L.b.map(beltHTML).join("")}<span>${L.l}</span>`;
  };
  const now = new Date(),
    today = now.getDay(),
    nowM = now.getHours() * 60 + now.getMinutes();
  let fSel = "all",
    dSel = today,
    vSel = "day";

  const daysEl = $("#sc-days");
  daysEl.innerHTML = ORDER.map(
    (d) =>
      `<button class="sc-day" role="tab" data-d="${d}" aria-selected="${d === dSel}">${DAYN[d].slice(0, 3)}${d === today ? "<small>Today</small>" : ""}</button>`,
  ).join("");
  const dayBtns = $$(".sc-day", daysEl);
  function list(d) {
    return CLASSES.filter((c) => c.d.includes(d) && inFilter(c, fSel)).sort(
      (a, b) => mins(a.s) - mins(b.s) || a.p.localeCompare(b.p),
    );
  }
  function renderDay() {
    const L = list(dSel);
    $("#sc-panel").innerHTML = L.length
      ? L.map((c) => {
          const live = dSel === today && nowM >= mins(c.s) && nowM < mins(c.e) && c.p !== "private";
          return `<div class="cls ${c.p}${live ? " now" : ""}"><div class="t">${range(c)}</div><div class="n">${c.n}${live ? '<span class="now-tag">On now</span>' : ""}<small>${c.sub}</small></div><div class="lv">${lvHTML(c)}</div></div>`;
        }).join("")
      : `<div class="sc-empty">No ${$('.sc-chip[aria-pressed="true"]').textContent.trim().toLowerCase()} classes on ${DAYN[dSel]}. Try another day.</div>`;
    dayBtns.forEach((b) => {
      const d = +b.dataset.d;
      b.setAttribute("aria-selected", d === dSel);
      b.style.opacity = list(d).length ? 1 : 0.45;
    });
  }
  function renderWeek() {
    $("#sc-week").innerHTML = ORDER.map(
      (d) =>
        `<div class="wk-col"><div class="wk-h${d === today ? " today" : ""}">${DAYN[d].slice(0, 3)}</div>${
          list(d)
            .map(
              (c) =>
                `<div class="wk-b ${c.p}"><b>${range(c)}</b><span>${c.n}</span><small>${c.lv ? lvHTML(c) : c.sub}</small></div>`,
            )
            .join("") || '<div class="wk-b" style="--pc:transparent"><small>No classes</small></div>'
        }</div>`,
    ).join("");
  }
  function render() {
    vSel === "day" ? renderDay() : renderWeek();
  }
  dayBtns.forEach((b, i) => {
    b.addEventListener("click", () => {
      dSel = +b.dataset.d;
      renderDay();
    });
    b.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const n = dayBtns[(i + (e.key === "ArrowRight" ? 1 : 6)) % 7];
      n.focus();
      n.click();
    });
  });
  $$(".sc-chip").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".sc-chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
      fSel = b.dataset.f;
      render();
    }),
  );
  $$(".sc-v").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".sc-v").forEach((x) => x.setAttribute("aria-pressed", x === b));
      vSel = b.dataset.v;
      $("#sc-week").hidden = vSel !== "week";
      $("#sc-panel").hidden = vSel === "week";
      daysEl.style.display = vSel === "week" ? "none" : "";
      render();
    }),
  );
  renderDay();

  // schedule zoom
  const zoom = $("#zoom");
  $("#sched-open").addEventListener("click", () => zoom.showModal());
  zoom.addEventListener("click", () => zoom.close());

  // reviews: real quotes from jungko.com, dojos.ca and Yellow Pages
  const Q = [
    ["Jung Ko Taekwondo is my daughter's second home.", "KD, parent · dojos.ca"],
    ["Masters are great and they know how to teach these very challenging skills to kids of all ages.", "AJ, parent"],
    ["The instructors are amazing and very focused on the student's development.", "Sandhya, parent"],
    ["All the staff are very kind, friendly and hard working.", "Esther, parent"],
  ];
  let qi = 0;
  $("#q-dots").innerHTML = Q.map(() => "<i></i>").join("");
  function showQ(i) {
    qi = (i + Q.length) % Q.length;
    $("#q-text").textContent = "“" + Q[qi][0] + "”";
    $("#q-cite").textContent = Q[qi][1];
    $$("#q-dots i").forEach((d, k) => d.classList.toggle("on", k === qi));
  }
  $("#q-prev").onclick = () => showQ(qi - 1);
  $("#q-next").onclick = () => showQ(qi + 1);
  showQ(0);

  // booking dialog
  const dlg = $("#book"),
    steps = $$(".step", dlg),
    belt = $$(".prog-belt i", dlg);
  const state = { age: null, days: [] };
  let cur = 1;
  function go(n) {
    cur = n;
    steps.forEach((s) => s.classList.toggle("on", +s.dataset.step === n));
    belt.forEach((b, i) => b.classList.toggle("done", i < Math.min(n, 3)));
    $("#bk-count").textContent = n <= 3 ? `Step ${n} of 3` : "Review";
    $("#bk-back").style.visibility = n === 1 ? "hidden" : "visible";
    $("#bk-next").textContent = n === 3 ? "Review request" : n === 4 ? "Send request" : "Continue";
    $$("[data-err]", dlg).forEach((e) => (e.textContent = ""));
    const f = steps[n - 1].querySelector("button.chip, input");
    if (f) f.focus();
  }
  $$("[data-pick]", dlg).forEach((group) => {
    const multi = group.hasAttribute("data-multi"),
      key = group.dataset.pick;
    group.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c) return;
      if (multi) {
        const on = c.getAttribute("aria-pressed") !== "true";
        c.setAttribute("aria-pressed", on);
        state.days = $$('.chip[aria-pressed="true"]', group).map((x) => x.dataset.v);
      } else {
        $$(".chip", group).forEach((x) => x.setAttribute("aria-pressed", x === c));
        state[key] = c.dataset.v;
      }
    });
  });
  function setAge(a) {
    state.age = a;
    $$('[data-pick="age"] .chip', dlg).forEach((x) => x.setAttribute("aria-pressed", x.dataset.v === a));
  }
  $$("[data-book]").forEach((b) =>
    b.addEventListener("click", () => {
      const a = b.dataset.book || heroAge;
      if (a) setAge(a);
      go(a ? 2 : 1);
      dlg.showModal();
      go(a ? 2 : 1);
    }),
  );
  $("#bk-back").onclick = () => go(Math.max(1, cur - 1));
  $("#bk-next").onclick = () => {
    const err = steps[cur - 1].querySelector("[data-err]");
    if (cur === 1 && !state.age) {
      err.textContent = "Choose an age group to continue.";
      return;
    }
    if (cur === 2 && !state.days.length) {
      err.textContent = "Choose at least one day.";
      return;
    }
    if (cur === 3) {
      const name = $("#f-name").value.trim(),
        phone = $("#f-phone").value.trim();
      if (!name) {
        err.textContent = "Enter the parent's name.";
        $("#f-name").focus();
        return;
      }
      if (phone.replace(/\D/g, "").length < 10) {
        err.textContent = "Enter a 10-digit phone number.";
        $("#f-phone").focus();
        return;
      }
      const child = $("#f-child").value.trim();
      $("#bk-summary").innerHTML =
        `<b>${NAMES[state.age]}</b><br>Days: ${state.days.join(", ")}<br>${child ? "Student: " + child.replace(/</g, "&lt;") + "<br>" : ""}Parent: ${name.replace(/</g, "&lt;")} · ${phone.replace(/</g, "&lt;")}`;
    }
    if (cur === 4) {
      const body = `Hello Jung Ko Taekwondo,\n\nI'd like to book a free trial class.\n\nProgram: ${NAMES[state.age]}\nPreferred days: ${state.days.join(", ")}\nStudent: ${$("#f-child").value.trim() || "-"}\nParent: ${$("#f-name").value.trim()}\nPhone: ${$("#f-phone").value.trim()}\n\nThank you!`;
      location.href =
        "mailto:tkd@jungko.com?subject=" +
        encodeURIComponent("Free trial request: " + NAMES[state.age]) +
        "&body=" +
        encodeURIComponent(body);
      dlg.close();
      return;
    }
    go(cur + 1);
  };
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) dlg.close();
  });

  const mbar = $(".mbar"),
    hero = $(".hero");
  if (mbar && hero && "IntersectionObserver" in window)
    new IntersectionObserver(([e]) => mbar.classList.toggle("show", !e.isIntersecting), { threshold: 0 }).observe(hero);
  else if (mbar) mbar.classList.add("show");
  $("#yr").textContent = new Date().getFullYear();
})();
