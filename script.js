/* ==========================================================================
   BANCO DE DADOS DE QUESTÕES
   ========================================================================== */

// Fase 1: Identificando Proporções
const proportionQuestions = [
    {
        question: "Velocidade de um carro e tempo para percorrer uma distância fixa",
        correct: "inversa",
        explanation: "Quanto MAIOR a velocidade, MENOR o tempo necessário para percorrer a mesma distância. Por isso é inversamente proporcional.",
        imageUrl: null
    },
    {
        question: "Quantidade de operários e tempo para construir uma casa",
        correct: "inversa",
        explanation: "Quanto MAIS operários trabalhando, MENOS tempo será necessário para construir a casa. É inversamente proporcional.",
        imageUrl: null
    },
    {
        question: "Quantidade de combustível e distância percorrida",
        correct: "direta",
        explanation: "Quanto MAIS combustível você tem, MAIOR distância pode percorrer. É diretamente proporcional.",
        imageUrl: null
    },
    {
        question: "Número de torneiras abertas e tempo para encher uma piscina",
        correct: "inversa",
        explanation: "Quanto MAIS torneiras abertas, MENOS tempo será necessário para encher a piscina. É inversamente proporcional.",
        imageUrl: "https://i.imgur.com/g8f0Wqg.png" // Imagem de contexto
    },
    {
        question: "Quantidade de ingredientes e número de porções de uma receita",
        correct: "direta",
        explanation: "Quanto MAIS ingredientes você usar, MAIS porções da receita conseguirá fazer. É diretamente proporcional.",
        imageUrl: "https://i.imgur.com/vHqjXfH.png" // Imagem de contexto
    },
    {
        question: "Horas trabalhadas e salário recebido",
        correct: "direta",
        explanation: "Quanto MAIS horas você trabalhar, MAIOR será seu salário. É diretamente proporcional.",
        imageUrl: null
    },
    {
        question: "Velocidade de digitação e tempo para escrever um texto",
        correct: "inversa",
        explanation: "Quanto MAIS rápido você digita (maior velocidade), MENOS tempo precisa para escrever o mesmo texto. É inversamente proporcional.",
        imageUrl: null
    },
    {
        question: "Quantidade de tinta e área pintada",
        correct: "direta",
        explanation: "Quanto MAIS tinta você tem, MAIOR área consegue pintar. É diretamente proporcional.",
        imageUrl: null
    }
];

// Fase 2: Regra de Três Simples (Com feedback conceitual)
const quizBank = [
    {
        question: "Se 3 canetas custam R$ 12, quanto custam 7 canetas?",
        options: ["R$ 28", "R$ 24", "R$ 21", "R$ 30"],
        correct: 0,
        type: 'direta', // Tipo da proporção
        trapAnswerIndex: null, // Índice da resposta "armadilha" (se houvesse)
        solution: "3 canetas → R$ 12\n7 canetas → x\n\n(Direta) 3x = 12 × 7\n3x = 84\nx = 84 ÷ 3 = R$ 28"
    },
    {
        question: "Um carro percorre 240 km em 3 horas. Em quantas horas percorrerá 400 km?",
        options: ["4 horas", "5 horas", "6 horas", "7 horas"],
        correct: 1,
        type: 'direta',
        trapAnswerIndex: null,
        solution: "240 km → 3 horas\n400 km → x\n\n(Direta) 240x = 400 × 3\n240x = 1200\nx = 1200 ÷ 240 = 5 horas"
    },
    {
        question: "Se 5 operários constroem um muro em 8 dias, quantos dias levarão 10 operários?",
        options: ["2 dias", "4 dias", "6 dias", "16 dias"],
        correct: 1,
        type: 'inversa',
        trapAnswerIndex: 3, // 16 dias é a resposta se o aluno calcular como direta (5/10 = 8/x -> 5x=80 -> x=16)
        solution: "Proporção inversa: mais operários, menos dias.\n5 operários → 8 dias\n10 operários → x\n\n(Inversa) 10x = 5 × 8\n10x = 40\nx = 4 dias"
    },
    {
        question: "Uma receita para 4 pessoas usa 200g de açúcar. Para 6 pessoas, quantos gramas?",
        options: ["250g", "300g", "350g", "400g"],
        correct: 1,
        type: 'direta',
        trapAnswerIndex: null,
        imageUrl: "https://i.imgur.com/vHqjXfH.png", // Imagem de contexto
        solution: "4 pessoas → 200g\n6 pessoas → x\n\n(Direta) 4x = 200 × 6\n4x = 1200\nx = 300g"
    },
    {
        question: "Uma torneira enche um tanque em 6 horas. Duas torneiras iguais encherão em quanto tempo?",
        options: ["2 horas", "3 horas", "4 horas", "12 horas"],
        correct: 1,
        type: 'inversa',
        trapAnswerIndex: 3, // 12 horas é a resposta se o aluno calcular como direta (1/2 = 6/x -> x=12)
        imageUrl: "https://i.imgur.com/g8f0Wqg.png", // Imagem de contexto
        solution: "Proporção inversa: mais torneiras, menos tempo.\n1 torneira → 6 horas\n2 torneiras → x\n\n(Inversa) 2x = 1 × 6\n2x = 6\nx = 3 horas"
    },
    {
        question: "Se 4 pintores pintam uma casa em 12 dias, quantos dias levarão 6 pintores?",
        options: ["6 dias", "8 dias", "9 dias", "18 dias"],
        correct: 1,
        type: 'inversa',
        trapAnswerIndex: 3, // 18 dias é a resposta se o aluno calcular como direta (4/6 = 12/x -> 4x=72 -> x=18)
        solution: "Proporção inversa: mais pintores, menos dias.\n4 pintores → 12 dias\n6 pintores → x\n\n(Inversa) 6x = 4 × 12\n6x = 48\nx = 8 dias"
    },
    {
        question: "Uma impressora imprime 120 páginas em 4 minutos. Quantas páginas em 7 minutos?",
        options: ["180 páginas", "200 páginas", "210 páginas", "240 páginas"],
        correct: 2,
        type: 'direta',
        trapAnswerIndex: null,
        solution: "4 minutos → 120 páginas\n7 minutos → x\n\n(Direta) 4x = 120 × 7\n4x = 840\nx = 210 páginas"
    }
];

// Fase 3: Bônus - Análise Composta (Apenas identificação)
const compoundQuestions = [
    {
        scenario: "Uma fábrica tem 10 máquinas que produzem 500 peças em 5 dias.",
        question: "Analisando SÓ 'Peças' e 'Máquinas': Se aumentarmos o número de máquinas, o que acontece com a produção de peças (no mesmo tempo)?",
        options: ["Aumenta (Direta)", "Diminui (Inversa)"],
        correct: 0,
        explanation: "Correto! MAIS máquinas produzem MAIS peças. É uma relação direta."
    },
    {
        scenario: "Uma fábrica tem 10 máquinas que produzem 500 peças em 5 dias.",
        question: "Analisando SÓ 'Peças' e 'Dias': Se aumentarmos o número de dias, o que acontece com a produção de peças (com as mesmas máquinas)?",
        options: ["Aumenta (Direta)", "Diminui (Inversa)"],
        correct: 0,
        explanation: "Correto! MAIS dias de trabalho produzem MAIS peças. É uma relação direta."
    },
    {
        scenario: "Para construir um muro, 5 operários levam 8 dias, trabalhando 6 horas por dia.",
        question: "Analisando SÓ 'Dias' e 'Operários': Se aumentarmos o número de operários, o que acontece com os dias necessários?",
        options: ["Aumenta (Direta)", "Diminui (Inversa)"],
        correct: 1,
        explanation: "Correto! MAIS operários terminam o trabalho em MENOS dias. É uma relação inversa."
    },
    {
        scenario: "Para construir um muro, 5 operários levam 8 dias, trabalhando 6 horas por dia.",
        question: "Analisando SÓ 'Dias' e 'Horas por dia': Se os operários trabalharem MAIS horas por dia, o que acontece com os dias necessários?",
        options: ["Aumenta (Direta)", "Diminui (Inversa)"],
        correct: 1,
        explanation: "Correto! Se trabalharem MAIS horas por dia, eles terminam em MENOS dias. É uma relação inversa."
    }
];

/* ==========================================================================
   ESTADO DO JOGO (GAME STATE)
   ========================================================================== */

let gameState = {};

function resetGameState() {
    gameState = {
        currentPhase: 1,
        currentQuestion: 0,
        phase1Score: 0,
        phase2Score: 0,
        phase3Score: 0,
        selectedPhase1Questions: [],
        selectedPhase2Questions: [],
        selectedPhase3Questions: [],
        userAnswers: [], // Para salvar respostas da Fase 2
        // Estados temporários da Fase 2
        selectedProportionType: null, // 'direta' ou 'inversa'
        selectedAnswerIndex: null, // 0, 1, 2, ou 3
        questionLocked: false, // Trava a questão após a resposta
        // Pontos
        phase2PointsTotal: 0,
        phase3PointsTotal: 0
    };
}

/* ==========================================================================
   FUNÇÕES DO MODAL DE VÍDEO
   ========================================================================== */

const videoModal = document.getElementById('video-modal');
const iframe = document.getElementById('review-video');
let originalVideoSrc = iframe.src;

function openVideoModal() {
    iframe.src = originalVideoSrc; // Garante que o vídeo reinicie
    videoModal.classList.add('show');
}

function closeVideoModal() {
    videoModal.classList.remove('show');
    iframe.src = ""; // Para o vídeo ao fechar
}

/* ==========================================================================
   INICIALIZAÇÃO DO JOGO
   ========================================================================== */

function initGame() {
    resetGameState();
    
    // Embaralhar e selecionar questões para cada fase
    gameState.selectedPhase1Questions = shuffleArray(proportionQuestions).slice(0, 5);
    gameState.selectedPhase2Questions = shuffleArray(quizBank).slice(0, 5);
    gameState.selectedPhase3Questions = shuffleArray(compoundQuestions).slice(0, 3); // 3 questões bônus
    
    // Calcular pontuação máxima
    gameState.phase2PointsTotal = gameState.selectedPhase2Questions.length * 10; // 10 pontos por questão
    gameState.phase3PointsTotal = gameState.selectedPhase3Questions.length * 5; // 5 pontos por questão

    // Ocultar todas as fases e mostrar a Fase 1
    document.getElementById('phase1').style.display = 'block';
    document.getElementById('phase2').style.display = 'none';
    document.getElementById('phase3').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    
    loadPhase1Question();
}

function shuffleArray(array) {
    // Algoritmo Fisher-Yates (mais eficiente e justo que sort())
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function updateProgress(phase, percentage) {
    const progressBar = document.getElementById(`progress${phase}`);
    if (progressBar) progressBar.style.width = percentage + '%';
}

/* ==========================================================================
   LÓGICA - FASE 1: IDENTIFICANDO PROPORÇÕES
   ========================================================================== */

function loadPhase1Question() {
    const container = document.getElementById('proportion-questions');
    if (!container) return; // Proteção caso o script rode antes do DOM
    const q = gameState.selectedPhase1Questions[gameState.currentQuestion];
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-text">
                <strong>Questão ${gameState.currentQuestion + 1}/${gameState.selectedPhase1Questions.length}:</strong><br>
                Qual a relação entre as grandezas:<br><em>${q.question}</em>
            </div>
            ${q.imageUrl ? `<img src="${q.imageUrl}" alt="Contexto da questão" class="question-image">` : ''}
            <div class="options">
                <button class="option-btn" onclick="answerPhase1('direta')">
                    📈 Diretamente Proporcional
                </button>
                <button class="option-btn" onclick="answerPhase1('inversa')">
                    📉 Inversamente Proporcional
                </button>
            </div>
            <div class="explanation" id="explanation-${gameState.currentQuestion}">
                <strong>Explicação:</strong><br>
                ${q.explanation}
            </div>
            <button class="next-btn" id="next-btn-p1" onclick="nextPhase1Question()">
                Próxima Questão →
            </button>
        </div>
    `;
    
    updateProgress(1, ((gameState.currentQuestion) / gameState.selectedPhase1Questions.length) * 100);
}

function answerPhase1(answer) {
    if (gameState.questionLocked) return;
    gameState.questionLocked = true;

    const q = gameState.selectedPhase1Questions[gameState.currentQuestion];
    const buttons = document.querySelectorAll('#phase1 .option-btn');
    const explanation = document.getElementById(`explanation-${gameState.currentQuestion}`);
    const nextBtn = document.getElementById(`next-btn-p1`);
    
    const isCorrect = answer === q.correct;
    
    if (isCorrect) {
        gameState.phase1Score++;
        showSuccessAnimation();
    }

    buttons.forEach(btn => {
        btn.disabled = true;
        const btnType = btn.textContent.toLowerCase().includes('direta') ? 'direta' : 'inversa';
        if (btnType === q.correct) {
            btn.classList.add('correct');
        } else if (btnType === answer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    explanation.classList.add('show');
    
    // Configurar botão de próximo
    if (gameState.currentQuestion === gameState.selectedPhase1Questions.length - 1) {
        nextBtn.textContent = 'Ir para Fase 2 →';
        nextBtn.onclick = startPhase2;
    }
    nextBtn.classList.add('show');
}

function nextPhase1Question() {
    gameState.currentQuestion++;
    gameState.questionLocked = false;
    loadPhase1Question();
}

/* ==========================================================================
   LÓGICA - FASE 2: REGRA DE TRÊS SIMPLES (COM FEEDBACK)
   ========================================================================== */

function startPhase2() {
    gameState.currentPhase = 2;
    gameState.currentQuestion = 0;
    gameState.questionLocked = false;
    gameState.userAnswers = []; // Reseta respostas da fase

    document.getElementById('phase1').style.display = 'none';
    document.getElementById('phase2').style.display = 'block';
    
    loadPhase2Question();
}

function loadPhase2Question() {
    const container = document.getElementById('quiz-questions');
    const q = gameState.selectedPhase2Questions[gameState.currentQuestion];

    // Limpar estados temporários
    gameState.selectedProportionType = null;
    gameState.selectedAnswerIndex = null;
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-text">
                <strong>Questão ${gameState.currentQuestion + 1}/${gameState.selectedPhase2Questions.length}:</strong><br>
                ${q.question}
            </div>
            ${q.imageUrl ? `<img src="${q.imageUrl}" alt="Contexto da questão" class="question-image">` : ''}

            <div class="proportion-type-selector">
                <h3>1. Primeiro, analise as grandezas:</h3>
                <div class="proportion-type-options">
                    <button class="proportion-btn" id="btn-type-direta" onclick="selectProportionType('direta')">📈 Direta</button>
                    <button class="proportion-btn" id="btn-type-inversa" onclick="selectProportionType('inversa')">📉 Inversa</button>
                </div>
            </div>

            <div class="arrow-display" id="arrow-display"></div>

            <h3 id="step-2-title" style="display: none; text-align: center; margin-top: 25px; color: #555;">2. Agora, calcule a resposta:</h3>
            <div class="quiz-options" id="quiz-options-container">
                ${q.options.map((option, index) => `
                    <div class="quiz-option disabled" id="option-${index}" onclick="selectQuizOption(${index})">
                        ${String.fromCharCode(65 + index)}) ${option}
                    </div>
                `).join('')}
            </div>

            <div class="conceptual-feedback" id="conceptual-feedback"></div>

            <button class="next-btn" id="btn-confirm-p2" onclick="checkQuizAnswer()" style="display: none; background-color: var(--cor-secundaria);">
                Confirmar Resposta
            </button>
            <button class="next-btn" id="next-btn-p2" onclick="nextPhase2Question()">
                Próxima Questão →
            </button>
        </div>
    `;
    
    updateProgress(2, ((gameState.currentQuestion) / gameState.selectedPhase2Questions.length) * 100);
}

function selectProportionType(type) {
    if (gameState.questionLocked) return;

    gameState.selectedProportionType = type;

    // Habilitar botões de opção
    document.querySelectorAll('#phase2 .quiz-option').forEach(btn => {
        btn.classList.remove('disabled');
    });
    document.getElementById('step-2-title').style.display = 'block';

    // Atualizar botões de tipo
    document.getElementById('btn-type-direta').classList.toggle('selected', type === 'direta');
    document.getElementById('btn-type-inversa').classList.toggle('selected', type === 'inversa');
    document.getElementById('btn-type-direta').disabled = true;
    document.getElementById('btn-type-inversa').disabled = true;

    // Mostrar flechas
    const arrowDisplay = document.getElementById('arrow-display');
    if (type === 'direta') {
        arrowDisplay.innerHTML = '<span>Grandeza 1 ↑</span> <span>Grandeza 2 ↑</span>';
        arrowDisplay.className = 'arrow-display show direct';
    } else {
        arrowDisplay.innerHTML = '<span>Grandeza 1 ↑</span> <span>Grandeza 2 ↓</span>';
        arrowDisplay.className = 'arrow-display show inverse';
    }
}

function selectQuizOption(index) {
    if (gameState.questionLocked) return;

    gameState.selectedAnswerIndex = index;
    
    // Atualizar visual da opção selecionada
    document.querySelectorAll('#phase2 .quiz-option').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });

    // Mostrar botão de confirmar
    document.getElementById('btn-confirm-p2').style.display = 'inline-block';
}

function checkQuizAnswer() {
    if (gameState.questionLocked || gameState.selectedAnswerIndex === null) return;
    gameState.questionLocked = true;

    const q = gameState.selectedPhase2Questions[gameState.currentQuestion];
    const feedbackBox = document.getElementById('conceptual-feedback');
    let feedbackHTML = '';

    const isCorrectType = gameState.selectedProportionType === q.type;
    const isCorrectAnswer = gameState.selectedAnswerIndex === q.correct;

    // Salvar resposta para o final
    gameState.userAnswers.push({
        question: q,
        answerIndex: gameState.selectedAnswerIndex,
        typeSelected: gameState.selectedProportionType
    });

    if (isCorrectAnswer) {
        // --- ACERTO ---
        gameState.phase2Score += 10;
        feedbackBox.classList.add('correct');
        feedbackHTML = `<strong>🎉 Correto!</strong> Você identificou corretamente como <strong>${q.type}</strong> e acertou o cálculo.`;
        showSuccessAnimation();

    } else {
        // --- ERRO ---
        if (!isCorrectType) {
            // Erro Conceitual 1: Tipo errado
            feedbackBox.classList.add('wrong-type');
            feedbackHTML = `<strong>🤔 Atenção!</strong> A sua análise do tipo de proporção está incorreta. Esta é uma proporção <strong>${q.type}</strong>, mas você a marcou como <strong>${gameState.selectedProportionType}</strong>.`;
        
        } else if (gameState.selectedAnswerIndex === q.trapAnswerIndex) {
            // Erro Conceitual 2: Tipo certo, mas cálculo de "armadilha"
            feedbackBox.classList.add('wrong-type');
            const trapType = q.type === 'direta' ? 'inversa' : 'direta';
            feedbackHTML = `<strong>⚠️ Cuidado!</strong> Você acertou ao identificar que a proporção é <strong>${q.type}</strong>, mas seu cálculo está errado. A resposta que você marcou (${q.options[q.trapAnswerIndex]}) é o que aconteceria se você a calcul
