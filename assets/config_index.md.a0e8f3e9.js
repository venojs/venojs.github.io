import{_ as n,c as s,o as a,a as e}from"./app.e1cf623f.js";const v='{"title":"\u914D\u7F6E\u6587\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6\u89E3\u6790","slug":"\u914D\u7F6E\u6587\u4EF6\u89E3\u6790"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF","slug":"\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF"},{"level":2,"title":"\u914D\u7F6E\u9009\u9879","slug":"\u914D\u7F6E\u9009\u9879"},{"level":3,"title":"vite","slug":"vite"},{"level":3,"title":"router","slug":"router"},{"level":3,"title":"mock","slug":"mock"},{"level":3,"title":"vConsole","slug":"vconsole"},{"level":3,"title":"autoImport","slug":"autoimport"},{"level":3,"title":"analyzer","slug":"analyzer"},{"level":3,"title":"inspect","slug":"inspect"},{"level":3,"title":"legacy","slug":"legacy"}],"relativePath":"config/index.md","lastUpdated":1643270196635}',t={},o=e(`<h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u548Cvite\u4E00\u6837, \u914D\u7F6E\u6587\u4EF6\u4E0D\u662F\u5FC5\u987B\u7684, \u4F46\u6B63\u5F0F\u7684\u9879\u76EE\u5F80\u5F80\u4F1A\u6709\u6BD4\u8F83\u591A\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E</p><h3 id="\u914D\u7F6E\u6587\u4EF6\u89E3\u6790" tabindex="-1">\u914D\u7F6E\u6587\u4EF6\u89E3\u6790 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u89E3\u6790" aria-hidden="true">#</a></h3><p>Veno\u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6<code>veno.config.js</code>\u6216\u8005<code>veno.config.ts</code>\u91CC\u9762\u7684\u5185\u5BB9</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u4F7F\u7528<code>defineConfig</code>\u6765\u589E\u52A0\u667A\u80FD\u63D0\u793A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@veno/kit&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><p>Veno\u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6.env\u6587\u4EF6\u6302\u8F7D\u5230process.<wbr>env(\u5C31\u50CF<a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">Vue Cli</a>\u505A\u7684\u90A3\u6837)</p><p>\u5982\u679Cprocess.<wbr>env\u4E0AMODE COMMAND NODE_ENV\u8FD9\u4E09\u4E2A\u7684\u503C\u90FD\u4E0D\u5B58\u5728, \u5219\u4F1A\u4E3A\u4ED6\u4EEC\u8D4B\u503C, \u5982\u679C\u4ED6\u4EEC\u5DF2\u5B58\u5728, \u5219\u53EF\u4EE5\u52A0<code>VENO_</code>\u524D\u7F00\u4EE3\u66FF</p><p>\u6BD4\u5982\u6709.env.local\u6587\u4EF6\u5982\u4E0B, \u5E76\u8FD0\u884Cveno dev</p><div class="language-"><pre><code>FOO=bar
VITE_SOME_KEY=123
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// veno.config.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FOO</span><span class="token punctuation">)</span> <span class="token comment">// bar</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_SOME_KEY</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span><span class="token punctuation">)</span> <span class="token comment">// development</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VENO_MODE</span><span class="token punctuation">)</span> <span class="token comment">// development</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">COMMAND</span><span class="token punctuation">)</span> <span class="token comment">// serve</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VENO_COMMAND</span><span class="token punctuation">)</span> <span class="token comment">// serve</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span> <span class="token comment">// development</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VENO_NODE_ENV</span><span class="token punctuation">)</span> <span class="token comment">// development</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>process.<wbr>env\u4E0A\u7684\u53D8\u91CF\u4EC5\u9650\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F7F\u7528</li><li>\u53EA\u6709\u5DF2<code>VITE_</code>\u5F00\u5934\u53D8\u91CF\u624D\u80FD\u5728\u5BA2\u6237\u7AEF\u4EE3\u7801\u4E2D\u4F7F\u7528, \u4F7F\u7528\u65B9\u5F0F<a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-variables" target="_blank" rel="noopener noreferrer">\u89C1vite\u5B98\u7F51</a></li></ul></div><h2 id="\u914D\u7F6E\u9009\u9879" tabindex="-1">\u914D\u7F6E\u9009\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a></h2><h3 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p>vite\u9009\u9879\u7684\u914D\u7F6E\u4E0Evite.config\u7684\u914D\u7F6E\u4E00\u81F4</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>vite\u9009\u9879\u91CC\u914D\u7F6E\u63D2\u4EF6\u4F1A\u4E0EVeno\u5185\u7F6E\u7684\u63D2\u4EF6\u5408\u5E76</li></ul></div><h3 id="router" tabindex="-1">router <a class="header-anchor" href="#router" aria-hidden="true">#</a></h3><p>\u5185\u7F6E\u7684router\u63D2\u4EF6</p><ul><li>\u7C7B\u578B\uFF1A boolean | RouterPluginOptions</li><li>\u9ED8\u8BA4\uFF1A true</li></ul><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouterPluginOptions</span> <span class="token punctuation">{</span>
    mpa<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u662Fmpa\u6A21\u5F0F</span>
    base<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u8DEF\u7531\u524D\u7F00 \u9ED8\u8BA4\u503C &quot;/&quot;</span>
    pagesDir<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u8DEF\u7531\u6587\u4EF6\u5939 \u9ED8\u8BA4\u503C src/pages</span>
    filename<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u626B\u63CF\u6307\u5B9A\u6587\u4EF6\u540D\u6765\u751F\u6210\u8DEF\u7531</span>
    layoutFilename<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C&#39;layout.vue&#39;</span>
    extensions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C [&#39;vue&#39;]</span>
    mpaConfig<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> MpaConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MpaConfig</span> <span class="token punctuation">{</span>
    alias<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="mock" tabindex="-1">mock <a class="header-anchor" href="#mock" aria-hidden="true">#</a></h3><p>\u662F\u5426\u5F00\u542F\u672C\u5730mock, mock\u4EC5\u5728serve\u9636\u6BB5\u751F\u6548</p><ul><li>\u7C7B\u578B\uFF1A boolean</li><li>\u9ED8\u8BA4\uFF1A false</li></ul><h3 id="vconsole" tabindex="-1">vConsole <a class="header-anchor" href="#vconsole" aria-hidden="true">#</a></h3><p>\u662F\u5426\u5F00\u542FvConsole</p><ul><li>\u7C7B\u578B\uFF1A boolean | VConsolePluginOptions</li><li>\u9ED8\u8BA4\uFF1A false</li></ul><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">VConsolePluginOptions</span> <span class="token punctuation">{</span>
    enable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    src<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    theme<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="autoimport" tabindex="-1">autoImport <a class="header-anchor" href="#autoimport" aria-hidden="true">#</a></h3><p>\u662F\u5426\u5F00\u542Funplugin-auto-import</p><ul><li>\u7C7B\u578B\uFF1A boolean | Record&lt;string, any&gt;</li><li>\u9ED8\u8BA4\uFF1A true</li></ul><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>vue2\u9ED8\u8BA4\u5BFC\u5165\u4E86vue-demi, vue3\u9ED8\u8BA4\u5BFC\u5165\u4E86vue</li><li>\u5982\u679C\u8981\u81EA\u5B9A\u4E49\u5BFC\u5165\u53C2\u8003<a href="https://github.com/antfu/unplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import\u6587\u6863</a></li></ul></div><h3 id="analyzer" tabindex="-1">analyzer <a class="header-anchor" href="#analyzer" aria-hidden="true">#</a></h3><p>\u662F\u5426\u5F00\u542F\u6253\u5305\u5206\u6790</p><ul><li>\u7C7B\u578B\uFF1A boolean</li><li>\u9ED8\u8BA4\uFF1A false</li></ul><h3 id="inspect" tabindex="-1">inspect <a class="header-anchor" href="#inspect" aria-hidden="true">#</a></h3><p>\u662F\u5426\u5F00\u542Fvite-plugin-inspect, \u4EC5\u5728serve\u9636\u6BB5\u751F\u6548</p><ul><li>\u7C7B\u578B\uFF1A boolean</li><li>\u9ED8\u8BA4\uFF1A false</li></ul><h3 id="legacy" tabindex="-1">legacy <a class="header-anchor" href="#legacy" aria-hidden="true">#</a></h3><p>\u6765\u81EA<a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a></p><ul><li>\u7C7B\u578B\uFF1A boolean | string | string[] | Record&lt;string, string&gt; | LegacyPluginOPtions</li><li>\u9ED8\u8BA4\uFF1A false</li></ul>`,42),p=[o];function l(c,i,r,u,k,d){return a(),s("div",null,p)}var h=n(t,[["render",l]]);export{v as __pageData,h as default};