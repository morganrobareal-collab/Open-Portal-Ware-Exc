import { useState } from "react";
import {
  IconShield,
  IconBrowser,
  IconArchive,
  IconMedia,
  IconTools,
  IconOffice,
  IconImage,
  IconNetwork,
  IconFolder,
  IconHome,
  IconInfo,
  IconAdd,
  IconForum,
  IconSearch,
  IconStar,
  IconDownload,
  IconStats,
  IconWarning,
  IconTip,
  IconAnnounce,
  IconLegend,
  IconComputer,
} from "./XPIcons";
import { HomeModal, AboutModal, AddProgramModal, ForumModal } from "./Modals";

const categoryIcons: Record<number, React.ReactNode> = {
  1: <IconShield size={16} />,
  2: <IconBrowser size={16} />,
  3: <IconArchive size={16} />,
  4: <IconMedia size={16} />,
  5: <IconTools size={16} />,
  6: <IconOffice size={16} />,
  7: <IconImage size={16} />,
  8: <IconNetwork size={16} />,
};

const categories = [
  {
    id: 1,
    title: "Антивирусы и безопасность",
    description: "Защита компьютера от вирусов, троянов и шпионских программ",
    sites: [
      { name: "Kaspersky Free", url: "https://www.kaspersky.ru/free-antivirus", desc: "Бесплатный антивирус от Лаборатории Касперского", size: "~200 MB", os: "Windows 7/8/10/11", rating: 5, tag: "Бесплатно" },
      { name: "Malwarebytes", url: "https://www.malwarebytes.com/", desc: "Удаление вредоносного ПО и рекламных программ", size: "~70 MB", os: "Windows / macOS", rating: 5, tag: "Бесплатно" },
      { name: "Avast Free Antivirus", url: "https://www.avast.com/ru-ru/free-antivirus-download", desc: "Популярный бесплатный антивирус с большой базой", size: "~230 MB", os: "Windows 7/8/10/11", rating: 4, tag: "Бесплатно" },
      { name: "AdwCleaner", url: "https://www.malwarebytes.com/adwcleaner", desc: "Очистка браузеров от рекламного ПО и угонщиков", size: "~8 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Dr.Web CureIt!", url: "https://free.drweb.ru/cureit/", desc: "Лечащая утилита — не требует установки", size: "~200 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
    ],
  },
  {
    id: 2,
    title: "Браузеры",
    description: "Быстрые и удобные браузеры для работы в интернете",
    sites: [
      { name: "Mozilla Firefox", url: "https://www.mozilla.org/ru/firefox/new/", desc: "Свободный браузер с открытым исходным кодом", size: "~55 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "Google Chrome", url: "https://www.google.com/chrome/", desc: "Самый популярный браузер в мире от Google", size: "~75 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "Браузер Яндекс", url: "https://browser.yandex.ru/", desc: "Российский браузер с умной строкой и Алисой", size: "~100 MB", os: "Windows / macOS", rating: 4, tag: "Бесплатно" },
      { name: "Opera", url: "https://www.opera.com/ru", desc: "Браузер со встроенным VPN и блокировщиком рекламы", size: "~80 MB", os: "Windows / macOS / Linux", rating: 4, tag: "Бесплатно" },
      { name: "LibreWolf", url: "https://librewolf.net/", desc: "Приватный форк Firefox без телеметрии", size: "~60 MB", os: "Windows / macOS / Linux", rating: 4, tag: "Бесплатно" },
    ],
  },
  {
    id: 3,
    title: "Архиваторы",
    description: "Упаковка и распаковка архивов любых форматов",
    sites: [
      { name: "7-Zip", url: "https://www.7-zip.org/", desc: "Лучший бесплатный архиватор с высокой степенью сжатия", size: "~1.5 MB", os: "Windows / Linux", rating: 5, tag: "Бесплатно" },
      { name: "WinRAR", url: "https://www.rarlab.com/download.htm", desc: "Классический архиватор с поддержкой RAR и ZIP", size: "~3.5 MB", os: "Windows / macOS", rating: 5, tag: "Условно бесплатно" },
      { name: "PeaZip", url: "https://peazip.github.io/", desc: "Открытый архиватор с поддержкой 200+ форматов", size: "~10 MB", os: "Windows / Linux", rating: 4, tag: "Бесплатно" },
      { name: "Bandizip", url: "https://www.bandisoft.com/bandizip/", desc: "Быстрый и красивый архиватор от корейских разработчиков", size: "~20 MB", os: "Windows / macOS", rating: 4, tag: "Бесплатно" },
    ],
  },
  {
    id: 4,
    title: "Медиаплееры",
    description: "Воспроизведение видео и аудио всех форматов",
    sites: [
      { name: "VLC Media Player", url: "https://www.videolan.org/vlc/", desc: "Универсальный плеер — играет всё без кодеков", size: "~40 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "MPC-HC", url: "https://github.com/clsid2/mpc-hc/releases", desc: "Лёгкий и быстрый классический медиаплеер", size: "~15 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "K-Lite Codec Pack", url: "https://www.codecguide.com/download_kl.htm", desc: "Набор кодеков для воспроизведения любого видео", size: "~55 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "AIMP", url: "https://www.aimp.ru/", desc: "Российский аудиоплеер высокого качества звука", size: "~10 MB", os: "Windows / Android", rating: 5, tag: "Бесплатно" },
      { name: "foobar2000", url: "https://www.foobar2000.org/", desc: "Аудиоплеер для аудиофилов с высокой гибкостью", size: "~5 MB", os: "Windows", rating: 4, tag: "Бесплатно" },
    ],
  },
  {
    id: 5,
    title: "Системные утилиты",
    description: "Оптимизация, чистка и управление системой",
    sites: [
      { name: "CCleaner", url: "https://www.ccleaner.com/ru-ru/ccleaner/download", desc: "Очистка системы от мусора и ненужных файлов", size: "~30 MB", os: "Windows / macOS", rating: 5, tag: "Бесплатно" },
      { name: "CPU-Z", url: "https://www.cpuid.com/softwares/cpu-z.html", desc: "Информация о процессоре, памяти и материнской плате", size: "~5 MB", os: "Windows / Android", rating: 5, tag: "Бесплатно" },
      { name: "HWMonitor", url: "https://www.cpuid.com/softwares/hwmonitor.html", desc: "Мониторинг температур, напряжений и вентиляторов", size: "~3 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "CrystalDiskInfo", url: "https://crystalmark.info/en/software/crystaldiskinfo/", desc: "Проверка состояния жёстких дисков и SSD", size: "~5 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Autoruns", url: "https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns", desc: "Управление автозагрузкой от Microsoft Sysinternals", size: "~3 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Everything", url: "https://www.voidtools.com/ru-ru/", desc: "Мгновенный поиск файлов на компьютере", size: "~1.5 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
    ],
  },
  {
    id: 6,
    title: "Офис и текст",
    description: "Работа с документами, таблицами и презентациями",
    sites: [
      { name: "LibreOffice", url: "https://ru.libreoffice.org/download/libreoffice/", desc: "Полный офисный пакет — бесплатная альтернатива MS Office", size: "~300 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "Notepad++", url: "https://notepad-plus-plus.org/downloads/", desc: "Мощный текстовый редактор с подсветкой синтаксиса", size: "~4 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Sumatra PDF", url: "https://www.sumatrapdfreader.org/download-free-pdf-viewer", desc: "Лёгкий и быстрый просмотрщик PDF файлов", size: "~10 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Foxit Reader", url: "https://www.foxit.com/pdf-reader/", desc: "Функциональный PDF-ридер с аннотациями", size: "~50 MB", os: "Windows / macOS / Linux", rating: 4, tag: "Бесплатно" },
    ],
  },
  {
    id: 7,
    title: "Графика и изображения",
    description: "Редактирование фото, просмотр и создание изображений",
    sites: [
      { name: "GIMP", url: "https://www.gimp.org/downloads/", desc: "Мощный графический редактор — бесплатный Photoshop", size: "~250 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "IrfanView", url: "https://www.irfanview.com/", desc: "Быстрый просмотрщик изображений всех форматов", size: "~3 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Paint.NET", url: "https://www.getpaint.net/download.html", desc: "Удобный редактор изображений для Windows", size: "~10 MB", os: "Windows", rating: 4, tag: "Бесплатно" },
      { name: "Inkscape", url: "https://inkscape.org/release/", desc: "Редактор векторной графики (SVG)", size: "~100 MB", os: "Windows / macOS / Linux", rating: 4, tag: "Бесплатно" },
    ],
  },
  {
    id: 8,
    title: "Сеть и загрузки",
    description: "Менеджеры загрузок, VPN и сетевые утилиты",
    sites: [
      { name: "qBittorrent", url: "https://www.qbittorrent.org/download.php", desc: "Лучший бесплатный торрент-клиент без рекламы", size: "~30 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "Free Download Manager", url: "https://www.freedownloadmanager.org/ru/", desc: "Ускоренная загрузка файлов из интернета", size: "~40 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "WireGuard", url: "https://www.wireguard.com/install/", desc: "Современный и быстрый VPN-клиент", size: "~10 MB", os: "Windows / macOS / Linux", rating: 5, tag: "Бесплатно" },
      { name: "Putty", url: "https://www.putty.org/", desc: "SSH и Telnet клиент для удалённого управления", size: "~1 MB", os: "Windows", rating: 5, tag: "Бесплатно" },
      { name: "Angry IP Scanner", url: "https://angryip.org/download/", desc: "Сканирование IP-адресов и портов в сети", size: "~5 MB", os: "Windows / macOS / Linux", rating: 4, tag: "Бесплатно" },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Бесплатно": "#006600",
  "Условно бесплатно": "#996600",
  "Платно": "#990000",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span>
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar key={i} size={12} filled={i < rating} />
      ))}
    </span>
  );
}

type ModalType = "home" | "about" | "add" | "forum" | null;

export default function App() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSite, setExpandedSite] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalType>(null);

  const now = new Date();
  const dateStr = now.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      sites: cat.sites.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (cat) =>
        searchQuery === "" ||
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.sites.length > 0
    );

  const displayCategories =
    activeCategory !== null
      ? filteredCategories.filter((c) => c.id === activeCategory)
      : filteredCategories;

  const totalSites = categories.reduce((acc, c) => acc + c.sites.length, 0);

  const navBtn = (label: string, icon: React.ReactNode, onClick: () => void) => (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: "#aabbcc",
        fontSize: "11px",
        display: "inline-flex",
        alignItems: "center",
        gap: "3px",
        padding: "1px 4px",
        borderRadius: "2px",
        transition: "background 0.1s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLSpanElement).style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.background = "transparent";
        (e.currentTarget as HTMLSpanElement).style.color = "#aabbcc";
      }}
    >
      {icon}
      {label}
    </span>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#8899aa", padding: "4px", fontFamily: "Verdana, Arial, Helvetica, sans-serif" }}>

      {/* Modals */}
      {modal === "home" && <HomeModal onClose={() => setModal(null)} />}
      {modal === "about" && <AboutModal onClose={() => setModal(null)} />}
      {modal === "add" && <AddProgramModal onClose={() => setModal(null)} />}
      {modal === "forum" && <ForumModal onClose={() => setModal(null)} />}

      {/* ===== HEADER ===== */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "3px" }}>
        <tbody>
          <tr>
            <td style={{ background: "linear-gradient(180deg, #1a3a5c 0%, #0d2240 50%, #162d4a 100%)", padding: "0", border: "2px solid #4a6a8a" }}>
              {/* Top nav bar */}
              <div style={{ background: "#0a1e36", padding: "2px 8px", borderBottom: "1px solid #2a4a6a" }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <span style={{ fontSize: "11px", color: "#ccddee", marginRight: "4px" }}>
                          <IconComputer size={12} />
                          {" "}СофтПортал
                        </span>
                        {" :: "}
                        {navBtn("Главная", <IconHome size={12} />, () => setModal("home"))}
                        {" | "}
                        {navBtn("О проекте", <IconInfo size={12} />, () => setModal("about"))}
                        {" | "}
                        {navBtn("Добавить программу", <IconAdd size={12} />, () => setModal("add"))}
                        {" | "}
                        {navBtn("Форум", <IconForum size={12} />, () => setModal("forum"))}
                      </td>
                      <td style={{ textAlign: "right", fontSize: "11px", color: "#8899aa", whiteSpace: "nowrap" }}>
                        {dateStr} {timeStr}&nbsp;|&nbsp;
                        <span style={{ color: "#66aacc" }}>Гость</span>
                        &nbsp;[
                        <span
                          style={{ color: "#aabbcc", cursor: "pointer", fontSize: "11px" }}
                          onClick={() => alert("Регистрация и вход — функция в разработке.")}
                        >
                          войти
                        </span>
                        ]
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Logo + search */}
              <div style={{ padding: "10px 12px 8px" }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div style={{
                            width: "52px", height: "52px",
                            background: "linear-gradient(135deg, #1a6a9a, #0d3a5c)",
                            border: "2px solid #4a8aaa",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <IconComputer size={36} />
                          </div>
                          <div>
                            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#e0f0ff", textShadow: "1px 1px 3px #000", fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
                              СофтПортал
                            </div>
                            <div style={{ fontSize: "11px", color: "#8ab0cc", marginTop: "2px" }}>
                              Полезные программы для вашего компьютера — бесплатно и проверено
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                        <div style={{ background: "#0a1e36", border: "1px solid #2a4a6a", padding: "6px 8px", display: "inline-block" }}>
                          <div style={{ fontSize: "10px", color: "#8899aa", marginBottom: "3px", display: "flex", alignItems: "center", gap: "3px" }}>
                            <IconSearch size={12} /> Поиск программ:
                          </div>
                          <div style={{ display: "flex", gap: "4px" }}>
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Введите название..."
                              style={{
                                background: "#f5f5e8", border: "1px inset #888",
                                padding: "2px 4px", fontSize: "11px",
                                fontFamily: "Verdana, Arial, sans-serif",
                                width: "160px", color: "#000",
                              }}
                            />
                            <button
                              onClick={() => setSearchQuery("")}
                              style={{
                                background: "linear-gradient(180deg, #4a6a8a, #2a4a6a)",
                                border: "1px outset #4a6a8a", color: "#fff",
                                fontSize: "11px", padding: "2px 8px",
                                cursor: "pointer", fontFamily: "Verdana, Arial, sans-serif",
                              }}
                            >
                              Сброс
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ===== MAIN LAYOUT ===== */}
      <table width="100%" cellPadding="0" cellSpacing="3">
        <tbody>
          <tr style={{ verticalAlign: "top" }}>
            {/* ===== LEFT SIDEBAR ===== */}
            <td width="185" style={{ verticalAlign: "top" }}>

              {/* Stats */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td style={{ background: "linear-gradient(180deg, #336699, #224466)", padding: "4px 6px", border: "1px solid #4a7aaa", fontSize: "11px", fontWeight: "bold", color: "#ddeeff", textTransform: "uppercase", letterSpacing: "1px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><IconStats size={14} /> Статистика</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ background: "#d0dce8", border: "1px solid #8899aa", borderTop: "none", padding: "6px 8px" }}>
                      <table width="100%" cellPadding="2" cellSpacing="0">
                        <tbody>
                          {[
                            { label: "Категорий:", val: categories.length, icon: <IconFolder size={12} /> },
                            { label: "Программ:", val: totalSites, icon: <IconComputer size={12} /> },
                            { label: "Обновлено:", val: dateStr, icon: <IconInfo size={12} /> },
                          ].map(({ label, val, icon }) => (
                            <tr key={label}>
                              <td style={{ fontSize: "11px", color: "#336699", fontWeight: "bold", display: "flex", alignItems: "center", gap: "3px" }}>
                                {icon} {label}
                              </td>
                              <td align="right" style={{ fontSize: "11px", color: "#333", fontWeight: "bold" }}>{val}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Navigation */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td style={{ background: "linear-gradient(180deg, #336699, #224466)", padding: "4px 6px", border: "1px solid #4a7aaa", fontSize: "11px", fontWeight: "bold", color: "#ddeeff", textTransform: "uppercase", letterSpacing: "1px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><IconFolder size={14} /> Категории</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ background: "#d0dce8", border: "1px solid #8899aa", borderTop: "none", padding: "4px 0" }}>
                      {/* All */}
                      <div
                        style={{
                          padding: "3px 6px", cursor: "pointer",
                          background: activeCategory === null ? "#b0c8e0" : "transparent",
                          borderLeft: activeCategory === null ? "3px solid #336699" : "3px solid transparent",
                          fontSize: "11px", fontWeight: "bold", color: "#003366",
                          display: "flex", alignItems: "center", gap: "4px",
                        }}
                        onClick={() => setActiveCategory(null)}
                      >
                        <IconHome size={14} /> Все категории
                      </div>
                      {/* Nav items */}
                      {categories.map((cat) => (
                        <div
                          key={cat.id}
                          style={{
                            padding: "3px 6px 3px 9px", cursor: "pointer",
                            background: activeCategory === cat.id ? "#b0c8e0" : "transparent",
                            borderLeft: activeCategory === cat.id ? "3px solid #336699" : "3px solid transparent",
                            fontSize: "11px",
                            color: activeCategory === cat.id ? "#003366" : "#336699",
                            fontWeight: activeCategory === cat.id ? "bold" : "normal",
                            display: "flex", alignItems: "center", gap: "4px",
                          }}
                          onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                          onMouseEnter={(e) => { if (activeCategory !== cat.id) (e.currentTarget as HTMLDivElement).style.color = "#cc3300"; }}
                          onMouseLeave={(e) => { if (activeCategory !== cat.id) (e.currentTarget as HTMLDivElement).style.color = "#336699"; }}
                        >
                          {categoryIcons[cat.id]}
                          <span style={{ flex: 1 }}>{cat.title}</span>
                          <span style={{ background: "#336699", color: "#fff", fontSize: "10px", padding: "0 4px", borderRadius: "2px", flexShrink: 0 }}>
                            {cat.sites.length}
                          </span>
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Nav buttons */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td style={{ background: "linear-gradient(180deg, #336699, #224466)", padding: "4px 6px", border: "1px solid #4a7aaa", fontSize: "11px", fontWeight: "bold", color: "#ddeeff", textTransform: "uppercase", letterSpacing: "1px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><IconComputer size={14} /> Навигация</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ background: "#d0dce8", border: "1px solid #8899aa", borderTop: "none", padding: "4px 0" }}>
                      {[
                        { label: "Главная", icon: <IconHome size={14} />, action: () => setModal("home") },
                        { label: "О проекте", icon: <IconInfo size={14} />, action: () => setModal("about") },
                        { label: "Добавить программу", icon: <IconAdd size={14} />, action: () => setModal("add") },
                        { label: "Форум", icon: <IconForum size={14} />, action: () => setModal("forum") },
                      ].map(({ label, icon, action }) => (
                        <div
                          key={label}
                          onClick={action}
                          style={{
                            padding: "4px 8px", cursor: "pointer",
                            fontSize: "11px", color: "#336699",
                            borderLeft: "3px solid transparent",
                            display: "flex", alignItems: "center", gap: "5px",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLDivElement).style.background = "#b0c8e0";
                            (e.currentTarget as HTMLDivElement).style.borderLeft = "3px solid #336699";
                            (e.currentTarget as HTMLDivElement).style.color = "#003366";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLDivElement).style.background = "transparent";
                            (e.currentTarget as HTMLDivElement).style.borderLeft = "3px solid transparent";
                            (e.currentTarget as HTMLDivElement).style.color = "#336699";
                          }}
                        >
                          {icon} {label}
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* About block */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td style={{ background: "linear-gradient(180deg, #336699, #224466)", padding: "4px 6px", border: "1px solid #4a7aaa", fontSize: "11px", fontWeight: "bold", color: "#ddeeff", textTransform: "uppercase", letterSpacing: "1px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><IconInfo size={14} /> О сайте</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ background: "#d0dce8", border: "1px solid #8899aa", borderTop: "none", padding: "8px", fontSize: "11px", color: "#333", lineHeight: "1.5" }}>
                      <p>Собраны только <strong>проверенные и бесплатные</strong> программы.</p>
                      <br />
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
                        <IconWarning size={14} />
                        <p style={{ color: "#663300", fontSize: "10px" }}>
                          Ссылки ведут только на <strong>официальные сайты!</strong>
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Legend */}
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={{ background: "linear-gradient(180deg, #336699, #224466)", padding: "4px 6px", border: "1px solid #4a7aaa", fontSize: "11px", fontWeight: "bold", color: "#ddeeff", textTransform: "uppercase", letterSpacing: "1px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><IconLegend size={14} /> Легенда</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ background: "#d0dce8", border: "1px solid #8899aa", borderTop: "none", padding: "8px", fontSize: "11px" }}>
                      {Object.entries(tagColors).map(([tag, color]) => (
                        <div key={tag} style={{ marginBottom: "5px" }}>
                          <span style={{ background: color, color: "#fff", padding: "1px 5px", fontSize: "10px", fontWeight: "bold", marginRight: "4px" }}>
                            {tag}
                          </span>
                        </div>
                      ))}
                      <div style={{ marginTop: "6px", color: "#555", display: "flex", alignItems: "center", gap: "3px" }}>
                        <IconStar size={12} filled={true} />
                        <IconStar size={12} filled={true} />
                        <IconStar size={12} filled={true} />
                        <span style={{ fontSize: "10px" }}> — рейтинг</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            {/* ===== MAIN CONTENT ===== */}
            <td style={{ verticalAlign: "top" }}>
              {/* Breadcrumb */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td style={{ background: "#c8d8e8", border: "1px solid #8899aa", padding: "3px 8px", fontSize: "11px", color: "#333" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <IconHome size={12} />
                        <span
                          style={{ cursor: "pointer", color: "#006699" }}
                          onClick={() => { setActiveCategory(null); setSearchQuery(""); }}
                        >
                          СофтПортал
                        </span>
                        {activeCategory !== null && (
                          <>
                            {" » "}
                            <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                              {categoryIcons[activeCategory]}
                              <strong>{categories.find((c) => c.id === activeCategory)?.title}</strong>
                            </span>
                          </>
                        )}
                        {searchQuery && (
                          <> {" » "} <span style={{ color: "#333" }}>Поиск: «{searchQuery}»</span></>
                        )}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Announcement */}
              {!searchQuery && activeCategory === null && (
                <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "4px" }}>
                  <tbody>
                    <tr>
                      <td style={{
                        background: "linear-gradient(180deg, #fffbe0, #fff8c0)",
                        border: "1px solid #ccaa00", borderLeft: "4px solid #ffaa00",
                        padding: "8px 12px", fontSize: "11px", color: "#554400",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <IconAnnounce size={18} />
                          <div>
                            <strong>Добро пожаловать на СофтПортал!</strong> — Здесь собраны только
                            проверенные и полезные программы для Windows, macOS и Linux. Все ссылки
                            ведут на официальные сайты разработчиков. Скачивайте безопасно!
                            <span style={{ float: "right", color: "#888" }}>
                              Версия 2.0 | {dateStr}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* Content */}
              {displayCategories.length === 0 ? (
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={{ background: "#e8e8e8", border: "1px solid #aaa", padding: "20px", textAlign: "center", color: "#666", fontSize: "13px" }}>
                        По вашему запросу ничего не найдено. Попробуйте другой запрос.
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                displayCategories.map((cat) => (
                  <table key={cat.id} width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "6px" }}>
                    <tbody>
                      {/* Category header */}
                      <tr>
                        <td
                          style={{ background: "linear-gradient(180deg, #2a4a7a, #162d4a)", padding: "5px 10px", border: "1px solid #4a7aaa", cursor: "pointer" }}
                          onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                        >
                          <table width="100%" cellPadding="0" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    {categoryIcons[cat.id]}
                                    <span style={{ fontSize: "13px", fontWeight: "bold", color: "#ddeeff", fontFamily: "Arial, sans-serif" }}>
                                      {cat.title}
                                    </span>
                                    <span style={{ fontSize: "11px", color: "#8ab0cc" }}>
                                      — {cat.description}
                                    </span>
                                  </span>
                                </td>
                                <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                                  <span style={{ background: "#224466", color: "#88ccff", fontSize: "10px", padding: "2px 6px", border: "1px solid #4a7aaa" }}>
                                    программ: {cat.sites.length}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      {/* Table */}
                      <tr>
                        <td>
                          <table width="100%" cellPadding="0" cellSpacing="0">
                            <thead>
                              <tr style={{ background: "#b8cce0" }}>
                                {[
                                  { label: "Название", w: "28%" },
                                  { label: "Описание", w: "auto" },
                                  { label: "Размер", w: "75px" },
                                  { label: "Рейтинг", w: "80px" },
                                  { label: "Тип / ОС", w: "110px" },
                                  { label: "Скачать", w: "85px" },
                                ].map(({ label, w }) => (
                                  <th key={label} style={{ padding: "3px 7px", fontSize: "11px", color: "#003366", textAlign: "left", border: "1px solid #8899aa", borderBottom: "2px solid #336699", width: w, fontFamily: "Verdana, Arial, sans-serif" }}>
                                    {label}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {cat.sites.map((site, idx) => {
                                const isEven = idx % 2 === 0;
                                const key = `${cat.id}-${idx}`;
                                const isExpanded = expandedSite === key;
                                return (
                                  <>
                                    <tr
                                      key={key}
                                      style={{ background: isEven ? "#e8f0f8" : "#d8e8f4", cursor: "pointer" }}
                                      onMouseEnter={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = "#c8ddf0")}
                                      onMouseLeave={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = isEven ? "#e8f0f8" : "#d8e8f4")}
                                      onClick={() => setExpandedSite(isExpanded ? null : key)}
                                    >
                                      <td style={{ padding: "4px 7px", fontSize: "11px", border: "1px solid #aabbd0", fontWeight: "bold", color: "#003366" }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                          {isExpanded ? "▼" : "▶"} {categoryIcons[cat.id]} {site.name}
                                        </span>
                                      </td>
                                      <td style={{ padding: "4px 7px", fontSize: "11px", border: "1px solid #aabbd0", color: "#333" }}>{site.desc}</td>
                                      <td style={{ padding: "4px 7px", fontSize: "10px", border: "1px solid #aabbd0", color: "#555", textAlign: "center", whiteSpace: "nowrap" }}>{site.size}</td>
                                      <td style={{ padding: "4px 7px", border: "1px solid #aabbd0", textAlign: "center" }}>
                                        <StarRating rating={site.rating} />
                                      </td>
                                      <td style={{ padding: "4px 7px", fontSize: "10px", border: "1px solid #aabbd0", textAlign: "center" }}>
                                        <div><span style={{ background: tagColors[site.tag] || "#666", color: "#fff", padding: "1px 4px", fontSize: "10px", fontWeight: "bold" }}>{site.tag}</span></div>
                                        <div style={{ color: "#555", marginTop: "2px", fontSize: "10px" }}>{site.os}</div>
                                      </td>
                                      <td style={{ padding: "4px 7px", border: "1px solid #aabbd0", textAlign: "center" }}>
                                        <a
                                          href={site.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          style={{
                                            display: "inline-flex", alignItems: "center", gap: "3px",
                                            background: "linear-gradient(180deg, #4488cc, #2266aa)",
                                            color: "#fff", fontSize: "11px", fontWeight: "bold",
                                            padding: "3px 8px", border: "1px outset #5599dd",
                                            textDecoration: "none", cursor: "pointer",
                                          }}
                                          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(180deg, #55aaee, #3377bb)")}
                                          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(180deg, #4488cc, #2266aa)")}
                                        >
                                          <IconDownload size={12} /> Перейти
                                        </a>
                                      </td>
                                    </tr>
                                    {isExpanded && (
                                      <tr key={`${key}-exp`} style={{ background: "#f0f6ff" }}>
                                        <td colSpan={6} style={{ padding: "0", border: "1px solid #aabbd0", borderTop: "none" }}>
                                          <div style={{ background: "#e0ecf8", borderTop: "2px solid #4488cc", padding: "10px 16px" }}>
                                            <table cellPadding="4" cellSpacing="0" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td width="140" style={{ fontSize: "11px", fontWeight: "bold", color: "#003366", verticalAlign: "top" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                                                      {categoryIcons[cat.id]} Название:
                                                    </div>
                                                  </td>
                                                  <td style={{ fontSize: "11px", color: "#333" }}><strong>{site.name}</strong></td>
                                                  <td width="120" style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}><IconDownload size={12} /> Размер:</div>
                                                  </td>
                                                  <td style={{ fontSize: "11px", color: "#333" }}>{site.size}</td>
                                                </tr>
                                                <tr>
                                                  <td style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}><IconComputer size={12} /> Платформа:</div>
                                                  </td>
                                                  <td style={{ fontSize: "11px", color: "#333" }}>{site.os}</td>
                                                  <td style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}><IconLegend size={12} /> Тип:</div>
                                                  </td>
                                                  <td>
                                                    <span style={{ background: tagColors[site.tag] || "#666", color: "#fff", padding: "1px 6px", fontSize: "11px", fontWeight: "bold" }}>
                                                      {site.tag}
                                                    </span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}><IconStar size={12} filled={true} /> Рейтинг:</div>
                                                  </td>
                                                  <td><StarRating rating={site.rating} /></td>
                                                  <td style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}><IconNetwork size={12} /> Сайт:</div>
                                                  </td>
                                                  <td>
                                                    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: "#006699", fontSize: "11px" }}>
                                                      {site.url}
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}><IconInfo size={12} /> Описание:</div>
                                                  </td>
                                                  <td colSpan={3} style={{ fontSize: "11px", color: "#333" }}>{site.desc}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <div style={{ marginTop: "10px", textAlign: "right" }}>
                                              <a
                                                href={site.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                  display: "inline-flex", alignItems: "center", gap: "5px",
                                                  background: "linear-gradient(180deg, #44aa44, #227722)",
                                                  color: "#fff", fontSize: "12px", fontWeight: "bold",
                                                  padding: "5px 16px", border: "1px outset #55bb55",
                                                  textDecoration: "none",
                                                }}
                                              >
                                                <IconDownload size={14} /> Перейти на официальный сайт
                                              </a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  </>
                                );
                              })}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))
              )}

              {/* Tip */}
              {!searchQuery && activeCategory === null && (
                <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "4px" }}>
                  <tbody>
                    <tr>
                      <td style={{
                        background: "linear-gradient(180deg, #e8f8e8, #d8f0d8)",
                        border: "1px solid #77aa77", borderLeft: "4px solid #44aa44",
                        padding: "8px 12px", fontSize: "11px", color: "#224422",
                      }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                          <IconTip size={18} />
                          <span>
                            <strong>Совет:</strong> Нажмите на строку с программой, чтобы увидеть подробную информацию.
                            Для быстрого поиска используйте поле поиска вверху страницы. Все ссылки ведут на{" "}
                            <strong>официальные сайты разработчиков</strong>.
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* ===== FOOTER ===== */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "4px" }}>
        <tbody>
          <tr>
            <td style={{
              background: "linear-gradient(180deg, #1a3a5c, #0d2240)",
              border: "1px solid #4a6a8a",
              padding: "8px", textAlign: "center",
              fontSize: "11px", color: "#6688aa",
            }}>
              <div style={{ marginBottom: "5px", display: "flex", justifyContent: "center", gap: "4px", flexWrap: "wrap" }}>
                {[
                  { label: "Главная", icon: <IconHome size={12} />, action: () => setModal("home") },
                  { label: "О проекте", icon: <IconInfo size={12} />, action: () => setModal("about") },
                  { label: "Добавить программу", icon: <IconAdd size={12} />, action: () => setModal("add") },
                  { label: "Форум", icon: <IconForum size={12} />, action: () => setModal("forum") },
                ].map(({ label, icon, action }, i) => (
                  <span key={label}>
                    <span
                      onClick={action}
                      style={{ color: "#6688aa", fontSize: "11px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "3px" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#aaccee")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#6688aa")}
                    >
                      {icon} {label}
                    </span>
                    {i < 3 && <span style={{ color: "#334455", margin: "0 4px" }}>|</span>}
                  </span>
                ))}
              </div>
              <div style={{ color: "#446688" }}>
                © 2004–2025 <strong style={{ color: "#5588aa" }}>СофтПортал</strong> — Все ссылки ведут на официальные сайты разработчиков. Сайт не распространяет пиратское ПО.
              </div>
              <div style={{ color: "#334455", marginTop: "2px", fontSize: "10px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                  <IconComputer size={10} />
                  Сгенерировано: {dateStr} {timeStr} | Просмотров сегодня: 1,337 | Пользователей онлайн: 42
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
