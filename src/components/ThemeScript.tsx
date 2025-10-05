export default function ThemeScript() {
  const js = `
    (function () {
      try {
        var stored = localStorage.getItem('theme'); // 'light' | 'dark' | null
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = stored ? stored === 'dark' : prefersDark;
        document.documentElement.classList.toggle('dark', isDark);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
