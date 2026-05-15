import { useMemo, useState } from 'react'
import './index.css'

const leads = [
  { name: 'Анна Морозова', source: 'RenovaFlow quiz', project: 'Ремонт квартиры 72 м²', budget: '2.5–5 млн ₽', status: 'Hot lead', stage: 'Qualified', color: 'bg-emerald-500 text-white', ai: 'Клиент готов к созвону, уже указал площадь, сроки и бюджет. Нужен расчёт под ключ.', score: 96 },
  { name: 'Илья Котов', source: 'Telegram', project: 'Офис 120 м²', budget: 'нужна оценка', status: 'Estimate', stage: 'Estimate', color: 'bg-blue-600 text-white', ai: 'Нужен быстрый предварительный диапазон цены и список вопросов для замера.', score: 82 },
  { name: 'Мария Власова', source: 'AI assistant', project: 'Дизайн-проект студии', budget: 'до 1 млн ₽', status: 'New', stage: 'New', color: 'bg-violet-600 text-white', ai: 'Пока изучает варианты. Лучше отправить короткое портфолио и объяснить этапы.', score: 64 },
  { name: 'Олег Смирнов', source: 'Website form', project: 'Магазин мебели', budget: '3–4 млн ₽', status: 'Meeting', stage: 'Meeting', color: 'bg-amber-500 text-white', ai: 'Коммерческий объект, важны сроки запуска и понятная смета по зонам.', score: 78 },
]

const pipeline = [
  ['New', '14', 'bg-slate-100 text-slate-700'],
  ['Qualified', '9', 'bg-blue-50 text-blue-700'],
  ['Estimate', '6', 'bg-amber-50 text-amber-700'],
  ['Meeting', '4', 'bg-violet-50 text-violet-700'],
  ['Won', '3', 'bg-emerald-50 text-emerald-700'],
]

const chart = [42, 58, 49, 74, 69, 88, 96, 84, 112, 125, 118, 142]


const activity = [
  ['AI qualified', 'Анна Морозова помечена как Hot lead', '2 мин назад'],
  ['Telegram', 'Новая заявка пришла из формы RenovaFlow', '11 мин назад'],
  ['Estimate', 'Смета по офису 120 м² ожидает отправки', '38 мин назад'],
  ['Task', 'Создана задача на повторный контакт', '1 час назад'],
]

function Metric({ label, value, delta, accent }: { label: string; value: string; delta: string; accent: string }) {
  return (
    <article className="card-hover rounded-[1.7rem] border border-line bg-panel p-5 shadow-card">
      <div className={`h-2 w-14 rounded-full ${accent}`} />
      <p className="mt-5 text-sm font-bold text-muted">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-black text-ink">{value}</p>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{delta}</span>
      </div>
    </article>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const [stage, setStage] = useState('All')

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const byQuery = [lead.name, lead.project, lead.source, lead.budget].join(' ').toLowerCase().includes(query.toLowerCase())
      const byStage = stage === 'All' || lead.stage === stage
      return byQuery && byStage
    })
  }, [query, stage])

  return (
    <main className="min-h-screen px-4 py-4 text-ink lg:p-6">
      <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-[286px_1fr]">
        <aside className="rounded-[2rem] border border-line bg-panel p-5 shadow-soft lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-black text-white shadow-card">CF</div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-ink">ClientFlow</p>
              <p className="text-sm font-bold text-muted">AI CRM dashboard</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {['Dashboard', 'Leads', 'Pipeline', 'AI Summary', 'Tasks', 'Settings'].map((item, index) => (
              <a key={item} href="#" className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black transition ${index === 0 ? 'bg-blue-600 text-white shadow-card' : 'text-muted hover:bg-slate-100 hover:text-ink'}`}>
                <span>{item}</span>
                {index === 1 && <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">29</span>}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-white shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.18em] opacity-80">AI assistant</p>
            <p className="mt-4 text-2xl font-black">12 заявок разобраны</p>
            <p className="mt-3 text-sm leading-6 text-white/80">AI выделил бюджет, намерение, срочность и следующий шаг для менеджера.</p>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-line bg-soft p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">system status</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,.12)]" />
              <span className="text-sm font-black text-ink">Website · TG · AI online</span>
            </div>
          </div>
        </aside>

        <section className="space-y-5">
          <header className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">website · telegram · ai leads</p>
                <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight text-ink sm:text-5xl">
                  CRM-панель для заявок, которые приходят с сайта и AI-помощника.
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
                  ClientFlow показывает, как бизнес может обрабатывать заявки из лендинга, Telegram и AI-чата: статусы, приоритеты, summary, задачи и pipeline в одном интерфейсе.
                </p>
              </div>

              <div className="grid min-w-[300px] grid-cols-2 gap-3">
                <div className="rounded-3xl bg-soft p-5">
                  <p className="text-3xl font-black text-ink">29</p>
                  <p className="mt-1 text-sm font-bold text-muted">новых лидов</p>
                </div>
                <div className="rounded-3xl bg-blue-50 p-5">
                  <p className="text-3xl font-black text-blue-700">8</p>
                  <p className="mt-1 text-sm font-bold text-muted">горячих</p>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Metric label="Leads this week" value="142" delta="+18%" accent="bg-blue-600" />
            <Metric label="Avg response" value="7m" delta="-32%" accent="bg-violet-600" />
            <Metric label="AI qualified" value="64%" delta="+11%" accent="bg-cyan-500" />
            <Metric label="Won deals" value="12" delta="+4" accent="bg-emerald-500" />
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
            <section className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">lead inbox</p>
                  <h2 className="mt-2 text-2xl font-black text-ink">Новые заявки</h2>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск по клиенту, проекту, источнику..." className="min-w-[260px] rounded-2xl border border-line bg-soft px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-300 focus:bg-white" />
                  <select value={stage} onChange={(e) => setStage(e.target.value)} className="rounded-2xl border border-line bg-soft px-4 py-3 text-sm font-black outline-none">
                    {['All', 'New', 'Qualified', 'Estimate', 'Meeting'].map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {filteredLeads.map((lead) => (
                  <article key={lead.name} className="card-hover rounded-[1.7rem] border border-line bg-soft p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black text-ink">{lead.name}</h3>
                          <span className={`rounded-full px-3 py-1 text-xs font-black ${lead.color}`}>{lead.status}</span>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-muted">score {lead.score}</span>
                        </div>
                        <p className="mt-2 text-sm font-bold text-muted">{lead.source} · {lead.project} · {lead.budget}</p>
                        <div className="mt-4 rounded-2xl border border-blue-100 bg-white p-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">AI summary</p>
                          <p className="mt-2 text-sm leading-6 text-muted">{lead.ai}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 lg:flex-col">
                        <button className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-black text-white">Open</button>
                        <button className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-black text-ink">Task</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <div className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-600">lead analytics</p>
                <div className="mt-6 flex h-48 items-end gap-2 rounded-3xl bg-soft p-4">
                  {chart.map((value, index) => (
                    <div key={index} className="flex flex-1 items-end">
                      <div className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${value}px` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-xs font-black uppercase tracking-[0.12em] text-muted">
                  <span>Jan</span><span>Apr</span><span>Aug</span><span>Dec</span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">pipeline</p>
                <div className="mt-6 space-y-3">
                  {pipeline.map(([name, count, cls]) => (
                    <div key={name} className="flex items-center justify-between rounded-2xl bg-soft p-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${cls}`}>{name}</span>
                      <span className="text-xl font-black text-ink">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="grid gap-5 xl:grid-cols-[.9fr_1.1fr]">
            <section className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-600">AI brief builder</p>
              <h2 className="mt-3 text-2xl font-black text-ink">Автоматически собирает вводные по заявке.</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Источник: Telegram', 'Бюджет: 2.5–5 млн ₽', 'Сроки: 3–6 месяцев', 'Следующий шаг: созвон'].map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-soft p-4 text-sm font-black text-ink">{item}</div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">prepared message</p>
                <p className="mt-3 text-sm leading-7 text-white/90">Здравствуйте! Хочу обсудить ремонт квартиры 72 м². Бюджет 2.5–5 млн ₽, сроки 3–6 месяцев. Нужна предварительная оценка и консультация.</p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">activity feed</p>
              <div className="mt-6 space-y-3">
                {activity.map(([type, text, time]) => (
                  <div key={text} className="flex gap-4 rounded-2xl bg-soft p-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-black text-ink">{type}</p>
                        <span className="text-xs font-bold text-muted">{time}</span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="grid gap-5 lg:grid-cols-3">
            {[
              ['Website form', 'Заявки из сайта сразу превращаются в структурированный brief.'],
              ['Telegram handoff', 'Менеджер получает клиента и контекст без ручного копирования.'],
              ['AI qualification', 'AI выделяет бюджет, сроки, намерение и следующий лучший шаг.'],
            ].map(([title, text]) => (
              <article key={title} className="card-hover rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
                <div className="status-dot h-3 w-3 rounded-full bg-blue-600" />
                <h3 className="mt-8 text-xl font-black text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
