<template>
  <footer class="eclipse-footer">
    <div class="eclipse-footer-container">
      <div class="eclipse-footer-top">
        <a href="https://www.eclipse.org" target="_blank" rel="noopener" class="eclipse-footer-logo-link">
          <img class="eclipse-footer-logo logo-light" src="/eclipse-foundation-grey-orange.svg" alt="Eclipse Foundation" />
          <img class="eclipse-footer-logo logo-dark" src="/eclipse-foundation-white-orange.svg" alt="Eclipse Foundation" />
        </a>
        <nav class="eclipse-footer-links" aria-label="Eclipse Foundation legal links">
          <a href="https://www.eclipse.org" target="_blank" rel="noopener">Eclipse Foundation</a>
          <a href="https://www.eclipse.org/legal/privacy.php" target="_blank" rel="noopener">Privacy Policy</a>
          <a href="https://www.eclipse.org/legal/termsofuse.php" target="_blank" rel="noopener">Terms of Use</a>
          <a href="https://www.eclipse.org/legal/compliance/" target="_blank" rel="noopener">Compliance</a>
          <a href="https://www.eclipse.org/legal" target="_blank" rel="noopener">Legal Resources</a>
        </nav>
      </div>
      <div class="eclipse-footer-bottom">
        <p>
          Copyright © {{ new Date().getFullYear() }} Contributors to the Eclipse Foundation.
          Released under the Eclipse Public License 2.0.
        </p>
        <p class="eclipse-footer-trademark">
          Eclipse Daanse™ and the Eclipse Daanse project logo are trademarks of the Eclipse Foundation.
          Eclipse® and the Eclipse logo are registered trademarks of the Eclipse Foundation.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.eclipse-footer {
  border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg);
  padding: 32px 24px;
}

.eclipse-footer-container {
  margin: 0 auto;
  max-width: 1152px;
}

.eclipse-footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 16px;
}

.eclipse-footer-logo {
  height: 42px;
  width: auto;
}

.logo-dark {
  display: none;
}

:global(.dark) .logo-light {
  display: none;
}

:global(.dark) .logo-dark {
  display: block;
}

.eclipse-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.eclipse-footer-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.eclipse-footer-links a:hover {
  color: var(--vp-c-brand-1);
}

.eclipse-footer-bottom {
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

.eclipse-footer-bottom p {
  margin: 0;
}

.eclipse-footer-trademark {
  margin-top: 4px;
}

@media (max-width: 640px) {
  .eclipse-footer-top {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
