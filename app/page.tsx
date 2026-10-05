'use client';

import { useMemo, useState } from 'react';
import {
  Activity, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, CircleHelp,
  FlaskConical, HeartPulse, Landmark, Microscope, Network, RotateCcw,
  ShieldCheck, Stethoscope, UsersRound
} from 'lucide-react';

type Screen = 'home' | 'unidad1' | 'medidas' | 'diagnostico' | 'disenos' | 'challenge';
type LessonId = 'fundamentos' | 'historia' | 'dss' | 'situacion' | 'sistemas' | 'politicas';

type Lesson = {
  id: LessonId;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  concepts: { title: string; text: string }[];
  takeaways: string[];
  quiz: { question: string; options: string[]; correct: number; feedback: string };
  reading?: string[];
};

type MeasureConfig = {
  label: string;
  numeratorLabel: string;
  denominatorLabel: string;
  helper?: string;
  interpretation: string;
  defaultMultiplier: number;
  denominatorMode?: 'direct' | 'atRisk';
};

const lessons: Lesson[] = [
  {
    id: 'fundamentos', number: '01', title: 'Introducción a la Salud Pública',
    subtitle: 'Población, bienestar y acción colectiva',
    intro: 'La salud pública estudia la salud y la enfermedad en poblaciones y busca proteger, promover y mejorar el bienestar mediante prevención, políticas, programas y acción organizada.',
    concepts: [
      { title: 'Salud pública', text: 'Su unidad de interés es la población. Integra promoción de la salud, prevención de enfermedades, protección sanitaria y mejora de los sistemas de salud.' },
      { title: 'Clínica vs. salud pública', text: 'La clínica se centra principalmente en diagnóstico y tratamiento individual; la salud pública analiza problemas colectivos y actúa mediante programas, vigilancia, educación y políticas.' },
      { title: 'Trabajo interdisciplinario', text: 'Integra epidemiología, bioestadística, demografía, economía, ciencias biológicas, administración, política, psicología, antropología y sociología.' },
      { title: 'Funciones esenciales', text: 'Conocer los problemas de salud, prevenir y promover, proteger a la población y mejorar continuamente el sistema utilizando evidencia.' },
    ],
    takeaways: ['Pensar en poblaciones, no solo en individuos.', 'Usar información para priorizar necesidades.', 'Combinar prevención, promoción, protección y políticas públicas.'],
    quiz: { question: '¿Cuál de las siguientes acciones representa mejor un enfoque de salud pública?', options: ['Ajustar el tratamiento de un paciente con influenza', 'Implementar una campaña comunal de vacunación y vigilancia', 'Solicitar una radiografía a una persona', 'Indicar un antibiótico individual'], correct: 1, feedback: 'La salud pública actúa sobre poblaciones mediante intervenciones colectivas como vacunación, vigilancia, educación y políticas.' },
  },
  {
    id: 'historia', number: '02', title: 'Hitos históricos de la Salud Pública',
    subtitle: 'De la higiene urbana al método epidemiológico',
    intro: 'La salud pública moderna se construyó como respuesta a problemas sociales, ambientales y científicos que obligaron a intervenir más allá del individuo.',
    concepts: [
      { title: 'Revolución Industrial', text: 'La urbanización acelerada, el hacinamiento y la falta de agua potable y alcantarillado favorecieron epidemias y evidenciaron la necesidad de intervenciones colectivas.' },
      { title: 'John Snow · 1854', text: 'Investigó un brote de cólera mediante mapas y entrevistas, relacionó los casos con agua contaminada y mostró el valor de la evidencia para controlar brotes.' },
      { title: 'Teoría germinal', text: 'Pasteur y Koch ayudaron a establecer que microorganismos específicos causan enfermedades, fortaleciendo higiene, esterilización, vacunación y prevención.' },
      { title: 'Salud como derecho', text: 'La evolución posterior incorporó seguridad social, servicios nacionales de salud y el reconocimiento de la salud como responsabilidad colectiva y derecho.' },
    ],
    takeaways: ['Los problemas sanitarios cambian la organización social.', 'La observación sistemática puede transformar una política sanitaria.', 'La prevención moderna combina ambiente, evidencia y organización del Estado.'],
    quiz: { question: '¿Qué elemento distingue especialmente el aporte de John Snow?', options: ['Descubrió el primer antibiótico', 'Utilizó evidencia poblacional para investigar un brote', 'Creó el primer hospital', 'Demostró la teoría genética'], correct: 1, feedback: 'Snow utilizó mapas, entrevistas y patrones poblacionales para relacionar el brote de cólera con una fuente de agua.' },
  },
  {
    id: 'dss', number: '03', title: 'Determinantes Sociales de la Salud',
    subtitle: 'Comprender por qué la salud se distribuye de forma desigual',
    intro: 'Los DSS corresponden a las condiciones en que las personas nacen, crecen, viven, trabajan y envejecen, incluido el sistema de salud. Ayudan a explicar diferencias e inequidades en salud.',
    concepts: [
      { title: 'Equidad', text: 'La equidad implica ausencia de diferencias injustas, evitables o remediables en salud entre grupos definidos social, económica, demográfica o geográficamente.' },
      { title: 'DSS estructurales', text: 'Contexto socioeconómico y político, posición social, educación, ocupación e ingreso contribuyen a producir estratificación social e inequidades.' },
      { title: 'DSS intermediarios', text: 'Incluyen condiciones materiales, factores psicosociales, conductas asociadas a salud, factores biológicos y el propio sistema de salud.' },
      { title: 'Exposición y vulnerabilidad diferencial', text: 'Los grupos sociales pueden estar expuestos a riesgos distintos, presentar diferente vulnerabilidad y sufrir consecuencias sociales y económicas desiguales.' },
    ],
    takeaways: ['Desigualdad no es sinónimo automático de inequidad.', 'Los estilos de vida están condicionados por contextos sociales.', 'El sistema de salud puede reducir o reproducir brechas.'],
    quiz: { question: '¿Cuál corresponde mejor a un determinante estructural?', options: ['Tipo de vivienda', 'Estrés psicosocial', 'Nivel educacional', 'Acceso inmediato a un CESFAM'], correct: 2, feedback: 'Educación, ocupación e ingreso son indicadores centrales de posición socioeconómica y determinantes estructurales.' },
  },
  {
    id: 'situacion', number: '04', title: 'Situación de Salud de la Población',
    subtitle: 'Conocer → decidir → actuar',
    intro: 'El análisis de situación de salud utiliza información para describir necesidades, establecer prioridades, planificar acciones, movilizar recursos y evaluar intervenciones.',
    concepts: [
      { title: 'ASIS', text: 'Integra conceptos, métodos y actividades para medir y monitorear el proceso salud-enfermedad-servicios y apoyar una gestión oportuna, participativa y estratégica.' },
      { title: 'Transición demográfica', text: 'El paso desde altas tasas de natalidad y mortalidad hacia tasas bajas modifica la estructura por edad y aumenta la relevancia del envejecimiento y la cronicidad.' },
      { title: 'Pirámide poblacional', text: 'Permite visualizar la distribución por edad y sexo. Una forma regresiva refleja baja natalidad, predominio adulto y envejecimiento creciente.' },
      { title: 'Más allá de los registros', text: 'Muertes, hospitalizaciones y consultas representan solo parte de la situación de salud; también importan enfermedad no consultante, funcionalidad, factores de riesgo y calidad de vida.' },
    ],
    takeaways: ['Los datos deben transformarse en decisiones.', 'La estructura demográfica condiciona las necesidades sanitarias.', 'La morbilidad registrada puede subestimar el problema real.'],
    quiz: { question: '¿Cuál es el propósito principal del análisis de situación de salud?', options: ['Describir datos sin tomar decisiones', 'Apoyar priorización, planificación y evaluación', 'Reemplazar la atención clínica', 'Medir únicamente mortalidad'], correct: 1, feedback: 'El ASIS busca producir información útil para priorizar, planificar, actuar y evaluar políticas e intervenciones.' },
  },
  {
    id: 'sistemas', number: '05', title: 'Sistemas de Salud',
    subtitle: 'Financiamiento, organización y respuesta a las necesidades',
    intro: 'Un sistema de salud reúne organizaciones, instituciones y recursos orientados a mejorar la salud. Debe mantener a la población sana, tratar a quienes enferman y proteger financieramente a las familias.',
    concepts: [
      { title: 'Modelos generales', text: 'Los modelos comparados incluyen Servicio Nacional de Salud (Beveridge), Seguridad Social (Bismarck), Seguro Nacional y pago predominantemente privado.' },
      { title: 'Financiamiento', text: 'Puede provenir de impuestos, cotizaciones o seguros y pagos directos. La forma de financiamiento influye en acceso, equidad y protección financiera.' },
      { title: 'Chile: sistema mixto', text: 'El sistema chileno combina aseguramiento público mediante FONASA y aseguramiento privado mediante ISAPRE, junto con prestadores públicos y privados.' },
      { title: 'Desafíos del sistema', text: 'Fragmentación, listas de espera, gasto de bolsillo, brechas de acceso y envejecimiento obligan a fortalecer coordinación, atención primaria e integración.' },
    ],
    takeaways: ['No existe un único modelo de sistema de salud.', 'Financiamiento y provisión son dimensiones diferentes.', 'Chile combina componentes públicos y privados.'],
    quiz: { question: '¿Qué característica describe al sistema de salud chileno?', options: ['Es exclusivamente privado', 'Es exclusivamente estatal', 'Es un sistema mixto con FONASA e ISAPRE', 'No posee aseguramiento'], correct: 2, feedback: 'Chile posee un sistema mixto con aseguramiento público y privado y una provisión también mixta.' },
    reading: ['Aguilera (2025): El sistema de salud chileno: trayectoria, desafíos y transformaciones.'],
  },
  {
    id: 'politicas', number: '06', title: 'Políticas y Reforma de Salud',
    subtitle: 'Del problema público a la evaluación de una política',
    intro: 'Las políticas públicas de salud surgen de problemas puestos en agenda y se expresan mediante leyes, programas, normas y estrategias. Su desarrollo requiere diagnóstico, factibilidad, decisión, implementación y evaluación.',
    concepts: [
      { title: 'Ciclo de política', text: 'Definición del problema → diagnóstico de causas → desarrollo → decisión política → implementación → evaluación → redefinición.' },
      { title: 'Políticas y DSS', text: 'Las políticas sanitarias buscan asegurar condiciones saludables, acceso a atención y bienestar, idealmente actuando sobre determinantes sociales y derechos humanos.' },
      { title: 'Reforma y GES', text: 'La reforma chilena fortaleció un régimen de garantías explícitas orientadas a acceso, calidad, oportunidad y protección financiera para problemas priorizados.' },
      { title: 'Caso Ley Ricarte Soto', text: 'La Ley 20.850 crea protección financiera para diagnósticos y tratamientos de alto costo y permite discutir priorización, equidad, evidencia, recursos y participación de actores.' },
    ],
    takeaways: ['Las políticas requieren definir claramente el problema.', 'La implementación y evaluación son tan importantes como el diseño.', 'Priorizar implica decisiones éticas, económicas y sanitarias.'],
    quiz: { question: '¿Cuál NO corresponde a una garantía explícita del GES?', options: ['Acceso', 'Calidad', 'Oportunidad', 'Rentabilidad'], correct: 3, feedback: 'GES contempla acceso, calidad, oportunidad y protección financiera.' },
    reading: ['Bastías y Valdivia: Reforma de salud en Chile y evolución del GES.', 'Saldías-Fernández et al. (2025): Ley Ricarte Soto, un particular estudio de caso para reflexionar.'],
  },
];

const designs = [
  { q: 'Queremos estimar la frecuencia actual de obesidad en estudiantes de Enfermería.', a: 'Transversal', why: 'Mide exposición y desenlace en un punto o periodo definido.' },
  { q: 'Seguimos durante 5 años a enfermeras expuestas y no expuestas a turnos nocturnos para observar hipertensión.', a: 'Cohorte', why: 'Parte desde la exposición y observa la aparición posterior del desenlace.' },
  { q: 'Comparamos pacientes con úlceras por presión con pacientes sin úlceras y revisamos exposición previa a inmovilidad.', a: 'Caso-control', why: 'Parte desde el desenlace y reconstruye exposiciones previas.' },
  { q: 'Asignamos aleatoriamente una intervención educativa sobre autocuidado y comparamos resultados entre grupos.', a: 'Ensayo clínico aleatorizado', why: 'Existe intervención y asignación aleatoria.' },
];

function percent(n: number) { return Number.isFinite(n) ? `${(n * 100).toFixed(1)}%` : '—'; }
function formatResult(value: number, multiplier: number) {
  if (!Number.isFinite(value)) return '—';
  if (multiplier === 100) return `${(value * 100).toFixed(2)}%`;
  return `${(value * multiplier).toFixed(2)} por ${multiplier.toLocaleString('es-CL')}`;
}

export default function Page() {
  const [screen, setScreen] = useState<Screen>('home');
  const [lessonId, setLessonId] = useState<LessonId>('fundamentos');

  function openLesson(id: LessonId) {
    setLessonId(id);
    setScreen('unidad1');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return <main>
    <header className="topbar">
      <button className="brand" onClick={() => setScreen('home')}>
        <span>EPI·LAB</span><small>Epidemiología y Salud Pública · Enfermería UANDES</small>
      </button>
      <nav>
        <button onClick={() => setScreen('unidad1')}>Unidad I</button>
        <button onClick={() => setScreen('medidas')}>Epidemiología</button>
        <button className="nav-cta" onClick={() => setScreen('challenge')}>EPI Challenge</button>
      </nav>
    </header>

    {screen === 'home' && <Home onGo={setScreen} onLesson={openLesson} />}
    {screen === 'unidad1' && <Unidad1 selected={lessonId} onSelect={setLessonId} />}
    {screen === 'medidas' && <Medidas />}
    {screen === 'diagnostico' && <Diagnostico />}
    {screen === 'disenos' && <Disenos />}
    {screen === 'challenge' && <Challenge />}

    <footer>
      <div className="footer-brand"><b>Universidad de los Andes</b><span>Facultad de Enfermería y Obstetricia</span></div>
      <span>EPI·LAB · Recurso docente 2026</span>
    </footer>
  </main>;
}

function Home({ onGo, onLesson }: { onGo: (s: Screen) => void; onLesson: (id: LessonId) => void }) {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">EPIDEMIOLOGÍA Y SALUD PÚBLICA · ENFERMERÍA UANDES</span>
        <h1>Comprende la salud poblacional. <em>Aprende tomando decisiones.</em></h1>
        <p>EPI·LAB integra los contenidos de Salud Pública con herramientas interactivas de Epidemiología para estudiar, practicar e interpretar.</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => onGo('unidad1')}>Explorar Unidad I <ArrowRight size={18}/></button>
          <button className="secondary" onClick={() => onGo('medidas')}>Ir al laboratorio epidemiológico</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="faculty-mark"><span>UANDES</span><b>Facultad de<br/>Enfermería y<br/>Obstetricia</b></div>
        <div className="pulse">EPI<span>LAB</span></div>
      </div>
    </section>

    <section className="section unit-section">
      <div className="section-title"><span>UNIDAD I · SALUD PÚBLICA</span><h2>De los fundamentos a las políticas de salud</h2><p>Seis estaciones de estudio basadas en los contenidos de la asignatura.</p></div>
      <div className="lesson-grid">
        {lessons.map((l, i) => <button className="lesson-card" key={l.id} onClick={() => onLesson(l.id)}>
          <div className="lesson-number">{l.number}</div><div><small>CLASE {i + 1}</small><h3>{l.title}</h3><p>{l.subtitle}</p></div><ArrowRight size={18}/>
        </button>)}
      </div>
    </section>

    <section className="section epi-section">
      <div className="section-title"><span>UNIDAD II · EPIDEMIOLOGÍA</span><h2>Herramientas para aplicar lo aprendido</h2><p>Calcula, interpreta y decide a partir de escenarios de Enfermería y salud pública.</p></div>
      <div className="grid4">
        <ToolCard icon={<Activity/>} n="01" title="Medidas epidemiológicas" text="Prevalencia, incidencia, mortalidad, natalidad, letalidad y tasa de ataque." onClick={() => onGo('medidas')} />
        <ToolCard icon={<Microscope/>} n="02" title="Pruebas diagnósticas" text="Tabla 2×2, sensibilidad, especificidad, VPP y VPN." onClick={() => onGo('diagnostico')} />
        <ToolCard icon={<FlaskConical/>} n="03" title="Diseños epidemiológicos" text="Reconoce el diseño adecuado a partir de problemas de Enfermería." onClick={() => onGo('disenos')} />
        <ToolCard icon={<HeartPulse/>} n="04" title="EPI Challenge" text="Integra conceptos en preguntas con retroalimentación inmediata." onClick={() => onGo('challenge')} />
      </div>
    </section>
  </>;
}

function ToolCard({icon,n,title,text,onClick}:any){return <button className="module-card" onClick={onClick}><div className="module-top">{icon}<b>{n}</b></div><h3>{title}</h3><p>{text}</p><span>Explorar <ArrowRight size={16}/></span></button>}

function Unidad1({ selected, onSelect }: { selected: LessonId; onSelect: (id: LessonId) => void }) {
  const lesson = lessons.find(l => l.id === selected) || lessons[0];
  const index = lessons.findIndex(l => l.id === lesson.id);
  return <section className="learning-page">
    <aside className="lesson-sidebar">
      <span className="sidebar-kicker">UNIDAD I</span><h3>Salud Pública</h3>
      {lessons.map(l => <button key={l.id} className={l.id === selected ? 'active' : ''} onClick={() => onSelect(l.id)}><b>{l.number}</b><span>{l.title}</span></button>)}
    </aside>
    <article className="lesson-content">
      <div className="lesson-header"><span>CLASE {index + 1} · {lesson.number}</span><h1>{lesson.title}</h1><p>{lesson.intro}</p></div>
      <div className="concept-grid">
        {lesson.concepts.map((c, i) => <div className="concept-card" key={c.title}><div className="concept-icon">{conceptIcon(index, i)}</div><h3>{c.title}</h3><p>{c.text}</p></div>)}
      </div>
      <div className="learning-block"><div><span className="block-kicker">LO QUE DEBES RECORDAR</span><h2>Ideas clave</h2></div><ul>{lesson.takeaways.map(t => <li key={t}><CheckCircle2 size={18}/>{t}</li>)}</ul></div>
      <MiniQuiz quiz={lesson.quiz}/>
      {lesson.reading && <div className="reading-block"><BookOpen/><div><b>Lecturas de profundización</b>{lesson.reading.map(r => <p key={r}>{r}</p>)}</div></div>}
      <div className="lesson-nav">
        <button className="secondary dark" disabled={index === 0} onClick={() => index > 0 && onSelect(lessons[index-1].id)}><ArrowLeft size={16}/> Anterior</button>
        <button className="primary" disabled={index === lessons.length-1} onClick={() => index < lessons.length-1 && onSelect(lessons[index+1].id)}>Siguiente <ArrowRight size={16}/></button>
      </div>
    </article>
  </section>
}

function conceptIcon(lesson:number, item:number){
  const icons = [UsersRound, Landmark, Network, Activity, ShieldCheck, CircleHelp];
  const Icon = icons[(lesson + item) % icons.length];
  return <Icon size={22}/>;
}

function MiniQuiz({quiz}:{quiz:Lesson['quiz']}){
  const [picked,setPicked] = useState<number|null>(null);
  const ok = picked === quiz.correct;
  return <div className="mini-quiz"><div className="quiz-title"><CircleHelp/><div><span>COMPRUEBA TU APRENDIZAJE</span><h2>{quiz.question}</h2></div></div><div className="answers">{quiz.options.map((o,i)=><button key={o} onClick={()=>setPicked(i)} className={picked===null?'':i===quiz.correct?'correct':picked===i?'wrong':''}>{o}</button>)}</div>{picked!==null&&<div className={`explain ${ok?'ok':'no'}`}><b>{ok?'Correcto':'Revisa tu respuesta'}</b><p>{quiz.feedback}</p></div>}</div>
}

function Shell({ kicker, title, text, children }: any) {
  return <section className="tool-page"><div className="tool-head"><span>{kicker}</span><h1>{title}</h1><p>{text}</p></div>{children}</section>;
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
    ataque:{label:'Tasa de ataque',numeratorLabel:'Casos nuevos durante el brote',denominatorLabel:'Población expuesta o en riesgo',interpretation:'Proporción de personas expuestas que enferman durante un brote o episodio agudo.',defaultMultiplier:100},
  };
  const [type,setType]=useState('prevalencia'); const [numerator,setNumerator]=useState(40); const [denominator,setDenominator]=useState(250); const [totalPopulation,setTotalPopulation]=useState(1200); const [existingCases,setExistingCases]=useState(80); const [multiplier,setMultiplier]=useState(100);
  const config=configs[type]; const effectiveDenominator=config.denominatorMode==='atRisk'?Math.max(totalPopulation-existingCases,0):denominator; const result=effectiveDenominator>0?numerator/effectiveDenominator:NaN;
  function changeMeasure(next:string){setType(next);setMultiplier(configs[next].defaultMultiplier)}
  return <Shell kicker="UNIDAD II · HERRAMIENTA 01" title="Calculadora epidemiológica" text="Identifica correctamente numerador, denominador y población antes de interpretar el resultado."><div className="tool-grid"><div className="panel"><label>Medida epidemiológica</label><select value={type} onChange={e=>changeMeasure(e.target.value)}>{Object.entries(configs).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select>{config.denominatorMode==='atRisk'?<><div className="input-grid"><div><label>Población total al inicio</label><input type="number" value={totalPopulation} onChange={e=>setTotalPopulation(+e.target.value)}/></div><div><label>Casos existentes al inicio</label><input type="number" value={existingCases} onChange={e=>setExistingCases(+e.target.value)}/></div><div><label>{config.numeratorLabel}</label><input type="number" value={numerator} onChange={e=>setNumerator(+e.target.value)}/></div><div><label>Población en riesgo</label><input value={effectiveDenominator} readOnly/></div></div><div className="panel-note">Población en riesgo = {totalPopulation} − {existingCases} = <b>{effectiveDenominator}</b></div></>:<div className="input-grid"><div><label>{config.numeratorLabel}</label><input type="number" value={numerator} onChange={e=>setNumerator(+e.target.value)}/></div><div><label>{config.denominatorLabel}</label><input type="number" value={denominator} onChange={e=>setDenominator(+e.target.value)}/></div></div>}{config.helper&&<div className="panel-note">{config.helper}</div>}<label>Expresar resultado como</label><select value={multiplier} onChange={e=>setMultiplier(+e.target.value)}><option value={100}>Porcentaje (%)</option><option value={1000}>Por 1.000</option><option value={10000}>Por 10.000</option><option value={100000}>Por 100.000</option></select><div className="formula">{numerator} ÷ {effectiveDenominator||'—'} × {multiplier.toLocaleString('es-CL')}</div></div><div className="result-card"><span>RESULTADO</span><strong>{formatResult(result,multiplier)}</strong><p>{config.interpretation}</p><div className="feedback"><CheckCircle2/> Relaciona siempre el resultado con la población y el período estudiado.</div></div></div></Shell>
}

function Diagnostico(){const[vp,setVp]=useState(80),[fp,setFp]=useState(20),[fn,setFn]=useState(10),[vn,setVn]=useState(90);const se=vp/(vp+fn),sp=vn/(vn+fp),vpp=vp/(vp+fp),vpn=vn/(vn+fn);return <Shell kicker="UNIDAD II · HERRAMIENTA 02" title="Laboratorio de pruebas diagnósticas" text="Modifica la tabla 2×2 y observa cómo cambian las medidas de rendimiento diagnóstico."><div className="diag-layout"><div className="panel"><div className="table2x2"><div></div><b>Enfermedad +</b><b>Enfermedad −</b><b>Test +</b><input value={vp} onChange={e=>setVp(+e.target.value)}/><input value={fp} onChange={e=>setFp(+e.target.value)}/><b>Test −</b><input value={fn} onChange={e=>setFn(+e.target.value)}/><input value={vn} onChange={e=>setVn(+e.target.value)}/></div></div><div className="metrics"><Metric name="Sensibilidad" value={se} note="Detecta correctamente a quienes tienen la enfermedad."/><Metric name="Especificidad" value={sp} note="Identifica correctamente a quienes no tienen la enfermedad."/><Metric name="VPP" value={vpp} note="Probabilidad de enfermedad dado un test positivo."/><Metric name="VPN" value={vpn} note="Probabilidad de no enfermedad dado un test negativo."/></div></div></Shell>}
function Metric({name,value,note}:any){return <div className="metric"><span>{name}</span><strong>{percent(value)}</strong><p>{note}</p></div>}

function Disenos(){const[i,setI]=useState(0);const[selected,setSelected]=useState('');const d=designs[i];const options=['Transversal','Cohorte','Caso-control','Ensayo clínico aleatorizado'];const ok=selected===d.a;return <Shell kicker="UNIDAD II · HERRAMIENTA 03" title="Selector de diseños epidemiológicos" text="Identifica cómo se obtuvo la información y elige el diseño más apropiado."><div className="case-card"><span>CASO {i+1} DE {designs.length}</span><h2>{d.q}</h2><div className="answers">{options.map(o=><button key={o} className={selected===o?(ok?'correct':'wrong'):''} onClick={()=>setSelected(o)}>{o}</button>)}</div>{selected&&<div className={`explain ${ok?'ok':'no'}`}><b>{ok?'Correcto':'Revisa tu elección'}</b><p>{d.why}</p></div>}<div className="case-actions"><button className="secondary dark" onClick={()=>{setI((i-1+designs.length)%designs.length);setSelected('')}}>Anterior</button><button className="primary" onClick={()=>{setI((i+1)%designs.length);setSelected('')}}>Siguiente <ArrowRight size={17}/></button></div></div></Shell>}

function Challenge(){
 const questions=useMemo(()=>[
  {q:'¿Cuál distingue mejor a la salud pública de la atención clínica individual?',o:['Su foco en poblaciones y acciones colectivas','El uso de medicamentos','El diagnóstico por imágenes','La atención hospitalaria'],a:0},
  {q:'Educación, ocupación e ingreso corresponden principalmente a:',o:['Determinantes estructurales','Pruebas diagnósticas','Sesgos de selección','Desenlaces clínicos'],a:0},
  {q:'En 200 residentes, 50 presentan infección respiratoria al momento de la evaluación. ¿Cuál es la prevalencia?',o:['10%','25%','40%','50%'],a:1},
  {q:'Si comparamos residentes expuestos y no expuestos y los seguimos en el tiempo, el diseño es:',o:['Transversal','Caso-control','Cohorte','Serie de casos'],a:2},
  {q:'¿Cuál conjunto corresponde a las garantías explícitas GES?',o:['Acceso, calidad, oportunidad y protección financiera','Cobertura, rentabilidad, rapidez y elección','Acceso, gratuidad universal, docencia y oportunidad','Calidad, financiamiento privado, acceso y docencia'],a:0}
 ],[]);
 const[idx,setIdx]=useState(0),[score,setScore]=useState(0),[done,setDone]=useState(false),[picked,setPicked]=useState<number|null>(null);const q=questions[idx];
 function choose(j:number){if(picked!==null)return;setPicked(j);if(j===q.a)setScore(s=>s+1)} function next(){if(idx===questions.length-1)setDone(true);else{setIdx(i=>i+1);setPicked(null)}} function reset(){setIdx(0);setScore(0);setDone(false);setPicked(null)}
 return <Shell kicker="DESAFÍO INTEGRADOR" title="EPI Challenge" text="Integra Salud Pública y Epidemiología en una ronda breve de aplicación.">{!done?<div className="case-card"><div className="progress"><i style={{width:`${((idx+1)/questions.length)*100}%`}}/></div><span>PREGUNTA {idx+1} DE {questions.length}</span><h2>{q.q}</h2><div className="answers">{q.o.map((o,j)=><button key={o} onClick={()=>choose(j)} className={picked===null?'':j===q.a?'correct':picked===j?'wrong':''}>{o}</button>)}</div>{picked!==null&&<div className={`explain ${picked===q.a?'ok':'no'}`}><b>{picked===q.a?'¡Bien!':'Respuesta incorrecta'}</b><p>{picked===q.a?'La respuesta corresponde al razonamiento esperado.':'Revisa el concepto y vuelve a intentarlo en una nueva ronda.'}</p></div>}<div className="case-actions"><span>Puntaje: {score}</span><button className="primary" disabled={picked===null} onClick={next}>{idx===questions.length-1?'Ver resultado':'Continuar'} <ArrowRight size={17}/></button></div></div>:<div className="finish"><Stethoscope size={42}/><span>DESAFÍO COMPLETADO</span><strong>{score}/{questions.length}</strong><h2>{score===questions.length?'Excelente dominio inicial':score>=4?'Buen desempeño':'Conviene reforzar algunos contenidos'}</h2><p>Vuelve a las unidades para revisar conceptos y repetir el desafío.</p><button className="primary" onClick={reset}><RotateCcw size={17}/> Repetir desafío</button></div>}</Shell>
}
