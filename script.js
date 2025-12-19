// Game state
let clickCount = 0;
const CLICKS_TO_WIN = 100;
let hasWon = false;

// Configuration constants
const MAX_CONSOLE_MESSAGES = 20;
const SPARK_THROTTLE_MS = 100;
const SPARK_PROBABILITY = 0.98; // Math.random() > 0.98 = 2% chance
const SPARK_ANIMATION_DURATION_MS = 1000;

// DOM elements
const hackButton = document.getElementById('hackButton');
const clickCountElement = document.getElementById('clickCount');
const accessLevelElement = document.getElementById('accessLevel');
const consoleLog = document.getElementById('consoleLog');
const rewardSection = document.getElementById('rewardSection');
const downloadButton = document.getElementById('downloadButton');

// Hacking messages for console
const hackMessages = [
    "Escaneando puertos...",
    "Bypassing firewall...",
    "Inyectando payload...",
    "Estableciendo backdoor...",
    "Escalando privilegios...",
    "Desencriptando base de datos...",
    "Extrayendo credenciales...",
    "Comprometiendo sistema...",
    "Ejecutando exploit...",
    "Borrando logs...",
    "Iniciando tunneling...",
    "Redirigiendo tráfico...",
    "Instalando rootkit...",
    "Modificando kernel...",
    "Accediendo al mainframe...",
    "Hackeando la Gibson...",
    "SQL injection exitoso!",
    "XSS payload ejecutado!",
    "Buffer overflow detectado!",
    "Zero-day exploit activado!",
];

// Access level names based on click count
function getAccessLevel(clicks) {
    if (clicks < 10) return "GUEST";
    if (clicks < 25) return "USER";
    if (clicks < 50) return "POWER USER";
    if (clicks < 75) return "ADMIN";
    if (clicks < 100) return "SUPER ADMIN";
    return "ROOT";
}

// Add message to console log
function addLogMessage(message, type = '') {
    const logEntry = document.createElement('p');
    logEntry.className = `log-entry ${type}`;
    logEntry.textContent = `> ${message}`;
    consoleLog.appendChild(logEntry);
    
    // Auto-scroll to bottom
    consoleLog.scrollTop = consoleLog.scrollHeight;
    
    // Keep only last MAX_CONSOLE_MESSAGES messages
    while (consoleLog.children.length > MAX_CONSOLE_MESSAGES) {
        consoleLog.firstChild.remove();
    }
}

// Update UI
function updateUI() {
    clickCountElement.textContent = clickCount;
    accessLevelElement.textContent = getAccessLevel(clickCount);
    
    // Add color based on progress
    if (clickCount >= 75) {
        clickCountElement.style.color = '#ff0000';
    } else if (clickCount >= 50) {
        clickCountElement.style.color = '#ffaa00';
    }
}

// Handle button click
function handleHackClick() {
    if (hasWon) return;
    
    clickCount++;
    updateUI();
    
    // Random hack message
    const randomMessage = hackMessages[Math.floor(Math.random() * hackMessages.length)];
    addLogMessage(randomMessage, 'success');
    
    // Special messages at milestones
    if (clickCount === 25) {
        addLogMessage("⚡ Nivel de acceso incrementado!", 'warning');
    } else if (clickCount === 50) {
        addLogMessage("⚡ Firewall comprometido!", 'warning');
    } else if (clickCount === 75) {
        addLogMessage("⚡ Sistema casi completamente comprometido!", 'warning');
    } else if (clickCount === 90) {
        addLogMessage("⚠️ Acceso ROOT casi alcanzado...", 'warning');
    } else if (clickCount === CLICKS_TO_WIN) {
        handleWin();
    }
    
    // Button animation effect
    hackButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        hackButton.style.transform = '';
    }, 100);
}

// Handle win condition
function handleWin() {
    hasWon = true;
    addLogMessage("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", 'success');
    addLogMessage("🎯 ACCESO ROOT OBTENIDO! 🎯", 'success');
    addLogMessage("Sistema completamente comprometido!", 'success');
    addLogMessage("Herramienta de pentesting disponible...", 'success');
    addLogMessage("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", 'success');
    
    // Show reward section
    rewardSection.classList.remove('hidden');
    
    // Disable hack button
    hackButton.disabled = true;
    hackButton.style.opacity = '0.5';
    hackButton.style.cursor = 'not-allowed';
}

// Generate and download file
function downloadFile() {
    addLogMessage("Generando payload...", 'warning');
    addLogMessage("Compilando ejecutable...", 'warning');
    
    // Create a fake executable content (just text for demo purposes)
    const fileContent = `
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║     H4CK3R TOOL v2.0 - Advanced Penetration Testing Suite    ║
║                                                               ║
║                ⚠️  PROOF OF CONCEPT  ⚠️                       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝

[!] EDUCATIONAL DISCLAIMER [!]

This file is part of a cybersecurity education demonstration.

This is a Proof of Concept (PoC) showing how malware can be 
delivered through social engineering tactics.

⚠️ WARNING: This demonstrates how attackers use attractive
interfaces to trick users into downloading and executing files.

In a real attack scenario, this could be actual malware.
NEVER execute files from untrusted sources!

═══════════════════════════════════════════════════════════════

FILE INFORMATION:
- Name: not-a-virus-trust-me.exe
- Type: Demonstration File
- Purpose: Educational/Training
- Contains: No actual malicious code
- Risk Level: 0 (Educational only)

═══════════════════════════════════════════════════════════════

WHAT THIS DEMONSTRATES:

1. Social Engineering: Using gaming mechanics to engage users
2. Trust Exploitation: Creating false sense of legitimacy
3. Deceptive UI: Professional-looking interface to build trust
4. Call to Action: Encouraging users to download/execute files
5. Disclaimer Neglect: Users often ignore warnings (like this one)

═══════════════════════════════════════════════════════════════

REAL ATTACK INDICATORS YOU SHOULD WATCH FOR:

✗ Unexpected file downloads
✗ Files with suspicious names (like "not-a-virus-trust-me.exe")
✗ Executable files from web games/applications
✗ Websites encouraging you to disable antivirus
✗ Too-good-to-be-true rewards or prizes
✗ Urgent calls to action
✗ Requests to execute downloaded files

═══════════════════════════════════════════════════════════════

PROTECTION TIPS:

✓ Always verify file sources
✓ Keep antivirus updated
✓ Don't disable security features
✓ Be skeptical of unexpected downloads
✓ Use sandboxed environments for testing
✓ Verify digital signatures
✓ Research before executing unknown files

═══════════════════════════════════════════════════════════════

This PoC created for: Cybersecurity Training & Awareness
Repository: Clicker_payload-delivery-service
Purpose: Demonstrate social engineering attack vectors

Remember: Real malware looks exactly like this - trustworthy,
          professional, and convincing. Stay vigilant!

═══════════════════════════════════════════════════════════════
`;

    // Create blob and download
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'not-a-virus-trust-me.exe';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    setTimeout(() => {
        a.remove();
        window.URL.revokeObjectURL(url);
    }, 100);
    
    addLogMessage("✅ Archivo descargado exitosamente!", 'success');
    addLogMessage("⚠️ Recuerda: NUNCA ejecutes archivos de fuentes no confiables!", 'warning');
    addLogMessage("Esto es solo una demostración educativa.", 'warning');
    
    // Update button
    downloadButton.textContent = '✓ DESCARGADO';
    downloadButton.disabled = true;
    downloadButton.style.opacity = '0.6';
}

// Event listeners
hackButton.addEventListener('click', handleHackClick);
downloadButton.addEventListener('click', downloadFile);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        addLogMessage("🎮 KONAMI CODE ACTIVATED! Instant ROOT access!", 'success');
        clickCount = CLICKS_TO_WIN - 1;
        updateUI();
        setTimeout(() => handleHackClick(), 500);
    }
});

// Initial log messages
setTimeout(() => {
    addLogMessage("Sistema listo. Comienza hackeando!", 'success');
}, 1000);

// Cursor effect (optional enhancement) - throttled for performance
let lastSparkTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    // Throttle: only create spark if SPARK_THROTTLE_MS passed and random chance
    if (now - lastSparkTime > SPARK_THROTTLE_MS && Math.random() > SPARK_PROBABILITY) {
        lastSparkTime = now;
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.cssText = `
            position: fixed;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 2px;
            height: 2px;
            background: #00ff00;
            box-shadow: 0 0 10px #00ff00;
            border-radius: 50%;
            animation: sparkFade ${SPARK_ANIMATION_DURATION_MS}ms ease-out forwards;
            z-index: 9999;
        `;
        document.body.appendChild(spark);
        
        setTimeout(() => spark.remove(), SPARK_ANIMATION_DURATION_MS);
    }
});

// Add spark animation to CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkFade {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0) translateY(20px);
        }
    }
`;
document.head.appendChild(style);
