import React from "react";

// Figma asset URLs expire after 7 days — replace with self-hosted images before deploying.
// Font files go in /public/fonts/ (see src/index.css for @font-face declarations):
//   EkaterinaVelikayaOne.woff2 / .woff
//   Kuhlenbach.woff2 / .woff
//   PetrovskyOneC.woff2 / .woff

const imgHero =
  "https://www.figma.com/api/mcp/asset/31ae3436-8f14-4b2e-a66a-b80988dccfdf";
const imgLogoMask =
  "https://www.figma.com/api/mcp/asset/8ef56973-348b-4f21-bb66-cd7e23378ff2";

const EVENT_CARDS = [
  {
    title: "Ассамблеи",
    description:
      "Светские собрания и танцы по правилам, введённым Петром I для дворянского досуга.",
  },
  {
    title: "Монополия",
    description:
      "Настольная игра-путешествие по владениям и торговым путям петровской России.",
  },
  {
    title: "Уроки письма",
    description:
      "Учимся выводить буквы гусиным пером по прописям начала XVIII века.",
  },
  {
    title: "Наука о врачевании",
    description:
      "Первые аптеки и госпитали России — медицина петровского времени.",
  },
  {
    title: "Язык эпохи Петра I",
    description:
      "Разбираем слова и обороты, вошедшие в русский язык при Петре Великом.",
  },
  {
    title: "Миф или реальность",
    description:
      "Викторина: отделяем исторические факты о Петре I от легенд и домыслов.",
  },
  {
    title: "Кулинария начала XVIII века",
    description:
      "Мастер-класс по блюдам и застольным традициям петровского двора.",
  },
  {
    title: "Язык вееров и мушек",
    description:
      "Тайная символика дамских аксессуаров придворного этикета.",
  },
  {
    title: "Экзамен на дворянский титул",
    description:
      "Испытание манер, этикета и знаний — по образцу петровских экзаменов для дворян.",
  },
];

function EventCard({ title, description }) {
  return (
    <div className="bg-white rounded-[20px] p-8 flex flex-col gap-4 w-full h-[258px]">
      <h3 className="font-['PetrovskyOneC'] text-[#224f9a] text-[32px] leading-[0.9]">
        {title}
      </h3>
      <p className="font-['Kuhlenbach'] text-[#224f9a] text-[18px] leading-[1.3]">
        {description}
      </p>
    </div>
  );
}

function HeroPhotos() {
  return (
    <div className="flex w-full">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-1/3 aspect-square">
          <img alt="" className="size-full object-cover" src={imgHero} />
        </div>
      ))}
    </div>
  );
}

export default function PetrovskayaAssambleya() {
  return (
    <div className="bg-white relative w-full overflow-hidden">

      {/* ===== Header ===== */}
      <header className="relative bg-[#224f9a] h-[182px] flex items-center justify-between px-12">
        <div
          className="w-[124px] h-[51px] bg-white"
          style={{
            maskImage: `url("${imgLogoMask}")`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url("${imgLogoMask}")`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
          }}
          aria-label="Логотип Петровской ассамблеи"
        />
        <p className="font-['Ekaterina_Velikaya_One'] text-white text-2xl">
          Петровская ассамблея 2026
        </p>
        <button className="bg-white rounded-[33px] px-6 py-2 font-['Kuhlenbach'] text-[#224f9a] text-xl hover:bg-[#e3edff] transition-colors">
          об организаторе
        </button>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative">
        <HeroPhotos />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(179.4deg, rgb(34, 79, 154) 1.6%, rgba(7, 77, 192, 0.5) 94.4%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white text-center px-8">
          <p className="font-['PetrovskyOneC'] text-[96px] leading-none">
            29-30
          </p>
          <p className="font-['Kuhlenbach'] text-[70px] leading-none">
            августа
          </p>
          <div className="font-['Ekaterina_Velikaya_One'] text-[48px] leading-[1.6] max-w-4xl">
            <p>Дорогой друг!</p>
            <p>Рады видеть вас на нашем мероприятии!</p>
          </div>
        </div>
      </section>

      {/* ===== Эпоха Петра I ===== */}
      <section className="relative bg-[#224f9a] px-8 py-24 text-center">
        <h2 className="font-['Ekaterina_Velikaya_One'] text-white text-[48px] mb-8">
          Эпоха Петра I
        </h2>
        <p className="font-['Kuhlenbach'] text-white text-[22px] leading-[1.5] max-w-4xl mx-auto mb-6">
          «Петровская ассамблея 2026» — тема площадки Государственного Эрмитажа
          в рамках семейного фестиваля «Открытый урок». На фестивале вас ждёт
          удивительная возможность погрузиться в эпоху Петра I с помощью игр,
          мастер-классов и викторин.
        </p>
        <p className="font-['Kuhlenbach'] text-[#224f9a] bg-[rgba(199,220,255,0.85)] text-[22px] leading-[1.5] max-w-4xl mx-auto p-10 rounded-2xl">
          Эпоха Петра I (1696–1725) стала временем коренного перелома, когда
          Московское царство стало Российской империей. Этот период
          характеризовался активной модернизацией всех сфер жизни — от военного
          дела до внешнего облика подданных.
        </p>
      </section>

      {/* ===== Предстоящие мероприятия ===== */}
      <section
        className="relative py-24 px-8"
        style={{
          backgroundImage:
            "linear-gradient(179deg, rgba(199,220,255,0.3) 9.6%, rgba(199,220,255,0.15) 95.7%)",
        }}
      >
        <div className="mb-16">
          <HeroPhotos />
        </div>

        <h2 className="font-['Ekaterina_Velikaya_One'] text-[#224f9a] text-[48px] text-center mb-12">
          Предстоящие мероприятия
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EVENT_CARDS.map((card) => (
            <EventCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* ===== Наука о врачевании ===== */}
      <section className="relative bg-[rgba(199,220,255,0.5)] px-8 py-24 text-center">
        <h2 className="font-['Ekaterina_Velikaya_One'] text-[#224f9a] text-[48px] mb-8">
          Наука о врачевании
        </h2>
        <div className="font-['Kuhlenbach'] text-[#224f9a] text-[22px] leading-[1.6] max-w-4xl mx-auto space-y-6">
          <p>
            Интерактивная игра «Наука о врачевании при Петре I» приглашает вас
            погрузиться в атмосферу зарождения российской медицины прямо на
            аллеях Летнего сада. В основе игры лежат реальные исторические
            хроники, методы лечения недугов XVIII века и рецепты петровского
            «Аптекарского огорода». Задача участников — примерить на себя роль
            лекарей той эпохи: исследовать территорию сада в поисках целебных
            трав и растений, поставить верные диагнозы и спасти пациентов.
          </p>
          <p>
            На игровых точках вас встретят актёры в образах знаменитых
            личностей петровского Петербурга — от соратников императора до его
            личного лейб-медика Роберта Эрскина, которые поделятся медицинскими
            тайнами и проверят ваши знания перед строгим судом Медицинской
            канцелярии.
          </p>
        </div>
      </section>

      {/* ===== Footer фото-полоса ===== */}
      <section className="relative bg-[#224f9a]">
        <HeroPhotos />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(179.4deg, rgb(34, 79, 154) 1.6%, rgba(7, 77, 192, 0.5) 94.4%)",
          }}
        />
      </section>

      <footer className="bg-[#224f9a] py-8 text-center">
        <p className="font-['Ekaterina_Velikaya_One'] text-white text-2xl">
          Петровская ассамблея 2026
        </p>
      </footer>

    </div>
  );
}
