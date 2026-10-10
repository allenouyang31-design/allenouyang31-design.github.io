'use strict';
(() => {
  const textNodes = [...document.querySelectorAll('[data-zh]')].map(node => ({node, en: node.textContent, zh: node.dataset.zh}));
  const altNodes = [...document.querySelectorAll('[data-alt-zh]')].map(node => ({node, en: node.alt, zh: node.dataset.altZh}));
  const labelNodes = [...document.querySelectorAll('[data-label-zh]')].map(node => ({node, en: node.getAttribute('aria-label'), zh: node.dataset.labelZh}));
  const setLanguage = language => {
    const zh = language === 'zh';
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
    document.title = zh ? '欧阳嘉隆 — 战斗与关卡设计作品集' : 'Jialong Ouyang — Combat & Encounter Design';
    for (const item of textNodes) item.node.textContent = zh ? item.zh : item.en;
    for (const item of altNodes) item.node.alt = zh ? item.zh : item.en;
    for (const item of labelNodes) item.node.setAttribute('aria-label', zh ? item.zh : item.en);
    for (const button of document.querySelectorAll('[data-language]')) button.setAttribute('aria-pressed', String(button.dataset.language === language));
  };
  for (const button of document.querySelectorAll('[data-language]')) button.addEventListener('click', () => setLanguage(button.dataset.language));
  // English is the default on every load. No cookie, storage, analytics or request.
})();
