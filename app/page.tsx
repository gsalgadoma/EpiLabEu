'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Activity, ArrowRight, BookOpen, CheckCircle2, FlaskConical, HeartPulse,
  Microscope, RotateCcw, ShieldCheck, Stethoscope, Users, MapPinned,
  Landmark, Shuffle, GraduationCap, ClipboardCheck, ChevronRight,
} from 'lucide-react';
import {
  lessons, dssCases, outbreakCases, asisCases, policyCases,
  designCases, challengeQuestions, NursingCase,
} from './content';

type Module = 'home' | 'unidad1' | 'enfermeria' | 'medidas' | 'diagnostico' | 'disenos' | 'challenge';
type LabKey = 'dss' | 'brote' | 'asis' | 'politica';
type LessonTab = 'aprende' | 'aplica' | 'comprueba';

type MeasureConfig = {
  label: string;
  numeratorLabel: string;
  denominatorLabel: string;
  helper?: string;
  interpretation: string;
  defaultMultiplier: number;
  denominatorMode?: 'direct' | 'atRisk';
};

function percent(n: number) { return Number.isFinite(n) ? `${(n * 100).toFixed(1)}%` : '—'; }
function formatResult(value: number, multiplier: number) {
  if (!Number.isFinite(value)) return '—';
  if (multiplier === 100) return `${(value * 100).toFixed(2)}%`;
  return `${(value * multiplier).toFixed(2)} por ${multiplier.toLocaleString('es-CL')}`;
}

export default function Page() {
  const [module, setModule] = useState<Module>('home');
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('epilab-completed');
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  function toggleCompleted(id: string) {
    const next = completed.includes(id) ? completed.filter(x => x !== id) : [...completed, id];
    setCompleted(next);
    localStorage.setItem('epilab-completed', JSON.stringify(next));
  }

  return <main>
    <header className="topbar">
      <button className="brand" onClick={() => setModule('home')}>
        <span>EPI·LAB</span><small>Epidemiología y Salud Pública · Enfermería UANDES</small>
      </button>
      <nav>
        <button onClick={() => setModule('unidad1')}>Unidad I</button>
        <button onClick={() => setModule('enfermeria')}>Enfermería en acción</button>
        <button onClick={() => setModule('medidas')}>Medidas</button>
        <button className="nav-cta" onClick={() => setModule('challenge')}>Challenge</button>
      </nav>
    </header>

    {module === 'home' && <Home onGo={setModule} completed={completed.length} />}
    {module === 'unidad1' && <Unidad1 completed={completed} onToggle={toggleCompleted} />}
    {module === 'enfermeria' && <NursingLab />}
    {module === 'medidas' && <Medidas />}
    {module === 'diagnostico' && <Diagnostico />}
    {module === 'disenos' && <Disenos />}
    {module === 'challenge' && <Challenge />}

    <footer>
      <b>EPI·LAB</b> · Facultad de Enfermería y Obstetricia · Universidad de los Andes · 2026
    </footer>
  </main>;
}

function Home({ onGo, completed }: { onGo: (m: Module) => void; completed: number }) {
  const cards = [
    ['unidad1', BookOpen, '01', 'Unidad I · Salud Pública', 'Seis clases con aprendizaje breve, aplicación a Enfermería y autoevaluación.'],
    ['enfermeria', Stethoscope, '02', 'Enfermería en acción', 'Casos variables de DSS, brotes, análisis de situación de salud y políticas sanitarias.'],
    ['medidas', Activity, '03', 'Laboratorio epidemiológico', 'Calcula e interpreta prevalencia, incidencia, mortalidad, letalidad y otras medidas.'],
    ['challenge', GraduationCap, '04', 'EPI Challenge', 'Desafío integrador con banco amplio de preguntas y retroalimentación inmediata.'],
  ] as const;

  return <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">PLATAFORMA INTERACTIVA · ENFERMERÍA UANDES</span>
        <h1>Aprende salud pública <em>tomando decisiones.</em></h1>
        <p>Una ruta de aprendizaje centrada en situaciones que una futura enfermera o enfermero debe reconocer, interpretar y resolver.</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => onGo('unidad1')}>Comenzar Unidad I <ArrowRight size={18}/></button>
          <button className="secondary" onClick={() => onGo('enfermeria')}>Ir a simulaciones</button>
        </div>
        <div className="hero-stats">
          <div><b>6</b><span>clases guiadas</span></div>
          <div><b>28+</b><span>casos variables</span></div>
          <div><b>{completed}/6</b><span>clases marcadas</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="pulse">EPI<span>LAB</span></div>
        <div className="orb o1">DSS</div><div className="orb o2">ASIS</div><div className="orb o3">Dx</div><div className="orb o4">APS</div>
      </div>
    </section>

    <section className="section">
      <div className="section-title"><span>RUTA DE APRENDIZAJE</span><h2>De los conceptos a la decisión profesional</h2><p>La plataforma evita que el estudio sea solo memorístico: cada módulo pide observar, priorizar, interpretar y actuar.</p></div>
      <div className="grid4">{cards.map(([id, Icon, n, title, text]) => <button className="module-card" key={id} onClick={() => onGo(id)}><div className="module-top"><Icon/><b>{n}</b></div><h3>{title}</h3><p>{text}</p><span>Explorar <ArrowRight size={16}/></span></button>)}</div>
    </section>

    <section className="section white-section">
      <div className="section-title"><span>PARA DOS SECCIONES DE 60</span><h2>Variabilidad suficiente para trabajar en grupos sin repetir siempre el mismo caso</h2></div>
      <div className="feature-grid">
        <div className="feature"><Shuffle/><h3>Variantes aleatorias</h3><p>Cada laboratorio dispone de múltiples escenarios. Un clic entrega otra variante para distribuir entre grupos.</p></div>
        <div className="feature"><Users/><h3>Trabajo colaborativo</h3><p>Los casos están pensados para discutir primero en duplas o grupos pequeños y responder después.</p></div>
        <div className="feature"><ClipboardCheck/><h3>Feedback inmediato</h3><p>La respuesta correcta se acompaña de razonamiento, acción de Enfermería y una pregunta de reflexión.</p></div>
      </div>
    </section>
  </>;
}

function Shell({ kicker, title, text, children }: any) {
  return <section className="tool-page"><div className="tool-head"><span>{kicker}</span><h1>{title}</h1><p>{text}</p></div>{children}</section>;
}

function Unidad1({ completed, onToggle }: { completed: string[]; onToggle: (id: string) => void }) {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [tab, setTab] = useState<LessonTab>('aprende');
  const lesson = lessons[lessonIndex];

  return <Shell kicker="UNIDAD I · SALUD PÚBLICA" title="Estudia, aplica y comprueba" text="Cada clase conserva los contenidos centrales de la asignatura, pero los lleva a situaciones de Enfermería.">
    <div className="lesson-layout">
      <aside className="lesson-nav">
        {lessons.map((l, i) => <button key={l.id} className={i === lessonIndex ? 'active' : ''} onClick={() => { setLessonIndex(i); setTab('aprende'); }}>
          <span>{completed.includes(l.id) ? '✓' : l.number}</span><div><b>{l.title}</b><small>{l.subtitle}</small></div>
        </button>)}
      </aside>

      <div className="lesson-main">
        <div className="lesson-title"><span>CLASE {lesson.number}</span><h2>{lesson.title}</h2><p>{lesson.subtitle}</p></div>
        <div className="tabs">
          <button className={tab === 'aprende' ? 'active' : ''} onClick={() => setTab('aprende')}>Aprende</button>
          <button className={tab === 'aplica' ? 'active' : ''} onClick={() => setTab('aplica')}>Aplicación a Enfermería</button>
          <button className={tab === 'comprueba' ? 'active' : ''} onClick={() => setTab('comprueba')}>Comprueba</button>
        </div>

        {tab === 'aprende' && <div className="lesson-content">
          <div className="summary-box"><BookOpen/><div><b>Idea central</b><p>{lesson.summary}</p></div></div>
          <div className="concept-grid">{lesson.concepts.map(c => <div className="concept-card" key={c.title}><h3>{c.title}</h3><p>{c.text}</p></div>)}</div>
          <div className="chips">{lesson.keyIdeas.map(k => <span key={k}>{k}</span>)}</div>
        </div>}

        {tab === 'aplica' && <div className="lesson-content">
          <div className="nursing-box"><Stethoscope/><div><b>¿Qué significa esto para Enfermería?</b><p>{lesson.nursingLens}</p></div></div>
          <TransferExercise lessonId={lesson.id} />
        </div>}

        {tab === 'comprueba' && <LessonQuiz lessonIndex={lessonIndex} />}

        <div className="lesson-bottom">
          <button className={completed.includes(lesson.id) ? 'secondary dark' : 'primary'} onClick={() => onToggle(lesson.id)}>
            {completed.includes(lesson.id) ? '✓ Clase marcada como revisada' : 'Marcar clase como revisada'}
          </button>
          {lessonIndex < lessons.length - 1 && <button className="secondary dark" onClick={() => { setLessonIndex(i => i + 1); setTab('aprende'); }}>Siguiente clase <ChevronRight size={17}/></button>}
        </div>
      </div>
    </div>
  </Shell>;
}

function TransferExercise({ lessonId }: { lessonId: string }) {
  const prompts: Record<string, { scenario: string; question: string; hints: string[] }> = {
    'salud-publica': { scenario:'En un CESFAM aumentan las consultas por síntomas respiratorios durante una misma semana.', question:'¿Qué harías además del cuidado individual para incorporar una mirada poblacional?', hints:['Buscar patrón por persona, lugar y tiempo','Revisar cobertura preventiva','Coordinar educación y vigilancia'] },
    'historia': { scenario:'En una residencia aparecen varios cuadros gastrointestinales en poco tiempo.', question:'¿Qué elementos del método de John Snow puedes trasladar a este escenario?', hints:['Mapear casos','Explorar exposiciones comunes','Comparar enfermos y no enfermos'] },
    'dss': { scenario:'Una persona falta a controles porque vive lejos, trabaja por turnos y no tiene red de apoyo.', question:'¿Cómo cambia tu valoración si incorporas DSS?', hints:['Barreras de acceso','Condiciones laborales','Red social y recursos'] },
    'situacion-salud': { scenario:'Tu comuna tiene alta prevalencia de diabetes, baja cobertura de control y envejecimiento acelerado.', question:'¿Qué información necesitas antes de priorizar?', hints:['Magnitud','Tendencia','Vulnerabilidad','Capacidad de respuesta'] },
    'sistemas': { scenario:'Un usuario no entiende dónde continuar control tras un alta hospitalaria.', question:'¿Qué rol cumple Enfermería en la navegación del sistema?', hints:['Continuidad','Derivación','Educación','Coordinación de red'] },
    'politicas': { scenario:'Se implementa una nueva política, pero los usuarios siguen sin acceder oportunamente.', question:'¿Qué observarías para saber si el problema está en diseño o implementación?', hints:['Recursos','Flujos','Barreras reales','Indicadores de proceso'] },
  };
  const p = prompts[lessonId];
  return <div className="transfer-card"><span>TRANSFERENCIA A LA PRÁCTICA</span><h3>{p.scenario}</h3><p>{p.question}</p><div className="hint-grid">{p.hints.map(x => <span key={x}>{x}</span>)}</div></div>;
}

function LessonQuiz({ lessonIndex }: { lessonIndex: number }) {
  const items = lessons[lessonIndex].quiz;
  const [q, setQ] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const item = items[q];
  const done = q === items.length - 1 && picked !== null;

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === item.answer) setScore(s => s + 1);
  }
  function next() { setQ(i => i + 1); setPicked(null); }
  function reset() { setQ(0); setPicked(null); setScore(0); }

  return <div className="quiz-card">
    <span>PREGUNTA {q + 1} DE {items.length}</span><h3>{item.q}</h3>
    <div className="answers">{item.options.map((o, i) => <button key={o} onClick={() => choose(i)} className={picked === null ? '' : i === item.answer ? 'correct' : picked === i ? 'wrong' : ''}>{o}</button>)}</div>
    {picked !== null && <div className={`explain ${picked === item.answer ? 'ok' : 'no'}`}><b>{picked === item.answer ? 'Correcto' : 'Revisa la idea'}</b><p>{item.feedback}</p></div>}
    <div className="case-actions"><span>Puntaje: {score}/{items.length}</span>{!done ? <button className="primary" disabled={picked === null} onClick={next}>Continuar <ArrowRight size={17}/></button> : <button className="secondary dark" onClick={reset}><RotateCcw size={17}/> Repetir</button>}</div>
  </div>;
}

const labMeta: Record<LabKey, { title: string; subtitle: string; icon: any; cases: NursingCase[] }> = {
  dss: { title:'DSS en la valoración de Enfermería', subtitle:'Identifica cómo contexto, acceso y vulnerabilidad cambian el cuidado.', icon:Users, cases:dssCases },
  brote: { title:'Simulador de brotes', subtitle:'Observa patrones, formula hipótesis y decide acciones iniciales.', icon:ShieldCheck, cases:outbreakCases },
  asis: { title:'Dashboard de situación de salud', subtitle:'Prioriza problemas poblacionales usando datos y criterios explícitos.', icon:MapPinned, cases:asisCases },
  politica: { title:'Políticas de salud', subtitle:'Toma decisiones con recursos limitados y analiza implementación y equidad.', icon:Landmark, cases:policyCases },
};

function NursingLab() {
  const [lab, setLab] = useState<LabKey>('dss');
  const [idx, setIdx] = useState(0);
  const meta = labMeta[lab];
  const current = meta.cases[idx % meta.cases.length];

  function setLabKey(k: LabKey) { setLab(k); setIdx(0); }
  function randomCase() {
    let next = Math.floor(Math.random() * meta.cases.length);
    if (next === idx && meta.cases.length > 1) next = (next + 1) % meta.cases.length;
    setIdx(next);
  }

  return <Shell kicker="ENFERMERÍA EN ACCIÓN" title="Simulaciones para aprender desde la disciplina" text="Diseñadas para trabajar individualmente, en duplas o en grupos. Cada laboratorio tiene múltiples variantes para dos secciones de 60 estudiantes.">
    <div className="lab-tabs">
      {(Object.keys(labMeta) as LabKey[]).map(k => { const Icon = labMeta[k].icon; return <button key={k} className={lab === k ? 'active' : ''} onClick={() => setLabKey(k)}><Icon size={18}/>{labMeta[k].title}</button>; })}
    </div>
    <div className="lab-intro"><div><span>{current.id}</span><h2>{meta.title}</h2><p>{meta.subtitle}</p></div><button className="secondary dark" onClick={randomCase}><Shuffle size={17}/> Otra variante</button></div>
    <DecisionCase key={current.id} item={current} total={meta.cases.length} onNext={() => setIdx(i => (i + 1) % meta.cases.length)} />
  </Shell>;
}

function DecisionCase({ item, total, onNext }: { item: NursingCase; total: number; onNext: () => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const ok = picked === item.answer;
  return <div className="simulation-grid">
    <div className="scenario-card">
      <div className="scenario-top"><span>{item.setting}</span><small>Banco de {total} variantes</small></div>
      <h2>{item.title}</h2><p className="scenario-text">{item.scenario}</p>
      <h4>Datos disponibles</h4><div className="data-list">{item.data.map(d => <div key={d}><CheckCircle2 size={16}/>{d}</div>)}</div>
    </div>
    <div className="decision-card">
      <span>TOMA UNA DECISIÓN</span><h3>{item.question}</h3>
      <div className="answers one-col">{item.options.map((o, i) => <button key={o} onClick={() => picked === null && setPicked(i)} className={picked === null ? '' : i === item.answer ? 'correct' : picked === i ? 'wrong' : ''}>{o}</button>)}</div>
      {picked !== null && <>
        <div className={`explain ${ok ? 'ok' : 'no'}`}><b>{ok ? 'Decisión adecuada' : 'Revisa el razonamiento'}</b><p>{item.feedback}</p></div>
        <div className="nursing-action"><Stethoscope size={19}/><div><b>Acción de Enfermería</b><p>{item.nursingAction}</p></div></div>
        <div className="reflection"><b>Para discutir en grupo</b><p>{item.reflection}</p></div>
      </>}
      <div className="case-actions"><span>{item.id}</span><button className="primary" disabled={picked === null} onClick={onNext}>Siguiente variante <ArrowRight size={17}/></button></div>
    </div>
  </div>;
}

function Medidas() {
  const configs: Record<string, MeasureConfig> = {
    prevalencia:{label:'Prevalencia',numeratorLabel:'Casos existentes',denominatorLabel:'Población total',interpretation:'Proporción de personas que presentan la condición en el momento o periodo estudiado.',defaultMultiplier:100},
    incidencia:{label:'Incidencia acumulada',numeratorLabel:'Casos nuevos durante el período',denominatorLabel:'Población en riesgo al inicio',helper:'La población en riesgo excluye a quienes ya tenían la enfermedad al inicio.',interpretation:'Proporción de personas en riesgo que desarrollan el evento durante el período.',defaultMultiplier:100,denominatorMode:'atRisk'},
    densidad:{label:'Tasa de incidencia',numeratorLabel:'Casos nuevos',denominatorLabel:'Personas-tiempo',helper:'Usa la suma del tiempo aportado por cada persona en seguimiento.',interpretation:'Velocidad con que aparecen casos nuevos en relación con el tiempo total observado.',defaultMultiplier:1000},
    mortalidad:{label:'Mortalidad general',numeratorLabel:'Defunciones totales',denominatorLabel:'Población media del período',interpretation:'Frecuencia de muertes en la población durante el período.',defaultMultiplier:1000},
    mortalidadEspecifica:{label:'Mortalidad específica por causa',numeratorLabel:'Defunciones por la causa',denominatorLabel:'Población correspondiente',interpretation:'Frecuencia de muertes por una causa específica en la población estudiada.',defaultMultiplier:100000},
    letalidad:{label:'Letalidad',numeratorLabel:'Defunciones por la enfermedad',denominatorLabel:'Casos de la enfermedad',interpretation:'Proporción de personas enfermas que fallecen por esa enfermedad.',defaultMultiplier:100},
    natalidad:{label:'Tasa de natalidad',numeratorLabel:'Nacidos vivos durante el período',denominatorLabel:'Población media del período',interpretation:'Frecuencia de nacidos vivos en relación con la población durante el período.',defaultMultiplier:1000},
    ataque:{label:'Tasa de ataque',numeratorLabel:'Casos nuevos durante el brote',denominatorLabel:'Población expuesta o en riesgo',interpretation:'Proporción de personas expuestas que enferman durante un brote.',defaultMultiplier:100},
  };
  const [type, setType] = useState('prevalencia');
  const [numerator, setNumerator] = useState(40), [denominator, setDenominator] = useState(250);
  const [totalPopulation, setTotalPopulation] = useState(1200), [existingCases, setExistingCases] = useState(80);
  const [multiplier, setMultiplier] = useState(configs.prevalencia.defaultMultiplier);
  const config = configs[type];
  const effectiveDenominator = config.denominatorMode === 'atRisk' ? Math.max(totalPopulation - existingCases, 0) : denominator;
  const result = effectiveDenominator > 0 ? numerator / effectiveDenominator : NaN;
  function changeMeasure(next: string) { setType(next); setMultiplier(configs[next].defaultMultiplier); }

  return <Shell kicker="LABORATORIO EPIDEMIOLÓGICO" title="Calculadora con poblaciones diferenciadas" text="La dificultad no está solo en dividir: está en reconocer correctamente quién pertenece al numerador y al denominador.">
    <div className="tool-grid"><div className="panel">
      <label>Medida epidemiológica</label><select value={type} onChange={e => changeMeasure(e.target.value)}>{Object.entries(configs).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}</select>
      {config.denominatorMode === 'atRisk' ? <><div className="input-grid"><div><label>Población total al inicio</label><input type="number" min="0" value={totalPopulation} onChange={e => setTotalPopulation(+e.target.value)}/></div><div><label>Casos existentes al inicio</label><input type="number" min="0" value={existingCases} onChange={e => setExistingCases(+e.target.value)}/></div><div><label>{config.numeratorLabel}</label><input type="number" min="0" value={numerator} onChange={e => setNumerator(+e.target.value)}/></div><div><label>Población en riesgo calculada</label><input value={effectiveDenominator} readOnly/></div></div><div className="feedback dark-feedback">Población en riesgo = {totalPopulation} − {existingCases} = <b>{effectiveDenominator}</b></div></> : <div className="input-grid"><div><label>{config.numeratorLabel}</label><input type="number" min="0" value={numerator} onChange={e => setNumerator(+e.target.value)}/></div><div><label>{config.denominatorLabel}</label><input type="number" min="0" value={denominator} onChange={e => setDenominator(+e.target.value)}/></div></div>}
      {config.helper && <p className="helper">{config.helper}</p>}
      <label>Expresar resultado como</label><select value={multiplier} onChange={e => setMultiplier(+e.target.value)}><option value={100}>Porcentaje (%)</option><option value={1000}>Por 1.000</option><option value={10000}>Por 10.000</option><option value={100000}>Por 100.000</option></select>
      <div className="formula">{numerator} ÷ {effectiveDenominator || '—'} × {multiplier.toLocaleString('es-CL')}</div>
    </div><div className="result-card"><span>RESULTADO</span><strong>{formatResult(result,multiplier)}</strong><p>{config.interpretation}</p><div className="feedback"><CheckCircle2/> Interpreta el resultado en relación con población, período y unidad de expresión.</div></div></div>
  </Shell>;
}

function Diagnostico() {
  const [vp,setVp]=useState(80), [fp,setFp]=useState(20), [fn,setFn]=useState(10), [vn,setVn]=useState(90);
  const se=vp/(vp+fn), sp=vn/(vn+fp), vpp=vp/(vp+fp), vpn=vn/(vn+fn);
  return <Shell kicker="LABORATORIO EPIDEMIOLÓGICO" title="Pruebas diagnósticas" text="Modifica la tabla 2×2 y observa cómo cambian sensibilidad, especificidad y valores predictivos.">
    <div className="diag-layout"><div className="panel"><div className="table2x2"><div></div><b>Enfermedad +</b><b>Enfermedad −</b><b>Test +</b><input value={vp} onChange={e=>setVp(+e.target.value)}/><input value={fp} onChange={e=>setFp(+e.target.value)}/><b>Test −</b><input value={fn} onChange={e=>setFn(+e.target.value)}/><input value={vn} onChange={e=>setVn(+e.target.value)}/></div></div><div className="metrics"><Metric name="Sensibilidad" value={se} note="Detecta correctamente a quienes tienen la enfermedad."/><Metric name="Especificidad" value={sp} note="Identifica correctamente a quienes no tienen la enfermedad."/><Metric name="VPP" value={vpp} note="Probabilidad de enfermedad dado un test positivo."/><Metric name="VPN" value={vpn} note="Probabilidad de no enfermedad dado un test negativo."/></div></div>
  </Shell>;
}
function Metric({name,value,note}:any){return <div className="metric"><span>{name}</span><strong>{percent(value)}</strong><p>{note}</p></div>}

function Disenos(){
  const [i,setI]=useState(0), [selected,setSelected]=useState('');
  const d=designCases[i];
  const options=['Transversal','Cohorte','Caso-control','Ensayo clínico aleatorizado','Cuasiexperimental'];
  const ok=selected===d.a;
  return <Shell kicker="LABORATORIO EPIDEMIOLÓGICO" title="Selector de diseños" text="Ocho escenarios aplicados para reconocer cómo se obtuvo la información y qué diseño corresponde.">
    <div className="case-card"><span>CASO {i+1} DE {designCases.length}</span><h2>{d.q}</h2><div className="answers">{options.map(o=><button key={o} className={selected===o?(ok?'correct':'wrong'):''} onClick={()=>setSelected(o)}>{o}</button>)}</div>{selected&&<div className={`explain ${ok?'ok':'no'}`}><b>{ok?'Correcto':'Revisa tu elección'}</b><p>{d.why}</p></div>}<div className="case-actions"><span>Diseño epidemiológico</span><button className="primary" onClick={()=>{setI((i+1)%designCases.length);setSelected('')}}>Siguiente <ArrowRight size={17}/></button></div></div>
  </Shell>;
}

function Challenge(){
  const set = useMemo(() => [...challengeQuestions].sort(() => Math.random() - .5).slice(0,10), []);
  const [idx,setIdx]=useState(0), [score,setScore]=useState(0), [done,setDone]=useState(false), [picked,setPicked]=useState<number|null>(null);
  const q=set[idx];
  function choose(j:number){if(picked!==null)return;setPicked(j);if(j===q.answer)setScore(s=>s+1)}
  function next(){if(idx===set.length-1)setDone(true);else{setIdx(i=>i+1);setPicked(null)}}
  function reset(){window.location.reload()}
  return <Shell kicker="DESAFÍO INTEGRADOR" title="EPI Challenge" text="Cada intento selecciona 10 preguntas desde un banco mayor, combinando Salud Pública, Enfermería y Epidemiología.">
    {!done?<div className="case-card challenge-card"><div className="progress"><i style={{width:`${((idx+1)/set.length)*100}%`}}/></div><span>PREGUNTA {idx+1} DE {set.length}</span><h2>{q.q}</h2><div className="answers">{q.options.map((o,j)=><button key={o} onClick={()=>choose(j)} className={picked===null?'':j===q.answer?'correct':picked===j?'wrong':''}>{o}</button>)}</div>{picked!==null&&<div className={`explain ${picked===q.answer?'ok':'no'}`}><b>{picked===q.answer?'¡Bien!':'Respuesta incorrecta'}</b><p>{q.feedback}</p></div>}<div className="case-actions"><span>Puntaje: {score}</span><button className="primary" disabled={picked===null} onClick={next}>{idx===set.length-1?'Ver resultado':'Continuar'} <ArrowRight size={17}/></button></div></div>:<div className="finish"><GraduationCap size={42}/><span>DESAFÍO COMPLETADO</span><strong>{score}/{set.length}</strong><h2>{score>=9?'Excelente integración':score>=7?'Buen desempeño':score>=5?'Base en desarrollo':'Conviene reforzar la ruta de aprendizaje'}</h2><p>El objetivo no es memorizar: es conectar población, contexto, evidencia y decisiones de Enfermería.</p><button className="primary" onClick={reset}><RotateCcw size={17}/> Nuevo desafío</button></div>}
  </Shell>;
}
