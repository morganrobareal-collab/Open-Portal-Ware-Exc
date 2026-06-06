import {
  IconClose,
  IconHome,
  IconInfo,
  IconAdd,
  IconForum,
  IconCheck,
  IconWarning,
  IconComputer,
} from "./XPIcons";

interface ModalProps {
  onClose: () => void;
}

function ModalWrapper({
  title,
  icon,
  children,
  onClose,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#d4e0ec",
          border: "2px solid #4a7aaa",
          width: "600px",
          maxWidth: "95vw",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "4px 4px 12px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div
          style={{
            background: "linear-gradient(180deg, #2a5a9a, #1a3a6a)",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {icon}
            <span style={{ color: "#fff", fontSize: "12px", fontWeight: "bold", fontFamily: "Verdana, Arial, sans-serif" }}>
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              lineHeight: 1,
            }}
          >
            <IconClose size={14} />
          </button>
        </div>
        {/* Content */}
        <div style={{ padding: "12px" }}>
          {children}
        </div>
        {/* Footer */}
        <div style={{ padding: "6px 12px", borderTop: "1px solid #8899aa", textAlign: "right" }}>
          <button
            onClick={onClose}
            style={{
              background: "linear-gradient(180deg, #c8d8e8, #a8b8cc)",
              border: "1px outset #8899aa",
              padding: "3px 16px",
              fontSize: "11px",
              fontFamily: "Verdana, Arial, sans-serif",
              cursor: "pointer",
              color: "#000",
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ children }: { children: React.ReactNode }) {
  return (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "8px" }}>
      <tbody>
        <tr>
          <td
            style={{
              background: "#e8f0f8",
              border: "1px solid #8899aa",
              padding: "8px 10px",
              fontSize: "11px",
              lineHeight: "1.7",
              color: "#222",
            }}
          >
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #2a4a7a, #162d4a)",
        color: "#ddeeff",
        fontSize: "11px",
        fontWeight: "bold",
        padding: "3px 8px",
        marginBottom: "4px",
        marginTop: "8px",
        border: "1px solid #4a7aaa",
      }}
    >
      {children}
    </div>
  );
}

export function HomeModal({ onClose }: ModalProps) {
  return (
    <ModalWrapper title="СофтПортал — Главная страница" icon={<IconHome size={14} />} onClose={onClose}>
      <SectionHeader>🏠 Добро пожаловать на СофтПортал!</SectionHeader>
      <InfoBlock>
        <p>
          <strong>СофтПортал</strong> — это бесплатный каталог полезных программ для вашего компьютера.
          Мы собрали <strong>только проверенные</strong> утилиты и приложения, которые помогут вам:
        </p>
        <br />
        <table cellPadding="4" cellSpacing="0" width="100%">
          <tbody>
            {[
              [<IconCheck size={14} />, "Защитить компьютер от вирусов и вредоносных программ"],
              [<IconCheck size={14} />, "Ускорить работу системы и почистить мусорные файлы"],
              [<IconCheck size={14} />, "Воспроизводить видео и музыку любых форматов"],
              [<IconCheck size={14} />, "Работать с документами, архивами и изображениями"],
              [<IconCheck size={14} />, "Скачивать файлы быстро и безопасно"],
            ].map(([icon, text], i) => (
              <tr key={i}>
                <td width="20" style={{ textAlign: "center" }}>{icon}</td>
                <td style={{ fontSize: "11px", color: "#333" }}>{text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfoBlock>

      <SectionHeader>📊 Статистика портала</SectionHeader>
      <InfoBlock>
        <table cellPadding="4" cellSpacing="0" width="100%">
          <tbody>
            {[
              ["Категорий программ:", "8"],
              ["Программ в каталоге:", "38+"],
              ["Бесплатных программ:", "37"],
              ["Проверенных ссылок:", "38"],
              ["Посетителей за сегодня:", "1 337"],
            ].map(([label, val]) => (
              <tr key={String(label)} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ fontSize: "11px", color: "#336699", fontWeight: "bold" }}>{label}</td>
                <td style={{ fontSize: "11px", fontWeight: "bold", color: "#333", textAlign: "right" }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfoBlock>

      <SectionHeader>⚠️ Важно знать</SectionHeader>
      <InfoBlock>
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <div style={{ marginTop: "2px" }}><IconWarning size={16} /></div>
          <div>
            Все ссылки на этом сайте ведут исключительно на <strong>официальные сайты разработчиков</strong>.
            Мы не распространяем пиратское программное обеспечение и кряки. Скачивайте только с
            официальных источников!
          </div>
        </div>
      </InfoBlock>
    </ModalWrapper>
  );
}

export function AboutModal({ onClose }: ModalProps) {
  return (
    <ModalWrapper title="О проекте СофтПортал" icon={<IconInfo size={14} />} onClose={onClose}>
      <SectionHeader>ℹ️ О проекте</SectionHeader>
      <InfoBlock>
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <div><IconComputer size={48} /></div>
          <div>
            <p><strong>СофтПортал</strong> — некоммерческий информационный портал.</p>
            <br />
            <p>
              Проект создан с целью помочь пользователям найти надёжные, бесплатные и полезные
              программы для операционных систем Windows, macOS и Linux. Мы тщательно проверяем
              каждую ссылку перед добавлением в каталог.
            </p>
          </div>
        </div>
      </InfoBlock>

      <SectionHeader>🎯 Наша миссия</SectionHeader>
      <InfoBlock>
        <p>
          Многие пользователи при поиске нужных программ попадают на сомнительные сайты с вирусами
          и рекламой. Мы хотим создать безопасный путеводитель по миру бесплатного программного
          обеспечения, где каждая программа проверена и каждая ссылка ведёт к официальному источнику.
        </p>
      </InfoBlock>

      <SectionHeader>📋 Критерии отбора программ</SectionHeader>
      <InfoBlock>
        <table cellPadding="4" cellSpacing="0" width="100%">
          <tbody>
            {[
              "Программа должна быть бесплатной или иметь полноценную бесплатную версию",
              "Ссылка должна вести на официальный сайт разработчика",
              "Программа не должна содержать вредоносный код (проверяем через VirusTotal)",
              "Программа должна быть актуальной и поддерживаемой разработчиком",
              "Программа должна быть реально полезной для пользователей",
            ].map((item, i) => (
              <tr key={i}>
                <td width="20" style={{ textAlign: "center" }}><IconCheck size={14} /></td>
                <td style={{ fontSize: "11px", color: "#333" }}>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfoBlock>

      <SectionHeader>📅 История проекта</SectionHeader>
      <InfoBlock>
        <table cellPadding="4" cellSpacing="0" width="100%">
          <tbody>
            {[
              ["2004", "Создание первой версии сайта"],
              ["2007", "Добавление системы рейтингов и категорий"],
              ["2010", "Переезд на новый сервер, 10 000 посетителей в день"],
              ["2015", "Обновление дизайна, добавление поиска"],
              ["2025", "Текущая версия 2.0 — обновлённый каталог"],
            ].map(([year, event]) => (
              <tr key={year} style={{ borderBottom: "1px solid #ccc" }}>
                <td width="60" style={{ fontSize: "11px", fontWeight: "bold", color: "#336699" }}>{year}</td>
                <td style={{ fontSize: "11px", color: "#333" }}>{event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfoBlock>
    </ModalWrapper>
  );
}

export function AddProgramModal({ onClose }: ModalProps) {
  return (
    <ModalWrapper title="Добавить программу в каталог" icon={<IconAdd size={14} />} onClose={onClose}>
      <SectionHeader>📝 Форма добавления программы</SectionHeader>
      <InfoBlock>
        <p>
          Знаете полезную бесплатную программу, которой нет в нашем каталоге? Заполните форму ниже
          и мы рассмотрим вашу заявку в течение 3 рабочих дней.
        </p>
      </InfoBlock>

      <table width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td style={{ padding: "4px 0" }}>
              {[
                { label: "Название программы:", placeholder: "Например: VLC Media Player", type: "text" },
                { label: "Официальный сайт (URL):", placeholder: "https://www.example.com", type: "url" },
                { label: "Версия программы:", placeholder: "Например: 3.0.21", type: "text" },
                { label: "Размер дистрибутива:", placeholder: "Например: ~45 MB", type: "text" },
                { label: "Поддерживаемые ОС:", placeholder: "Windows / macOS / Linux", type: "text" },
              ].map(({ label, placeholder, type }) => (
                <table key={label} width="100%" cellPadding="3" cellSpacing="0" style={{ marginBottom: "4px" }}>
                  <tbody>
                    <tr>
                      <td width="180" style={{ fontSize: "11px", fontWeight: "bold", color: "#003366", verticalAlign: "middle" }}>
                        {label}
                      </td>
                      <td>
                        <input
                          type={type}
                          placeholder={placeholder}
                          style={{
                            width: "100%",
                            background: "#f5f5e8",
                            border: "1px inset #888",
                            padding: "3px 5px",
                            fontSize: "11px",
                            fontFamily: "Verdana, Arial, sans-serif",
                            color: "#000",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}

              <table width="100%" cellPadding="3" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td width="180" style={{ fontSize: "11px", fontWeight: "bold", color: "#003366", verticalAlign: "top" }}>
                      Категория:
                    </td>
                    <td>
                      <select
                        style={{
                          background: "#f5f5e8",
                          border: "1px inset #888",
                          padding: "3px 5px",
                          fontSize: "11px",
                          fontFamily: "Verdana, Arial, sans-serif",
                          color: "#000",
                          width: "100%",
                        }}
                      >
                        {[
                          "Антивирусы и безопасность",
                          "Браузеры",
                          "Архиваторы",
                          "Медиаплееры",
                          "Системные утилиты",
                          "Офис и текст",
                          "Графика и изображения",
                          "Сеть и загрузки",
                        ].map((cat) => (
                          <option key={cat}>{cat}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" cellPadding="3" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td width="180" style={{ fontSize: "11px", fontWeight: "bold", color: "#003366", verticalAlign: "top" }}>
                      Описание программы:
                    </td>
                    <td>
                      <textarea
                        rows={4}
                        placeholder="Кратко опишите что делает программа и чем она полезна..."
                        style={{
                          width: "100%",
                          background: "#f5f5e8",
                          border: "1px inset #888",
                          padding: "3px 5px",
                          fontSize: "11px",
                          fontFamily: "Verdana, Arial, sans-serif",
                          color: "#000",
                          resize: "vertical",
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" cellPadding="3" cellSpacing="0" style={{ marginBottom: "4px" }}>
                <tbody>
                  <tr>
                    <td width="180" style={{ fontSize: "11px", fontWeight: "bold", color: "#003366" }}>
                      Тип лицензии:
                    </td>
                    <td>
                      {["Бесплатно", "Условно бесплатно", "Открытый исходный код"].map((opt) => (
                        <label key={opt} style={{ fontSize: "11px", marginRight: "12px", cursor: "pointer" }}>
                          <input type="radio" name="license" value={opt} style={{ marginRight: "3px" }} />
                          {opt}
                        </label>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <button
                  style={{
                    background: "linear-gradient(180deg, #44aa44, #227722)",
                    border: "1px outset #55bb55",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                    padding: "5px 20px",
                    cursor: "pointer",
                    fontFamily: "Verdana, Arial, sans-serif",
                    marginRight: "8px",
                  }}
                  onClick={() => alert("Спасибо! Ваша заявка принята. Мы рассмотрим её в течение 3 рабочих дней.")}
                >
                  ✔ Отправить заявку
                </button>
                <button
                  onClick={onClose}
                  style={{
                    background: "linear-gradient(180deg, #c8d8e8, #a8b8cc)",
                    border: "1px outset #8899aa",
                    color: "#000",
                    fontSize: "12px",
                    padding: "5px 20px",
                    cursor: "pointer",
                    fontFamily: "Verdana, Arial, sans-serif",
                  }}
                >
                  Отмена
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ModalWrapper>
  );
}

export function ForumModal({ onClose }: ModalProps) {
  const topics = [
    { id: 1, title: "Какой антивирус лучше в 2025 году?", author: "SergeySPb", replies: 47, views: 1204, date: "03.06.2025" },
    { id: 2, title: "7-Zip vs WinRAR — что выбрать?", author: "KonstantinMsk", replies: 23, views: 892, date: "01.06.2025" },
    { id: 3, title: "VLC не воспроизводит MKV файлы — решение", author: "PavelRU", replies: 15, views: 634, date: "29.05.2025" },
    { id: 4, title: "LibreOffice — замена MS Office?", author: "OlgaNN", replies: 61, views: 2341, date: "27.05.2025" },
    { id: 5, title: "Лучшие программы для очистки ПК", author: "AntonKrasnodar", replies: 88, views: 3102, date: "25.05.2025" },
    { id: 6, title: "Firefox или Chrome — выбор браузера", author: "DmitryEkat", replies: 104, views: 4567, date: "20.05.2025" },
    { id: 7, title: "qBittorrent настройка для максимальной скорости", author: "MikhailVlad", replies: 32, views: 1789, date: "15.05.2025" },
    { id: 8, title: "GIMP — руководство для начинающих", author: "AlinaSochi", replies: 19, views: 723, date: "10.05.2025" },
  ];

  return (
    <ModalWrapper title="Форум СофтПортала" icon={<IconForum size={14} />} onClose={onClose}>
      <SectionHeader>💬 Активные темы форума</SectionHeader>

      <table width="100%" cellPadding="0" cellSpacing="0">
        <thead>
          <tr style={{ background: "#b8cce0" }}>
            {["Тема", "Автор", "Ответов", "Просмотров", "Дата"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "3px 6px",
                  fontSize: "11px",
                  color: "#003366",
                  border: "1px solid #8899aa",
                  textAlign: "left",
                  fontFamily: "Verdana, Arial, sans-serif",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, idx) => (
            <tr
              key={topic.id}
              style={{
                background: idx % 2 === 0 ? "#e8f0f8" : "#d8e8f4",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = "#c8ddf0")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = idx % 2 === 0 ? "#e8f0f8" : "#d8e8f4")}
              onClick={() => alert(`Тема: ${topic.title}\n\nЭто демонстрационный форум. В реальной версии здесь откроется обсуждение.`)}
            >
              <td style={{ padding: "4px 6px", fontSize: "11px", border: "1px solid #aabbd0", color: "#006699", fontWeight: "bold" }}>
                {topic.title}
              </td>
              <td style={{ padding: "4px 6px", fontSize: "11px", border: "1px solid #aabbd0", color: "#555" }}>
                {topic.author}
              </td>
              <td style={{ padding: "4px 6px", fontSize: "11px", border: "1px solid #aabbd0", textAlign: "center", fontWeight: "bold", color: "#cc3300" }}>
                {topic.replies}
              </td>
              <td style={{ padding: "4px 6px", fontSize: "11px", border: "1px solid #aabbd0", textAlign: "center", color: "#333" }}>
                {topic.views}
              </td>
              <td style={{ padding: "4px 6px", fontSize: "11px", border: "1px solid #aabbd0", color: "#666" }}>
                {topic.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "8px", textAlign: "center" }}>
        <button
          style={{
            background: "linear-gradient(180deg, #4488cc, #2266aa)",
            border: "1px outset #5599dd",
            color: "#fff",
            fontSize: "11px",
            fontWeight: "bold",
            padding: "4px 14px",
            cursor: "pointer",
            fontFamily: "Verdana, Arial, sans-serif",
          }}
          onClick={() => alert("Для создания темы необходимо зарегистрироваться на форуме.")}
        >
          + Создать новую тему
        </button>
      </div>

      <SectionHeader>👥 Онлайн на форуме</SectionHeader>
      <InfoBlock>
        <span style={{ fontSize: "11px", color: "#333" }}>
          Пользователей онлайн: <strong style={{ color: "#336699" }}>42</strong> &nbsp;|&nbsp;
          Гостей: <strong>127</strong> &nbsp;|&nbsp;
          Всего тем: <strong>1 204</strong> &nbsp;|&nbsp;
          Всего сообщений: <strong>18 763</strong>
        </span>
      </InfoBlock>
    </ModalWrapper>
  );
}
