export type QuizItem = {
  q: string;
  options: string[];
  answer: number;
  feedback: string;
};

export type Lesson = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  concepts: { title: string; text: string }[];
  nursingLens: string;
  keyIdeas: string[];
  quiz: QuizItem[];
};

export type NursingCase = {
  id: string;
  title: string;
  setting: string;
  scenario: string;
  data: string[];
  question: string;
  options: string[];
  answer: number;
  feedback: string;
  nursingAction: string;
  reflection: string;
};

export const lessons: Lesson[] = [
  {
    id: 'salud-publica',
    number: '01',
    title: 'Introducción a la Salud Pública',
    subtitle: 'Del cuidado individual a la salud de poblaciones',
    summary: 'La salud pública estudia la salud y enfermedad en poblaciones y busca proteger, promover y mejorar el bienestar mediante prevención, programas, políticas, vigilancia y acción comunitaria.',
    concepts: [
      { title: 'Enfoque poblacional', text: 'La unidad de análisis principal es la población. Se estudian frecuencia, distribución y factores que influyen en salud.' },
      { title: 'Salud y bienestar', text: 'La salud incorpora bienestar físico, mental y social, no solamente ausencia de enfermedad.' },
      { title: 'Clínica vs. Salud Pública', text: 'La clínica diagnostica y trata personas; la salud pública previene, promueve, vigila y organiza respuestas para colectivos.' },
      { title: 'Funciones esenciales', text: 'Conocer problemas, prevenir y promover, proteger mediante políticas y servicios, y mejorar continuamente usando evidencia.' },
    ],
    nursingLens: 'En Enfermería, el cambio de escala es clave: además del cuidado de una persona, el profesional reconoce patrones, grupos vulnerables, brechas de acceso y oportunidades de prevención en familias y comunidades.',
    keyIdeas: ['Población', 'Prevención', 'Promoción', 'Vigilancia', 'Políticas de salud', 'Acción comunitaria'],
    quiz: [
      { q: '¿Cuál acción representa mejor un enfoque de salud pública?', options: ['Administrar un antibiótico a una persona', 'Realizar curación de una herida', 'Analizar aumento de casos respiratorios en un territorio', 'Tomar presión arterial en un control'], answer: 2, feedback: 'El enfoque poblacional busca identificar patrones y orientar respuestas colectivas.' },
      { q: 'En un brote, ¿qué rol de Enfermería refleja mejor la salud pública?', options: ['Solo tratar síntomas', 'Identificar, educar, vigilar y coordinar acciones', 'Esperar derivación médica', 'Limitarse al registro clínico individual'], answer: 1, feedback: 'Enfermería puede participar en vigilancia, educación, prevención y coordinación comunitaria.' },
    ],
  },
  {
    id: 'historia',
    number: '02',
    title: 'Hitos históricos de la Salud Pública',
    subtitle: 'Cómo los problemas colectivos cambiaron la forma de prevenir',
    summary: 'La salud pública moderna se desarrolló como respuesta a problemas sociales, ambientales y científicos. La urbanización, el saneamiento, la investigación de brotes y la teoría germinal cambiaron las estrategias de prevención.',
    concepts: [
      { title: 'Revolución Industrial', text: 'Urbanización rápida, hacinamiento, falta de agua potable y alcantarillado favorecieron epidemias y mostraron la necesidad de intervenciones colectivas.' },
      { title: 'John Snow', text: 'Usó mapas, entrevistas y distribución de casos durante el brote de cólera de 1854 para relacionar enfermedad con una fuente de agua.' },
      { title: 'Teoría germinal', text: 'Pasteur y Koch aportaron evidencia científica sobre microorganismos, impulsando higiene, esterilización y vacunación.' },
      { title: 'Derecho y organización sanitaria', text: 'La salud pública evolucionó desde medidas higiénicas hacia políticas sanitarias, seguridad social y reconocimiento del derecho a la salud.' },
    ],
    nursingLens: 'La historia muestra una competencia vigente para Enfermería: observar el entorno, detectar patrones, formular hipótesis y actuar antes de conocer todos los detalles causales.',
    keyIdeas: ['Saneamiento', 'Investigación de brotes', 'Mapas', 'Evidencia', 'Prevención colectiva'],
    quiz: [
      { q: '¿Qué hizo especialmente relevante el trabajo de John Snow?', options: ['Descubrió el primer antibiótico', 'Utilizó evidencia poblacional para investigar un brote', 'Desarrolló una vacuna', 'Creó un hospital'], answer: 1, feedback: 'Su aporte fue usar método y evidencia poblacional para identificar una fuente probable y orientar control.' },
      { q: '¿Qué aprendizaje mantiene vigencia para Enfermería?', options: ['Esperar confirmación absoluta antes de actuar', 'Observar patrones y relacionarlos con exposiciones', 'Evitar información territorial', 'Separar ambiente y salud'], answer: 1, feedback: 'La observación sistemática de patrones es central en vigilancia e investigación de brotes.' },
    ],
  },
  {
    id: 'dss',
    number: '03',
    title: 'Determinantes Sociales de la Salud',
    subtitle: 'Comprender por qué el riesgo no se distribuye al azar',
    summary: 'Los DSS son las circunstancias en que las personas nacen, crecen, viven, trabajan y envejecen, incluido el sistema de salud. Permiten comprender desigualdades e inequidades en salud.',
    concepts: [
      { title: 'Equidad', text: 'Se refiere a la ausencia de diferencias injustas, evitables o remediables entre grupos poblacionales.' },
      { title: 'Determinantes estructurales', text: 'Contexto socioeconómico y político, educación, ocupación, ingreso y posición social configuran oportunidades y riesgos.' },
      { title: 'Determinantes intermediarios', text: 'Condiciones materiales, factores psicosociales, conductas, factores biológicos y sistema de salud median el efecto sobre la salud.' },
      { title: 'Exposición y vulnerabilidad diferencial', text: 'Los grupos no están expuestos a los mismos riesgos ni tienen la misma capacidad para enfrentar sus consecuencias.' },
    ],
    nursingLens: 'Una valoración de Enfermería poblacional no termina en signos y síntomas: integra vivienda, trabajo, redes, acceso, alfabetización en salud, recursos, barreras y contexto familiar.',
    keyIdeas: ['Equidad', 'Estructurales', 'Intermediarios', 'Vulnerabilidad', 'Acceso', 'Intersectorialidad'],
    quiz: [
      { q: '¿Cuál corresponde principalmente a un determinante estructural?', options: ['Tipo de vivienda', 'Nivel educacional', 'Estrés percibido', 'Acceso a transporte sanitario'], answer: 1, feedback: 'Educación, ocupación e ingreso son indicadores de posición socioeconómica y se ubican entre los determinantes estructurales.' },
      { q: 'Una persona no puede comprar alimentos saludables por falta de recursos. ¿Qué idea es más relevante?', options: ['Toda conducta es una elección individual', 'Los estilos de vida pueden estar condicionados socialmente', 'El sistema de salud explica todo', 'No corresponde a Enfermería'], answer: 1, feedback: 'Las conductas no siempre son elecciones libres; están influidas por condiciones sociales y materiales.' },
    ],
  },
  {
    id: 'situacion-salud',
    number: '04',
    title: 'Situación de Salud de la Población',
    subtitle: 'Conocer para decidir y actuar',
    summary: 'El análisis de la situación de salud utiliza información demográfica, epidemiológica y de servicios para identificar necesidades, priorizar problemas, planificar y evaluar acciones.',
    concepts: [
      { title: 'ASIS', text: 'Integra conceptos, métodos y actividades para medir y monitorear el proceso salud-enfermedad-servicios.' },
      { title: 'Uso estratégico de datos', text: 'Los datos permiten evaluar estado de salud, establecer prioridades, identificar vulnerabilidad, planificar, evaluar y asignar recursos.' },
      { title: 'Transición demográfica', text: 'El paso a baja natalidad y mortalidad transforma la estructura por edad y aumenta desafíos relacionados con envejecimiento y cronicidad.' },
      { title: 'Iceberg de morbilidad', text: 'Los registros observan solo una parte de la enfermedad: existen personas asintomáticas, que no consultan o cuya demanda no es satisfecha.' },
    ],
    nursingLens: 'Enfermería transforma datos en prioridades de cuidado: identifica grupos de mayor riesgo, cobertura insuficiente, necesidades emergentes y acciones posibles en APS, comunidad y hospital.',
    keyIdeas: ['ASIS', 'Indicadores', 'Priorización', 'Demografía', 'Envejecimiento', 'Datos para decidir'],
    quiz: [
      { q: '¿Cuál es el mejor uso de un ASIS?', options: ['Describir datos sin tomar decisiones', 'Priorizar necesidades y orientar acciones', 'Reemplazar el juicio profesional', 'Medir solo mortalidad'], answer: 1, feedback: 'El ASIS busca apoyar gestión, priorización, planificación y evaluación.' },
      { q: 'Una pirámide regresiva sugiere principalmente:', options: ['Alta natalidad', 'Población muy joven', 'Envejecimiento y menor natalidad', 'Ausencia de enfermedades crónicas'], answer: 2, feedback: 'La base estrecha y mayor peso relativo de edades adultas y mayores es compatible con transición demográfica avanzada.' },
    ],
  },
  {
    id: 'sistemas',
    number: '05',
    title: 'Sistemas de Salud',
    subtitle: 'Cómo se organizan recursos, financiamiento y atención',
    summary: 'Un sistema de salud reúne organizaciones, instituciones y recursos para mejorar la salud. Requiere personal, financiamiento, información, suministros, transporte, comunicación, orientación y provisión de servicios.',
    concepts: [
      { title: 'Tres funciones operativas', text: 'Mantener a la población sana, tratar a quienes enferman y proteger a las familias del impacto financiero de los gastos médicos.' },
      { title: 'Financiamiento', text: 'Los sistemas pueden financiarse mediante impuestos, seguros y pagos directos, con diferentes combinaciones.' },
      { title: 'Modelos internacionales', text: 'Beveridge, Seguridad Social/Bismarck, Seguro Nacional y Pago Privado son modelos generales para comparar organización y financiamiento.' },
      { title: 'Chile', text: 'El sistema chileno es mixto, con seguro público FONASA y aseguramiento privado ISAPRE, además de provisión pública y privada.' },
    ],
    nursingLens: 'Para Enfermería, comprender el sistema permite orientar a usuarios, reconocer barreras de continuidad, coordinar redes y anticipar cómo el financiamiento y la organización impactan el acceso al cuidado.',
    keyIdeas: ['Financiamiento', 'FONASA', 'ISAPRE', 'Red asistencial', 'Acceso', 'Protección financiera'],
    quiz: [
      { q: '¿Cuál NO corresponde a una función operativa central de un sistema de salud?', options: ['Mantener a la población sana', 'Tratar a personas enfermas', 'Proteger frente a gastos médicos', 'Maximizar pago de bolsillo'], answer: 3, feedback: 'La protección financiera busca precisamente evitar que los gastos médicos generen daño económico catastrófico.' },
      { q: '¿Cómo se caracteriza el sistema chileno en el material de la asignatura?', options: ['Exclusivamente privado', 'Exclusivamente estatal', 'Mixto público-privado', 'Sin aseguramiento'], answer: 2, feedback: 'Chile combina aseguramiento y provisión pública y privada.' },
    ],
  },
  {
    id: 'politicas',
    number: '06',
    title: 'Políticas y Reforma de Salud',
    subtitle: 'Del problema público a la implementación y evaluación',
    summary: 'Las políticas públicas son acciones de gobierno orientadas a problemas de interés público. En salud deben responder a necesidades, DSS, equidad, derechos, factibilidad y disponibilidad de recursos.',
    concepts: [
      { title: 'Ciclo de políticas', text: 'Definir el problema, diagnosticar causas, desarrollar alternativas, decidir, implementar, evaluar y redefinir.' },
      { title: 'Actores y factibilidad', text: 'Las políticas requieren considerar autoridades, equipos de salud, academia, pacientes, organizaciones y otros actores.' },
      { title: 'GES', text: 'Las Garantías Explícitas en Salud incluyen acceso, calidad, oportunidad y protección financiera para problemas priorizados.' },
      { title: 'Ley Ricarte Soto', text: 'Busca protección financiera para diagnósticos y tratamientos de alto costo y plantea desafíos de priorización, equidad y uso de evidencia.' },
    ],
    nursingLens: 'Enfermería participa en la implementación cotidiana de políticas, identifica barreras reales, educa a usuarios, registra resultados y aporta evidencia sobre acceso, oportunidad y continuidad del cuidado.',
    keyIdeas: ['Problema público', 'Ciclo de políticas', 'GES', 'Ley Ricarte Soto', 'Equidad', 'Evaluación'],
    quiz: [
      { q: '¿Qué etapa debe ocurrir antes de diseñar una política?', options: ['Definir el problema', 'Implementar', 'Evaluar impacto', 'Cerrar el programa'], answer: 0, feedback: 'La política debe partir de un problema claramente identificado y luego analizar sus causas.' },
      { q: '¿Cuáles son las cuatro garantías GES trabajadas en la asignatura?', options: ['Acceso, calidad, oportunidad y protección financiera', 'Ingreso, egreso, hospitalización y alta', 'Costo, prevalencia, incidencia y mortalidad', 'Prevención, diagnóstico, tratamiento y rehabilitación'], answer: 0, feedback: 'GES explicita garantías de acceso, calidad, oportunidad y protección financiera.' },
    ],
  },
];

export const dssCases: NursingCase[] = [
  {
    id: 'DSS-A', title: 'Adherencia en diabetes', setting: 'CESFAM',
    scenario: 'Rosa, 72 años, vive sola y tiene diabetes e hipertensión. Falta a controles y refiere que a veces divide sus comprimidos para que duren más.',
    data: ['Pensión baja', 'Vive en tercer piso sin ascensor', 'Farmacia a 35 minutos en transporte', 'Dolor de rodilla', 'Red familiar limitada'],
    question: '¿Cuál es la mejor primera interpretación desde Enfermería?',
    options: ['Es un problema exclusivo de motivación', 'Existen determinantes sociales y barreras de acceso que afectan el autocuidado', 'Debe recibir solo educación sobre dieta', 'La adherencia no corresponde a salud pública'],
    answer: 1,
    feedback: 'El caso integra ingreso, vivienda, movilidad, acceso y red social. Reducirlo a conducta individual omite determinantes relevantes.',
    nursingAction: 'Realizar valoración de barreras, coordinar acceso a medicamentos y apoyo territorial, reforzar autocuidado viable y explorar red de apoyo.',
    reflection: '¿Qué intervención depende de Enfermería y cuál requiere coordinación intersectorial?'
  },
  {
    id: 'DSS-B', title: 'Asma infantil y vivienda', setting: 'APS / visita domiciliaria',
    scenario: 'Niño de 9 años con crisis asmáticas frecuentes. La madre refiere humedad persistente y calefacción con combustión al interior del hogar.',
    data: ['Vivienda arrendada', 'Humedad visible', 'Ingresos variables', 'Alta exposición a contaminación intradomiciliaria', 'Consultas reiteradas en urgencia'],
    question: '¿Qué enfoque es más completo?',
    options: ['Aumentar educación sobre inhaladores únicamente', 'Integrar manejo clínico con evaluación de condiciones materiales de vivienda', 'Derivar y cerrar el caso', 'Considerar la vivienda irrelevante'],
    answer: 1,
    feedback: 'Las condiciones materiales pueden aumentar exposición y vulnerabilidad. El cuidado debe integrar el entorno.',
    nursingAction: 'Reforzar técnica inhalatoria, identificar desencadenantes, activar apoyos locales y documentar barreras ambientales.',
    reflection: '¿Qué datos del hogar deberían registrarse sistemáticamente?'
  },
  {
    id: 'DSS-C', title: 'Hipertensión y trabajo', setting: 'Salud ocupacional / APS',
    scenario: 'Trabajador de 46 años con hipertensión no controlada, turnos extensos y dificultad para asistir a controles.',
    data: ['Turnos rotativos', 'Poco tiempo para actividad física', 'Comidas en horario irregular', 'Temor a pedir permisos', 'Antecedente familiar de HTA'],
    question: '¿Cuál factor representa mejor una exposición diferencial?',
    options: ['Edad', 'Condiciones laborales que dificultan cuidado y aumentan exposición', 'Sexo', 'Antecedente familiar únicamente'],
    answer: 1,
    feedback: 'La organización laboral puede modificar exposición, acceso y posibilidades reales de autocuidado.',
    nursingAction: 'Explorar condiciones de trabajo, adaptar plan de cuidado, facilitar seguimiento y educación compatible con turnos.',
    reflection: '¿Cómo evitarías responsabilizar individualmente al usuario por una conducta condicionada por el trabajo?'
  },
  {
    id: 'DSS-D', title: 'Salud mental universitaria', setting: 'Universidad',
    scenario: 'Estudiante de primer año presenta insomnio, ansiedad y baja asistencia. Vive lejos del campus y trabaja por las tardes.',
    data: ['Traslado de 90 minutos', 'Trabajo remunerado', 'Red social nueva', 'Dificultad económica', 'No conoce servicios de apoyo'],
    question: '¿Qué combinación explica mejor su vulnerabilidad?',
    options: ['Solo predisposición biológica', 'Factores materiales, psicosociales y acceso a apoyos', 'Falta de voluntad', 'Únicamente rendimiento académico'],
    answer: 1,
    feedback: 'La vulnerabilidad puede construirse por la interacción de recursos, estrés, redes y acceso.',
    nursingAction: 'Tamizar riesgo, informar recursos, facilitar acceso y promover redes y estrategias realistas de autocuidado.',
    reflection: '¿Qué acciones son individuales y cuáles requieren cambios institucionales?'
  },
  {
    id: 'DSS-E', title: 'Persona migrante y embarazo', setting: 'APS',
    scenario: 'Gestante de 24 semanas llegó recientemente al país y ha tenido controles prenatales irregulares.',
    data: ['Desconoce funcionamiento del sistema', 'Barreras de horario', 'Red familiar pequeña', 'Trabajo informal', 'Temor a costos'],
    question: '¿Cuál sería una respuesta de Enfermería con enfoque de equidad?',
    options: ['Entregar folleto y finalizar', 'Identificar barreras concretas y facilitar navegación del sistema', 'Reprochar inasistencia', 'Esperar a que consulte espontáneamente'],
    answer: 1,
    feedback: 'Equidad implica reconocer barreras evitables y ajustar la respuesta para que el acceso sea efectivo.',
    nursingAction: 'Orientar derechos y rutas de atención, coordinar controles y evaluar necesidades sociales y de comunicación.',
    reflection: '¿Qué diferencia existe entre ofrecer el mismo servicio y lograr acceso equitativo?'
  },
  {
    id: 'DSS-F', title: 'Persona mayor cuidadora', setting: 'Atención domiciliaria',
    scenario: 'Mujer de 69 años cuida a su esposo dependiente. Refiere cansancio persistente y ha postergado sus propios controles.',
    data: ['Cuidadora principal', 'Pocas horas de descanso', 'Ingresos limitados', 'Sin relevo estable', 'Dolor lumbar'],
    question: '¿Qué riesgo suele quedar invisible si solo se evalúa al paciente dependiente?',
    options: ['Carga y salud de la persona cuidadora', 'Presión arterial del esposo', 'Diagnóstico del esposo', 'Edad del esposo'],
    answer: 0,
    feedback: 'La red de cuidado también tiene necesidades de salud y puede experimentar consecuencias sociales y económicas diferenciales.',
    nursingAction: 'Valorar sobrecarga, salud propia, apoyos y necesidad de respiro o derivación social.',
    reflection: '¿Cómo incorporarías al cuidador como sujeto de cuidado?'
  },
  {
    id: 'DSS-G', title: 'Barrio y actividad física', setting: 'Salud comunitaria',
    scenario: 'Una comunidad presenta alta prevalencia de obesidad, pero los residentes refieren que evitan caminar por inseguridad y falta de áreas verdes.',
    data: ['Pocas plazas', 'Calles con iluminación insuficiente', 'Alta percepción de inseguridad', 'Oferta de alimentos ultraprocesados', 'Baja participación comunitaria'],
    question: '¿Qué interpretación evita culpabilizar a la población?',
    options: ['La actividad física depende solo de motivación', 'El entorno condiciona opciones y conductas', 'La obesidad no tiene relación con territorio', 'La solución es únicamente entregar folletos'],
    answer: 1,
    feedback: 'Los estilos de vida se desarrollan dentro de contextos materiales y sociales que facilitan o dificultan conductas.',
    nursingAction: 'Trabajar con comunidad, identificar activos locales y articular promoción con acciones territoriales.',
    reflection: '¿Qué actor fuera del sector salud debería participar?'
  },
  {
    id: 'DSS-H', title: 'Alta hospitalaria compleja', setting: 'Hospital / transición al domicilio',
    scenario: 'Paciente de 63 años será dado de alta tras descompensación cardíaca. Vive solo y presenta baja alfabetización en salud.',
    data: ['Cinco medicamentos', 'Instrucciones complejas', 'Dificultad para leer etiquetas', 'Vive lejos del hospital', 'Sin cuidador permanente'],
    question: '¿Qué riesgo aumenta si el alta se diseña solo desde la enfermedad?',
    options: ['Ninguno', 'Reingreso por barreras de comprensión y continuidad', 'Solo mayor tiempo de hospitalización', 'Únicamente mayor gasto del hospital'],
    answer: 1,
    feedback: 'La transición segura exige considerar capacidad real de comprender, acceder y ejecutar el plan.',
    nursingAction: 'Simplificar educación, verificar comprensión, coordinar seguimiento y evaluar apoyos disponibles.',
    reflection: '¿Qué indicador usarías para evaluar si la transición fue efectiva?'
  },
];

export const outbreakCases: NursingCase[] = [
  { id:'BROTE-A', title:'Gastroenteritis escolar', setting:'CESFAM / escuela', scenario:'En 48 horas consultan 14 estudiantes del mismo colegio por diarrea y vómitos.', data:['11 comieron en el casino escolar','Inicio de síntomas entre 8 y 20 h después','Dos manipuladores refieren síntomas','No hay casos graves'], question:'¿Cuál es la acción inicial más apropiada?', options:['Esperar una semana','Confirmar agrupación inusual, caracterizar casos y activar vigilancia/notificación según corresponda','Indicar antibióticos a todos','Cerrar todo el colegio sin investigar'], answer:1, feedback:'Primero se debe verificar y caracterizar el evento: persona, lugar, tiempo, exposición y gravedad.', nursingAction:'Construir listado de casos, identificar exposición común, comunicar a vigilancia y reforzar medidas de control.', reflection:'¿Qué variables incluirías en una línea de casos?' },
  { id:'BROTE-B', title:'Influenza en residencia', setting:'Residencia de personas mayores', scenario:'Ocho residentes presentan fiebre y tos en tres días; dos requieren oxígeno.', data:['Cobertura vacuna 62%','Personal con síntomas recientes','Comedor compartido','Alta fragilidad basal'], question:'¿Qué dato cambia más la urgencia de respuesta?', options:['Color del uniforme','Fragilidad y presencia de casos graves','Número de habitaciones','Edad del edificio'], answer:1, feedback:'La gravedad y vulnerabilidad de la población modifican la prioridad de investigación y control.', nursingAction:'Aislar según protocolo local, evaluar gravedad, revisar cobertura, identificar contactos y comunicar a equipo de vigilancia.', reflection:'¿Qué indicador de cobertura sería útil monitorear después?' },
  { id:'BROTE-C', title:'Intoxicación en evento comunitario', setting:'Municipio / urgencia', scenario:'Tras una feria comunitaria, 22 personas consultan por náuseas intensas.', data:['Todos consumieron alimentos en el evento','La mitad compró en el mismo puesto','Síntomas comienzan el mismo día','No hay hospitalizaciones'], question:'¿Qué comparación ayuda más a generar una hipótesis?', options:['Edad de los vendedores','Exposición alimentaria entre enfermos y no enfermos','Distancia a la feria únicamente','Número total de puestos'], answer:1, feedback:'Comparar exposiciones entre quienes enfermaron y quienes no ayuda a identificar la fuente probable.', nursingAction:'Recolectar historia de exposición, hora de consumo e inicio, coordinar investigación y educación sanitaria.', reflection:'¿Qué medida epidemiológica podría ser útil durante un brote?' },
  { id:'BROTE-D', title:'Varicela en jardín infantil', setting:'APS / jardín infantil', scenario:'Se notifican varios niños con lesiones compatibles con varicela en una semana.', data:['Grupos comparten patio','Algunos contactos tienen condiciones de riesgo','Estado de vacunación heterogéneo','Casos en distintas salas'], question:'¿Qué aspecto debe priorizar Enfermería?', options:['Solo contar casos','Identificar casos, contactos vulnerables y antecedentes relevantes para control','Esperar que todos enfermen','Suspender educación a familias'], answer:1, feedback:'La respuesta incluye vigilancia, evaluación de riesgo y comunicación con familias y autoridad sanitaria según normativa.', nursingAction:'Caracterizar casos y contactos, revisar antecedentes y reforzar medidas de prevención.', reflection:'¿Cómo comunicarías riesgo sin generar alarma?' },
  { id:'BROTE-E', title:'Síntomas respiratorios en hospital', setting:'Unidad hospitalaria', scenario:'Cinco funcionarios de una misma unidad presentan síntomas respiratorios en 72 horas.', data:['Turnos superpuestos','Pacientes inmunocomprometidos','Uso irregular de mascarilla en sala de descanso','Dos funcionarios trabajaron sintomáticos'], question:'¿Cuál es la mirada poblacional necesaria?', options:['Evaluar solo a cada funcionario','Analizar cadena de exposición y riesgo para pacientes y equipo','Ignorar espacios comunes','Suspender toda actividad indefinidamente'], answer:1, feedback:'La unidad funciona como una población con contactos, exposiciones y grupos particularmente vulnerables.', nursingAction:'Coordinar vigilancia interna, reforzar control de infecciones y proteger a pacientes de alto riesgo.', reflection:'¿Qué espacios no clínicos pueden ser relevantes en transmisión?' },
  { id:'BROTE-F', title:'Hepatitis A y comunidad', setting:'APS / comunidad', scenario:'Se detectan tres casos de hepatitis A en personas que viven en un mismo sector.', data:['Problemas recientes de suministro de agua','Un caso trabaja manipulando alimentos','Familias comparten actividades comunitarias','Fechas de inicio separadas por varios días'], question:'¿Qué información ambiental es especialmente relevante?', options:['Color de viviendas','Agua y saneamiento','Marca de teléfonos','Tipo de transporte personal'], answer:1, feedback:'La historia de salud pública muestra la importancia de agua, saneamiento y exposiciones comunitarias.', nursingAction:'Integrar historia clínica con antecedentes territoriales y coordinar investigación sanitaria.', reflection:'¿Qué recuerda este escenario del caso John Snow?' },
  { id:'BROTE-G', title:'Pediculosis escolar', setting:'Escuela', scenario:'Apoderados reportan aumento de pediculosis y solicitan suspender clases.', data:['Casos distribuidos en varios cursos','Sin compromiso sistémico','Alta preocupación de familias','Rumores en redes sociales'], question:'¿Cuál es una respuesta proporcional?', options:['Cerrar inmediatamente el establecimiento','Confirmar situación, educar, coordinar manejo y comunicar medidas basadas en riesgo','Publicar nombres de casos','No responder'], answer:1, feedback:'La respuesta de salud pública debe ser proporcional, efectiva y respetar confidencialidad.', nursingAction:'Educar sobre detección y tratamiento, reducir estigma y coordinar medidas institucionales.', reflection:'¿Cómo evitarías que la comunicación aumente estigma?' },
  { id:'BROTE-H', title:'Evento febril en campamento', setting:'Operativo de salud rural', scenario:'Durante un operativo, varias personas de un campamento refieren fiebre y malestar tras lluvias intensas.', data:['Anegamiento reciente','Agua almacenada','Presencia de roedores reportada','Dificultad de acceso al centro de salud'], question:'¿Qué enfoque inicial es más apropiado?', options:['Asumir un diagnóstico único','Caracterizar clínica, exposiciones ambientales y distribución territorial','Ignorar condiciones del entorno','Evaluar solo a quien está más grave'], answer:1, feedback:'La investigación inicial debe integrar síntomas, persona, lugar, tiempo y exposiciones antes de concluir causalidad.', nursingAction:'Triage, detección de gravedad, registro de casos y coordinación con red y vigilancia.', reflection:'¿Qué barrera de acceso podría amplificar el problema?' },
];

export const asisCases: NursingCase[] = [
  { id:'ASIS-A', title:'Comuna que envejece', setting:'APS comunal', scenario:'La dirección del CESFAM debe definir una prioridad para el próximo año.', data:['65+ años: 21%','Diabetes: 15%','Cobertura control cardiovascular: 68%','Caídas en mayores: +18% en dos años','Equipo de atención domiciliaria limitado'], question:'¿Qué decisión muestra mejor uso estratégico de datos?', options:['Elegir un tema por intuición','Priorizar envejecimiento y cronicidad integrando magnitud, tendencia, vulnerabilidad y capacidad de respuesta','Usar solo el dato más alto','No cambiar la planificación'], answer:1, feedback:'Priorizar exige integrar magnitud, tendencia, gravedad, vulnerabilidad y posibilidad de intervención.', nursingAction:'Proponer estrategia de seguimiento de personas mayores, prevención de caídas y fortalecimiento de continuidad.', reflection:'¿Qué indicador usarías para evaluar la intervención al año siguiente?' },
  { id:'ASIS-B', title:'Cobertura de vacunación desigual', setting:'CESFAM', scenario:'La cobertura global de influenza parece aceptable, pero hay diferencias por sector.', data:['Cobertura total: 78%','Sector Norte: 91%','Sector Centro: 80%','Sector Sur: 54%','Sector Sur concentra mayor proporción de mayores de 75 años'], question:'¿Qué error cometerías si usas solo el promedio comunal?', options:['Ninguno','Ocultar una brecha territorial relevante','Sobreestimar siempre la inequidad','Mejorar precisión'], answer:1, feedback:'Los promedios pueden esconder desigualdades entre grupos y territorios.', nursingAction:'Focalizar búsqueda activa y estrategias de acceso en el sector con menor cobertura y mayor vulnerabilidad.', reflection:'¿Qué otros datos pedirías antes de intervenir?' },
  { id:'ASIS-C', title:'Salud mental adolescente', setting:'Comuna', scenario:'Aumentan consultas por ansiedad en adolescentes.', data:['Consultas APS: +35%','Ausentismo escolar: +12%','Intentos suicidas no aumentan','Lista de espera psicológica extensa','Encuesta escolar muestra mayor estrés'], question:'¿Cuál es la mejor lectura?', options:['Solo importa el número de consultas','Se requiere integrar registros sanitarios y otras fuentes para comprender necesidad y acceso','No hay problema porque no aumentaron intentos','La encuesta escolar no aporta'], answer:1, feedback:'La situación de salud se comprende mejor con múltiples fuentes, no solo demanda satisfecha.', nursingAction:'Articular tamizaje, derivación priorizada, educación y trabajo con comunidad educativa.', reflection:'¿Qué parte del “iceberg” podría no estar llegando a consulta?' },
  { id:'ASIS-D', title:'Hipertensión no controlada', setting:'APS', scenario:'El equipo observa alto número de personas con hipertensión descompensada.', data:['Prevalencia registrada: 28%','Control adecuado: 52%','Inasistencia: 22%','Mayor descontrol en zonas periféricas','Transporte público limitado'], question:'¿Cuál indicador describe mejor una brecha de proceso de atención?', options:['Prevalencia de HTA','Proporción de personas con control adecuado','Edad promedio','Número de calles'], answer:1, feedback:'El control adecuado permite evaluar desempeño y continuidad del cuidado entre quienes requieren seguimiento.', nursingAction:'Segmentar población, identificar inasistentes y barreras territoriales, y rediseñar seguimiento.', reflection:'¿Cómo distinguirías necesidad clínica de problema de acceso?' },
  { id:'ASIS-E', title:'Embarazo adolescente', setting:'Salud municipal', scenario:'El municipio solicita una propuesta tras detectar aumento de embarazo adolescente en dos barrios.', data:['Aumento concentrado en 2 de 8 barrios','Deserción escolar mayor en esos sectores','Acceso irregular a consejería','Diferencias en nivel socioeconómico','Datos de 3 años muestran tendencia sostenida'], question:'¿Qué paso viene antes de elegir una campaña?', options:['Diseñar afiche','Caracterizar población, causas y determinantes del problema','Comprar insumos','Evaluar después de intervenir'], answer:1, feedback:'La planificación parte del diagnóstico y análisis del problema antes de seleccionar soluciones.', nursingAction:'Combinar datos de salud, educación y acceso; incorporar participación juvenil.', reflection:'¿Qué actor intersectorial es imprescindible?' },
  { id:'ASIS-F', title:'Hospitalizaciones evitables', setting:'Red de salud', scenario:'Aumentan hospitalizaciones por descompensación de enfermedades crónicas.', data:['Reingresos: +14%','Mayor concentración en personas con controles APS irregulares','Polifarmacia frecuente','Alta tasa de personas mayores','Educación de alta no estandarizada'], question:'¿Qué hipótesis de sistema merece explorarse?', options:['Solo mayor gravedad biológica','Problemas de continuidad entre hospital y APS','Irrelevancia del alta de Enfermería','Ausencia de determinantes sociales'], answer:1, feedback:'La continuidad y coordinación de la red pueden influir en reingresos y hospitalizaciones evitables.', nursingAction:'Estandarizar transición, conciliación educativa y seguimiento post alta con APS.', reflection:'¿Qué indicador de continuidad podrías medir?' },
];

export const policyCases: NursingCase[] = [
  { id:'POL-A', title:'Ley Ricarte Soto: priorizar cobertura', setting:'Comité de política', scenario:'Un comité debe recomendar qué tratamientos de alto costo priorizar con recursos limitados.', data:['Tratamiento A: alta efectividad, pocos beneficiarios, costo muy alto','Tratamiento B: efectividad moderada, más beneficiarios, costo alto','Tratamiento C: baja evidencia, costo muy alto','Presupuesto insuficiente para todos'], question:'¿Qué enfoque es más defendible?', options:['Elegir solo el más barato','Usar criterios explícitos de gravedad, efectividad, evidencia, equidad e impacto financiero','Elegir por presión mediática','Financiar sin evaluar evidencia'], answer:1, feedback:'La priorización transparente requiere múltiples criterios y reconocer el conflicto entre eficiencia, equidad y necesidad.', nursingAction:'Aportar experiencia sobre carga del cuidado, acceso, impacto familiar y factibilidad de implementación.', reflection:'¿Qué criterio priorizarías y qué costo ético podría tener?' },
  { id:'POL-B', title:'GES y oportunidad', setting:'Gestión de red', scenario:'Usuarios con una condición GES están recibiendo atención fuera del plazo definido.', data:['Acceso formalmente garantizado','Lista de espera creciente','Capacidad diagnóstica limitada','Usuarios reportan incertidumbre'], question:'¿Qué garantía está directamente comprometida?', options:['Calidad solamente','Oportunidad','Protección financiera solamente','Ninguna'], answer:1, feedback:'La garantía de oportunidad se refiere al plazo máximo para otorgar prestaciones garantizadas.', nursingAction:'Identificar retrasos, orientar usuarios y escalar brechas de proceso en la red.', reflection:'¿Cómo podría Enfermería detectar precozmente incumplimientos?' },
  { id:'POL-C', title:'Política de vacunación', setting:'Autoridad sanitaria local', scenario:'La comuna presenta baja vacunación en grupos de riesgo.', data:['Cobertura heterogénea','Rumores en redes','Horarios poco compatibles','Alta carga de enfermedad respiratoria'], question:'¿En qué etapa del ciclo estás al analizar causas antes de diseñar acciones?', options:['Implementación','Diagnóstico de causas','Evaluación final','Cierre'], answer:1, feedback:'Después de definir el problema se analizan las causas que lo producen o mantienen.', nursingAction:'Aportar datos de terreno, barreras de usuarios y propuestas factibles de implementación.', reflection:'¿Qué cambiaría si el problema principal fuera acceso y no rechazo?' },
  { id:'POL-D', title:'Programa de prevención de obesidad', setting:'Municipio', scenario:'Se quiere implementar una política basada solo en educación individual.', data:['Alta obesidad infantil','Pocas áreas verdes','Oferta alimentaria escolar poco saludable','Familias con recursos limitados'], question:'¿Qué debilidad tiene el diseño?', options:['Tiene demasiados DSS','No interviene determinantes estructurales e intermediarios relevantes','Es demasiado intersectorial','No necesita evaluación'], answer:1, feedback:'Una política centrada solo en información puede ser insuficiente cuando el entorno limita opciones saludables.', nursingAction:'Incorporar acciones de entorno, escuela, familia y comunidad junto con educación.', reflection:'¿Qué sector fuera de salud debería participar?' },
  { id:'POL-E', title:'Implementación de protocolo', setting:'Hospital', scenario:'Se aprueba un nuevo protocolo de prevención de lesiones por presión, pero la adherencia es baja.', data:['Capacitación única','Alta rotación de personal','Falta de insumos en algunos turnos','Sin auditoría ni feedback'], question:'¿Qué muestra este caso?', options:['Una política funciona al publicarse','La implementación requiere condiciones, recursos, monitoreo y adaptación','La evaluación es innecesaria','La resistencia siempre es individual'], answer:1, feedback:'Las buenas ideas necesitan implementación factible y evaluación continua.', nursingAction:'Identificar barreras, asegurar recursos, capacitar, monitorear adherencia y retroalimentar al equipo.', reflection:'¿Qué indicador de implementación usarías?' },
  { id:'POL-F', title:'Protección financiera', setting:'APS / orientación de usuario', scenario:'Una familia posterga un tratamiento por temor a endeudarse.', data:['Tratamiento de alto costo','Desconocimiento de cobertura','Ingreso familiar limitado','Diagnóstico potencialmente cubierto por política sanitaria'], question:'¿Qué dimensión del sistema debe explorar Enfermería además del aspecto clínico?', options:['Solo diagnóstico','Protección financiera y ruta de acceso','Tipo de vivienda del hospital','Marketing farmacéutico'], answer:1, feedback:'Los sistemas de salud también deben proteger a las familias del impacto financiero de la enfermedad.', nursingAction:'Orientar cobertura, derivar a apoyo social y asegurar continuidad de la ruta asistencial.', reflection:'¿Cómo puede una barrera financiera transformarse en un resultado de salud?'
  },
];

export const designCases = [
  { q:'Queremos estimar la frecuencia actual de obesidad en estudiantes de Enfermería.', a:'Transversal', why:'Mide exposición y desenlace en un punto o periodo definido.' },
  { q:'Seguimos durante 5 años a enfermeras expuestas y no expuestas a turnos nocturnos para observar hipertensión.', a:'Cohorte', why:'Parte desde la exposición y observa la aparición posterior del desenlace.' },
  { q:'Comparamos pacientes con úlceras por presión con pacientes sin úlceras y revisamos exposición previa a inmovilidad.', a:'Caso-control', why:'Parte desde el desenlace y reconstruye exposiciones previas.' },
  { q:'Asignamos aleatoriamente una intervención educativa sobre autocuidado y comparamos resultados entre grupos.', a:'Ensayo clínico aleatorizado', why:'Existe intervención y asignación aleatoria.' },
  { q:'Medimos vacunación y presencia de síntomas respiratorios en estudiantes durante la misma semana.', a:'Transversal', why:'Exposición y desenlace se observan simultáneamente.' },
  { q:'Seleccionamos personas con infección asociada a la atención y controles sin infección para revisar exposición previa a un dispositivo.', a:'Caso-control', why:'La selección parte por presencia o ausencia del desenlace.' },
  { q:'Seguimos recién nacidos con y sin una exposición perinatal para observar un desenlace durante un año.', a:'Cohorte', why:'Se sigue a grupos definidos por exposición hacia la ocurrencia del desenlace.' },
  { q:'Un hospital introduce una intervención en una unidad y compara antes/después sin asignación aleatoria.', a:'Cuasiexperimental', why:'Existe intervención, pero no asignación aleatoria.' },
];

export const challengeQuestions: QuizItem[] = [
  { q:'Una enfermera observa que varias consultas respiratorias provienen del mismo sector. ¿Qué mirada agrega la Salud Pública?', options:['Solo tratar a cada persona','Buscar patrón poblacional y posibles factores comunes','Ignorar territorio','Suspender registros'], answer:1, feedback:'La salud pública agrega análisis poblacional de persona, lugar, tiempo y factores asociados.' },
  { q:'¿Qué aprendizaje central deja John Snow?', options:['La causalidad siempre requiere laboratorio','Los patrones de casos y exposiciones pueden orientar control','Los mapas no sirven','Solo importa el tratamiento'], answer:1, feedback:'El análisis de distribución y exposición puede generar evidencia útil para intervenir.' },
  { q:'Educación, ocupación e ingreso corresponden principalmente a:', options:['Determinantes estructurales','Pruebas diagnósticas','Sesgos','Resultados clínicos'], answer:0, feedback:'Son indicadores de posición socioeconómica dentro del marco de DSS.' },
  { q:'Una cobertura comunal de 80% puede ocultar sectores con 50%. Esto ejemplifica:', options:['Que los promedios pueden esconder desigualdades','Que los datos no sirven','Que toda desigualdad es aleatoria','Que no se debe estratificar'], answer:0, feedback:'El análisis por grupos permite detectar brechas que el promedio global puede ocultar.' },
  { q:'¿Cuál es una función operativa de los sistemas de salud?', options:['Proteger a familias de gastos médicos catastróficos','Aumentar pago de bolsillo','Evitar prevención','Reducir información'], answer:0, feedback:'La protección financiera es una función central de los sistemas.' },
  { q:'¿Cuál es una garantía GES?', options:['Oportunidad','Incidencia','Prevalencia','Aleatorización'], answer:0, feedback:'GES incluye acceso, calidad, oportunidad y protección financiera.' },
  { q:'En 200 residentes, 50 presentan infección al momento de la evaluación. ¿Cuál es la prevalencia?', options:['10%','25%','40%','50%'], answer:1, feedback:'50/200 = 0,25 = 25%.' },
  { q:'Si 1.200 personas están al inicio y 80 ya tienen la enfermedad, la población en riesgo para incidencia es:', options:['1.280','1.120','1.200','80'], answer:1, feedback:'Se excluyen quienes ya presentan el evento: 1.200 - 80 = 1.120.' },
  { q:'Una prueba con alta sensibilidad es especialmente útil para:', options:['Detectar a quienes tienen la enfermedad','Medir causalidad','Estimar mortalidad','Clasificar un diseño'], answer:0, feedback:'Sensibilidad expresa la proporción de enfermos correctamente identificados por la prueba.' },
  { q:'Seguimiento de expuestos y no expuestos a lo largo del tiempo corresponde a:', options:['Transversal','Caso-control','Cohorte','Serie de casos'], answer:2, feedback:'La cohorte parte de la exposición y sigue la ocurrencia del desenlace.' },
  { q:'En un brote, la tasa de ataque usa como denominador:', options:['Toda la población nacional','La población expuesta o en riesgo','Solo fallecidos','Solo casos previos'], answer:1, feedback:'La tasa de ataque relaciona casos nuevos con la población expuesta o en riesgo durante el brote.' },
  { q:'Una persona con baja adherencia por dificultades de transporte requiere primero:', options:['Ser catalogada como poco motivada','Explorar barreras de acceso y contexto','Suspender seguimiento','Aumentar complejidad del plan'], answer:1, feedback:'El enfoque de DSS evita atribuir el problema exclusivamente a decisiones individuales.' },
  { q:'Si una política está bien diseñada pero no se aplica por falta de insumos, el principal problema es de:', options:['Prevalencia','Implementación','Especificidad','Aleatorización'], answer:1, feedback:'La implementación determina si una política o intervención puede operar en condiciones reales.' },
  { q:'¿Qué acción representa mejor Enfermería en salud pública?', options:['Registrar sin analizar','Traducir datos y necesidades en prevención, educación, coordinación y seguimiento','Trabajar solo en hospital','Evitar trabajo comunitario'], answer:1, feedback:'El rol integra cuidado, prevención, vigilancia, educación, coordinación y uso de evidencia.' },
];
