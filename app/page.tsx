'use client';

import { useMemo, useState } from 'react';
import { Activity, ArrowRight, CheckCircle2, FlaskConical, HeartPulse, Microscope, RotateCcw, Stethoscope } from 'lucide-react';

type Module = 'home' | 'medidas' | 'diagnostico' | 'disenos' | 'challenge';

type MeasureConfig = {
  label: string;
  numeratorLabel: string;
  denominatorLabel: string;
  helper?: string;
  interpretation: string;
  defaultMultiplier: number;
  denominatorMode?: 'direct' | 'atRisk';
};

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
  const [module, setModule] = useState<Module>('home');

  return <main>
    <header className="topbar">
      <button className="brand" onClick={() => setModule('home')}><span>EPI·LAB</span><small>Enfermería UANDES</small></button>
      <nav>
        <button onClick={() => setModule('medidas')}>Medidas</button>
        <button onClick={() => setModule('diagnostico')}>Diagnóstico</button>
        <button onClick={() => setModule('disenos')}>Diseños</button>
        <button className="nav-cta" onClick={() => setModule('challenge')}>EPI Challenge</button>
      </nav>
    </header>

    {module === 'home' && <Home onGo={setModule} />}
    {module === 'medidas' && <Medidas />}
    {module === 'diagnostico' && <Diagnostico />}
    {module === 'disenos' && <Disenos />}
    {module === 'challenge' && <Challenge />}

    <footer>Facultad de Enfermería y Obstetricia · Universidad de los Andes · MVP docente 2026</footer>
  </main>;
}

function Home({ onGo }: { onGo: (m: Module) => void }) {
  const cards = [
    ['medidas', Activity, '01', 'Medidas epidemiológicas', 'Prevalencia, incidencia, mortalidad, letalidad y otras medidas con interpretación aplicada.'],
    ['diagnostico', Microscope, '02', 'Pruebas diagnósticas', 'Tabla 2×2, sensibilidad, especificidad, VPP y VPN.'],
    ['disenos', FlaskConical, '03', 'Diseños epidemiológicos', 'Reconoce el diseño adecuado a partir de problemas de Enfermería.'],
    ['challenge', HeartPulse, '04', 'EPI Challenge', 'Caso integrador con decisiones, cálculo y retroalimentación inmediata.'],
  ] as const;

  return <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">LABORATORIO INTERACTIVO · UNIDAD II</span>
        <h1>Aprende epidemiología <em>haciendo epidemiología.</em></h1>
        <p>Explora, calcula, interpreta y decide a partir de situaciones clínicas y de salud pública propias de Enfermería.</p>
        <div className="hero-actions"><button className="primary" onClick={() => onGo('medidas')}>Comenzar práctica <ArrowRight size={18}/></button><button className="secondary" onClick={() => onGo('challenge')}>Ir al desafío final</button></div>
      </div>
      <div className="hero-visual">
        <div className="pulse">EPI<span>LAB</span></div>
        <div className="orb o1">P</div><div className="orb o2">RR</div><div className="orb o3">Se</div><div className="orb o4">Dx</div>
      </div>
    </section>

    <section className="section">
      <div className="section-title"><span>RUTA DE APRENDIZAJE</span><h2>Cuatro herramientas para entrenar razonamiento epidemiológico</h2></div>
      <div className="grid4">{cards.map(([id, Icon, n, title, text]) => <button className="module-card" key={id} onClick={() => onGo(id)}><div className="module-top"><Icon/><b>{n}</b></div><h3>{title}</h3><p>{text}</p><span>Explorar <ArrowRight size={16}/></span></button>)}</div>
    </section>
  </>;
}

function Shell({ kicker, title, text, children }: any) {
  return <section className="tool-page"><div className="tool-head"><span>{kicker}</span><h1>{title}</h1><p>{text}</p></div>{children}</section>;
}

function Medidas() {
  const configs: Record<string, MeasureConfig> = {
    prevalencia: {
      label: 'Prevalencia',
      numeratorLabel: 'Casos existentes',
      denominatorLabel: 'Población total',
      interpretation: 'Proporción de personas que presentan la condición en el momento o periodo estudiado.',
      defaultMultiplier: 100,
    },
    incidencia: {
      label: 'Incidencia acumulada',
      numeratorLabel: 'Casos nuevos durante el período',
      denominatorLabel: 'Población en riesgo al inicio',
      helper: 'La población en riesgo excluye a quienes ya tenían la enfermedad al inicio.',
      interpretation: 'Proporción de personas en riesgo que desarrollan el evento durante el período.',
      defaultMultiplier: 100,
      denominatorMode: 'atRisk',
    },
    densidad: {
      label: 'Tasa de incidencia',
      numeratorLabel: 'Casos nuevos',
      denominatorLabel: 'Personas-tiempo',
      helper: 'Usa la suma del tiempo aportado por cada persona en seguimiento.',
      interpretation: 'Velocidad con que aparecen casos nuevos en relación con el tiempo total observado.',
      defaultMultiplier: 1000,
    },
    mortalidad: {
      label: 'Mortalidad general',
      numeratorLabel: 'Defunciones totales',
      denominatorLabel: 'Población media del período',
      interpretation: 'Frecuencia de muertes en la población durante el período.',
      defaultMultiplier: 1000,
    },
    mortalidadEspecifica: {
      label: 'Mortalidad específica por causa',
      numeratorLabel: 'Defunciones por la causa',
      denominatorLabel: 'Población correspondiente',
      interpretation: 'Frecuencia de muertes por una causa específica en la población estudiada.',
      defaultMultiplier: 100000,
    },
    letalidad: {
      label: 'Letalidad',
      numeratorLabel: 'Defunciones por la enfermedad',
      denominatorLabel: 'Casos de la enfermedad',
      interpretation: 'Proporción de personas enfermas que fallecen por esa enfermedad.',
      defaultMultiplier: 100,
    },
    natalidad: {
      label: 'Tasa de natalidad',
      numeratorLabel: 'Nacidos vivos durante el período',
      denominatorLabel: 'Población media del período',
      interpretation: 'Frecuencia de nacidos vivos en relación con la población durante el período.',
      defaultMultiplier: 1000,
    },
    ataque: {
      label: 'Tasa de ataque',
      numeratorLabel: 'Casos nuevos durante el brote',
      denominatorLabel: 'Población expuesta o en riesgo',
      interpretation: 'Proporción de personas expuestas que enferman durante un brote o episodio agudo.',
      defaultMultiplier: 100,
    },
  };

  const [type, setType] = useState('prevalencia');
  const [numerator, setNumerator] = useState(40);
  const [denominator, setDenominator] = useState(250);
  const [totalPopulation, setTotalPopulation] = useState(1200);
  const [existingCases, setExistingCases] = useState(80);
  const [multiplier, setMultiplier] = useState(configs.prevalencia.defaultMultiplier);

  const config = configs[type];
  const effectiveDenominator = config.denominatorMode === 'atRisk'
    ? Math.max(totalPopulation - existingCases, 0)
    : denominator;
  const result = effectiveDenominator > 0 ? numerator / effectiveDenominator : NaN;

  function changeMeasure(next: string) {
    setType(next);
    setMultiplier(configs[next].defaultMultiplier);
  }

  return <Shell kicker="HERRAMIENTA 01" title="Calculadora epidemiológica" text="Primero identifica correctamente el numerador y la población que corresponde al denominador. Luego calcula e interpreta.">
    <div className="tool-grid">
      <div className="panel">
        <label>Medida epidemiológica</label>
        <select value={type} onChange={e=>changeMeasure(e.target.value)}>
          {Object.entries(configs).map(([key, item]) => <option value={key} key={key}>{item.label}</option>)}
        </select>

        {config.denominatorMode === 'atRisk' ? <>
          <div className="input-grid">
            <div><label>Población total al inicio</label><input type="number" min="0" value={totalPopulation} onChange={e=>setTotalPopulation(+e.target.value)} /></div>
            <div><label>Casos existentes al inicio</label><input type="number" min="0" value={existingCases} onChange={e=>setExistingCases(+e.target.value)} /></div>
            <div><label>{config.numeratorLabel}</label><input type="number" min="0" value={numerator} onChange={e=>setNumerator(+e.target.value)} /></div>
            <div><label>Población en riesgo calculada</label><input type="number" value={effectiveDenominator} readOnly /></div>
          </div>
          <div className="feedback">Población en riesgo = población total − casos existentes = {totalPopulation} − {existingCases} = <b>{effectiveDenominator}</b></div>
        </> : <div className="input-grid">
          <div><label>{config.numeratorLabel}</label><input type="number" min="0" value={numerator} onChange={e=>setNumerator(+e.target.value)} /></div>
          <div><label>{config.denominatorLabel}</label><input type="number" min="0" value={denominator} onChange={e=>setDenominator(+e.target.value)} /></div>
        </div>}

        {config.helper && <div className="feedback">{config.helper}</div>}

        <label>Expresar resultado como</label>
        <select value={multiplier} onChange={e=>setMultiplier(+e.target.value)}>
          <option value={100}>Porcentaje (%)</option>
          <option value={1000}>Por 1.000</option>
          <option value={10000}>Por 10.000</option>
          <option value={100000}>Por 100.000</option>
        </select>

        <div className="formula">
          {numerator} ÷ {effectiveDenominator || '—'} × {multiplier.toLocaleString('es-CL')}
        </div>
      </div>

      <div className="result-card">
        <span>RESULTADO</span>
        <strong>{formatResult(result, multiplier)}</strong>
        <p>{config.interpretation}</p>
        <div className="feedback"><CheckCircle2/> Interprétalo siempre en relación con la población correcta y el período estudiado.</div>
      </div>
    </div>
  </Shell>;
}

function Diagnostico() {
  const [vp,setVp]=useState(80), [fp,setFp]=useState(20), [fn,setFn]=useState(10), [vn,setVn]=useState(90);
  const se=vp/(vp+fn), sp=vn/(vn+fp), vpp=vp/(vp+fp), vpn=vn/(vn+fn);
  return <Shell kicker="HERRAMIENTA 02" title="Laboratorio de pruebas diagnósticas" text="Modifica la tabla 2×2 y observa cómo cambian las medidas de rendimiento diagnóstico.">
    <div className="diag-layout"><div className="panel"><div className="table2x2"><div></div><b>Enfermedad +</b><b>Enfermedad −</b><b>Test +</b><input value={vp} onChange={e=>setVp(+e.target.value)}/><input value={fp} onChange={e=>setFp(+e.target.value)}/><b>Test −</b><input value={fn} onChange={e=>setFn(+e.target.value)}/><input value={vn} onChange={e=>setVn(+e.target.value)}/></div></div><div className="metrics"><Metric name="Sensibilidad" value={se} note="Detecta correctamente a quienes tienen la enfermedad."/><Metric name="Especificidad" value={sp} note="Identifica correctamente a quienes no tienen la enfermedad."/><Metric name="VPP" value={vpp} note="Probabilidad de enfermedad dado un test positivo."/><Metric name="VPN" value={vpn} note="Probabilidad de no enfermedad dado un test negativo."/></div></div>
  </Shell>;
}
function Metric({name,value,note}:any){return <div className="metric"><span>{name}</span><strong>{percent(value)}</strong><p>{note}</p></div>}

function Disenos(){
 const [i,setI]=useState(0); const [selected,setSelected]=useState(''); const d=designs[i]; const options=['Transversal','Cohorte','Caso-control','Ensayo clínico aleatorizado']; const ok=selected===d.a;
 return <Shell kicker="HERRAMIENTA 03" title="Selector de diseños epidemiológicos" text="Lee el problema, identifica cómo se obtuvo la información y elige el diseño más apropiado."><div className="case-card"><span>CASO {i+1} DE {designs.length}</span><h2>{d.q}</h2><div className="answers">{options.map(o=><button key={o} className={selected===o?(ok?'correct':'wrong'):''} onClick={()=>setSelected(o)}>{o}</button>)}</div>{selected&&<div className={`explain ${ok?'ok':'no'}`}><b>{ok?'Correcto':'Revisa tu elección'}</b><p>{d.why}</p></div>}<div className="case-actions"><button className="secondary dark" onClick={()=>{setI((i-1+designs.length)%designs.length);setSelected('')}}>Anterior</button><button className="primary" onClick={()=>{setI((i+1)%designs.length);setSelected('')}}>Siguiente <ArrowRight size={17}/></button></div></div></Shell>
}

function Challenge(){
 const questions=useMemo(()=>[
  {q:'En 200 residentes, 50 presentan infección respiratoria al momento de la evaluación. ¿Cuál es la prevalencia?',o:['10%','25%','40%','50%'],a:1},
  {q:'Si seguimos a residentes sin infección para observar casos nuevos, ¿qué medida estamos estimando?',o:['Prevalencia','Incidencia','Letalidad','Especificidad'],a:1},
  {q:'Una prueba con alta sensibilidad es especialmente útil para:',o:['Detectar enfermos','Confirmar sanos','Estimar prevalencia','Medir causalidad'],a:0},
  {q:'Si comparamos residentes expuestos y no expuestos y los seguimos en el tiempo, el diseño es:',o:['Transversal','Caso-control','Cohorte','Serie de casos'],a:2}
 ],[]);
 const [idx,setIdx]=useState(0),[score,setScore]=useState(0),[done,setDone]=useState(false),[picked,setPicked]=useState<number|null>(null); const q=questions[idx];
 function choose(j:number){if(picked!==null)return;setPicked(j);if(j===q.a)setScore(s=>s+1)}
 function next(){if(idx===questions.length-1){setDone(true)}else{setIdx(i=>i+1);setPicked(null)}}
 function reset(){setIdx(0);setScore(0);setDone(false);setPicked(null)}
 return <Shell kicker="HERRAMIENTA 04" title="EPI Challenge" text="Integra cálculo, diagnóstico y diseño epidemiológico en un caso breve.">{!done?<div className="case-card"><div className="progress"><i style={{width:`${((idx+1)/questions.length)*100}%`}}/></div><span>PREGUNTA {idx+1} DE {questions.length}</span><h2>{q.q}</h2><div className="answers">{q.o.map((o,j)=><button key={o} onClick={()=>choose(j)} className={picked===null?'':j===q.a?'correct':picked===j?'wrong':''}>{o}</button>)}</div>{picked!==null&&<div className={`explain ${picked===q.a?'ok':'no'}`}><b>{picked===q.a?'¡Bien!':'Respuesta incorrecta'}</b><p>{picked===q.a?'La respuesta corresponde al razonamiento epidemiológico esperado.':'Revisa el concepto y vuelve a intentarlo en una nueva ronda.'}</p></div>}<div className="case-actions"><span>Puntaje: {score}</span><button className="primary" disabled={picked===null} onClick={next}>{idx===questions.length-1?'Ver resultado':'Continuar'} <ArrowRight size={17}/></button></div></div>:<div className="finish"><Stethoscope size={42}/><span>DESAFÍO COMPLETADO</span><strong>{score}/{questions.length}</strong><h2>{score===4?'Excelente dominio inicial':score>=3?'Buen desempeño':'Conviene reforzar algunos contenidos'}</h2><p>Usa las otras herramientas para practicar antes de volver a realizar el desafío.</p><button className="primary" onClick={reset}><RotateCcw size={17}/> Repetir desafío</button></div>}</Shell>
}
