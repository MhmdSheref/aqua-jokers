const LIMITS = {
  bod: 10,
  tss: 10,
  cod: 50,
  coliform: 1000
};

const SAVE_KEY = "aqua-jokers-save-v1";

const STAGES = [
  {
    id: "tutorial",
    name: "Training Plant",
    kicker: "Stage 1",
    description: "Reach basic safe irrigation quality by learning taps and first upgrades.",
    target_quality: 35,
    target_energy: 3,
    reward_money: 250,
    bod: 180,
    tss: 120,
    cod: 260,
    coliform: 900000
  },
  {
    id: "zenin",
    name: "Zenin WWTP",
    kicker: "Stage 2",
    description: "Pathogens are the main issue. Push quality with targeted disinfection.",
    target_quality: 68,
    target_energy: 6,
    reward_money: 1800,
    bod: 15.7,
    tss: 15,
    cod: 52,
    coliform: 710000
  },
  {
    id: "abu_rawash",
    name: "Abu Rawash WWTP",
    kicker: "Stage 3",
    description: "Heavy primary-treatment pollution. Build biological capacity and UV protection.",
    target_quality: 86,
    target_energy: 12,
    reward_money: 12000,
    bod: 240,
    tss: 180,
    cod: 360,
    coliform: 10000000
  },
  {
    id: "national",
    name: "National Treatment Challenge",
    kicker: "Final Stage",
    description: "Scale the model into a clean, profitable national treatment run.",
    target_quality: 95,
    target_energy: 18,
    reward_money: 0,
    bod: 90,
    tss: 70,
    cod: 140,
    coliform: 2500000
  }
];

const UPGRADES = [
  {
    id: "lab",
    name: "Lab Monitoring",
    icon: "lab",
    description: "Cheap reports make every clean cubic meter pay more.",
    base_cost: 15,
    cost_mult: 1.15,
    tap_gain: 0,
    income_gain: 0.65,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0.04,
    energy_recovery: 0,
    unlock_stage: "tutorial"
  },
  {
    id: "pump",
    name: "Smart Pump",
    icon: "pump",
    description: "More flow per tap with less operator panic.",
    base_cost: 35,
    cost_mult: 1.16,
    tap_gain: 3,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0.15,
    energy_recovery: 0,
    unlock_stage: "tutorial"
  },
  {
    id: "sales_pipe",
    name: "Clean Water Pipeline",
    icon: "pipe",
    description: "Moves finished water to buyers for steady income.",
    base_cost: 90,
    cost_mult: 1.18,
    tap_gain: 0,
    income_gain: 2.2,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0.12,
    energy_recovery: 0,
    unlock_stage: "tutorial"
  },
  {
    id: "screens",
    name: "Inlet Screens",
    icon: "screens",
    description: "Cheap solids control. Buy this when TSS is angry.",
    base_cost: 180,
    cost_mult: 1.18,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 18,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0.18,
    energy_recovery: 0,
    unlock_stage: "tutorial"
  },
  {
    id: "aeration",
    name: "Aeration Basin",
    icon: "aeration",
    description: "Activated sludge chews through organic load.",
    base_cost: 520,
    cost_mult: 1.19,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 30,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0.9,
    energy_recovery: 0,
    unlock_stage: "tutorial"
  },
  {
    id: "uv",
    name: "UV Disinfection",
    icon: "uv",
    description: "A clean flash for the pathogen bottleneck.",
    base_cost: 1250,
    cost_mult: 1.21,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 36,
    energy_cost: 0.45,
    energy_recovery: 0,
    unlock_stage: "zenin"
  },
  {
    id: "settling",
    name: "Settling Tank",
    icon: "settling",
    description: "Settles the cloudy stuff before expensive treatment.",
    base_cost: 760,
    cost_mult: 1.19,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 24,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0.35,
    energy_recovery: 0,
    unlock_stage: "zenin"
  },
  {
    id: "digester",
    name: "Sludge Digester",
    icon: "digester",
    description: "Turns sludge into plant power and cuts running cost.",
    base_cost: 1600,
    cost_mult: 1.22,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0,
    energy_recovery: 0.85,
    unlock_stage: "zenin"
  },
  {
    id: "bio_reactor",
    name: "Biological Reactor",
    icon: "reactor",
    description: "Heavy reactor capacity for chemical load.",
    base_cost: 3600,
    cost_mult: 1.23,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 35,
    coliform_reduction: 0,
    energy_cost: 1.6,
    energy_recovery: 0,
    unlock_stage: "abu_rawash"
  },
  {
    id: "membrane",
    name: "Membrane Skid",
    icon: "membrane",
    description: "Final polish for stubborn solids.",
    base_cost: 6800,
    cost_mult: 1.25,
    tap_gain: 0,
    income_gain: 0,
    bod_reduction: 0,
    tss_reduction: 20,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 1.4,
    energy_recovery: 0,
    unlock_stage: "abu_rawash"
  },
  {
    id: "solar",
    name: "Solar Field",
    icon: "solar",
    description: "Offset the thirsty equipment with clean energy.",
    base_cost: 9000,
    cost_mult: 1.24,
    tap_gain: 0,
    income_gain: 6,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0,
    energy_recovery: 0.85,
    unlock_stage: "national"
  },
  {
    id: "ai_center",
    name: "AI Optimization Center",
    icon: "ai",
    description: "Your tool boosts plant revenue.",
    base_cost: 14000,
    cost_mult: 1.26,
    tap_gain: 0,
    income_gain: 55,
    bod_reduction: 0,
    tss_reduction: 0,
    cod_reduction: 0,
    coliform_reduction: 0,
    energy_cost: 0,
    energy_recovery: 0,
    unlock_stage: "national"
  }
];

const ICONS = {
  screens: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="10" width="30" height="28" rx="4"/><path d="M16 14v20M24 14v20M32 14v20M12 20h24M12 28h24"/></svg>`,
  pump: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="22" cy="24" r="10"/><path d="M31 24h8v9h-7M12 24H7m15-10v-4h10M19 24l7-5v10z"/></svg>`,
  settling: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 17h32l-4 23H12z"/><path d="M12 25h24M15 33h18M17 12h14"/></svg>`,
  lab: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 9h10M21 9v12L12 37c-1 2 0 3 2 3h20c2 0 3-2 2-3l-9-16V9"/><path d="M16 33h16"/></svg>`,
  aeration: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 31c6-5 11 5 17 0s10 5 15 0"/><circle cx="16" cy="17" r="3"/><circle cx="25" cy="11" r="2"/><circle cx="31" cy="20" r="4"/></svg>`,
  uv: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5v10M24 33v10M5 24h10M33 24h10M10 10l7 7M31 31l7 7M38 10l-7 7M17 31l-7 7"/><circle cx="24" cy="24" r="8"/></svg>`,
  pipe: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 18h19a7 7 0 0 1 0 14H15"/><path d="M15 12v26M34 18v14"/><path d="M8 24h18"/></svg>`,
  digester: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 20a11 11 0 0 1 22 0v18H13z"/><path d="M18 20a6 6 0 0 1 12 0M19 32h10M35 27h5"/></svg>`,
  reactor: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="9" width="28" height="30" rx="5"/><path d="M16 16h16M16 24h16M16 32h16M24 9v30"/></svg>`,
  membrane: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="12" width="30" height="24" rx="4"/><path d="M15 17v14M21 17v14M27 17v14M33 17v14"/><path d="M5 24h8M35 24h8"/></svg>`,
  solar: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M23 9h2M24 37v4M9 23h-4M43 23h-4M13 12l-2-2M37 10l-2 2"/><circle cx="24" cy="23" r="7"/><path d="M12 32h24l4 8H8zM17 32l-1 8M24 32v8M31 32l1 8"/></svg>`,
  ai: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="11" y="12" width="26" height="24" rx="6"/><path d="M18 8v4M30 8v4M18 36v4M30 36v4M7 20h4M7 28h4M37 20h4M37 28h4"/><circle cx="19" cy="24" r="2"/><circle cx="29" cy="24" r="2"/><path d="M19 30h10"/></svg>`
};

const els = {
  money: document.querySelector("#money"),
  cleanWater: document.querySelector("#cleanWater"),
  energyFooter: document.querySelector("#energyFooter"),
  stageKicker: document.querySelector("#stageKicker"),
  stageName: document.querySelector("#stageName"),
  stageGoal: document.querySelector("#stageGoal"),
  qualityScore: document.querySelector("#qualityScore"),
  qualityFill: document.querySelector("#qualityFill"),
  bod: document.querySelector("#bod"),
  tss: document.querySelector("#tss"),
  cod: document.querySelector("#cod"),
  coliform: document.querySelector("#coliform"),
  bodDial: document.querySelector("#bodDial"),
  tssDial: document.querySelector("#tssDial"),
  codDial: document.querySelector("#codDial"),
  coliformDial: document.querySelector("#coliformDial"),
  bodStatus: document.querySelector("#bodStatus"),
  tssStatus: document.querySelector("#tssStatus"),
  codStatus: document.querySelector("#codStatus"),
  coliformStatus: document.querySelector("#coliformStatus"),
  plantButton: document.querySelector("#plantButton"),
  tapGain: document.querySelector("#tapGain"),
  floatLayer: document.querySelector("#floatLayer"),
  aiTip: document.querySelector("#aiTip"),
  incomeRate: document.querySelector("#incomeRate"),
  energyCost: document.querySelector("#energyCost"),
  profitRate: document.querySelector("#profitRate"),
  upgradeList: document.querySelector("#upgradeList"),
  stageList: document.querySelector("#stageList"),
  totalProcessed: document.querySelector("#totalProcessed"),
  gradeReadiness: document.querySelector("#gradeReadiness"),
  powerLevel: document.querySelector("#powerLevel"),
  bottleneck: document.querySelector("#bottleneck"),
  resetBtn: document.querySelector("#resetBtn"),
  effectsLayer: document.querySelector("#effectsLayer"),
  victoryModal: document.querySelector("#victoryModal"),
  victoryKicker: document.querySelector("#victoryKicker"),
  victoryTitle: document.querySelector("#victoryTitle"),
  victoryText: document.querySelector("#victoryText"),
  victoryQuality: document.querySelector("#victoryQuality"),
  victoryEnergy: document.querySelector("#victoryEnergy"),
  victoryReward: document.querySelector("#victoryReward"),
  continueBtn: document.querySelector("#continueBtn")
};

const state = {
  money: 0,
  cleanWater: 0,
  totalProcessed: 0,
  stageIndex: 0,
  upgrades: {},
  lastTick: Date.now(),
  tipCooldown: 0,
  victory: null,
  lastRecommendationId: "",
  lastMoneyFxAt: 0,
  goalMarks: {}
};

let stages = STAGES;
let upgrades = UPGRADES;
let renderQueued = false;
let currentRecommendedUpgradeId = "";

const audio = {
  ctx: null,
  enabled: false,
  unlock() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    this.enabled = true;
  },
  tone(freq, duration = 0.08, type = "sine", gain = 0.035, detune = 0) {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const amp = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    osc.detune.setValueAtTime(detune, now);
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.exponentialRampToValueAtTime(gain, now + 0.012);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(amp);
    amp.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  },
  sweep(from, to, duration = 0.16, type = "triangle", gain = 0.045) {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const amp = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(from, now);
    osc.frequency.exponentialRampToValueAtTime(to, now + duration);
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.exponentialRampToValueAtTime(gain, now + 0.015);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(amp);
    amp.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.04);
  },
  tap(power) {
    this.sweep(150 + Math.min(power, 80) * 2, 360 + Math.min(power, 80) * 4, 0.07, "square", 0.022);
    this.tone(92, 0.045, "sine", 0.025);
  },
  money() {
    this.tone(740, 0.055, "triangle", 0.018);
    setTimeout(() => this.tone(990, 0.055, "triangle", 0.016), 45);
  },
  upgrade() {
    this.tone(330, 0.08, "triangle", 0.035);
    setTimeout(() => this.tone(494, 0.09, "triangle", 0.032), 70);
    setTimeout(() => this.tone(660, 0.11, "triangle", 0.03), 135);
  },
  tip() {
    this.tone(880, 0.06, "sine", 0.018);
    setTimeout(() => this.tone(1175, 0.08, "sine", 0.014), 55);
  },
  milestone() {
    this.tone(523, 0.08, "triangle", 0.025);
    setTimeout(() => this.tone(784, 0.1, "triangle", 0.022), 80);
  },
  goal() {
    this.sweep(220, 880, 0.28, "sawtooth", 0.045);
    setTimeout(() => this.tone(660, 0.12, "triangle", 0.045), 140);
    setTimeout(() => this.tone(990, 0.18, "triangle", 0.04), 260);
    setTimeout(() => this.tone(1320, 0.22, "sine", 0.035), 410);
  }
};

function boot() {
  loadSave();
  bindEvents();
  render();
  renderVictory();
  setInterval(tick, 1000);
  setInterval(save, 5000);
}

function bindEvents() {
  els.plantButton.addEventListener("pointerdown", (event) => {
    audio.unlock();
    treatWater(event);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`#${tab.dataset.tab}View`).classList.add("active");
    });
  });

  els.resetBtn.addEventListener("click", () => {
    if (!confirm("Reset Aqua Jokers progress?")) return;
    localStorage.removeItem(SAVE_KEY);
    Object.assign(state, {
      money: 0,
      cleanWater: 0,
      totalProcessed: 0,
      stageIndex: 0,
      upgrades: {},
      lastTick: Date.now(),
      tipCooldown: 0,
      victory: null,
      lastRecommendationId: "",
      lastMoneyFxAt: 0,
      goalMarks: {}
    });
    renderVictory();
    render();
  });

  els.continueBtn.addEventListener("click", () => {
    audio.unlock();
    continueFromVictory();
  });
}

function treatWater(event) {
  if (state.victory) return;
  const metrics = getMetrics();
  const gain = metrics.tapGain;
  state.cleanWater += gain * (metrics.quality / 100);
  state.totalProcessed += gain;
  state.money += gain * metrics.tapValue;

  audio.tap(metrics.tapGain);
  els.plantButton.classList.remove("popping");
  requestAnimationFrame(() => els.plantButton.classList.add("popping"));
  addFloater(event, `+${formatNumber(gain)} m3`);
  burstAtEvent(event, ["#65d9f2", "#7cf2a7"], 9);
  moneyPop(event.clientX, event.clientY - 16, `+${formatMoney(gain * metrics.tapValue)}`);
  checkGoalMilestones(getMetrics());
  checkStageCompletion();
  queueRender();
}

function tick() {
  if (state.victory) return;
  const now = Date.now();
  const seconds = Math.max(0.25, Math.min(8, (now - state.lastTick) / 1000));
  state.lastTick = now;

  const metrics = getMetrics();
  const netIncome = Math.max(0, metrics.incomeRate - metrics.energyCost);
  const waterGain = metrics.passiveWater * (metrics.quality / 100);

  state.money += netIncome * seconds;
  state.cleanWater += waterGain * seconds;
  state.totalProcessed += metrics.passiveWater * seconds;
  state.tipCooldown = Math.max(0, state.tipCooldown - seconds);

  if (netIncome > 0.2 && now - state.lastMoneyFxAt > 2600) {
    state.lastMoneyFxAt = now;
    const rect = els.money.getBoundingClientRect();
    moneyPop(rect.left + rect.width / 2, rect.bottom + 8, `+${formatMoney(netIncome * seconds)}`);
    audio.money();
  }

  checkGoalMilestones(metrics);
  checkStageCompletion();
  render();
}

function getMetrics() {
  const stage = stages[state.stageIndex] || stages[0];
  const totals = upgrades.reduce((acc, upgrade) => {
    const owned = state.upgrades[upgrade.id] || 0;
    const effect = owned * Math.pow(1.035, Math.max(0, owned - 1));
    acc.tapGain += upgrade.tap_gain * owned;
    acc.incomeRate += upgrade.income_gain * owned * Math.pow(1.04, owned);
    acc.bodReduction += upgrade.bod_reduction * effect;
    acc.tssReduction += upgrade.tss_reduction * effect;
    acc.codReduction += upgrade.cod_reduction * effect;
    acc.coliformReduction += upgrade.coliform_reduction * effect;
    acc.energyCost += upgrade.energy_cost * owned * Math.pow(1.03, owned);
    acc.energyRecovery += upgrade.energy_recovery * owned * Math.pow(1.04, owned);
    return acc;
  }, {
    tapGain: 1,
    incomeRate: 0.2,
    bodReduction: 0,
    tssReduction: 0,
    codReduction: 0,
    coliformReduction: 0,
    energyCost: 0,
    energyRecovery: 0
  });

  const bod = Math.max(2, stage.bod * Math.exp(-totals.bodReduction / 95));
  const tss = Math.max(2, stage.tss * Math.exp(-totals.tssReduction / 90));
  const cod = Math.max(10, stage.cod * Math.exp(-totals.codReduction / 105));
  const coliform = Math.max(100, stage.coliform * Math.exp(-totals.coliformReduction / 42));
  const pollutantScore = (
    clamp(LIMITS.bod / bod, 0, 1) +
    clamp(LIMITS.tss / tss, 0, 1) +
    clamp(LIMITS.cod / cod, 0, 1) +
    clamp(LIMITS.coliform / coliform, 0, 1)
  ) / 4;
  const quality = clamp(10 + pollutantScore * 90, 0, 100);
  const energyCost = Math.max(0, totals.energyCost - totals.energyRecovery);
  const incomeRate = totals.incomeRate * (0.7 + quality / 115);
  const tapValue = 0.75 + quality / 52;
  const netProfit = incomeRate - energyCost;
  const passiveWater = 0.35 + incomeRate * 0.7;

  return {
    ...totals,
    bod,
    tss,
    cod,
    coliform,
    quality,
    netProfit,
    incomeRate,
    energyCost,
    tapValue,
    passiveWater
  };
}

function getCompliance(metrics, stage = stages[state.stageIndex]) {
  const checks = {
    bod: {
      value: metrics.bod,
      target: LIMITS.bod,
      pass: metrics.bod <= LIMITS.bod,
      progress: clamp(LIMITS.bod / Math.max(metrics.bod, 0.001), 0, 1),
      badness: pollutantBadness(metrics.bod, LIMITS.bod)
    },
    tss: {
      value: metrics.tss,
      target: LIMITS.tss,
      pass: metrics.tss <= LIMITS.tss,
      progress: clamp(LIMITS.tss / Math.max(metrics.tss, 0.001), 0, 1),
      badness: pollutantBadness(metrics.tss, LIMITS.tss)
    },
    cod: {
      value: metrics.cod,
      target: LIMITS.cod,
      pass: metrics.cod <= LIMITS.cod,
      progress: clamp(LIMITS.cod / Math.max(metrics.cod, 0.001), 0, 1),
      badness: pollutantBadness(metrics.cod, LIMITS.cod)
    },
    coliform: {
      value: metrics.coliform,
      target: LIMITS.coliform,
      pass: metrics.coliform <= LIMITS.coliform,
      progress: clamp(LIMITS.coliform / Math.max(metrics.coliform, 0.001), 0, 1),
      badness: pollutantBadness(metrics.coliform, LIMITS.coliform)
    },
    energy: {
      value: metrics.energyCost,
      target: stage.target_energy,
      pass: metrics.energyCost <= stage.target_energy,
      progress: clamp(stage.target_energy / Math.max(metrics.energyCost, 0.001), 0, 1)
    }
  };

  checks.allPollutantsPass = checks.bod.pass && checks.tss.pass && checks.cod.pass && checks.coliform.pass;
  checks.allPass = checks.allPollutantsPass && checks.energy.pass;
  return checks;
}

function pollutantBadness(value, target) {
  if (value <= target) return 0;
  const ratio = value / target;
  return clamp(Math.log10(ratio) / 3, 0.08, 1);
}

function checkStageCompletion() {
  const stage = stages[state.stageIndex];
  if (!stage || state.victory) return;
  const metrics = getMetrics();
  const compliance = getCompliance(metrics, stage);
  const complete = compliance.allPass;

  if (complete) {
    state.victory = {
      stageIndex: state.stageIndex,
      quality: metrics.quality,
      energyCost: metrics.energyCost,
      reward: stage.reward_money
    };
    state.tipCooldown = 0;
    audio.goal();
    addCenterFloater(`Stage cleared +${formatMoney(stage.reward_money)}`);
    burstWindow(window.innerWidth / 2, window.innerHeight * 0.35, ["#7cf2a7", "#ffd166", "#65d9f2"], 54);
    renderVictory();
  }
}

function checkGoalMilestones(metrics) {
  const stage = stages[state.stageIndex];
  if (!stage || state.victory) return;
  const key = stage.id;
  const marks = state.goalMarks[key] || {};
  const compliance = getCompliance(metrics, stage);
  const goals = [
    { id: "bod", met: compliance.bod.pass, label: "BOD passes" },
    { id: "tss", met: compliance.tss.pass, label: "TSS passes" },
    { id: "cod", met: compliance.cod.pass, label: "COD passes" },
    { id: "coliform", met: compliance.coliform.pass, label: "Coliform passes" },
    { id: "energy", met: compliance.energy.pass, label: "Energy target reached" }
  ];
  let changed = false;

  goals.forEach((goal) => {
    if (goal.met && !marks[goal.id]) {
      marks[goal.id] = true;
      changed = true;
      audio.milestone();
      addCenterFloater(`${goal.label} reached`);
      burstWindow(window.innerWidth / 2, window.innerHeight * 0.42, ["#7cf2a7", "#65d9f2"], 18);
    }
  });

  if (changed) state.goalMarks[key] = marks;
}

function buyUpgrade(id) {
  if (state.victory) return;
  const upgrade = upgrades.find((item) => item.id === id);
  if (!upgrade) return;
  const cost = getUpgradeCost(upgrade);
  if (state.money < cost || !isUpgradeUnlocked(upgrade)) return;

  state.money -= cost;
  state.upgrades[id] = (state.upgrades[id] || 0) + 1;
  state.tipCooldown = 0;
  audio.upgrade();
  addCenterFloater(`${upgrade.name} +1`);
  const rect = els.upgradeList.getBoundingClientRect();
  burstWindow(rect.left + rect.width / 2, Math.max(110, rect.top + 40), ["#ffd166", "#7cf2a7"], 20);
  checkGoalMilestones(getMetrics());
  checkStageCompletion();
  render();
}

function getUpgradeCost(upgrade) {
  const owned = state.upgrades[upgrade.id] || 0;
  return Math.floor(upgrade.base_cost * Math.pow(upgrade.cost_mult, owned));
}

function isUpgradeUnlocked(upgrade) {
  const neededIndex = stages.findIndex((stage) => stage.id === upgrade.unlock_stage);
  return neededIndex <= state.stageIndex;
}

function render() {
  if (!stages.length) return;
  renderQueued = false;
  const stage = stages[state.stageIndex];
  const metrics = getMetrics();
  const bottleneck = getBottleneck(metrics);
  const compliance = getCompliance(metrics, stage);

  els.money.textContent = formatMoney(state.money);
  els.cleanWater.textContent = `${formatNumber(state.cleanWater)} m3`;
  els.energyFooter.textContent = `${formatMoney(metrics.energyCost)}/s`;
  els.stageKicker.textContent = stage.kicker;
  els.stageName.textContent = stage.name;
  els.stageGoal.textContent = `${stage.description} Win by passing all four pollutant dials while keeping energy under ${formatMoney(stage.target_energy)}/s.`;
  els.qualityScore.textContent = Math.floor(metrics.quality);
  els.qualityFill.style.width = `${metrics.quality}%`;
  els.bod.textContent = `${formatNumber(metrics.bod)} mg/L`;
  els.tss.textContent = `${formatNumber(metrics.tss)} mg/L`;
  els.cod.textContent = `${formatNumber(metrics.cod)} mg/L`;
  els.coliform.textContent = formatNumber(metrics.coliform);
  renderDial("bod", compliance.bod, "mg/L");
  renderDial("tss", compliance.tss, "mg/L");
  renderDial("cod", compliance.cod, "mg/L");
  renderDial("coliform", compliance.coliform, "CFU");
  els.tapGain.textContent = `+${formatNumber(metrics.tapGain)}`;
  els.incomeRate.textContent = `${formatMoney(metrics.incomeRate)}/s`;
  els.energyCost.textContent = `${formatMoney(metrics.energyCost)}/s`;
  els.profitRate.textContent = `${formatMoney(metrics.netProfit)}/s`;
  els.totalProcessed.textContent = `${formatNumber(state.totalProcessed)} m3`;
  els.gradeReadiness.textContent = `${Math.floor((clamp(metrics.quality / 95, 0, 1) * 100))}%`;
  els.powerLevel.textContent = `${formatNumber(metrics.tapGain)}x`;
  els.bottleneck.textContent = bottleneck.label;

  renderUpgrades(metrics);
  renderStages(metrics);
  renderTip(metrics, bottleneck);
  renderVictory();
  save();
}

function renderUpgrades(metrics) {
  els.upgradeList.innerHTML = "";
  upgrades.forEach((upgrade) => {
    const unlocked = isUpgradeUnlocked(upgrade);
    const cost = getUpgradeCost(upgrade);
    const owned = state.upgrades[upgrade.id] || 0;
    const button = document.createElement("button");
    button.className = `upgrade-card ${state.money >= cost && unlocked ? "affordable" : ""} ${upgrade.id === currentRecommendedUpgradeId ? "recommended" : ""}`;
    button.disabled = !unlocked || state.money < cost;
    button.type = "button";
    button.innerHTML = `
      <div class="upgrade-icon">${getIcon(upgrade.icon)}</div>
      <div>
        <h2>${upgrade.name}</h2>
        <p>${unlocked ? upgrade.description : `Unlocks at ${getStageName(upgrade.unlock_stage)}.`}</p>
        <div class="upgrade-effects">
          ${getUpgradeEffectTags(upgrade)}
        </div>
      </div>
      <div class="price">
        ${formatMoney(cost)}
        <span class="owned">Owned ${owned}</span>
      </div>
    `;
    button.addEventListener("click", () => buyUpgrade(upgrade.id));
    els.upgradeList.append(button);
  });
}

function renderDial(key, check, unit) {
  const dial = els[`${key}Dial`];
  const status = els[`${key}Status`];
  if (!dial || !status) return;

  dial.classList.toggle("pass", check.pass);
  dial.classList.toggle("fail", !check.pass);
  dial.style.setProperty("--dial", `${Math.floor(check.badness * 100)}%`);
  status.textContent = check.pass
    ? `Under ${formatTarget(check.target)} ${unit}`
    : `Over ${formatTarget(check.target)} ${unit}`;
}

function getIcon(name) {
  return ICONS[name] || ICONS.ai;
}

function getUpgradeEffectTags(upgrade) {
  const effects = [
    { label: "Tap", value: upgrade.tap_gain, suffix: " m3", positive: true },
    { label: "Income", value: upgrade.income_gain, suffix: "/s", prefix: "EGP ", positive: true },
    { label: "Energy cost", value: upgrade.energy_cost, suffix: "/s", prefix: "EGP ", positive: false, sign: "+" },
    { label: "Energy saved", value: upgrade.energy_recovery, suffix: "/s", prefix: "EGP ", positive: true, sign: "-" },
    { label: "BOD", value: upgrade.bod_reduction, suffix: " mg/L", positive: true, sign: "-" },
    { label: "TSS", value: upgrade.tss_reduction, suffix: " mg/L", positive: true, sign: "-" },
    { label: "COD", value: upgrade.cod_reduction, suffix: " mg/L", positive: true, sign: "-" },
    { label: "Coliform", value: upgrade.coliform_reduction, suffix: " CFU", positive: true, sign: "-" }
  ];

  return effects
    .filter((effect) => effect.value > 0)
    .map((effect) => {
      const sign = effect.sign || "+";
      const kind = effect.positive ? "good" : "cost";
      return `<span class="effect ${kind}">${effect.label} ${sign}${effect.prefix || ""}${formatEffect(effect.value)}${effect.suffix}</span>`;
    })
    .join("");
}

function renderStages(metrics) {
  els.stageList.innerHTML = "";
  const activeCompliance = getCompliance(metrics);
  stages.forEach((stage, index) => {
    const card = document.createElement("article");
    const done = index < state.stageIndex;
    const active = index === state.stageIndex;
    card.className = `stage-card ${done ? "done" : ""} ${index > state.stageIndex ? "locked" : ""}`;
    const progress = active
      ? Math.min(100, Math.floor(Math.min(
        activeCompliance.bod.progress,
        activeCompliance.tss.progress,
        activeCompliance.cod.progress,
        activeCompliance.coliform.progress,
        activeCompliance.energy.progress
      ) * 100))
      : done ? 100 : 0;
    card.innerHTML = `
      <div class="stage-icon">${done ? "OK" : index + 1}</div>
      <div>
        <h2>${stage.name}</h2>
        <p>${stage.description}</p>
      </div>
      <div class="price">${progress}%</div>
    `;
    els.stageList.append(card);
  });
}

function renderTip(metrics, bottleneck) {
  if (state.tipCooldown > 0) return;
  const stage = stages[state.stageIndex];
  const compliance = getCompliance(metrics, stage);
  const bestUpgrade = compliance.allPollutantsPass ? null : getRecommendedUpgrade(bottleneck);
  let tip = "";
  let recommendationId = "";

  if (bestUpgrade) {
    const cost = getUpgradeCost(bestUpgrade);
    tip = `${bottleneck.label} is holding quality back. Buy ${bestUpgrade.name} next (${formatMoney(cost)}) for the strongest push.`;
    recommendationId = bestUpgrade.id;
  } else if (!compliance.energy.pass) {
    tip = "The water is clean, but energy cost is too high. Buy Sludge Digester or Solar Field to cut the bill.";
    recommendationId = "energy";
  } else {
    tip = "All pass checks are green. The plant is ready to clear.";
    recommendationId = "scale";
  }

  els.aiTip.textContent = tip;
  currentRecommendedUpgradeId = bestUpgrade ? bestUpgrade.id : "";
  if (state.lastRecommendationId && state.lastRecommendationId !== recommendationId) {
    audio.tip();
    const rect = els.aiTip.getBoundingClientRect();
    burstWindow(rect.left + 24, rect.top + rect.height / 2, ["#65d9f2", "#ffd166"], 12);
  }
  state.lastRecommendationId = recommendationId;
  state.tipCooldown = 4;
}

function renderVictory() {
  if (!state.victory) {
    els.victoryModal.classList.remove("active");
    els.victoryModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("victory-open");
    return;
  }

  const stage = stages[state.victory.stageIndex];
  const isFinal = state.victory.stageIndex >= stages.length - 1;
  els.victoryModal.classList.add("active");
  els.victoryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("victory-open");
  els.victoryKicker.textContent = isFinal ? "Run complete" : `${stage.kicker} cleared`;
  els.victoryTitle.textContent = isFinal ? "National treatment target reached" : `${stage.name} optimized`;
  els.victoryText.textContent = isFinal
    ? "You reached the full treatment target. The next run starts from a struggling plant again."
    : "Quality goals reached. The next plant starts with dirty water and fresh upgrade decisions.";
  els.victoryQuality.textContent = Math.floor(state.victory.quality);
  els.victoryEnergy.textContent = `${formatMoney(state.victory.energyCost)}/s`;
  els.victoryReward.textContent = formatMoney(state.victory.reward);
  els.continueBtn.textContent = isFinal ? "Start New Run" : "Next Plant";
}

function continueFromVictory() {
  if (!state.victory) return;
  const reward = state.victory.reward;
  const finishedIndex = state.victory.stageIndex;
  const finalStage = finishedIndex >= stages.length - 1;

  if (finalStage) {
    Object.assign(state, {
      money: 0,
      cleanWater: 0,
      totalProcessed: 0,
      stageIndex: 0,
      upgrades: {},
      lastTick: Date.now(),
      tipCooldown: 0,
      victory: null,
      lastRecommendationId: "",
      lastMoneyFxAt: 0,
      goalMarks: {}
    });
  } else {
    Object.assign(state, {
      money: reward,
      cleanWater: 0,
      stageIndex: finishedIndex + 1,
      upgrades: {},
      lastTick: Date.now(),
      tipCooldown: 0,
      victory: null,
      lastRecommendationId: "",
      lastMoneyFxAt: 0,
      goalMarks: {}
    });
  }

  audio.upgrade();
  burstWindow(window.innerWidth / 2, window.innerHeight / 2, ["#65d9f2", "#7cf2a7"], 34);
  renderVictory();
  render();
}

function getRecommendedUpgrade(bottleneck) {
  const field = `${bottleneck.key}_reduction`;
  return upgrades
    .filter((upgrade) => isUpgradeUnlocked(upgrade) && upgrade[field] > 0)
    .sort((a, b) => {
      const scoreA = a[field] / Math.max(1, getUpgradeCost(a));
      const scoreB = b[field] / Math.max(1, getUpgradeCost(b));
      return scoreB - scoreA;
    })[0];
}

function getBottleneck(metrics) {
  const ratios = [
    { key: "bod", label: "BOD", ratio: metrics.bod / LIMITS.bod },
    { key: "tss", label: "TSS", ratio: metrics.tss / LIMITS.tss },
    { key: "cod", label: "COD", ratio: metrics.cod / LIMITS.cod },
    { key: "coliform", label: "Coliform", ratio: metrics.coliform / LIMITS.coliform }
  ];
  return ratios.sort((a, b) => b.ratio - a.ratio)[0];
}

function getStageName(id) {
  return stages.find((stage) => stage.id === id)?.name || "later";
}

function addFloater(event, text) {
  const rect = els.floatLayer.getBoundingClientRect();
  const x = event ? event.clientX - rect.left : rect.width / 2;
  const y = event ? event.clientY - rect.top : rect.height / 2;
  const floater = document.createElement("div");
  floater.className = "floater";
  floater.style.setProperty("--x", `${x}px`);
  floater.style.setProperty("--y", `${y}px`);
  floater.textContent = text;
  els.floatLayer.append(floater);
  setTimeout(() => floater.remove(), 820);
}

function addCenterFloater(text) {
  addFloater(null, text);
}

function burstAtEvent(event, colors, count) {
  burstWindow(event.clientX, event.clientY, colors, count);
}

function burstWindow(x, y, colors = ["#7cf2a7"], count = 14) {
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 28 + Math.random() * 92;
    const size = 4 + Math.random() * 7;
    particle.className = "particle";
    particle.style.setProperty("--x", `${x}px`);
    particle.style.setProperty("--y", `${y}px`);
    particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--size", `${size}px`);
    particle.style.setProperty("--life", `${520 + Math.random() * 420}ms`);
    particle.style.setProperty("--color", colors[index % colors.length]);
    els.effectsLayer.append(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}

function moneyPop(x, y, text) {
  const pop = document.createElement("span");
  pop.className = "money-pop";
  pop.style.setProperty("--x", `${x}px`);
  pop.style.setProperty("--y", `${y}px`);
  pop.textContent = text;
  els.effectsLayer.append(pop);
  setTimeout(() => pop.remove(), 950);
}

function queueRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(render);
}

function save() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    money: state.money,
    cleanWater: state.cleanWater,
    totalProcessed: state.totalProcessed,
    stageIndex: state.stageIndex,
    upgrades: state.upgrades,
    victory: state.victory,
    lastRecommendationId: state.lastRecommendationId,
    goalMarks: state.goalMarks,
    lastTick: Date.now()
  }));
}

function loadSave() {
  const saved = localStorage.getItem(SAVE_KEY);
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    Object.assign(state, {
      money: Number(data.money) || 0,
      cleanWater: Number(data.cleanWater) || 0,
      totalProcessed: Number(data.totalProcessed) || 0,
      stageIndex: Math.min(Number(data.stageIndex) || 0, stages.length - 1),
      upgrades: data.upgrades || {},
      victory: data.victory || null,
      lastRecommendationId: data.lastRecommendationId || "",
      goalMarks: data.goalMarks || {},
      lastTick: Date.now()
    });
  } catch {
    localStorage.removeItem(SAVE_KEY);
  }
}

function formatMoney(value) {
  return `EGP ${formatNumber(value)}`;
}

function formatNumber(value) {
  const number = Number(value) || 0;
  if (number >= 1_000_000_000) return `${(number / 1_000_000_000).toFixed(2)}B`;
  if (number >= 1_000_000) return `${(number / 1_000_000).toFixed(2)}M`;
  if (number >= 10_000) return `${(number / 1_000).toFixed(1)}K`;
  if (number >= 100) return Math.floor(number).toLocaleString();
  if (number >= 10) return number.toFixed(1);
  return number.toFixed(2);
}

function formatEffect(value) {
  const number = Number(value) || 0;
  if (number >= 10) return number.toFixed(0);
  if (number >= 1) return number.toFixed(1).replace(".0", "");
  return number.toFixed(2);
}

function formatTarget(value) {
  const number = Number(value) || 0;
  if (number >= 1000) return formatNumber(number);
  return number.toFixed(0);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

boot();
