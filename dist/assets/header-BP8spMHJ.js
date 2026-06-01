(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{connectedCallback(){let e=window.location.pathname,t=this.hasAttribute(`is-admin`),n=t=>t===`/`&&(e===`/`||e===`/index.html`)||t!==`/`&&e.includes(t)?`active`:``;if(t){this.innerHTML=`
        <header class="admin-topbar" style="position: sticky; width: 100%; top: 0; z-index: 1000; padding: 15px 0; background: rgba(198, 21, 27, 0.95); backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0,0,0,0.2); font-family: 'Outfit', 'Hind Madurai', sans-serif;">
          <div class="container admin-topbar-container" style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div class="logo-text" style="color: white; font-weight: 900; font-size: 1.5rem; letter-spacing: 2px; display: flex; align-items: center; gap: 10px;">
              <span style="background: var(--poster-yellow, #FECE08); color: var(--poster-red, #c6151b); padding: 2px 8px; border-radius: 4px; font-size: 0.9rem;">IT CELL</span>
              TVK ADMIN
            </div>
            <nav class="nav-links admin-topbar-nav" style="display: flex; gap: 20px; align-items: center;">
              <a href="/" style="color: white; text-decoration: none; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; transition: color 0.2s;">Public Site</a>
              <button id="logout-btn" style="display: none; background: var(--poster-yellow, #FECE08); border: none; color: var(--black, #000); font-weight: 800; text-transform: uppercase; font-size: 0.75rem; padding: 6px 15px; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">
                Logout
              </button>
            </nav>
          </div>
        </header>
      `;return}this.innerHTML=`
      <style>
        .tvk-main-header {
          position: sticky;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 15px 0;
          background: rgba(198, 21, 27, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          font-family: 'Outfit', 'Hind Madurai', sans-serif;
        }
        .tvk-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .tvk-logo-text {
          color: white;
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: 2px;
          text-decoration: none;
        }
        .tvk-nav {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .tvk-nav a {
          color: white;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.75rem;
          transition: color 0.2s;
        }
        .tvk-nav a:hover {
          color: var(--poster-yellow, #FECE08);
        }
        .tvk-nav a.active {
          color: var(--poster-yellow, #FECE08);
          border: 1px solid var(--poster-yellow, #FECE08);
          padding: 5px 10px;
          border-radius: 5px;
        }
        .tvk-nav a.admin-link {
          color: var(--poster-yellow, #FECE08);
          border-left: 1px solid rgba(255,255,255,0.3);
          padding-left: 15px;
        }
        
        /* Basic mobile handling based on existing layout */
        @media (max-width: 768px) {
          .tvk-nav {
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          .tvk-logo-text {
            font-size: 1.2rem;
          }
        }
      </style>
      <header class="tvk-main-header">
        <div class="tvk-header-inner">
          <a href="/" class="tvk-logo-text">TVK DIGITAL</a>
          <nav class="tvk-nav">
            <a href="/" class="${n(`/`)}">Home</a>
            <a href="/mla.html" class="${n(`/mla.html`)}">MLA</a>
            <a href="/developments.html" class="${n(`/developments.html`)}">Developments</a>
            <a href="/services.html" class="${n(`/services.html`)}">Services</a>
            <a href="/ideology.html" class="${n(`/ideology.html`)}">Ideology</a>
            <a href="/admin.html" class="admin-link ${n(`/admin.html`)}">Admin Login</a>
          </nav>
        </div>
      </header>
    `}};customElements.define(`tvk-header`,e);