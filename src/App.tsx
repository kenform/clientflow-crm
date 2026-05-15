import './index.css'

const leads = [
  { name: 'Анна Морозова', source: 'RenovaFlow quiz', project: 'Ремонт квартиры 72 м²', budget: '2.5–5 млн ₽', status: 'Hot lead', color: 'bg-green text-white', ai: 'Клиент готов к созвону, уже указал площадь, сроки и бюджет. Нужен расчёт под ключ.' },
  { name: 'Илья Котов', source: 'Telegram', project: 'Офис 120 м²', budget: 'нужна оценка', status: 'Estimate', color: 'bg-blue text-white', ai: 'Нужен быстрый предварительный диапазон цены и список вопросов для замера.' },
  { name: 'Мария Власова', source: 'AI assistant', project: 'Дизайн-проект студии', budget: 'до 1 млн ₽', status: 'New', color: 'bg-violet text-white', ai: 'Пока изучает варианты. Лучше отправить короткое портфолио и объяснить этапы.' },
]

const pipeline = [
  ['New', '14', 'bg-slate-100 text-slate-700'],
  ['Qualified', '9', 'bg-blue/10 text-blue'],
  ['Estimate', '6', 'bg-amber/10 text-amber'],
  ['Meeting', '4', 'bg-violet/10 text-violet'],
  ['Won', '3', 'bg-green/10 text-green'],
]

const tasks = [
  ['10:30', 'Позвонить Анне по ремонту 72 м²'],
  ['12:00', 'Отправить смету по офису'],
  ['15:40', 'Проверить новые Telegram-заявки'],
  ['17:10', 'Обновить AI FAQ по услугам'],
]

function Metric({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <article className="card-hover rounded-[1.7rem] border border-line bg-panel p-5 shadow-card">
      <p className="text-sm font-bold text-muted">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-black text-ink">{value}</p>
        <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-black text-green">{delta}</span>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="min-h-screen px-4 py-4 text-ink lg:p-6">
      <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[2rem] border border-line bg-panel p-5 shadow-soft lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue text-lg font-black text-white shadow-card">CF</div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-ink">ClientFlow</p>
              <p className="text-sm font-bold text-muted">AI CRM dashboard</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {['Dashboard', 'Leads', 'Pipeline', 'AI Summary', 'Tasks', 'Settings'].map((item, index) => (
              <a key={item} href="#" className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black transition ${index === 0 ? 'bg-blue text-white shadow-card' : 'text-muted hover:bg-slate-100 hover:text-ink'}`}>
                <span>{item}</span>
                {index === 1 && <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">29</span>}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-[1.5rem] bg-gradient-to-br from-blue to-violet p-5 text-white shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.18em] opacity-80">AI assistant</p>
            <p className="mt-4 text-2xl font-black">12 заявок уже разобраны</p>
            <p className="mt-3 text-sm leading-6 text-white/80">AI выделил горячие лиды, бюджет и следующий шаг для менеджера.</p>
          </div>
        </aside>

        <section className="space-y-5">
          <header className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-blue">website · telegram · ai leads</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">CRM-панель для заявок, которые приходят с сайта и AI-помощника.</h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">ClientFlow показывает, как бизнес может обрабатывать заявки из лендинга, Telegram и AI-чата: статусы, приоритеты, summary, задачи и pipeline в одном интерфейсе.</p>
              </div>

              <div className="grid min-w-[280px] grid-cols-2 gap-3">
                <div className="rounded-3xl bg-soft p-5">
                  <p className="text-3xl font-black text-ink">29</p>
                  <p className="mt-1 text-sm font-bold text-muted">новых лидов</p>
                </div>
                <div className="rounded-3xl bg-blue/10 p-5">
                  <p className="text-3xl font-black text-blue">8</p>
                  <p className="mt-1 text-sm font-bold text-muted">горячих</p>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Metric label="Leads this week" value="142" delta="+18%" />
            <Metric label="Avg response" value="7m" delta="-32%" />
            <Metric label="AI qualified" value="64%" delta="+11%" />
            <Metric label="Won deals" value="12" delta="+4" />
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
            <section className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">lead inbox</p>
                  <h2 className="mt-2 text-2xl font-black text-ink">Новые заявки</h2>
                </div>
                <button className="rounded-2xl bg-ink px-5 py-3 text-sm font-black text-white">Export brief</button>
              </div>

              <div className="mt-6 space-y-4">
                {leads.map((lead) => (
                  <article key={lead.name} className="card-hover rounded-[1.7rem] border border-line bg-soft p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black text-ink">{lead.name}</h3>
                          <span className={`rounded-full px-3 py-1 text-xs font-black ${lead.color}`}>{lead.status}</span>
                        </div>
                        <p className="mt-2 text-sm font-bold text-muted">{lead.source} · {lead.project} · {lead.budget}</p>
                        <div className="mt-4 rounded-2xl border border-blue/10 bg-white p-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue">AI summary</p>
                          <p className="mt-2 text-sm leading-6 text-muted">{lead.ai}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 lg:flex-col">
                        <button className="rounded-2xl bg-blue px-4 py-3 text-sm font-black text-white">Open</button>
                        <button className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-black text-ink">Task</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <div className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-violet">pipeline</p>
                <div className="mt-6 space-y-3">
                  {pipeline.map(([name, count, cls]) => (
                    <div key={name} className="flex items-center justify-between rounded-2xl bg-soft p-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${cls}`}>{name}</span>
                      <span className="text-xl font-black text-ink">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan">today tasks</p>
                <div className="mt-6 space-y-3">
                  {tasks.map(([time, text]) => (
                    <div key={time} className="rounded-2xl border border-line bg-soft p-4">
                      <p className="text-sm font-black text-blue">{time}</p>
                      <p className="mt-1 text-sm font-bold leading-6 text-muted">{text}</p>
                    </div>
                  ))}
                </div>
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
                <div className="status-dot h-3 w-3 rounded-full bg-blue" />
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
