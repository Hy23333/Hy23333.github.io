const translations = {
  en: {
    skip: "Skip to content",
    nav: { research: "Research", publications: "Publications", experience: "Experience", talks: "Talks", cv: "CV", menu: "Menu" },
    hero: {
      eyebrow: "Hello, I’m",
      name: "Yi He",
      nativeName: "何怡",
      status: "I am currently a PhD student in AI for Dynamical Systems at University College London, expecting to graduate in 2027–2028. I also work as a research engineer in UCL’s Dynamic Systems Lab.",
      intro: "My research focuses on world models and multivariate / multimodal time-series forecasting, with broader interests in efficient multimodal representation, 3D state reconstruction, learning dynamics, and temporally consistent video generation.",
      work: "Explore my work",
      photo: "Portrait reserved",
      role: "Machine Learning PhD · Research Engineer"
    },
    themes: { worldModels: "World models", multivariate: "Multivariate time series", multimodal: "Multimodal representation", ai4science: "AI for science", dynamics: "Learning dynamics", reconstruction: "High-dimensional state reconstruction" },
    research: {
      eyebrow: "Selected systems",
      title: "Research that moves between <em>representation</em> and <em>reality.</em>",
      project1: { tag: "Multimodal benchmark", desc: "A benchmark that bridges multimodal fission through multi-polarimetric modality decomposition, with a public dataset and project ecosystem for the AI4Science community." },
      project2: { tag: "Time-series prediction", desc: "Transformers for large-scale multivariate spatiotemporal prediction, supported by high-resolution turbulent channel and Kolmogorov flow benchmarks." },
      project3: { tag: "Industrial AI", title: "Intelligent European Steel-Making Systems", desc: "An end-to-end predictive pipeline for process-gas management—from forecasting and storage to real-time front-end reporting.", outcome: "Journal article · CiteScore 15.8" },
      stats: { data: "research data generated & maintained", lead: "ICML / ICLR papers led", talks: "invited and conference talks", phd: "expected PhD graduation" }
    },
    common: { project: "Project", dataset: "Dataset" },
    publications: { eyebrow: "Research output", title: "Publications", highlighted: "Highlighted", all: "Full list", coauthor: "* Equal contribution", preprint: "Preprint" },
    experience: {
      eyebrow: "Trajectory", title: "From physical systems to <em>learning systems.</em>", research: "Research & industry", education: "Education",
      ucl: { date: "2024 — Present", role: "Researcher · Dynamic Systems Lab, UCL", desc: "Leading AI4Science datasets and methodology benchmarks; publishing and maintaining PFNN, Chaos Meets Attention, and MMPD-Bench." },
      swerim: { role: "Research Assistant · Swerim AB", desc: "Built a <strong class=\"trajectory-highlight\">(multivariate) AI predictive agent</strong> and full data pipeline for process-gas management in steel manufacturing." },
      ms: { role: "Software Engineer Track · Morgan Stanley UK", desc: "Developed recommender systems, account databases, web applications, and backend programs in an agile workflow." },
      msc: { role: "MSc Research · UCL AI Centre", desc: "Designed a graphical model for <strong class=\"trajectory-highlight\">policy maximum-entropy variational reinforcement learning (RL)</strong>, advised by Prof. David Barber." },
      glasgow: { role: "Summer Research · University of Glasgow", desc: "Explored signal imaging for human-gesture identification using SPFT and deep-learning classification." }
    },
    education: {
      phd: "PhD · AI for Dynamical Systems", phdAward: "Dean’s Prize Scholarship",
      msc: "MSc · Data Science & Machine Learning", mscAward: "Distinction · Dean’s List",
      beng: "BEng (Hons) · Electronics & Electrical Engineering", bengAward: "Academic Excellence Scholarship"
    },
    talks: {
      eyebrow: "Speaking", title: "Talks across research and <em>industry.</em>",
      jlr: { title: "AI Technology in Linearizing Nonlinear Systems" },
      oxford: { title: "Foundation Models for AI for Science & Polarization Analysis" },
      cege: { title: "Chaos and Nonlinear Dynamics — Three-Minute Paper" },
      isi: { title: "AI for Energy-Intensive Digital Twins" },
      swerim: { title: "Intelligent Digital Twins for Process Engineering" },
      iceee: { title: "AI-Assisted Energy-Rich Gas Management" }
    },
    beyond: { eyebrow: "Beyond the lab", title: "Research engineer, builder, reviewer—and curious human.", desc: "I volunteer on an LLM + RAG text-to-icon tool for special education, review for ICML, NeurIPS and ICLR, build LEGO, and chase snow across six mountains.", languages: "Languages" },
    language: { mandarin: "Mandarin", english: "English", cantonese: "Cantonese", japanese: "Japanese", native: "Native", professional: "Professional", basic: "Basic" },
    footer: { eyebrow: "Let’s make complex systems legible.", title: "Interested in world models, dynamics, or AI for science?", download: "Download CV" }
  },
  zh: {
    skip: "跳到主要内容",
    nav: { research: "研究", publications: "论文", experience: "经历", talks: "报告", cv: "简历", menu: "菜单" },
    hero: {
      eyebrow: "你好，我是",
      name: "何怡",
      nativeName: "Yi He",
      status: "我目前是伦敦大学学院（UCL）动态系统人工智能方向博士研究生，预计于 2027–2028 年毕业，同时担任 UCL 动态系统实验室研究工程师。",
      intro: "我的研究聚焦世界模型以及多变量 / 多模态时序预测，并进一步探索高效多模态表征、三维状态重建、动力学学习与时空一致的视频生成。",
      work: "查看研究工作",
      photo: "头像预留区",
      role: "机器学习博士 · 研究工程师"
    },
    themes: { worldModels: "世界模型", multivariate: "多变量时序", multimodal: "多模态表征", ai4science: "科学智能", dynamics: "动力学学习", reconstruction: "高维状态重建" },
    research: {
      eyebrow: "代表性研究系统",
      title: "在<em>表征</em>与<em>真实世界</em>之间穿行的研究。",
      project1: { tag: "多模态基准", desc: "通过多偏振模态分解连接多模态裂变，为 AI4Science 社区提供公开数据集与完整项目生态。" },
      project2: { tag: "时序预测", desc: "面向大规模多变量时空预测的 Transformer 方法，并构建高分辨率湍流通道流与 Kolmogorov 流基准。" },
      project3: { tag: "工业智能", title: "智能欧洲特种钢铁制造系统", desc: "面向特殊钢铁制造过程气体管理的端到端预测管线，覆盖预测、存储与实时报告。", outcome: "期刊论文 · CiteScore 15.8" },
      stats: { data: "生成与维护的科研数据", lead: "主导 ICML / ICLR 论文", talks: "受邀及会议报告", phd: "预计博士毕业" }
    },
    common: { project: "项目主页", dataset: "数据集" },
    publications: { eyebrow: "研究成果", title: "论文发表", highlighted: "代表作", all: "完整列表", coauthor: "* 共同一作", preprint: "预印本" },
    experience: {
      eyebrow: "研究轨迹", title: "从物理系统走向<em>学习系统。</em>", research: "科研与产业经历", education: "教育经历",
      ucl: { date: "2024 — 至今", role: "研究员 · UCL 动态系统实验室", desc: "主导 AI4Science 数据集与方法基准，发布并维护 PFNN、Chaos Meets Attention 和 MMPD-Bench。" },
      swerim: { role: "研究助理 · 瑞典金属研究院 Swerim", desc: "为钢铁制造过程气体管理构建<strong class=\"trajectory-highlight\">（多变量）AI 预测智能体</strong>与完整数据管线。" },
      ms: { role: "软件工程师方向 · 摩根士丹利英国", desc: "在敏捷开发流程中完成推荐系统、账户数据库、Web 应用与后端程序。" },
      msc: { role: "硕士研究 · UCL 人工智能中心", desc: "在 David Barber 教授指导下，为<strong class=\"trajectory-highlight\">策略最大熵变分强化学习（RL）</strong>设计图模型。" },
      glasgow: { role: "暑期研究 · 格拉斯哥大学", desc: "使用 SPFT 信号成像与深度学习分类研究人体手势识别。" }
    },
    education: {
      phd: "博士 · 动态系统人工智能", phdAward: "院长奖学金",
      msc: "硕士 · 数据科学与机器学习", mscAward: "优秀学位 · 院长名单",
      beng: "荣誉学士 · 电子与电气工程", bengAward: "学术卓越奖学金"
    },
    talks: {
      eyebrow: "学术报告", title: "连接研究与<em>产业现场</em>的分享。",
      jlr: { title: "线性化非线性系统的人工智能技术" },
      oxford: { title: "AI for Science 基础模型与偏振分析" },
      cege: { title: "混沌与非线性动力学三分钟论文报告" },
      isi: { title: "面向高能耗数字孪生的人工智能" },
      swerim: { title: "面向过程工程的智能数字孪生" },
      iceee: { title: "人工智能辅助的高能气体管理" }
    },
    beyond: { eyebrow: "实验室之外", title: "研究工程师、开发者、审稿人，也是始终好奇的人。", desc: "我志愿开发面向特殊教育的 LLM + RAG 文本转图标工具，担任 ICML、NeurIPS 与 ICLR 审稿人，也热爱乐高与滑雪，足迹遍及六座雪山。", languages: "语言" },
    language: { mandarin: "普通话", english: "英语", cantonese: "粤语", japanese: "日语", native: "母语", professional: "专业工作水平", basic: "基础" },
    footer: { eyebrow: "让复杂系统变得可理解。", title: "对世界模型、动力学或 AI for Science 感兴趣？", download: "下载简历" }
  }
};

function getTranslation(language, path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[language]);
}

function setLanguage(language) {
  const activeLanguage = translations[language] ? language : "en";
  document.documentElement.dataset.lang = activeLanguage;
  document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = getTranslation(activeLanguage, element.dataset.i18n);
    if (translation === undefined) return;
    if (translation.includes("<em>") || translation.includes("<strong")) element.innerHTML = translation;
    else element.textContent = translation;
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.title = activeLanguage === "zh" ? "何怡 — 动态系统人工智能" : "Yi He — AI for Dynamical Systems";
  localStorage.setItem("yi-he-language", activeLanguage);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const publicationButtons = document.querySelectorAll("[data-filter]");
const publications = document.querySelectorAll(".publication-item");

publicationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    publicationButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    publications.forEach((publication) => {
      publication.classList.toggle("is-filtered", filter === "featured" && publication.dataset.featured !== "true");
    });
  });
});

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.96) element.classList.add("is-visible");
    else observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const savedLanguage = localStorage.getItem("yi-he-language");
const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
setLanguage(savedLanguage || preferredLanguage);
document.querySelector('[data-filter="all"]').click();
document.querySelector("#current-year").textContent = new Date().getFullYear();
